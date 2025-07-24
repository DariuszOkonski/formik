import { Formik, Form, Field } from 'formik';
import CustomInput from './components/CustomInput';
import { advancedSchema } from './schemas';
import CustomSelect from './components/CustomSelect';
import CustomCheckbox from './components/CustomCheckbox';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

function AdvancedForm() {
  return (
    <Formik
      initialValues={{ username: '', jobType: '', acceptedTos: false }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
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

          <CustomCheckbox name='acceptedTos' />

          {/*<Field type='text' name='name' placeholder='Name' />*/}

          <button disabled={props.isSubmitting} type='submit'>
            {props.isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default AdvancedForm;
