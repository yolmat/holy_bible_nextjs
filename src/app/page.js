import Link from "next/link"
import { TitleHome, MainHome, SubtitleHome, ButtonsHome, ButtonHomeLink } from "./style"

export default function Home() {

  return (
    <MainHome
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
      <TitleHome>Biblia</TitleHome>
      <SubtitleHome>O livro sobre Amor</SubtitleHome>
      <ButtonsHome>
        <Link href="/Login">
          <ButtonHomeLink
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 1 }}
          >Login</ButtonHomeLink>
        </Link>
        <Link href="/Singup">
          <ButtonHomeLink
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 1 }}
          >Cadastre-se</ButtonHomeLink>
        </Link>
      </ButtonsHome>
    </MainHome >
  )
}
