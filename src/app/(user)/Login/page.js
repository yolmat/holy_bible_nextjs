import { FormLogin, FormDiv, TitleInputForm, InputForm, ButtonForm, LinkToRegister, ColorLink } from "./style"
import Link from "next/link"

export default function Login() {

    return (
        <FormLogin>
            <FormDiv>
                <TitleInputForm>Email</TitleInputForm>
                <InputForm type="email" placeholder="exemplo@email.com" />
            </FormDiv>
            <FormDiv>
                <TitleInputForm>Senha</TitleInputForm>
                <InputForm type="password" placeholder="Insira sua senha" />
            </FormDiv>
            <ButtonForm>Login</ButtonForm>
            <LinkToRegister>Para se cadastrar
                <Link href="/Singup">
                    <ColorLink>click aqui</ColorLink>
                </Link>
            </LinkToRegister>
        </FormLogin >
    )
}
