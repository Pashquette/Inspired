import { NavLink, useLocation } from 'react-router-dom'
import s from './Gender.module.scss'
import cn from 'classnames'

const list = [
    {link: 'women', title: 'Женщины'},
    {link: 'men', title: 'Мужчины'},
]

export const Gender = () => {
    const location = useLocation()
    console.log(location);
    return (
       <ul className={s.gender}>
        {list.map((item, index) => {
            return (
                <li className={s.item} key={item.link}>
                    <NavLink className={({isActive}) => cn(s.link, isActive && s.linkActive)} to={item.link}>
                        {item.title}
                    </NavLink>
                </li>
            )
        })}
       </ul>
    )
}