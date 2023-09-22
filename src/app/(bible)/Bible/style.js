'use client'

import styled from 'styled-components'

export const Container = styled.div` 
    display: grid;
    grid-template-areas:
        "SideBar"
        "Space ShowBooks ShowBooks Space" 100vw
    ;
    min-height: 100vw;
    max-width: 100vw;
    background-color: var(--color-background-item);
    color: #FFF;
`

export const SideBar = styled.header`
    grid-area: SideBar;
`

export const Image = styled.p``

export const NameUsers = styled.p``

export const Space = styled.div`
    grid-area: Space;
`

export const ShowBooks = styled.main`
     grid-area: ShowBooks;
     display: grid;
     grid-template-columns: repeat(5, 1fr);
	grid-auto-rows: 50px;
    align-items: center;
     background-color: #324342;
     
`