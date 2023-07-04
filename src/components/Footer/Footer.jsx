import { Container } from '../Layout/Container/Container';
import s from './Footer.module.scss'
import { FooterCatalog } from './FooterCatalog/FooterCatalog';
import { FooterSocials } from './FooterSocials/FooterSocials';
import { FooterContacts } from './FooterContacts/FooterContacts';
import { FooterCopyright } from './FooterCopyright/FooterCopyright';
import { FooterDevelopment } from './FooterDevelopment/FooterDevelopment';


export const Footer = ({data}) => {
    return (
        <Container className={s.container}>
            <FooterCatalog data={data}/>
            <FooterSocials/>
            <FooterContacts/>
            <FooterCopyright/>
            <FooterDevelopment/>
        </Container>
    );
};
