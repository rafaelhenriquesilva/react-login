/**
 *  TYPE AND POSITION TOAST
 *  
 *      case "success":
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
 */




import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom';

let containerId = null; 

const initToastContainer = () => {
  if (containerId) {
    return containerId; 
  }

  const container = document.createElement('div');
  document.body.appendChild(container);

  const containerComponent = <ToastContainer containerId={container} />;
  ReactDOM.render(containerComponent, container);

  containerId = container; 

  return container;
};

const notify = (type, message) => {
  const container = initToastContainer(); 
  toast[type](message, {
    containerId: container,
    position: toast.POSITION.TOP_CENTER
  });
};

export default notify;