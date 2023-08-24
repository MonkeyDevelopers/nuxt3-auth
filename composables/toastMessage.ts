import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import { Status } from '~/interfaces/toastStatus.enum';

export function toastMessage(message: string, type?: Status, time: number = 5000) {
  switch (type) {
    case Status.ERROR:
      return toast(message, {
        autoClose: time,
        position: toast.POSITION.TOP_RIGHT,
        transition: toast.TRANSITIONS.FLIP,
        type: toast.TYPE.ERROR,
      });
    case Status.WARNING:
      return toast(message, {
        autoClose: time,
        position: toast.POSITION.TOP_RIGHT,
        transition: toast.TRANSITIONS.FLIP,
        type: toast.TYPE.WARNING,
      });
    case Status.INFO:
      return toast(message, {
        autoClose: time,
        position: toast.POSITION.TOP_RIGHT,
        transition: toast.TRANSITIONS.FLIP,
        type: toast.TYPE.INFO,
      });
    case Status.SUCCESS:
    default:
      return toast(message, {
        autoClose: time,
        position: toast.POSITION.TOP_RIGHT,
        transition: toast.TRANSITIONS.FLIP,
        type: toast.TYPE.SUCCESS,
      });
  }
}