import * as yup from 'yup';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  age: yup.number().positive().integer().required('Required'),
  password: yup
    .string()
    .min(5)
    .matches(passwordRegex, { message: 'Please create a stronger password' })
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});
