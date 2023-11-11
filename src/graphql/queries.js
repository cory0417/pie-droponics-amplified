/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSensorLog = /* GraphQL */ `
  query GetSensorLog($id: ID!) {
    getSensorLog(id: $id) {
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
export const listSensorLogs = /* GraphQL */ `
  query ListSensorLogs(
    $filter: ModelSensorLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSensorLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sensor_name
        value
        timestamp
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCmdLog = /* GraphQL */ `
  query GetCmdLog($id: ID!) {
    getCmdLog(id: $id) {
      id
      cmd
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCmdLogs = /* GraphQL */ `
  query ListCmdLogs(
    $filter: ModelCmdLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCmdLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cmd
        timestamp
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSchedule = /* GraphQL */ `
  query GetSchedule($id: ID!) {
    getSchedule(id: $id) {
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
export const listSchedules = /* GraphQL */ `
  query ListSchedules(
    $filter: ModelScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
