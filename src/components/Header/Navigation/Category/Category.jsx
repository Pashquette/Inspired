import { NavLink, useLocation } from "react-router-dom";
import s from "./Category.module.scss";
import cn from "classnames";
import { useSelector } from "react-redux";

export const Category = () => {
    const {activeGender, categories} = useSelector(state => state.navigation)

    return (
        <ul className={s.category}>
            {
                categories[activeGender]?.list?.map((item => (
                    <li key={item.slug} className={s.item}>
                        <NavLink
                            className={({isActive}) => cn(s.link, isActive && s.linkActive)}
                            to={`${activeGender}/${item.slug}`}>
                                {item.title}
                        </NavLink>
                    </li>
                )))
             }
        </ul>
    );
};








// location.pathname.startsWith('/men') 
// ?
// data.men.map(item => {
//     return (
//         <li key={item.link}>
//             <NavLink className={({isActive}) => cn(s.link, isActive && s.linkActive)} to={item.link}>
//                 {item.title}
//             </NavLink>
//         </li>
//     );
// })
// :
// data.women.map(item => {
//     return (
//         <li key={item.link}>
//             <NavLink className={({isActive}) => cn(s.link, isActive && s.linkActive)} to={item.link}>
//                 {item.title}
//             </NavLink>
//         </li>
//     );
// })