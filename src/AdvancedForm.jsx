import { Formik, Form, Field } from 'formik';
import CustomInput from './components/CustomInput';
import { advancedSchema } from './schemas';

function AdvancedForm() {
  return (
    <Formik
      initialValues={{ username: '', jobType: '', acceptedTos: false }}
      validationSchema={advancedSchema}
    >
      {(props) => (
        <Form onSubmit={props.handleSubmit}>
          <CustomInput
            label='Username'
            name='username'
            type='text'
            placeholder='Enter your username'
          />

          {/*<Field type='text' name='name' placeholder='Name' />*/}

          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default AdvancedForm;
