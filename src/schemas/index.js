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

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .required('Required'),
  jobType: yup
    .string()
    .oneOf(
      ['designer', 'developer', 'manager', 'other'],
      'I want some message here...'
    )
    .required('Required'),
  acceptedTos: yup
    .boolean()
    .oneOf([true], 'Please accept the terms of service'),
});
