import { IsNotEmpty, IsString, MinLength } from 'class-validator'

export class NewPasswordDto {
	@IsString({ message: 'Должен быть строкой' })
	@IsNotEmpty({ message: 'обязательно для заполнения' })
	@MinLength(6, {
		message: 'Слишком короткий пароль'
	})
	password: string
}
