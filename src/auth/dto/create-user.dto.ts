import { IsString, Length } from "class-validator";

export class CreateUserDto {
    @IsString()
    @Length(3,50)
    readonly name: string; 

    @IsString()
    @Length(8,50)
    readonly email: string; 

    @IsString()
    @Length(10,50)
    readonly password: string; 

}
