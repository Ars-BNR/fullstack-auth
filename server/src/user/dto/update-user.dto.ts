import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto{
    @IsString({
        message:"Должно быть строкой"
    })
    @IsNotEmpty({
        message:"Обязательно для заполнения"
    })
    name:string

    @IsString({
        message:"Должно быть строкой"
    })
    @IsEmail({},{
        message:"Не правильный формат email"
    })
    @IsNotEmpty({
        message:"Обязательно для заполнения"
    })
    email:string

    @IsBoolean({
        message:"Должен быть булевым"
    })
    isTwoFactorEnabled:boolean
}