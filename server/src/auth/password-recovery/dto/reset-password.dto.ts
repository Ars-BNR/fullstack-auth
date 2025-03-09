import { IsEmail, IsNotEmpty } from 'class-validator'

export class ResetPasswordDto {
	@IsEmail(
		{},
		{
			message: 'Не корректный email'
		}
	)
	@IsNotEmpty({
		message: 'обязательно для заполенения'
	})
	email: string
}
