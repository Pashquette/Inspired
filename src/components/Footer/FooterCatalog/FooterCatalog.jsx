import cn from 'classnames'
import s from '../Footer.module.scss'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const FooterCatalog = () => {
    const {activeGender, categories} = useSelector(state => state.navigation)
    return (
        <div className={s.category}>
                <h2 className={cn(s.title, s.categoryTitle)}>Каталог</h2>
                <div className={s.categoryList}>
                    <ul className={s.categorySublist}>
                        <h3 className={s.categorySubtitle}>Женщины</h3>
                        {categories.women?.list?.map((item, i) => {
                            return (
                                <li key={i}><NavLink className={s.link} to={`women/${item.slug}`}>{item.title}</NavLink></li>
                            )
                        })}
                    </ul>
                    <ul className={s.categorySublist}>
                        <h3 className={s.categorySubtitle}>Мужчины</h3>
                        {categories.men?.list?.map((item, i) => {
                            return (
                                <li key={i}><NavLink className={s.link} to={`men/${item.slug}`}>{item.title}</NavLink></li>
                            )
                        })}
                    </ul>
                    <ul className={s.categorySublist}>
                        <h3 className={s.categorySubtitle}>Детское</h3>
                        {categories.kids?.list?.map((item, i) => {
                            return (
                                <li key={i}><NavLink className={s.link} to={`kids/${item.slug}`}>{item.title}</NavLink></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
    );
};
