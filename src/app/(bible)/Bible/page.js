"use client"

import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import { Container, SideBar, Image, NameUsers, Space, ShowBooks } from './style'

export default function Bible() {

    const [books, setBooks] = useState()

    const router = useRouter()

    const verifExistToken = async () => {
        let token = getCookie('auth')
        let emailvalidation

        if (typeof window !== 'undefined') {
            emailvalidation = window.localStorage.getItem('email')
        }
        try {
            const validation = await fetch(`https://www.abibliadigital.com.br/api/users/${emailvalidation}`, {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })

            if (validation.status !== 200) throw new Error()


        } catch (err) {
            router.push('/')
        }

    }

    verifExistToken()

    useEffect(() => {
        const getAllBooks = async () => {
            const allBooks = await fetch("https://www.abibliadigital.com.br/api/books")

            const response = await allBooks.json()

            setBooks(response)
        }

        getAllBooks()
    }, [])

    return (
        <Container>
            <SideBar>
                <Image>222</Image>
                <NameUsers>teste1</NameUsers>
            </SideBar>
            <Space></Space>
            <ShowBooks>{
                books &&
                books.map(oneBook => (
                    <p>{oneBook.name}</p>
                ))
            }</ShowBooks>
            <Space></Space>
        </Container>
    )
}
