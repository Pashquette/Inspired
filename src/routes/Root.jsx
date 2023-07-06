import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { Main } from "../components/Layout/Main/Main"

export const Root = () => {
    return (
        <>
        <Header />
        <Main>
            <Outlet/>
        </Main>
        <Footer/>
    </>
    )

}