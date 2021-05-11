import { useState } from "react";
import { Card } from "./base/Card";
import { Form } from "./base/Form";
import { Button } from "./base/Button";
import { FormItem } from "./base/FormItem";
import { InputText } from "./base/InputText";
import { InputNumber } from "./base/InputNumber";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CheckBox } from "./base/CheckBox";
import { Select } from "./base/Select";
import { countriesAvailable, documentTypes } from "../data";

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
    registerRequest(form)
  };

  const IdTypeIsNitOrForeignerId =
    form.identificationType === "nit" ||
    form.identificationType === "foreigner ID"
      ? true
      : false;

  return (
    <Card title="">
      <header className="p-2 ml-4 mr-4 bg-yellow-100">
        <p className="text-xs text-gray-500 ml-2">
          The fields marked with <b className="text-red-400">*</b> are required.
        </p>
      </header>
      <Form handleOnSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-3">
          
          {IdTypeIsNitOrForeignerId && (
            <div className="col-span-6">
              <FormItem label="Company name" required>
                <InputText
                  inputType="text"
                  inputName="company-name"
                  inputValue={form.companyName}
                  handleOnChange={(v) => handleInputChange("companyName", v)}
                />
              </FormItem>
            </div>
          )}

          {!IdTypeIsNitOrForeignerId && (
            <>
              <div className="col-span-6 sm:col-span-2">
                <FormItem label="First name" required>
                  <InputText
                    inputType="text"
                    inputName="first-name"
                    inputValue={form.firstName}
                    handleOnChange={(v) => handleInputChange("firstName", v)}
                  />
                </FormItem>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <FormItem label="Second name" required>
                  <InputText
                    inputType="text"
                    inputName="second-name"
                    inputValue={form.secondName}
                    handleOnChange={(v) => handleInputChange("secondName", v)}
                  />
                </FormItem>
              </div>
              <div className="col-span-6 sm:col-span-2">
                <FormItem label="First last name" required>
                  <InputText
                    inputType="text"
                    inputName="first-last-name"
                    inputValue={form.firstLastName}
                    handleOnChange={(v) =>
                      handleInputChange("firstLastName", v)
                    }
                  />
                </FormItem>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <FormItem label="Second last name" required>
                  <InputText
                    inputType="text"
                    inputName="second-last-name"
                    inputValue={form.secondLastName}
                    handleOnChange={(v) =>
                      handleInputChange("secondLastName", v)
                    }
                  />
                </FormItem>
              </div>
            </>
          )}

          <div className="col-span-6">
            <FormItem label="Email" required>
              <InputText
                inputType="email"
                inputName="email"
                inputValue={form.email}
                handleOnChange={(v) => handleInputChange("email", v)}
              />
            </FormItem>
          </div>
          <div className="col-span-6">
            <FormItem label="Country" required>
              <Select
                inputValue={form.countryState}
                options={countriesAvailable}
                handleOnChange={(v) => handleInputChange("countryState", v)}
              />
            </FormItem>
          </div>
          <div className="col-span-6 sm:col-span-2">
            <FormItem label="Cellphone number" required>
              <InputNumber
                inputName="cellphone-number"
                inputValue={form.cellphone}
                handleOnChange={(v) => handleInputChange("cellphone", v)}
              />
            </FormItem>
          </div>
          <div className="col-span-6 sm:col-span-2">
            <FormItem label="Identification number" required>
              <InputNumber
                inputName="identification-number"
                inputValue={form.identificationNumber}
                handleOnChange={(v) =>
                  handleInputChange("identificationNumber", v)
                }
              />
            </FormItem>
          </div>
          <div className="col-span-6 sm:col-span-2">
            <FormItem label="Identification type" required>
              <Select
                inputValue={form.identificationType}
                options={documentTypes}
                handleOnChange={(v) =>
                  handleInputChange("identificationType", v)
                }
              />
            </FormItem>
          </div>
          <div className="col-span-6">
            <CheckBox
              label="messages marketing"
              handleOnChange={(v) => handleInputChange("messagesMarketing", v)}
            >
              I authorize the sending of messages to the cell phone provided.
            </CheckBox>
          </div>
          <div className="col-span-6">
            <CheckBox
              label="email marketing"
              handleOnChange={(v) => handleInputChange("emailMarketing", v)}
            >
              I authorize messages to be sent to the following e-mail address:{" "}
              {form.email}
            </CheckBox>
          </div>
        </div>
        <footer className="mt-10 flex justify-end">
          <Link
            to="/"
            className="group relative mr-2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-500 bg-gray-50 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
          >
            Cancel
          </Link>
          <Button title="Submit" type="primary" handleClick={handleSubmit} />
        </footer>
      </Form>
    </Card>
  );
};

RegisterCard.propTypes = {
  registerRequest: PropTypes.func.isRequired,
};
