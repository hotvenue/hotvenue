import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiModelProperty({
    description: 'The email to indentify the user',
    format: 'email',
  })
  readonly email: string;

  @ApiModelPropertyOptional({
    description: 'The telegram identification number',
  })
  readonly telegramId: string;
}
