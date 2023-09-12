'use client'

import styled from "styled-components"

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    background-color: var(--color-background-item);
    padding: 3rem;
    border-radius: 15px;
    border: #505050 1px solid;
    min-width: 30vw;
    max-width: 40vw;

    @media screen and (max-width: 720px) {
        width: 80vw;
    }
`

export const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const TitleInputForm = styled.label`
    color: var(--color-font-subtitle);
    font-weight: bold;
`

export const InputForm = styled.input`
    min-width: 20vw;
    max-width: 30vw;
    padding: 0.5rem 0.3rem 0.5rem 1rem;
    border: none;
    border-radius: 8px
`

export const ButtonForm = styled.button`
    width: 70%;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 15px;
    font-weight: bold;
`

export const LinkToRegister = styled.div`
    display:flex;
    flex-direction: row;
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--color-font-subtitle)
`

export const ColorLink = styled.h1`
    margin-left: 3px;
    text-decoration: underline;
    font-size: 0.8rem;
    cursor: pointer;
    color: var(--color-font-subtitle);
`