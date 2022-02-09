import { IsString, MinLength, Matches } from "class-validator";

export class RegisterValidate {
  @IsString()
  username?: string;

  @IsString()
  @MinLength(8)
  password?: string;

  @IsString()
  @Matches("password")
  passwordConfirm?: string;
}
