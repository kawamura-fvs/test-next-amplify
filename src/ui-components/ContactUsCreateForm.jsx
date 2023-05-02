/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ContactUs } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ContactUsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    detail: "",
    contact_type: "",
    isResolve: false,
    updated_at: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [detail, setDetail] = React.useState(initialValues.detail);
  const [contact_type, setContact_type] = React.useState(
    initialValues.contact_type
  );
  const [isResolve, setIsResolve] = React.useState(initialValues.isResolve);
  const [updated_at, setUpdated_at] = React.useState(initialValues.updated_at);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setDetail(initialValues.detail);
    setContact_type(initialValues.contact_type);
    setIsResolve(initialValues.isResolve);
    setUpdated_at(initialValues.updated_at);
    setErrors({});
  };
  const validations = {
    title: [{ type: "Required" }],
    detail: [{ type: "Required" }],
    contact_type: [{ type: "Required" }],
    isResolve: [{ type: "Required" }],
    updated_at: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          detail,
          contact_type,
          isResolve,
          updated_at,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new ContactUs(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ContactUsCreateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              detail,
              contact_type,
              isResolve,
              updated_at,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Detail"
        isRequired={true}
        isReadOnly={false}
        value={detail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              detail: value,
              contact_type,
              isResolve,
              updated_at,
            };
            const result = onChange(modelFields);
            value = result?.detail ?? value;
          }
          if (errors.detail?.hasError) {
            runValidationTasks("detail", value);
          }
          setDetail(value);
        }}
        onBlur={() => runValidationTasks("detail", detail)}
        errorMessage={errors.detail?.errorMessage}
        hasError={errors.detail?.hasError}
        {...getOverrideProps(overrides, "detail")}
      ></TextField>
      <TextField
        label="Contact type"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={contact_type}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              detail,
              contact_type: value,
              isResolve,
              updated_at,
            };
            const result = onChange(modelFields);
            value = result?.contact_type ?? value;
          }
          if (errors.contact_type?.hasError) {
            runValidationTasks("contact_type", value);
          }
          setContact_type(value);
        }}
        onBlur={() => runValidationTasks("contact_type", contact_type)}
        errorMessage={errors.contact_type?.errorMessage}
        hasError={errors.contact_type?.hasError}
        {...getOverrideProps(overrides, "contact_type")}
      ></TextField>
      <SwitchField
        label="Is resolve"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isResolve}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              detail,
              contact_type,
              isResolve: value,
              updated_at,
            };
            const result = onChange(modelFields);
            value = result?.isResolve ?? value;
          }
          if (errors.isResolve?.hasError) {
            runValidationTasks("isResolve", value);
          }
          setIsResolve(value);
        }}
        onBlur={() => runValidationTasks("isResolve", isResolve)}
        errorMessage={errors.isResolve?.errorMessage}
        hasError={errors.isResolve?.hasError}
        {...getOverrideProps(overrides, "isResolve")}
      ></SwitchField>
      <TextField
        label="Updated at"
        isRequired={true}
        isReadOnly={false}
        value={updated_at}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              detail,
              contact_type,
              isResolve,
              updated_at: value,
            };
            const result = onChange(modelFields);
            value = result?.updated_at ?? value;
          }
          if (errors.updated_at?.hasError) {
            runValidationTasks("updated_at", value);
          }
          setUpdated_at(value);
        }}
        onBlur={() => runValidationTasks("updated_at", updated_at)}
        errorMessage={errors.updated_at?.errorMessage}
        hasError={errors.updated_at?.hasError}
        {...getOverrideProps(overrides, "updated_at")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
