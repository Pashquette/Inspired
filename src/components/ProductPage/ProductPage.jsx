import { useEffect, useState } from "react";
import { Container } from "../Layout/Container/Container";
import s from "./ProductPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../features/productSlice";
import { useParams } from "react-router-dom";
import { API_URL } from "../../const";
import cn from "classnames";
import { ColorList } from "../ColorList/ColorList";
import { Count } from "../Count/Count";
import { ProductSize } from "./ProductSize/ProductSize";
import { Goods } from "../Goods/Goods";
import { fetchCategory } from "../../features/goodsSlice";
import { BtnLike } from "../BtnLike/BtnLike";
import { addToCart } from "../../features/cartSlice";
import { ErrorMessage, Form, Formik,} from "formik";
import * as Yup from 'yup';

export const ProductPage = () => {

    
    const dispatch = useDispatch();
    const { id } = useParams();
    const { product } = useSelector((state) => state.product);
    const { colors } = product;

    const { colorsList } = useSelector((state) => state.colors)

    const [count, setCount] = useState(1)
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value)
    }

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value)
    }

    const handleIncrement = () => {
         setCount((prevCount) => prevCount + 1)   
    }

    const handleDecrement = () => {
        if (count > 1) {
            setCount((prevCount) => prevCount - 1)
        }
    }

    useEffect(() => {
        dispatch(fetchProduct(id));

    }, [dispatch, id ]);

    useEffect(() => {
        dispatch(fetchCategory({gender: product.gender, category: product.category, count: 4, top: true, exclude: id}))
    }, [dispatch, product.category, product.gender, id])

    useEffect(() => {
        if (colorsList?.length && colors?.length) {
            setSelectedColor(colorsList.find(color => color.id === colors[0]).title)
        }
    }, [colorsList, colors])

    const validationSchema = Yup.object({
        selectedSize: Yup.string().required('Не выбран размер')
    });

    return (
        <>
            <section className={s.card}>
                <Container className={s.container}>
                    <img className={s.image} src={`${API_URL}/${product?.pic}`} alt={product?.title} />
                    <Formik 
                        initialValues={{
                            selectedSize: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            dispatch(addToCart({id, color: selectedColor, size: values.selectedSize, count}));
                        }}
                    >
                    <Form className={s.content}>
                        <h2 className={s.title}>{product.title}</h2>
                        <p className={s.price}>руб {product.price}</p>
                        <div className={s.vendorCode}>
                            <span className={s.subtitle}>Артикул</span>
                            <span className={s.id}>{product.id}</span>
                        </div>
                        <div className={s.color}>
                            <p className={cn(s.subtitle, s.colorTitle)}>Цвет</p>
                            <ColorList 
                            colors={colors} 
                            selectedColor={selectedColor} 
                            handleColorChange={handleColorChange} />
                        </div>
                            <ProductSize 
                                size={product.size} 
                                selectedSize={selectedSize} 
                                handleSizeChange={handleSizeChange} />

                        <div className={s.description}>
                            <p className={cn(s.subtitle, s.descriptionTitle)}>Описание</p>
                            <p className={s.descriptionText}>{product.description}</p>
                        </div>
                        <div className={s.control}>
                            <Count 
                                className={s.count} 
                                count={count} 
                                handleIncrement={handleIncrement} 
                                handleDecrement={handleDecrement}/>
                            <button className={s.addCart} type='submit'>В корзину</button>
                            <BtnLike className={s.favorite} id={id}/>
                        </div>
                        <ErrorMessage name="selectedSize" component="span" className={s.errorMessage} />

                    </Form>
                    </Formik>
                </Container>
            </section>
            <Goods title={'Вам также может понравиться'}/>
        </>

    );
};
