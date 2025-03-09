import { IsNotEmpty, IsString } from 'class-validator'

export class ConfirmationDto {
	@IsString({
		message: 'Должен быть строкой'
	})
	@IsNotEmpty({
		message: 'Обязательно для заполнения'
	})
	token: string
}
