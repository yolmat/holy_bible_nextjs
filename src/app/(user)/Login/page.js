import { FormLogin, FormDiv, TitleInputForm, InputForm, ButtonForm } from "./style"

export default function Login() {

    return (
        <FormLogin>
            <FormDiv>
                <TitleInputForm>Email</TitleInputForm>
                <InputForm type="email" placeholder="E-mail" />
            </FormDiv>
            <FormDiv>
                <TitleInputForm>Senha</TitleInputForm>
                <InputForm type="password" placeholder="Senha" />
            </FormDiv>
            <ButtonForm>Login</ButtonForm>
        </FormLogin>
    )
}
