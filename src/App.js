import { Amplify, PubSub } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub';
import { useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

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

async function ProcessMessage(payload) {
  console.log('Message received', payload);
  let messageId = payload.value.id; // Assuming each message has a unique 'id' field

  if (seenMessages.has(messageId)) {
    console.log('Duplicate message received, ignoring', payload);
    return;
  }

  seenMessages.add(messageId);
  

  let topic=payload.value[Object.getOwnPropertySymbols(payload.value)[0]];
  let time=payload.value.time;
  let sensor_a0=payload.value.sensor_val;
  let scrollBox = document.getElementById('incomingMsg');
  scrollBox.innerHTML += "<b>NEW MESSAGE: </b><br></br> Topic: " + topic + "<br></br> Time: " + time + "<br></br> Sensor_a0: " + sensor_a0 + "<br></br>";
  scrollBox.scrollTop = scrollBox.scrollHeight;
}

async function SendMessage() {
  let payload=document.getElementById('msg').value;
  document.getElementById('msg').value='';
  console.log(payload);
  await PubSub.publish(PUB_TOPIC, { msg: payload });
  document.getElementById('returnMsg').innerHTML = '<h3 style="color: green">Message sent!</h3>';
  let sentMsgBox = document.getElementById('sentMsg');
  sentMsgBox.innerHTML += payload + "<br></br>";
  sentMsgBox.scrollTop = sentMsgBox.scrollHeight;
}

function App({ signOut, user }) {
  useEffect(() => {
    const unsubscribe = subscribe();

    // Cleanup function
    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array ensures that this effect runs only once during mount
  return (
    <div className="App">
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <div className="row">
        <div id="publisher" className="col ml-5 mt-5 mb-5 mr-3" style={{"borderStyle": "solid", "borderWidth": "2px"}}>
          <h2>Publisher</h2>
          <p>The box below can be used to publish messages back to your devices by publishing to the topic <b>{PUB_TOPIC}</b></p>
          <h5>Message: </h5>
          <input type="text" className="form-control" id="msg" name="msg" placeholder="Enter Message Here"></input>
          <br></br>
          <button className="btn btn-primary" onClick={SendMessage}>Send Message</button>
          <div id='returnMsg'></div>
          <br></br>
          <h3>Sent Messages:</h3>
          <p>Your sent messages will appear here</p>
          <div id='sentMsg' className="overflow-auto mb-5 border" syle={{"maxHeight": "220px"}}></div>
        </div>
        <br></br><br></br>
        <div id="subscriber" className="col mt-5 mr-5 mb-5" style={{"borderStyle": "solid", "borderWidth": "2px"}}>
          <h2>Subscriber</h2>
          <p>New messages from your device(s) that publish to the topic <b>{SUB_TOPIC}</b> will appear in the box below</p>
          <div id="incomingMsg" className="overflow-auto border" style={{"maxHeight": "200px"}}></div>
        </div>
      </div>
    </div>
  );
}

function subscribe() {
  const subscription = PubSub.subscribe(SUB_TOPIC).subscribe({
    next: data => ProcessMessage(data),
    error: error => console.error(error),
    close: () => console.log('Subscription closed'),
  });

  // Unsubscribe when the component unmounts to avoid memory leaks
  return () => {
    subscription.unsubscribe();
  };
}

export default withAuthenticator(App);
