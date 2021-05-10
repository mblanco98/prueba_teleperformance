import { useState } from "react";
import { Card } from "./base/Card";
import { Form } from "./base/Form";
import { FormItem } from "./base/FormItem";
import { InputText } from "./base/InputText";
import { InputNumber } from "./base/InputNumber";
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

  // const fieldToRender = () => {
  //   const textInputs = [
  //     {
  //       name: "first-name",
  //       key: "firstName",
  //       label: 'First name'
  //     },
  //     {
  //       name: "second-name",
  //       key: "secondName",
  //       label: 'Second name'
  //     },
  //     {
  //       name: "first-last-name",
  //       key: "firstLastName",
  //       label: 'First last name'
  //     },
  //     {
  //       name: "second-last-name",
  //       key: "secondLastName",
  //       label: 'Second last name'
  //     },
  //   ];
  //   return (
  //     <FormItem>
  //       <InputText inputName={input.name} inputValue={form[input.key]} handleOnChange={(v) => handleInputChange(input.key, v)} />
  //     </FormItem>
  //   )
  // }

  return (
    <Card title="Registro">
      <header className="p-2 ml-4 mr-4 bg-yellow-100">
        <p className="text-xs text-gray-500 ml-2">
          The fields with <b className="text-red-400">*</b> are required.
        </p>
      </header>
      <Form handleOnSubmit={handleSubmit}>
        <FormItem label="First name" required>
          <InputText
            inputName="first-name"
            inputValue={form.firstName}
            handleOnChange={(v) => handleInputChange("firstName", v)}
          />
        </FormItem>
        <FormItem label="Second name" required>
          <InputText
            inputName="second-name"
            inputValue={form.secondName}
            handleOnChange={(v) => handleInputChange("secondName", v)}
          />
        </FormItem>
        <FormItem label="First last name" required>
          <InputText
            inputName="first-last-name"
            inputValue={form.firstLastName}
            handleOnChange={(v) => handleInputChange("firstLastName", v)}
          />
        </FormItem>
        <FormItem label="Second last name" required>
          <InputText
            inputName="second-last-name"
            inputValue={form.secondLastName}
            handleOnChange={(v) => handleInputChange("secondLastName", v)}
          />
        </FormItem>
        <FormItem label="Email" required>
          <InputText
            inputName="email"
            inputValue={form.email}
            handleOnChange={(v) => handleInputChange("email", v)}
          />
        </FormItem>
        <FormItem label="Identification type" required>
          <InputText
            inputName="identification-type"
            inputValue={form.identificationType}
            handleOnChange={(v) => handleInputChange("identificationType", v)}
          />
        </FormItem>
        <FormItem label="Identification number" required>
          <InputNumber
            inputName="identification-number"
            inputValue={form.identificationNumber}
            handleOnChange={(v) => handleInputChange("identificationNumber", v)}
          />
        </FormItem>
        <FormItem label="Cellphone number" required>
          <InputNumber
            inputName="cellphone-number"
            inputValue={form.cellphone}
            handleOnChange={(v) => handleInputChange("cellphone", v)}
          />
        </FormItem>
        <FormItem label="Company name" required>
          <InputText
            inputName="company-name"
            inputValue={form.companyName}
            handleOnChange={(v) => handleInputChange("companyName", v)}
          />
        </FormItem>
      </Form>
    </Card>
  );
};

RegisterCard.propTypes = {
  registerRequest: PropTypes.func.isRequired,
};
