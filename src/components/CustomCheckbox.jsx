import { useField } from 'formik';
import React from 'react';

function CustomCheckbox({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <div>
        <input
          type='checkbox'
          {...field}
          {...props}
          className={meta.touched && meta.error ? 'input-error' : ''}
        />
        <span>I accept the terms of</span>
      </div>
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}

export default CustomCheckbox;
