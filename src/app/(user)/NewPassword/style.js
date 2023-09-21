'use client'

import styled from "styled-components"

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

export const LinksUtils = styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: 10px;
`