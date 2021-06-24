import React, { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastInfoMsg = ({
  resetHandleVal,
  msg = "Đã thêm item này vào giỏ hàng!",
}) => {
  useEffect(() => {
    const notify = () =>
      toast.info(msg, {
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
export const MemoizedToast = React.memo(ToastInfoMsg);
