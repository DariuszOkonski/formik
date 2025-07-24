import { Formik, Form, Field } from 'formik';
import CustomInput from './components/CustomInput';
import { advancedSchema } from './schemas';
import CustomSelect from './components/CustomSelect';

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

          <CustomSelect
            label='JobType'
            name='jobType'
            placeholder='Please select a job'
          >
            <option value=''>Please select a job type</option>
            <option value='developer'>Developer</option>
            <option value='designer'>Designer</option>
            <option value='manager'>Product Manager</option>
            <option value='other'>Other</option>
          </CustomSelect>

          {/*<Field type='text' name='name' placeholder='Name' />*/}

          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default AdvancedForm;
