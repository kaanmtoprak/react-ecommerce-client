import * as yup from 'yup';

const validations = yup.object().shape({
    email:yup.string().email('Please Provide an Valid Email...').required("Required Field..."),
    password:yup.string().min(5, "Your password can be at least 5 characters...").required(),
    passwordConfirm:yup.string().oneOf([yup.ref('password')],"Please Enter Same Password").required()
});

export default validations;