import { Amplify, PubSub } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Grid } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopicSubscriber from './components/Dashboard/Subscriber';
import Publisher from './components/Dashboard/Publisher';
import Title from './components/Dashboard/Title';

Amplify.configure(awsExports);

var PUB_TOPIC = 'test/pub';
var SUB_TOPIC = 'test/sub';

// Apply plugin with configuration
Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: 'us-east-2',
    aws_pubsub_endpoint:
      'wss://a2medytrnkkh4c-ats.iot.us-east-2.amazonaws.com/mqtt'
  })
);

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
      </Grid>
    </div>
  );
}

export default withAuthenticator(App);
