import { useSelector } from 'react-redux';
import { Container } from '../Layout/Container/Container';
import { Product } from '../Product/Product';
import s from './MainPage.module.scss'

export const Goods = ({categoryData}) => {
    const {goodsList} = useSelector(state => state.goods)

    const title = categoryData?.title ?? 'Новинки'

    return (
        <section>
            <Container className={s.goods}>
                <h2 className={s.title}>{title}</h2>
                <ul className={s.list}>
                    {goodsList.map(item => (
                    <li key={item.id}>
                        <Product {...item}/>
                    </li>))}
                </ul>
            </Container>
        </section>
    );
};


