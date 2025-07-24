import { useFormik } from 'formik';
import { basicSchema } from './schemas';

const onSubmit = (values, actions) => {
  console.log('onSubmit');
  console.log('values: ', values);
  console.log('actions: ', actions);
};

const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(formik.errors);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          type='email'
          id='email'
          placeholder='Enter your email'
          onBlur={formik.handleBlur}
          className={
            formik.errors.email && formik.touched.email ? 'input-error' : ''
          }
        />
        {formik.errors.email && formik.touched.email && (
          <span className='error'>{formik.errors.email}</span>
        )}
      </div>
      <div>
        <label htmlFor='age'>Age</label>
        <input
          value={formik.values.age}
          onChange={formik.handleChange}
          type='age'
          id='age'
          placeholder='Enter your age'
          onBlur={formik.handleBlur}
          className={
            formik.errors.age && formik.touched.age ? 'input-error' : ''
          }
        />
        {formik.errors.age && formik.touched.age && (
          <span className='error'>{formik.errors.age}</span>
        )}
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          value={formik.values.password}
          onChange={formik.handleChange}
          type='password'
          id='password'
          placeholder='Enter your password'
          onBlur={formik.handleBlur}
          className={
            formik.errors.password && formik.touched.password
              ? 'input-error'
              : ''
          }
        />
        {formik.errors.password && formik.touched.password && (
          <span className='error'>{formik.errors.password}</span>
        )}
      </div>
      <div>
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          type='password'
          id='confirmPassword'
          placeholder='Enter your confirmPassword'
          onBlur={formik.handleBlur}
          className={
            formik.errors.confirmPassword && formik.touched.confirmPassword
              ? 'input-error'
              : ''
          }
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <span className='error'>{formik.errors.confirmPassword}</span>
        )}
      </div>
      <button>Submit</button>
    </form>
  );
};

export default BasicForm;
