import React, { Component } from "react";

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
export default class SendSMS extends Component {
  newSms = () => {
    let accountSid = "ACe6204e18a673cdc4312d1341885e05d1";
    let authToken = "ab2443fbf8acd0c8c44fddf291084f8f";
    let client = require("twilio")(accountSid, authToken);

    client.messages
      .create({
        body:
          "This is a reminder from Doctor Mantis Tobagan to complete your wellness survey.",
        from: "+16144121801",
        to: "+16142149306"
      })
      .then(message => console.log(message.sid));
  };
}
