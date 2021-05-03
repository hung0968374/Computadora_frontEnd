import React from "react";
import ShowModal from "../sharedComponents/ShowModal";
import "./modalWrapper.css";
export default function ModalSignUpWrapper({ msg, closeModal }) {
  return (
    <>
      {msg.length > 0 ? (
        <div className={"modal_bg"}>
          <ShowModal msg={msg} closeModal={closeModal} />
        </div>
      ) : null}
    </>
  );
}
// + (testData.length > 0 ? "bg_active" : null)
