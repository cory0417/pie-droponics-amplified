/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSensorLog = /* GraphQL */ `
  subscription OnCreateSensorLog(
    $filter: ModelSubscriptionSensorLogFilterInput
  ) {
    onCreateSensorLog(filter: $filter) {
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
export const onUpdateSensorLog = /* GraphQL */ `
  subscription OnUpdateSensorLog(
    $filter: ModelSubscriptionSensorLogFilterInput
  ) {
    onUpdateSensorLog(filter: $filter) {
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
export const onDeleteSensorLog = /* GraphQL */ `
  subscription OnDeleteSensorLog(
    $filter: ModelSubscriptionSensorLogFilterInput
  ) {
    onDeleteSensorLog(filter: $filter) {
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
export const onCreateCmdLog = /* GraphQL */ `
  subscription OnCreateCmdLog($filter: ModelSubscriptionCmdLogFilterInput) {
    onCreateCmdLog(filter: $filter) {
      id
      cmd
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCmdLog = /* GraphQL */ `
  subscription OnUpdateCmdLog($filter: ModelSubscriptionCmdLogFilterInput) {
    onUpdateCmdLog(filter: $filter) {
      id
      cmd
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCmdLog = /* GraphQL */ `
  subscription OnDeleteCmdLog($filter: ModelSubscriptionCmdLogFilterInput) {
    onDeleteCmdLog(filter: $filter) {
      id
      cmd
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSchedule = /* GraphQL */ `
  subscription OnCreateSchedule($filter: ModelSubscriptionScheduleFilterInput) {
    onCreateSchedule(filter: $filter) {
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
export const onUpdateSchedule = /* GraphQL */ `
  subscription OnUpdateSchedule($filter: ModelSubscriptionScheduleFilterInput) {
    onUpdateSchedule(filter: $filter) {
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
export const onDeleteSchedule = /* GraphQL */ `
  subscription OnDeleteSchedule($filter: ModelSubscriptionScheduleFilterInput) {
    onDeleteSchedule(filter: $filter) {
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
