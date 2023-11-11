import { PubSub } from 'aws-amplify';
import { useState } from 'react';

import { Button, Card, Message, TextAreaField, Heading } from '@aws-amplify/ui-react';


function Publisher ({topic}) {
  const [pubMsg, setPubMsg] = useState('');
  const [sentMsgs, setSentMsgs] = useState([]);

  const handleSendMsg = async (msg) => {
    console.log(msg);
    await PubSub.publish(topic, { msg });
    // Append to sent messages box
    setSentMsgs((prevSentMsgs) => [...prevSentMsgs, msg]); // Update the state with the new message
  };

  return (
    <Card
        columnStart="1"
        columnEnd="3"
        rowStart="2"
        rowEnd="4"
    >
        <Card
          columnStart="1"
          columnEnd="3"
          rowStart="2"
          rowEnd="2.5"
        >
            <Heading level='2' fontWeight='regular' fontSize="2rem">Publisher</Heading>
            <p>The box below can be used to publish messages back to your devices by publishing to the topic <b>{topic}</b></p>
            <TextAreaField
                descriptiveText="Enter a message to publish to your devices"
                id="sentMsg"
                label="Publish Message"
                name="Message"
                placeholder="id: *, msg: *"
                onChange={(e) => setPubMsg(e.target.value)}
                rows={3}
            />
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
    </Card>
  )
}

export default Publisher;