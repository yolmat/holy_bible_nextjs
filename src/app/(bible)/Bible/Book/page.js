"use client"

import { useRouter } from 'next/navigation';
import { getCookie, setCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import { Container, NavBar, NameUsers, ShowBooks, Book, AbbrevBook, NameBook } from './style'
export default function Bible() {

    const [chaptersInTheBook, setChaptersInTheBook] = useState()

    const router = useRouter()

    let token = getCookie('auth')
    let getCookieChosenBook = getCookie('book')

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
        const getChapterChosenBook = async () => {
            const allBooks = await fetch(`https://www.abibliadigital.com.br/api/books/${getCookieChosenBook}`, {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })

            const response = await allBooks.json()

            const numberChapters = await response.chapters

            const objetiveAllNumberChapters = []

            for (let i = 1; i <= numberChapters; i++) {
                const chapter = {
                    name: response.name,
                    chapterBook: i
                }
                objetiveAllNumberChapters.push(chapter)
                console.log(chapter)
            }

            setChaptersInTheBook(objetiveAllNumberChapters)
        }

        getChapterChosenBook()
    }, [])

    return (
        <Container>
            <NavBar>
                <NameUsers>Olá, Name</NameUsers>
            </NavBar>
            {
                chaptersInTheBook && chaptersInTheBook.map(detailChapterBook => (
                    <div>{detailChapterBook.chapterBook}</div>
                ))
            }
        </Container>)
}
