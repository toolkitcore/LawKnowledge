import { JwtService } from '@nestjs/jwt';
import { CreateTokenCommand } from '../impl';
import { RpcException } from '@nestjs/microservices';
import { AuthDataService } from '@law-knowledge/data';
import { from, of, switchMap, throwError } from 'rxjs';
import { TokenDto, JwtDto, LoginDto } from '../../dto';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ForbiddenException, UnauthorizedException } from '@nestjs/common';
import { CryptoUtils, JWT_REFRESH_EXPIRES_IN } from '@law-knowledge/shared';

@CommandHandler(CreateTokenCommand)
export class CreateTokenCommandHandler
  implements ICommandHandler<CreateTokenCommand>
{
  constructor(
    private jwtService: JwtService,
    private dataService: AuthDataService
  ) {}

  private validateUser(user: LoginDto) {
    return from(
      this.dataService.user.findUnique({
        where: {
          email: user.email,
        },
        include: {
          UserRoles: true,
        },
      })
    ).pipe(
      switchMap((res) => {
        if (!res)
          return throwError(
            () =>
              new RpcException(
                new ForbiddenException('Tài khoản của bạn không tồn tại')
              )
          );

        return from(CryptoUtils.verifyHash(res.password, user.password)).pipe(
          switchMap((isValid) => {
            return isValid
              ? of(res)
              : throwError(
                  () =>
                    new RpcException(
                      new UnauthorizedException(
                        'Tên đăng nhập hoặc mật khẩu không hợp lệ'
                      )
                    )
                );
          })
        );
      })
    );
  }

  async execute(command: CreateTokenCommand) {
    return this.validateUser(command.payload).pipe(
      switchMap((res) => {
        if (!res) throw new RpcException(new UnauthorizedException());

        const token: JwtDto = {
          sub: res.id,
          name: res.name,
          email: res.email,
          roles: res.UserRoles.map((role: { role_id: string }) => role.role_id),
        };

        return of({
          access_token: this.jwtService.sign(token),
          refresh_token: this.jwtService.sign(token, {
            expiresIn: JWT_REFRESH_EXPIRES_IN,
          }),
        } as TokenDto);
      })
    );
  }
}