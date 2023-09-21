"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { setCookie, deleteCookie } from 'cookies-next';
import { LinkToRegister, ColorLink, LinksUtils } from "./style"
import { Button } from "../../../components/Users_Components/button"
import { Window } from "../../../components/Users_Components/windows"
import { InputUsers } from "../../../components/Users_Components/input"

export default function Login() {

    const router = useRouter()

    const [error, setError] = useState('')

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleFormEdit = (event, name) => {
        setFormData({
            ...formData,
            [name]: event.target.value
        })
    }

    const handleForm = async (event) => {
        event.preventDefault()

        setError("")

        deleteCookie('auth')
        deleteCookie('email')

        try {
            const response = await fetch('https://www.abibliadigital.com.br/api/users/token', {
                method: "PUT",
                headers: new Headers({ "content-type": "application/json" }),
                body: JSON.stringify(formData)
            })
            const json = await response.json()

            if (response.status !== 200) throw new Error(json)

            await setCookie('auth', json.token)
            await window.localStorage.setItem('email', json.email)
            router.push('/')

        } catch (err) {
            setError("Usuario ou senha incorreta")
        }
    }

    return (
        <Window onSubmit={handleForm}>
            <InputUsers type="email" placeholder="exemplo@email.com" required value={formData.email} onChange={(e) => { handleFormEdit(e, 'email') }}>Email</InputUsers>
            <InputUsers type="password" placeholder="Insira sua senha" required value={formData.password} onChange={(e) => { handleFormEdit(e, 'password') }}>Senha</InputUsers>
            <Button>Login</Button>
            {error && <p>{error}</p>}
            <LinksUtils>
                <LinkToRegister>Para se cadastrar
                    <Link href="/Singup">
                        <ColorLink>click aqui</ColorLink>
                    </Link>
                </LinkToRegister>
                <LinkToRegister>Caso tenha esquecido a senha
                    <Link href="/NewPassword">
                        <ColorLink>click aqui</ColorLink>
                    </Link>
                </LinkToRegister>
            </LinksUtils>
        </Window>
    )
}
