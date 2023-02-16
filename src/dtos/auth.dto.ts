import { IsEmail } from 'class-validator';

export class PresignUpDto {
  @IsEmail()
  public email: string;
}
