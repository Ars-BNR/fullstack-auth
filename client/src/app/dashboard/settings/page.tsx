import { SettingsForm } from '@/features/user/components'
import type { Metadata } from 'next'


export const metadata: Metadata = {
	title: 'Настройки профиля'
}

export default function SettingsPage() {
	return <SettingsForm />
}