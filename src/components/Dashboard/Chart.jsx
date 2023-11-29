import { listSensorLogs } from "../../graphql/queries";
import { GraphQLAPI } from "@aws-amplify/api-graphql";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Amplify } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { Card, Heading } from "@aws-amplify/ui-react";

Amplify.configure(awsconfig);

// Querying the database for sensor logs
const logs = await GraphQLAPI.graphql({ query: listSensorLogs });

// Assuming logs.data.listSensorLogs.items is your data
const data = logs.data.listSensorLogs.items
  .map((item) => ({
    timestamp: new Date(item.timestamp).toLocaleString(),
    value: item.value,
  }))
  .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

console.log(data);

function Chart() {
  return (
    <Card columnStart="3" columnEnd="5" style={{ height: "500px" }}>
      <Heading level="2" fontWeight="regular" fontSize="2rem">
        Sensor Data
      </Heading>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            name="Temperature"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default Chart;
