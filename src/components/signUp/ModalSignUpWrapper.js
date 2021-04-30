import React from "react";
import ShowModal from "../sharedComponents/ShowModal";
import "./modalWrapper.css";
export default function ModalSignUpWrapper({ testData, closeModal }) {
  console.log("test", testData);
  return (
    <>
      {testData.length > 0 ? (
        <div className={"modal_bg"}>
          <ShowModal msg={testData} closeModal={closeModal} />
        </div>
      ) : null}
    </>
  );
}
// + (testData.length > 0 ? "bg_active" : null)
