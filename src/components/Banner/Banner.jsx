import s from './Banner.module.scss'
import { Container } from '../Layout/Container/Container';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../const';
import { useMedia } from 'react-use';
import { useEffect, useRef, useState } from 'react';

export const Banner = ({data}) => {

    const [imgURL, setImgURL] = useState()

    const isMobile = useMedia('(max-width: 540px)');
    const isTablet = useMedia('(max-width: 768px)');
    const isLaptop = useMedia('(max-width: 1024px)');

    useEffect(() => {
            if (isMobile) {
                setImgURL(data.bg.mobile);
            } else if (isTablet) {
                setImgURL(data.bg.tablet);
            } else if (isLaptop) {
                setImgURL(data.bg.laptop);
            } else {
                setImgURL(data?.bg.desktop);
            }       
    }, [isMobile, isTablet, isLaptop, data ]);
    return (
        data &&
        <section className={s.banner} style={{
            backgroundImage: `url(${API_URL}/${imgURL})`
        }}>
            <Container>
                <div className={s.content}>
                    <h2 className={s.title}>{data.description}</h2>   
                        <NavLink className={s.link} to={`/product/${data.id}`}>перейти</NavLink>            
                </div>
            </Container>
        </section>
    );
};
