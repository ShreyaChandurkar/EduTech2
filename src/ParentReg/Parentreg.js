import { useState } from "react";
import "./formInput.css";
import FormInput from "./FormInput";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Student fullname",
      type: "text",
      placeholder: "Student fullname",
      errorMessage:
        "Student fullname should be 3-16 characters and shouldn't include any special character!",
      label: "Student fullname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
        id: 2,
        name: "Parent fullname",
        type: "text",
        placeholder: "Parent fullname",
        errorMessage:
          "Parent fullname should be 3-16 characters and shouldn't include any special character!",
        label: "Parent fullname",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
    {
        id: 3,
        name: "user id",
        type: "User Id",
        placeholder: "User Id ",
        label: "User Id ",
        errorMessage:
        "User Id  should  be empty!",
        required: true,

      },
      {
        id: 4,
        name: "Phone",
        type: "phone",
        placeholder: "Phone no.",
        label: "Phone no.",
        errorMessage:
        "Phone no. should be 10 characters and shouldn't include any special character!",
        required: true,

      },

    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Parent Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;