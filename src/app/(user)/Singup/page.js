"use client"

import { LinkToRegister, ColorLink } from "./style"
import { Button } from "../../../components/Users_Components/button"
import { Window } from "../../../components/Users_Components/windows"
import { InputUsers } from "../../../components/Users_Components/input"
import Link from "next/link"

export default function Singup() {

    return (
        <Window style={{
            gap: '2rem'
        }}>
            <InputUsers placeholder="Ex: Alex Teves">Nome e Sobrenome</InputUsers>
            <InputUsers placeholder="exemplo@email.com">Email</InputUsers>
            <InputUsers placeholder="Insira sua senha">Senha</InputUsers>
            <InputUsers placeholder="Insira sua senha">Confirme sua Senha</InputUsers>
            <Button>Login</Button>
            <LinkToRegister>Caso já tenha cadastro
                <Link href="/Login">
                    <ColorLink>click aqui</ColorLink>
                </Link>
            </LinkToRegister>
        </Window >
    )
}
