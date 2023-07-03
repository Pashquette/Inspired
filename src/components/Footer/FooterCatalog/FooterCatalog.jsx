import cn from 'classnames'
import s from '../Footer.module.scss'

export const FooterCatalog = ({data}) => {
    return (
        <div className={s.category}>
                <h2 className={cn(s.title, s.categoryTitle)}>Каталог</h2>
                <div className={s.categoryList}>
                    <ul className={s.categorySublist}>
                        <h3 className={s.categorySubtitle}>Женщины</h3>
                        {data.women.map((item, i) => {
                            return (
                                <li key={i}><a className={s.link} href={item.link}>{item.title}</a></li>
                            )
                        })}
                    </ul>
                    <ul className={s.categorySublist}>
                        <h3 className={s.categorySubtitle}>Мужчины</h3>
                        {data.men.map((item, i) => {
                            return (
                                <li key={i}><a className={s.link} href={item.link}>{item.title}</a></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
    );
};
