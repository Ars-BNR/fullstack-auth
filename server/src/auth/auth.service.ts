import { ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { UserService } from '@/user/user.service'
import { RegisterDto } from './dto/register.dto'
import { AuthMethod } from '@prisma/__generated__'
import { Request, Response } from 'express'
import { LoginDto } from './dto/login.dto'
import { verify } from 'argon2'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AuthService {
	public constructor(private readonly userService: UserService,
		private readonly configService: ConfigService
	) {}

	public async register(req:Request,dto: RegisterDto) {
		const isExists = await this.userService.findByEmail(dto.email)

		if (isExists) {
			throw new ConflictException(
				'На данную почту уже зарегистророван аккаунт'
			)
		}

		const newUser = await this.userService.create(
			dto.email,
			dto.password,
			dto.name,
			'',
			AuthMethod.CREDENTIALS,
			false
		)
		return this.saveSession(req,newUser)
	}

	public async login(req:Request,dto: LoginDto) {
		const user = await this.userService.findByEmail(dto.email)

		if(!user || !user.password){
			throw new NotFoundException(
				"Пользователь не найден"
			)
		}

		const isValidPassword = await verify(user.password,dto.password)

		if(!isValidPassword){
			throw new UnauthorizedException(
				"Неверный пароль"
			)
		}

		return this.saveSession(req,user)
	}

	public async logout(req:Request,res: Response):Promise<void> {
		return new Promise((resolve,reject)=>{
			req.session.destroy(error =>{
				if(error){
					return reject(
						new InternalServerErrorException(
							"Не удалось завершить сессию"
						)
					)
				}
				res.clearCookie(this.configService.getOrThrow<string>("SESSION_NAME"))

				resolve()
			})
		})
	}

	private async saveSession(req:Request,user) {
		return new Promise((resolve,reject)=>{
			req.session.userId = user.id

			req.session.save(error =>{
				if(error){
					return reject(
						new InternalServerErrorException(
							"Не удалось сохранить сессию. Проверьте параметры"
						)
					)
				}

				resolve({
					user
				})
			})
		})
	}
}
