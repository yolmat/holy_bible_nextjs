"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';
import { LinkToRegister, ColorLink, LinksUtils } from "./style"
import { Button } from "../../../components/Users_Components/button"
import { Window } from "../../../components/Users_Components/windows"
import { InputUsers } from "../../../components/Users_Components/input"

export default function Login() {

    const [error, setError] = useState('')

    const [success, setSuccess] = useState('')

    const [formData, setFormData] = useState({
        email: '',
    })

    const handleFormEdit = (event, name) => {
        setFormData({
            ...formData,
            [name]: event.target.value
        })
    }

    const handleForm = async (event) => {

        setError("")
        setSuccess("")

        event.preventDefault()
        console.log(formData.email)
        try {
            const response = await fetch(`https://www.abibliadigital.com.br/api/users/password/${formData.email}`, {
                method: "POST",
                headers: new Headers({ "content-type": "application/json" }),
            })

            const json = await response.json()

            if (response.status !== 200) throw new Error(json)

            setSuccess("Nova senha enviada no seu email ")

        } catch (err) {
            setError("Usuario não encontrado")
        }
    }

    return (
        <Window onSubmit={handleForm}>
            <InputUsers type="email" placeholder="exemplo@email.com" required value={formData.email} onChange={(e) => { handleFormEdit(e, 'email') }}>Email</InputUsers>
            <Button>Nova Senha</Button>
            {success && <Link href="/Login">{success}</Link>}
            {error && <p>{error}</p>}
        </Window>
    )
}
