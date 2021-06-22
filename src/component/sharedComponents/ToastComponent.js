import React, { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastInfoMsg = ({ resetHandleVal }) => {
  useEffect(() => {
    const notify = () =>
      toast.info("Đã thêm item này vào giỏ hàng!", {
        onClose: () => resetHandleVal(false),
      });
    notify();
  });
  return (
    <div>
      <ToastContainer autoClose={false} />
    </div>
  );
};
