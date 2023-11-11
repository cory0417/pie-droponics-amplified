/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createSchedule } from "../graphql/mutations";
export default function ScheduleCreateForm(props) {
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
    actuator_name: "",
    start_time: "",
    period: "",
    cmd: "",
    timestamp: "",
  };
  const [actuator_name, setActuator_name] = React.useState(
    initialValues.actuator_name
  );
  const [start_time, setStart_time] = React.useState(initialValues.start_time);
  const [period, setPeriod] = React.useState(initialValues.period);
  const [cmd, setCmd] = React.useState(initialValues.cmd);
  const [timestamp, setTimestamp] = React.useState(initialValues.timestamp);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setActuator_name(initialValues.actuator_name);
    setStart_time(initialValues.start_time);
    setPeriod(initialValues.period);
    setCmd(initialValues.cmd);
    setTimestamp(initialValues.timestamp);
    setErrors({});
  };
  const validations = {
    actuator_name: [{ type: "Required" }],
    start_time: [{ type: "Required" }],
    period: [{ type: "Required" }],
    cmd: [{ type: "Required" }],
    timestamp: [{ type: "Required" }],
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
          actuator_name,
          start_time,
          period,
          cmd,
          timestamp,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createSchedule.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ScheduleCreateForm")}
      {...rest}
    >
      <TextField
        label="Actuator name"
        isRequired={true}
        isReadOnly={false}
        value={actuator_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              actuator_name: value,
              start_time,
              period,
              cmd,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.actuator_name ?? value;
          }
          if (errors.actuator_name?.hasError) {
            runValidationTasks("actuator_name", value);
          }
          setActuator_name(value);
        }}
        onBlur={() => runValidationTasks("actuator_name", actuator_name)}
        errorMessage={errors.actuator_name?.errorMessage}
        hasError={errors.actuator_name?.hasError}
        {...getOverrideProps(overrides, "actuator_name")}
      ></TextField>
      <TextField
        label="Start time"
        isRequired={true}
        isReadOnly={false}
        value={start_time}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              actuator_name,
              start_time: value,
              period,
              cmd,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.start_time ?? value;
          }
          if (errors.start_time?.hasError) {
            runValidationTasks("start_time", value);
          }
          setStart_time(value);
        }}
        onBlur={() => runValidationTasks("start_time", start_time)}
        errorMessage={errors.start_time?.errorMessage}
        hasError={errors.start_time?.hasError}
        {...getOverrideProps(overrides, "start_time")}
      ></TextField>
      <TextField
        label="Period"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={period}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              actuator_name,
              start_time,
              period: value,
              cmd,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.period ?? value;
          }
          if (errors.period?.hasError) {
            runValidationTasks("period", value);
          }
          setPeriod(value);
        }}
        onBlur={() => runValidationTasks("period", period)}
        errorMessage={errors.period?.errorMessage}
        hasError={errors.period?.hasError}
        {...getOverrideProps(overrides, "period")}
      ></TextField>
      <TextField
        label="Cmd"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={cmd}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              actuator_name,
              start_time,
              period,
              cmd: value,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.cmd ?? value;
          }
          if (errors.cmd?.hasError) {
            runValidationTasks("cmd", value);
          }
          setCmd(value);
        }}
        onBlur={() => runValidationTasks("cmd", cmd)}
        errorMessage={errors.cmd?.errorMessage}
        hasError={errors.cmd?.hasError}
        {...getOverrideProps(overrides, "cmd")}
      ></TextField>
      <TextField
        label="Timestamp"
        isRequired={true}
        isReadOnly={false}
        value={timestamp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              actuator_name,
              start_time,
              period,
              cmd,
              timestamp: value,
            };
            const result = onChange(modelFields);
            value = result?.timestamp ?? value;
          }
          if (errors.timestamp?.hasError) {
            runValidationTasks("timestamp", value);
          }
          setTimestamp(value);
        }}
        onBlur={() => runValidationTasks("timestamp", timestamp)}
        errorMessage={errors.timestamp?.errorMessage}
        hasError={errors.timestamp?.hasError}
        {...getOverrideProps(overrides, "timestamp")}
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
