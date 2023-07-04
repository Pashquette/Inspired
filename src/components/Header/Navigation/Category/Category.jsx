import { NavLink, useLocation } from "react-router-dom";
import s from "./Category.module.scss";
import cn from "classnames";

export const Category = ({ data }) => {
    const location = useLocation();
    return (
        <ul className={s.category}>
            {location.pathname.startsWith('/men') 
            ?
            data.men.map(item => {
                return (
                    <li key={item.link}>
                        <NavLink className={({isActive}) => cn(s.link, isActive && s.linkActive)} to={item.link}>
                            {item.title}
                        </NavLink>
                    </li>
                );
            })
            :
            data.women.map(item => {
                return (
                    <li key={item.link}>
                        <NavLink className={({isActive}) => cn(s.link, isActive && s.linkActive)} to={item.link}>
                            {item.title}
                        </NavLink>
                    </li>
                );
            })
             }
        </ul>
    );
};
