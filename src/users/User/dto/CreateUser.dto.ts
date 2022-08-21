import { IsNotEmpty } from "class-validator";
export class CreateUserDTO {

  @IsNotEmpty()
  publicAddress: string;
}