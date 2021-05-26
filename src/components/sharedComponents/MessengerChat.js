import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
require("dotenv").config();

export default function MessengerChat() {
  return (
    <>
      <MessengerCustomerChat
        pageId="101594652091801"
        appId="1790240181155268"
      />
    </>
  );
}
