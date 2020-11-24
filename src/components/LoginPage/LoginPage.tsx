import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { Input, createField, GetStringKeys } from '../common/FormsControls/FormsControls';
import styles from '../common/FormsControls/FormControls.module.css';
import { login } from "../../redux/auth-reducer";
import { AppStateType } from '../../redux/redux-store';
import { required } from '../../utils/validators/validators';
import Button from 'react-bootstrap/Button';

type LoginFormOwnProps = {
    captchaUrl: string | null;
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
            {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, { type: "password" })}
            {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

            {captchaUrl && <img src={captchaUrl} alt="" />}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input)}

            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <Button variant="success" type="submit">Login</Button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm);

export type LoginFormValuesType = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string;
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>;

export const LoginPage: React.FC = () => {
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl);
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
    const dispatch = useDispatch();

    const onSubmit = (formData: any) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha));
    }

    if (isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>
    )
};