"use client"

import { LinkToRegister, ColorLink } from "./style"
import { Button } from "../../../components/Users_Components/button"
import { Window } from "../../../components/Users_Components/windows"
import { InputUsers } from "../../../components/Users_Components/input"
import Link from "next/link"

export default function Login() {

    return (
        <Window>
            <InputUsers placeholder="exemplo@email.com">Email</InputUsers>
            <InputUsers placeholder="Insira sua senha">Senha</InputUsers>
            <Button>Login</Button>
            <LinkToRegister>Para se cadastrar
                <Link href="/Singup">
                    <ColorLink>click aqui</ColorLink>
                </Link>
            </LinkToRegister>
        </Window>
    )
}
