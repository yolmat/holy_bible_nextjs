'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    display: grid;
    grid-template-columns: 15% 70% 15%;
    grid-template-rows: 10% 85%;
    grid-template-areas: 
    "NavBar NavBar NavBar"
    ". ShowBooks .";

`

export const NavBar = styled.header`
    grid-area: NavBar;
    background-color: var(--color-background-item);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const NameUsers = styled.p`
    color: var(--color-font-titles);
    font-weight: bold;
    
`

export const ShowBooks = styled.div`
     grid-area: ShowBooks;
     display: flex;
     flex-wrap: wrap;
     gap: 10px;
     justify-content: center;
     align-content: start;
     background-color: var(--color-background-item);
     height: max-content;
     padding: 15px 0;
     
`

export const Book = styled(motion.button)`
    width: 150px;
    height: max-content;
    padding: 15px;
    background-color: var(--color-background-button);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 15px;
    border: none;
    cursor: pointer;
`

export const AbbrevBook = styled.h1`
    font-size: 1.3rem;
    color: var(--color-font-titles);
    font-weight: bold;
    text-transform: uppercase;

`

export const NameBook = styled.p`
    font-size: .8rem;
    color: var(--color-font-subtitle)
`