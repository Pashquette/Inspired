import { Container } from '../Layout/Container/Container';
import s from './Footer.module.scss'
import { FooterCatalog } from './FooterCatalog/FooterCatalog';
import { FooterSocials } from './FooterSocials/FooterSocials';
import { FooterContacts } from './FooterContacts/FooterContacts';


export const Footer = ({data}) => {
    return (
        <Container className={s.container}>
            <FooterCatalog data={data}/>
            <FooterSocials/>
            <FooterContacts/>

            <div className={s.copyright}>
                <p>© INSPIRED, 2023</p>                
            </div>

            <div className={s.development}>
                <div className={s.developmentList}>
                    <p>Designer: Anastasia Ilina</p>
                    <p>Developer: </p>
                </div>
            </div>
        </Container>
    );
};
