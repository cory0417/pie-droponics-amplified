import { Amplify } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './components/Dashboard/Title';
import CustomizedTabs from "./components/Dashboard/Tabs";
import { MQTTTab, SensorTab } from './components/Dashboard/TabContent';
import {subscribe} from './components/Dashboard/Subscriber';

var SUB_TOPIC = "sensor/+";

Amplify.configure(awsExports);
Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: 'us-east-2',
    aws_pubsub_endpoint:
      'wss://a2medytrnkkh4c-ats.iot.us-east-2.amazonaws.com/mqtt'
  })
);

function App({ signOut, user }) {
  const [activeTab, setActiveTab] = useState(0);
  const [subMsgs, setSubMsgs] = useState([]);

  // Subscription handling logic
  const handleSubMsg = (payload) => {
    console.log("Message received", payload);
    let topic = payload.value[Object.getOwnPropertySymbols(payload.value)[0]];
    let msg = payload.value.value;
    setSubMsgs((prevSubMsgs) => [...prevSubMsgs, { topic: topic, msg: msg }]);
  };

  useEffect(() => {
    const unsubscribe = subscribe(handleSubMsg, SUB_TOPIC);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App" >
      <Title user={user} signOut={signOut}/>
      <CustomizedTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 && (
  <MQTTTab subMsgs={subMsgs} setSubMsgs={setSubMsgs}/>
)}
      {activeTab === 1 && (
        <SensorTab subMsgs={subMsgs}/>
      )}
    </div>
  );
}

export default withAuthenticator(App);
