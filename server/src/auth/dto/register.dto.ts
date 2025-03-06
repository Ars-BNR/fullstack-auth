import {
	IsEmail,
	IsNotEmpty,
	IsString,
	MinLength,
	Validate
} from 'class-validator'
import { IsPasswordsMatchingConstraint } from '@/libs/common/decorators/is-passwords-matching-constraint.decoretor'

export class RegisterDto {
	@IsString({ message: 'Должно быть строкой' })
	@IsNotEmpty({ message: 'обязательно для заполенения' })
	name: string

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

	@IsString({ message: 'Должен быть строкой' })
	@IsNotEmpty({ message: 'обязательно для заполнения' })
	@MinLength(6, {
		message: 'Слишком короткий пароль'
	})
	@Validate(IsPasswordsMatchingConstraint, {
		message: 'Пароли не совпадают.'
	})
	passwordReapeat: string
}
