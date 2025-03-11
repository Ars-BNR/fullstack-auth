import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'

export class LoginDto {
	@IsString({ message: 'Должно быть строкой' })
	@IsEmail({}, { message: 'Не правильный формат email' })
	@IsNotEmpty({ message: 'обязательно для заполенения' })
	email: string

	@IsString({ message: 'Должен быть строкой' })
	@IsNotEmpty({ message: 'обязательно для заполнения' })
	@MinLength(6, {
		message: 'Слишком короткий пароль'
	})
	password: string

	@IsOptional()
	@IsString()
	code:string
}
