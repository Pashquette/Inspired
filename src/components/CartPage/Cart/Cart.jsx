import s from "./Cart.module.scss";
import { Container } from "../../Layout/Container/Container";
import { CartItem } from "./CartItem/CartItem";

export const Cart = ({ cartItems, goodsList }) => {
    let totalPrice = 0;
    
    // Редьюсом пользоваться не умеем. :)

    for (const item of cartItems) {
        const value = goodsList.find(product => product.id === item.id);
      
        if (value) {
          totalPrice += value.price * item.count;
        }
      }
    return (
        <section className={s.cart}>
            <Container>
                <h2 className={s.title}>Корзина</h2>

                {goodsList.length ? (
                    <ul className={s.list}>
                        {cartItems.map((item) => (
                            <li key={`${item.id}-${item.color}-${item.size}`} className={s.item}>
                                <CartItem {...item} goodsList={goodsList}/>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h3>В корзине пусто. :(</h3>
                )}
                <div className={s.total}>
                    <p>Итого:</p>
                    <p>руб {totalPrice}</p>
                </div>
            </Container>
        </section>
    );
};
