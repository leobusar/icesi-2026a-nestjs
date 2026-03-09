import {IsNumber, IsString, Length} from 'class-validator';

export class  CreateCarDto{
    @IsString({message: 'brand debe ser una cadena de texto'})
    brand: string;

    @IsString()
    @Length(5,10, {message: "El modelo debe tener una longitud entre 5 y 10"})
    model: string;

    @IsNumber()
    year: number;
}