import { Amplify, PubSub } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub';
import { useEffect, useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Grid, Card, Message, TextAreaField, Flex, ScrollView, Collection, Heading, Text } from '@aws-amplify/ui-react';

import awsExports from './aws-exports';

Amplify.configure(awsExports);

var PUB_TOPIC = 'test/pub';
var SUB_TOPIC = 'test/sub';
let seenMessages = new Set();

// Apply plugin with configuration
Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: 'us-east-2',
    aws_pubsub_endpoint:
      'wss://a2medytrnkkh4c-ats.iot.us-east-2.amazonaws.com/mqtt'
  })
);

function App({ signOut, user }) {
  const [pubMsg, setPubMsg] = useState('');
  const [sentMsgs, setSentMsgs] = useState([]);
  const [subMsgs, setSubMsgs] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribe(handleSubMsg);

    // Cleanup function
    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array ensures that this effect runs only once during mount

  const handleSendMsg = async (msg) => {
    console.log(msg);
    await PubSub.publish(PUB_TOPIC, { msg });
    // Append to sent messages box
    setSentMsgs((prevSentMsgs) => [...prevSentMsgs, msg]); // Update the state with the new message
  };

  const handleSubMsg = (payload) => {
    console.log('Message received', payload);
    let messageId = payload.value.id; // Assuming each message has a unique 'id' field
  
    if (!seenMessages.has(messageId)) {
      seenMessages.add(messageId);
      let id = payload.value.id;
      let topic = payload.value[Object.getOwnPropertySymbols(payload.value)[0]];
      let msg = payload.value.msg;
      setSubMsgs((prevSubMsgs) => [...prevSubMsgs, { topic: topic, id: id, msg: msg}]);
    } else {
      console.log('Duplicate message received, ignoring', payload);
    }
  };

  return (
    <div className="App">
      <Grid
        columnGap="0.5rem"
        rowGap="0.5rem"
        templateColumns="1fr 1fr 1fr 1fr"
        templateRows="0.5fr 1fr 1fr"
      >
        <Card
          columnStart="1"
          columnEnd="-1"
          rowStart="1"
          rowEnd="2"
        >
          <Grid
            columnGap="0.5rem"
            rowGap="0.5rem"
            templateColumns="3fr 1fr"
            templateRows="1fr"
          >
            <Card>
              <Heading level='1' fontWeight='bold'>Welcome to Eduponics 🌱</Heading>
            </Card>
            <Card>
              <Flex
                direction="column"
                justifyContent="left"
                alignItems="end"
                alignContent="flex-start"
                wrap="nowrap"
                gap="0rem"
              >
                <h3>Hello {user.username}!</h3>
                <Button onClick={signOut}>Sign out</Button>
              </Flex>
            </Card>
        </Grid>
        </Card>
        <Card
          columnStart="1"
          columnEnd="3"
          rowStart="2"
          rowEnd="2.5"
        >
          <h2>Publisher</h2>
          <p>The box below can be used to publish messages back to your devices by publishing to the topic <b>{PUB_TOPIC}</b></p>
          <TextAreaField
            descriptiveText="Enter a message to publish to your devices"
            id="sentMsg"
            label="Publish Message"
            name="Message"
            placeholder="id: *, msg: *"
            onChange={(e) => setPubMsg(e.target.value)}
            rows={3}/>
          <Button className="btn btn-primary" onClick={() => handleSendMsg(pubMsg)}>Publish Message</Button>
        </Card>
        <Card
          columnStart="1"
          columnEnd="3"
          rowStart="2.5"
          rowEnd="4"
        >
          <h3>Sent Messages:</h3>
          <p>Your sent messages will appear here</p>
          <Message
            id='sentMsg'
            variation="filled"
            heading="Sent Message">
              {sentMsgs.map((msg, index) => (
              <div key={index}>{msg}</div>
            ))}
          </Message>
        </Card>
        <Card
          columnStart="3"
          columnEnd="5"
        >
          <h2>Subscriber</h2>
          <p>New messages from your device(s) that publish to the topic <b>{SUB_TOPIC}</b> will appear in the box below</p>
          <div
            id='incomingMsg'
            style={{
              maxHeight: '200px',
              overflowY: 'scroll',
            }}
          >
            <ScrollView width="100%" height="300px" maxWidth="580px">
              <Collection
                type="list"
                items={subMsgs}
                direction="row"
                justifyContent="space-between"
                wrap="wrap"
              >
                {(item, index) => (
                  <Card
                    key={index}
                    padding="1rem"
                    maxWidth="180px"
                  >
                    <Heading level={4}>{item.topic}</Heading>
                    <Text>{item.id}</Text>
                    <Text>{item.msg}</Text>
                  </Card>
                )}
              </Collection>
            </ScrollView>
          </div>
        </Card>
      </Grid>
    </div>
  );
}

function subscribe(callback) {
  const subscription = PubSub.subscribe(SUB_TOPIC).subscribe({
    next: data => callback(data),
    error: error => console.error(error),
    close: () => console.log('Subscription closed'),
  });

  // Unsubscribe when the component unmounts to avoid memory leaks
  return () => {
    subscription.unsubscribe();
  };
}

export default withAuthenticator(App);
