import { MailerService } from '@nest-modules/mailer'
import { Injectable } from '@nestjs/common'

@Injectable()
export class MailService {
	public constructor(private readonly mailerService: MailerService) {}

	private sendMail(email: string, subject: string, html: string) {
		return this.mailerService.sendMail({
			to: email,
			subject,
			html
		})
	}
}
