'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MainHome = styled(motion.div)`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const TitleHome = styled.h1`
    color: #c5c5c5;
    font-size: 4rem;
`

export const SubtitleHome = styled.h2`
    color: #a9a9a9;
    font-size: 2rem;
    margin: 15px 0 20px 0;
`

export const ButtonsHome = styled.div`
    display:flex;
    flex-flow: row nowrap;
    gap: 1rem;
`

export const ButtonHomeLink = styled(motion.button)`
    width: 10rem;
    height: 3rem;
    cursor: pointer;

    border:none; 
    border-radius: 15px;
    font-size: 1rem;
    background-color: #565656;
    color: #fff;
    font-weight: bold;
`