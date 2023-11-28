/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCmdLog = /* GraphQL */ `
  query GetCmdLog($id: ID!) {
    getCmdLog(id: $id) {
      id
      target
      start_time
      on_interval
      off_interval
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
        target
        start_time
        on_interval
        off_interval
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
export const getActionLog = /* GraphQL */ `
  query GetActionLog($id: ID!) {
    getActionLog(id: $id) {
      id
      target
      action
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listActionLogs = /* GraphQL */ `
  query ListActionLogs(
    $filter: ModelActionLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActionLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        target
        action
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
export const getSensorLog = /* GraphQL */ `
  query GetSensorLog($id: ID!) {
    getSensorLog(id: $id) {
      id
      target
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
        target
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
