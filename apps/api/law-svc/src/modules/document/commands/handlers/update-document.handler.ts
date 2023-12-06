import { UpdateDocumentCommand } from '../impl';
import { LawDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(UpdateDocumentCommand)
export class UpdateDocumentCommandhandler
  implements ICommandHandler<UpdateDocumentCommand>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: UpdateDocumentCommand) {
    return await this.dataService.$transaction([
      this.dataService.document.update({
        where: {
          id: payload.document.id,
        },
        data: payload.document,
      }),
    ]);
  }
}