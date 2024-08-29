import { Form } from "react-bootstrap";

interface FormInputProps {
  title: string;
  type: "text" | "email" | "password" | "date" | "number";
  required?: boolean;
  id?: string;
  value: string | number | date;
  placeholder?: string;
  min?: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

export default function FormInput({
  title,
  type,
  required,
  id,
  value,
  onChange,
  placeholder,
  errorMessage,
  min,
}: FormInputProps): JSX.Element {
  id = id ? id : title;

  const valueString =
    value instanceof Date ? value.toISOString().split("T")[0] : value;

  return (
    <>
      <Form.Label htmlFor={id}>{title}</Form.Label>
      <Form.Control
        type={type}
        id={id}
        required={required}
        value={valueString}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
      />
      <Form.Control.Feedback type="invalid">
        {required && !errorMessage ? "Required field " : errorMessage}
      </Form.Control.Feedback>
    </>
  );
}
