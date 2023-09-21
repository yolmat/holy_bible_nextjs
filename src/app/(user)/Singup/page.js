"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation';
import Link from "next/link"
import { setCookie } from 'cookies-next';
import { LinkToRegister, ColorLink } from "./style"
import { Button } from "../../../components/Users_Components/button"
import { Window } from "../../../components/Users_Components/windows"
import { InputUsers } from "../../../components/Users_Components/input"

export default function Singup() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmedPassword: ''
    })

    const router = useRouter()

    const handleFormEdit = (event, name) => {
        setFormData({
            ...formData,
            [name]: event.target.value
        })
    }

    const [error, setError] = useState('')

    const handleForm = async (event) => {
        event.preventDefault()
        try {
            if (formData.password !== formData.confirmedPassword) throw new Error()
            if (formData.password !== formData.confirmedPassword) throw new Error()

            const response = await fetch('https://www.abibliadigital.com.br/api/users', {
                method: "POST",
                headers: new Headers({ "content-type": "application/json" }),
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    notifications: false,
                })
            })
            const json = await response.json()

            if (response.status !== 200) throw new Error(json)

            await setCookie('auth', json.token)
            router.push('/')

        } catch (err) {
            if (formData.password !== formData.confirmedPassword) {
                setError("As senhas não conferem")
            } else {
                setError("Usuario já cadastrado")
            }
        }
    }

    return (
        <Window
            style={{ gap: '2rem' }}
            onSubmit={handleForm}>

            <InputUsers type="text" placeholder="Ex: Alex Teves" required value={formData.name} onChange={(e) => { handleFormEdit(e, 'name') }}>Nome e Sobrenome</InputUsers>

            <InputUsers type="email" placeholder="exemplo@email.com" required value={formData.email} onChange={(e) => { handleFormEdit(e, 'email') }}>Email</InputUsers>

            <InputUsers type="password" minlength={6} placeholder="Crie uma senha" required value={formData.password} onChange={(e) => { handleFormEdit(e, 'password') }}>Senha</InputUsers>

            <InputUsers type="password" placeholder="Confirme sua senha" required value={formData.confirmedPassword} onChange={(e) => { handleFormEdit(e, 'confirmedPassword') }}>Confirme sua Senha</InputUsers>

            <Button>Login</Button>
            {error && <p>{error}</p>}
            <LinkToRegister>Caso já tenha cadastro
                <Link href="/Login">
                    <ColorLink>click aqui</ColorLink>
                </Link>
            </LinkToRegister>
        </Window >
    )
}
