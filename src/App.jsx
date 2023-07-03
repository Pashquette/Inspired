import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"

const data = {
    women: [
        {title: 'Бюстгальтеры', link: '/'},
        {title: 'Трусы', link: '/'},
        {title: 'Носки', link: '/'},
        {title: 'Халаты', link: '/'},
        {title: 'Термобелье', link: '/'},
        {title: 'Пижамы', link: '/'}
    ],
    men: [
        {title: 'Трусы', link: '/'},
        {title: 'Носки', link: '/'},
        {title: 'Халаты', link: '/'},
        {title: 'Термобелье', link: '/'},
    ]
}

export const App = () => {


    return (
        <>
            <Header/>
            <Footer data={data}/>
        </>
    )
}
