export default function FormRow({ type, name, labelText, defaultValue }) {
  return (
    <div style={{ margin: 10 }}>
      <label className="form-label" htmlFor={name}>
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue || ""}
        required
      />
    </div>
  );
}
