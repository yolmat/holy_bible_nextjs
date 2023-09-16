"use client"

import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    gap: 3rem;
    background-color: var(--color-background-item);
    padding: 3rem;
    border-radius: 15px;
    border: #505050 1px solid;
    min-width: 30vw;
    max-width: 80vw;

    @media screen and (max-width: 720px) {
        width: 80vw;
    }
`