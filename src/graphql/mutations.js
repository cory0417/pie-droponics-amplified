/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSensorLog = /* GraphQL */ `
  mutation CreateSensorLog(
    $input: CreateSensorLogInput!
    $condition: ModelSensorLogConditionInput
  ) {
    createSensorLog(input: $input, condition: $condition) {
      id
      sensor_name
      value
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSensorLog = /* GraphQL */ `
  mutation UpdateSensorLog(
    $input: UpdateSensorLogInput!
    $condition: ModelSensorLogConditionInput
  ) {
    updateSensorLog(input: $input, condition: $condition) {
      id
      sensor_name
      value
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSensorLog = /* GraphQL */ `
  mutation DeleteSensorLog(
    $input: DeleteSensorLogInput!
    $condition: ModelSensorLogConditionInput
  ) {
    deleteSensorLog(input: $input, condition: $condition) {
      id
      sensor_name
      value
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCmdLog = /* GraphQL */ `
  mutation CreateCmdLog(
    $input: CreateCmdLogInput!
    $condition: ModelCmdLogConditionInput
  ) {
    createCmdLog(input: $input, condition: $condition) {
      id
      cmd
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCmdLog = /* GraphQL */ `
  mutation UpdateCmdLog(
    $input: UpdateCmdLogInput!
    $condition: ModelCmdLogConditionInput
  ) {
    updateCmdLog(input: $input, condition: $condition) {
      id
      cmd
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCmdLog = /* GraphQL */ `
  mutation DeleteCmdLog(
    $input: DeleteCmdLogInput!
    $condition: ModelCmdLogConditionInput
  ) {
    deleteCmdLog(input: $input, condition: $condition) {
      id
      cmd
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSchedule = /* GraphQL */ `
  mutation CreateSchedule(
    $input: CreateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    createSchedule(input: $input, condition: $condition) {
      id
      actuator_name
      start_time
      period
      cmd
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSchedule = /* GraphQL */ `
  mutation UpdateSchedule(
    $input: UpdateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    updateSchedule(input: $input, condition: $condition) {
      id
      actuator_name
      start_time
      period
      cmd
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSchedule = /* GraphQL */ `
  mutation DeleteSchedule(
    $input: DeleteScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    deleteSchedule(input: $input, condition: $condition) {
      id
      actuator_name
      start_time
      period
      cmd
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
