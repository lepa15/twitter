import { FormState } from '@/components/ModalForm/ModalForm';

type FieldProps = {
  name: keyof FormState;
  id: string;
  type: React.HTMLInputTypeAttribute;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
  labelText: string;
};

export default function Field({
  name,
  id,
  type,
  value,
  onChange: handleChange,
  error,
  labelText,
}: FieldProps) {
  return (
    <div className={`form__field ${error ? 'error' : ''}`}>
      <div className="form__contain">
        <input
          name={name}
          id={id}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder=" "
        />
        <label htmlFor={name}>{labelText}</label>
      </div>
      <span className={`form__field_error ${error ? 'show' : ''}`}>
        {error}
      </span>
    </div>
  );
}
