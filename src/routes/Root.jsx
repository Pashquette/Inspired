import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { Main } from "../components/Layout/Main/Main"

const data = {
    women: [
        { title: "Бюстгальтеры", link: "women/bras" },
        { title: "Трусы", link: "women/panties" },
        { title: "Носки", link: "women/socks" },
        { title: "Халаты", link: "women/bathrobes" },
        { title: "Термобелье", link: "women/thermal" },
        { title: "Пижамы", link: "women/pijamas" },
    ],
    men: [
        { title: "Трусы", link: "men/panties" },
        { title: "Носки", link: "men/socks" },
        { title: "Халаты", link: "men/bathrobes" },
        { title: "Термобелье", link: "men/thermal" },
    ],
};

export const Root = () => {
    return (
        <>
        <Header data={data}/>
        <Main>
            <Outlet/>
        </Main>
        <Footer data={data}/>
    </>
    )

}