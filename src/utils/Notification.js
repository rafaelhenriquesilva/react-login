import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function Notification({ type }) {
  const notify = () => {

    switch (type) {
        case "success":
            toast.success("Success Notification !", {
                position: toast.POSITION.TOP_CENTER
            });
            break;
        case "error":
            toast.error("Error Notification !", {
                position: toast.POSITION.TOP_LEFT
            });
            break;
        case "warn":
            toast.warn("Warning Notification !", {
                position: toast.POSITION.BOTTOM_LEFT
            });
            break;
        case "info":
            toast.info("Info Notification !", {
                position: toast.POSITION.BOTTOM_CENTER
            });
            break;
        case "custom":
            toast("Custom Style Notification with css class!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: 'foo-bar'
            });
            break;
        default:
            toast("Default Notification !");
    }

  };

   return (
      <>
        <button onClick={notify}>Notify</button>;
        <ToastContainer />
      </>
    );
}