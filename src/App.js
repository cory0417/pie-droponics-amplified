import { Amplify, PubSub } from 'aws-amplify';
import {GraphQLAPI} from '@aws-amplify/api-graphql';
import { AWSIoTProvider } from '@aws-amplify/pubsub';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Grid } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopicSubscriber from './components/Dashboard/Subscriber';
import Publisher from './components/Dashboard/Publisher';
import Title from './components/Dashboard/Title';
import Chart from './components/Dashboard/Chart';
import { listSensorLogs } from './graphql/queries';

Amplify.configure(awsExports);

var PUB_TOPIC = 'cmd/';
var SUB_TOPIC = 'sensor/+/';

// Apply plugin with configuration
Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: 'us-east-2',
    aws_pubsub_endpoint:
      'wss://a2medytrnkkh4c-ats.iot.us-east-2.amazonaws.com/mqtt'
  })
);
// Querying the database for sensor logs
const logs = await GraphQLAPI.graphql({ query: listSensorLogs });
console.log(logs.data.listSensorLogs.items); // need to consider that mqtt will not generate created and updated at fields

function App({ signOut, user }) {
  return (
    <div className="App">
      <Grid
        className="container"
        columns={{ xs: 4, sm: 8, md: 12 }}
        gap="0.5rem"
        rowGap="0.5rem"
        templateRows="0.5fr 1fr 1fr"
        templateColumns="1fr 1fr 1fr 1fr"
      >
        <Title user={user} signOut={signOut}/>
        <Publisher topic={PUB_TOPIC}/>
        <TopicSubscriber topic={SUB_TOPIC} PubSub={PubSub}/>
      <Chart/>
      </Grid>
    </div>
  );
}

export default withAuthenticator(App);
