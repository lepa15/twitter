export default function Field({
  name,
  id,
  type,
  value,
  onChange: handleChange,
  error,
  labelText,
}) {
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
