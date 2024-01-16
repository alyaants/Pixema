import FormContainer from '../../components/formPageContainer/formPageContainer'
import Input from '../../components/input/input'
import style from './resetPassword.module.scss'

type ResetPasswordProps = {
    infoText?: string;
}

const ResetPassword = (props:ResetPasswordProps) => {
    return(
        <div>
            <FormContainer title={'Reset Password'} btnTitle={"Reset"} onSubmit={() => {}}>
                <Input title={"Email"} placeholder={'Your email'} onСhange={() => {}} />
            </FormContainer>
        </div>
    )
}

export default ResetPassword