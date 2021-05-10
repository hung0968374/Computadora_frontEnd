import React from "react";
import ShowModal from "./ShowModal";
import "./cssFolderOfSharedComponent/onlyYesModal.css";
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
