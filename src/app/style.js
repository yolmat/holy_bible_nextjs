'use client'

import styled, { keyframes } from 'styled-components'

const animation = keyframes`
    0%{
        top: 0
    }
    
    50%{
        top: 50
    }

    100%{
        top: 100
    }
`

export const MainLogin = styled.main`

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const TitleLogin = styled.h1`
    position: relative;
    animation: ${animation} 2s linear;
    

`