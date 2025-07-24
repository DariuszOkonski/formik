import { useField } from 'formik';

function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? 'input-error' : ''}
      ></select>
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}

export default CustomSelect;
