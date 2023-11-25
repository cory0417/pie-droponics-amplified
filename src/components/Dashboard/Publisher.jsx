import { PubSub } from "aws-amplify";
import { useState } from "react";

import {
  Button,
  Card,
  Message,
  Heading,
  SelectField,
} from "@aws-amplify/ui-react";
import dayjs from "dayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function Publisher({ topic }) {
  const [sentMsgs, setSentMsgs] = useState([]);
  const [target, setTarget] = useState("water_pump");
  const [startTime, setStartTime] = useState(dayjs("01-10 am", "hh-mm a"));
  const [onInterval, setOnInterval] = useState(dayjs("0-0-0", "H-m-s"));
  const [offInterval, setOffInterval] = useState(dayjs("0-0-0", "H-m-s"));

  const handleSendMsg = async () => {
    const msg = makeMsg();
    console.log(msg);
    const newSentMsgs = [...sentMsgs, msg];
    await PubSub.publish(topic, { msg });
    setSentMsgs(newSentMsgs); // Update the state with the new message
  };

  const makeMsg = () => {
    let msg = {
      target: target,
      startTime: startTime.format("HH:mm"),
      onInterval: onInterval.format("HH:mm:ss"),
      offInterval: offInterval.format("HH:mm:ss"),
    };
    return JSON.stringify(msg, null, 2);
  };

  return (
    <Card columnStart="1" columnEnd="3" rowStart="2" rowEnd="4">
      <Card columnStart="1" columnEnd="3" rowStart="2" rowEnd="2.5">
        <Heading level="2" fontWeight="regular" fontSize="2rem">
          Publisher
        </Heading>
        <p>
          The box below can be used to publish messages back to your devices by
          publishing to the topic "<b>{topic}</b>"
        </p>
        <SelectField
          label="Select target actuator:"
          value={target}
          onChange={(newValue) => setTarget(newValue.target.value)}
        >
          <option value="water_pump">Water Pump</option>
          <option value="nutrient_pump">Nutrient Pump</option>
          <option value="led">Lights</option>
        </SelectField>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimeField
            label="Set start time of actuation"
            value={startTime}
            onChange={(newValue) => setStartTime(newValue)}
            format="hh:mm a"
            clearable={true}
          />
          <TimeField
            label="Set on-interval"
            value={onInterval}
            onChange={(newValue) => setOnInterval(newValue)}
            format="H:m:s"
            clearable={true}
          />
          <TimeField
            label="Set off-interval"
            value={offInterval}
            onChange={(newValue) => setOffInterval(newValue)}
            format="H:m:s"
            clearable={true}
          />
        </LocalizationProvider>
        <Button className="btn btn-primary" onClick={() => handleSendMsg()}>
          Publish Message
        </Button>
      </Card>
      <Card columnStart="1" columnEnd="3" rowStart="2.5" rowEnd="4">
        <h3>Sent Messages:</h3>
        <p>Your sent messages will appear here</p>
        <Message id="sentMsg" variation="filled" heading="Sent Message">
          {sentMsgs.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </Message>
      </Card>
    </Card>
  );
}

export default Publisher;
