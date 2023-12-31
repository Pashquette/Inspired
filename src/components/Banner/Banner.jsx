import s from './Banner.module.scss'
import { Container } from '../Layout/Container/Container';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../const';
import { useMedia } from 'react-use';
import { useEffect, useState } from 'react';

export const Banner = ({data}) => {

    const [bgURL, setBgURL] = useState('')

    const isMobile = useMedia('(max-width: 540px)');
    const isTablet = useMedia('(max-width: 768px)');
    const isLaptop = useMedia('(max-width: 1024px)');

    useEffect(() => {
            if (isMobile) {
                setBgURL(`${API_URL}/${data?.bg.mobile}`);
            } else if (isTablet) {
                setBgURL(`${API_URL}/${data?.bg.desktop}`);
            } else if (isLaptop) {
                setBgURL(`${API_URL}/${data?.bg.desktop}`);
            } else {
                setBgURL(`${API_URL}/${data?.bg.desktop}`);
            }       
    }, [isMobile, isTablet, isLaptop, data ]);
    return (
        data &&
        <section className={s.banner} style={{
            backgroundImage: `url(${bgURL})`
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
