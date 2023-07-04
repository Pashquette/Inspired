import { NavLink, useLocation } from 'react-router-dom'
import s from './Gender.module.scss'
import cn from 'classnames'

const list = [
    {link: 'women', title: 'Женщины'},
    {link: 'men', title: 'Мужчины'},
]

export const Gender = () => {
    const {pathname} = useLocation()
    const gender = pathname.split('/')[1] || 'women';
    console.log(gender);
    return (
       <ul className={s.gender}>
        {list.map(item => {
            return (
                <li className={s.item} key={item.link}>
                    <NavLink className={cn(s.link, gender === item.link && s.linkActive)} to={item.link}>
                        {item.title}
                    </NavLink>
                </li>
            )
        })}
       </ul>
    )
}
