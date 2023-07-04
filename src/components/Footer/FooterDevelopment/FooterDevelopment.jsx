import s from '../Footer.module.scss'

export const FooterDevelopment = () => {
    return (
        <div className={s.development}>
            <div className={s.developmentList}>
                <p><a className={s.link} href="/">Designer: Anastasia Ilina</a></p>
                <p>Developer: </p>
            </div>
        </div>
    );
};
