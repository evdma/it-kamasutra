import React from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { Input, createField, GetStringKeys } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from "../../redux/auth-reducer";
import { Redirect } from 'react-router-dom';
import styles from '../common/FormsControls/FormControls.module.css';
import Button from 'react-bootstrap/Button';
import { AppStateType } from '../../redux/redux-store';

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

type MapStatePropsType = {
    captchaUrl: string | null;
    isAuth: boolean;
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void;
}

export type LoginFormValuesType = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string;
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>;

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);