import { useState } from "react";
import { Card } from "./base/Card";
import { Form } from "./base/Form";
import { Button } from "./base/Button";
import { FormItem } from "./base/FormItem";
import { InputText } from "./base/InputText";
import { InputPhone } from "./base/InputPhone";
import { InputNumber } from "./base/InputNumber";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CheckBox } from "./base/CheckBox";
import { Select } from "./base/Select";
import { documentTypes } from "../data";
import { InputAddress } from "./base/InputAddress";

export const RegisterCard = ({ registerRequest }) => {
  const [form, setForm] = useState({
    firstName: "",
    secondName: "",
    firstLastName: "",
    secondLastName: "",
    email: "",
    address: {
      place_id: "",
      region: {
        name: "",
        id: "",
      },
      country: {
        name: "",
        id: "",
      },
      fullAddress: "",
    },
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

  const handleSubmit = async () => {
    await registerRequest(form);
  };

  const handleAddressInputChange = ({ place_name, id, context }) => {
    const address = {
      place_id: id,
      region: {
        name: "",
        id: "",
      },
      country: {
        name: "",
        id: "",
      },
      fullAddress: place_name,
    };

    if (context.length) {
      for (let item of context) {
        if (item.id.includes("region")) {
          address.region.id = item.text;
          address.region.name = item.id;
        } else if (item.id.includes("country")) {
          address.country.name = item.text;
          address.country.id = item.id;
        }
      }
    }

    handleInputChange("address", address);
  };

  const IdTypeIsNitOrForeignerId =
    form.identificationType === "nit" ||
    form.identificationType === "foreigner ID"
      ? true
      : false;

  return (
    <Card title="">
      <div className="p-2 ml-4 mr-4 bg-yellow-100">
        <p className="text-xs text-gray-500 ml-2">
          The fields marked with <b className="text-red-400">*</b> are required.
        </p>
      </div>
      <Form handleOnSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-3">
          {IdTypeIsNitOrForeignerId && (
            <div className="col-span-6">
              <FormItem label="Company name" required model={form.companyName}>
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
                <FormItem label="First name" required model={form.firstName}>
                  <InputText
                    inputType="text"
                    inputName="first-name"
                    inputValue={form.firstName}
                    handleOnChange={(v) => handleInputChange("firstName", v)}
                  />
                </FormItem>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <FormItem label="Second name" required model={form.secondName}>
                  <InputText
                    inputType="text"
                    inputName="second-name"
                    inputValue={form.secondName}
                    handleOnChange={(v) => handleInputChange("secondName", v)}
                  />
                </FormItem>
              </div>
              <div className="col-span-6 sm:col-span-2">
                <FormItem
                  label="First last name"
                  required
                  model={form.firstLastName}
                >
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
                <FormItem
                  label="Second last name"
                  required
                  model={form.secondLastName}
                >
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
            <FormItem label="Email" required model={form.email}>
              <InputText
                inputType="email"
                inputName="email"
                inputValue={form.email}
                handleOnChange={(v) => handleInputChange("email", v)}
              />
            </FormItem>
          </div>

          <div className="col-span-6">
            <FormItem label="Address" required model={form.address.fullAddress}>
              <InputAddress
                inputValue={form.address.fullAddress}
                handleOnChange={handleAddressInputChange}
              />
            </FormItem>
          </div>

          <div className="col-span-6 sm:col-span-2">
            <FormItem label="Cellphone number" required model={form.cellphone}>
              <InputPhone
                inputValue={form.cellphone}
                handleOnChange={(v) => handleInputChange("cellphone", v)}
              />
            </FormItem>
          </div>
          <div className="col-span-6 sm:col-span-2">
            <FormItem
              label="Identification number"
              required
              form={form.identificationNumber}
            >
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
            <FormItem
              label="Identification type"
              required
              form={form.identificationType}
            >
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
