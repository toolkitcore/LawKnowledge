import { IsEnum } from 'class-validator';
import { Roles } from '@law-knowledge/shared';
import { PartialType } from '@nestjs/mapped-types';

export class CreateRoleDto {
  @IsEnum(Roles, {
    each: true,
    message: 'Vai trò phải là ADMIN, LAWYER hoặc CITIZEN',
  })
  name: string;
}

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  id: string;
}