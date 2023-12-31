import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { GetStringKeys, Input, createFild } from "components/FormsControls/FormsControls";
import { required } from "utils/validators/validators";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../store/AuthReducer/authReducer';
import { Navigate } from "react-router-dom";
import routeLogin from "./routes";
import { routeMyProfile } from "pages/MyProfile";
import { AppStateType, TypedDispatch } from "store/reduxStore";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormsValuesType, LoginFormOwnProps> & LoginFormOwnProps> 
    = ({handleSubmit, error, captchaUrl}) => {
    return (
        <section>
            <form onSubmit={handleSubmit}>
                { createFild<LoginFormsValuesTypeKeys>("Email", "email", [required], Input, {type: "E-mail"}) }
                { createFild<LoginFormsValuesTypeKeys>("Password", "password", [required], Input, {type: "password"}) }
                { createFild<LoginFormsValuesTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "Remember me") }
                
                { captchaUrl && <img src={captchaUrl}/> }
                { captchaUrl && createFild<LoginFormsValuesTypeKeys>("Symbols from image", "captcha", [required], Input, {}) }
                
                { error && <div className={"formSummaryError"}>{error}</div>}
                <div className="wrapButton">
                    <button>Войти</button>
                </div>
            </form>
        </section>
    )
}
const LoginReduxForm = reduxForm<LoginFormsValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

export type LoginFormsValuesType = {
    captcha: string
    rememberMe: boolean
    email: string
    password: string
}

type LoginFormsValuesTypeKeys = GetStringKeys<LoginFormsValuesType>

const Login: React.FC = () => {

    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const authorizedUserId = useSelector((state: AppStateType) => state.auth.id)

    const dispatch = useDispatch<TypedDispatch>()

    const onSubmit = (formData: LoginFormsValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if(isAuth){
        return <Navigate to={routeMyProfile(authorizedUserId)}/>
    }
    return (
        <>
            <h1>Login</h1>
            <h6>Васька АВТОРИЗУЙСЯ <br/>или включи интернет {")) "}Олень</h6>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </>
    )
}

export {routeLogin};
export default Login