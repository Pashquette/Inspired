import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Layout/Container/Container";
import s from "./Search.module.scss";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { toggleSearch } from "../../features/searchSlice";

export const Search = () => {
    const { openSearch } = useSelector((state) => state.search);
    const dispatch = useDispatch()
    const validationSchema = Yup.object({
        search: Yup.string().required("Введите запрос поиска"),
    });
    
    const navigate = useNavigate()

    const handleSubmit = (values, { resetForm }) => {
        navigate(`/search?q=${values.search}`)
        resetForm();
        dispatch(toggleSearch())
      };

    return (
        openSearch && (
            <div className={s.search}>
                <Container>
                    <Formik
                        initialValues={{
                            search: ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form className={s.form}>
                            <Field
                                className={s.input}
                                type="search"
                                name="search"
                                placeholder="Найти..."
                            />
                            <ErrorMessage
                                name="search"
                                component={"span"}
                                className={s.error}
                            />
                            <button className={s.btn} type="submit">
                                Искать
                            </button>
                        </Form>
                    </Formik>
                </Container>
            </div>
        )
    );
};
