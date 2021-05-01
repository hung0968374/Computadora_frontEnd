import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const ToastBaseMessage = ({ msg }) => {
  const notify = () =>
    toast(msg, {
      autoClose: 3000,
    });
  useEffect(() => {
    notify();
  }, []);
  return (
    <div>
      <ToastContainer />
    </div>
  );
};
export const ToastSuccessMessage = ({ msg }) => {
  const notify = () =>
    toast.success(msg, {
      autoClose: 3000,
    });
  useEffect(() => {
    notify();
  }, []);
  return (
    <div>
      <ToastContainer />
    </div>
  );
};
export const ToastInfoMessage = ({ msg }) => {
  const notify = () =>
    toast.info(msg, {
      autoClose: 3000,
    });
  useEffect(() => {
    notify();
  }, []);
  return (
    <div>
      <ToastContainer />
    </div>
  );
};
export const ToastInfoMessageInCenter = ({ msg }) => {
  const notify = () =>
    toast.info(msg, {
      autoClose: 2000,
      position: "top-center",
    });
  useEffect(() => {
    notify();
  }, []);
  return (
    <div>
      <ToastContainer />
    </div>
  );
};
export const ToastWarnMessage = ({ msg }) => {
  const notify = () =>
    toast.warn(msg, {
      autoClose: 3000,
    });
  useEffect(() => {
    notify();
  }, []);
  return (
    <div>
      <ToastContainer />
    </div>
  );
};
export const ToastErrorMessage = ({ msg, setStt }) => {
  const notify = () =>
    toast.error(msg, {
      autoClose: 6000,
    });
  useEffect(() => {
    notify();
  }, []);
  return (
    <div>
      <ToastContainer />
    </div>
  );
};
