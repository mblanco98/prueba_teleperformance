import { useState } from "react";
import { Card } from "./base/Card";
import { Form } from "./base/Form";
import { Button } from "./base/Button";
import { FormItem } from "./base/FormItem";
import PropTypes from "prop-types";
import { InputNumber } from "./base/InputNumber";

export const Login = ({ loginRequest, history }) => {
  const [errors, setErrors] = useState([]);
  const [nit, setNit] = useState("");

  const handleSubmit = async () => {
    if (!nit) {
      setErrors(["Company NIT field is required"]);
      return
    }

    const canRegister = await loginRequest({ nit })
    if (canRegister) {
      history.push({
        pathname: "/register",
        search: `?r=${nit}`
      });
    }
  };

  const handleInputChange = (value) => {
    if (errors.length) setErrors([]);
    setNit(value);
  };

  const renderWithErrors = () =>
    errors.length ? (
      <p className="text-red-400 mt-1 text-xs"> {errors[0]} </p>
    ) : null;

  return (
    <Card title="Ingrese el NIT de la persona natural o juridica para la que realizara el tramite, sin incluir el digito de verificacion. Luego seleccione <strong>Continuar</strong> para completar su solicitud">
      <Form className="mt-8" handleOnSubmit={handleSubmit}>
        <FormItem label="Company NIT" isSrOnly={true}>
          <InputNumber
            inputName="nit"
            inputValue={nit}
            inputId="company-nit"
            inputPlaceholder="Company NIT"
            handleOnChange={handleInputChange}
          />
        </FormItem>
        {renderWithErrors()}
        <footer className="mt-5">
          <Button
            type="primary"
            title="Continue"
            btnType="submit"
            handleClick={handleSubmit}
          />
        </footer>
      </Form>
    </Card>
  );
};

Login.propTypes = {
  loginRequest: PropTypes.func.isRequired,
};
