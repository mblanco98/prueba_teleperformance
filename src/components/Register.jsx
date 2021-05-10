import { useState } from "react";
import { Card } from "./base/Card";
import { Form } from "./base/Form";
import { FormItem } from "./base/FormItem";
import { InputText } from "./base/InputText";
import PropTypes from "prop-types";

export const RegisterCard = ({ registerRequest }) => {
  const [form, setForm] = useState({
    firstName: "",
    secondName: "",
    firstLastName: "",
    secondLastName: "",
    email: "",
    address: "",
    countryState: "",
    cellphone: "",
    identificationType: "",
    identificationNumber: "",
    companyName: "",
    emailMarketing: false,
    messagesMarketing: false,
  });

  const handleInputChange = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    console.log(form)
  };

  return (
    <Card title="Registro">
      <Form handleOnSubmit={handleSubmit}>
        <FormItem label="First name">
          <InputText
            inputName="first-name"
            inputValue={form.firstName}
            handleOnChange={handleInputChange}
          />
        </FormItem>
      </Form>
      <footer className="flex h-20 mt-2">
        <span>
          Los campos marcados con <b className="text-red-300">*</b> son
          requeridos.
        </span>
      </footer>
    </Card>
  );
};

RegisterCard.propTypes = {
  registerRequest: PropTypes.func.isRequired,
};