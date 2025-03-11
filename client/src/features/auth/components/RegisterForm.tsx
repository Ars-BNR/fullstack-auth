"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { AuthWrapper } from "./AuthWrapper";
import { RegisterSchema, TypeRegisterSchema } from "../schemes";
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/shared/components/ui";

export function RegisterForm(){
    const form = useForm<TypeRegisterSchema>({
        resolver: zodResolver(RegisterSchema),
        defaultValues:{
            name:"",
            email:"",
            password:"",
            passwordRepeat:""
        }
    })
    
    const onSubmit = (values:TypeRegisterSchema) => { 
        console.log(values)
     }
    
    return <AuthWrapper
    heading='Регистрация'
			description='Чтобы войти на сайт введите ваш email и пароль'
			backButtonLabel='Уже есть аккаунт? Войти'
			backButtonHref='/auth/login'
			isShowSocial
            >
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-2 space-y-2"
            >
                <FormField control={form.control}
                name="name"
                render={({field}) =>(
                    <FormItem>
                        <FormLabel>Имя</FormLabel>
                        <FormControl>
                            <Input placeholder="Иван" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField control={form.control}
                name="email"
                render={({field}) =>(
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="ivan@example.com" type="email" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField control={form.control}
                name="password"
                render={({field}) =>(
                    <FormItem>
                        <FormLabel>Пароль</FormLabel>
                        <FormControl>
                            <Input placeholder="*******" type="password" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField control={form.control}
                name="passwordRepeat"
                render={({field}) =>(
                    <FormItem>
                        <FormLabel>Повторите пароль</FormLabel>
                        <FormControl>
                            <Input placeholder="*******" type="password" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <Button type="submit">
                Создать аккаунт
                </Button>
            </form>
        </Form>
    </AuthWrapper>
}