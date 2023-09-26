"use client"

import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import { Container, NavBar, NameUsers, ShowBooks, Book, AbbrevBook, NameBook } from './style'

export default function Bible() {

    const [books, setBooks] = useState()

    const router = useRouter()

    let token = getCookie('auth')

    const verifExistToken = async () => {
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
            const allBooks = await fetch("https://www.abibliadigital.com.br/api/books", {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })

            const response = await allBooks.json()

            setBooks(response)
        }

        getAllBooks()
    }, [])

    const chosenBookToPage = (e, chosenBook) => {
        console.log(chosenBook)
    }

    return (
        <Container>
            <NavBar>
                <NameUsers>Olá, Name</NameUsers>
            </NavBar>

            <ShowBooks>
                {books && books.map(ShowDetailBooks => (
                    <Book
                        key={ShowDetailBooks.name}
                        onClick={(e) => chosenBookToPage(e, ShowDetailBooks.abbrev.pt)}
                        initial={{ opacity: 0, scale: 0.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1.5,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}


                    >
                        <AbbrevBook>{ShowDetailBooks.abbrev.pt}</AbbrevBook>
                        <NameBook>{ShowDetailBooks.name}</NameBook>
                    </Book>
                ))}
            </ShowBooks>

        </Container>
    )
}
