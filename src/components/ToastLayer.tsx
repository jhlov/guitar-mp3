import { Toast, ToastContainer } from "react-bootstrap";
import { useCommon } from "store/useCommon";
import "./ToastLayer.scss";

export interface ToastData {
  show?: boolean;
  text: string;
  delay?: number;
}

export const ToastLayer = () => {
  const { toastList, closeToast } = useCommon();

  const onClose = (index: number) => {
    closeToast(index);
  };

  return (
    <div>
      <ToastContainer position="bottom-end" className="toast-layer p-3">
        {toastList.map((toast, i) => (
          <Toast
            show={toast.show ?? true}
            key={i}
            autohide
            delay={toast.delay ?? 1000}
            onClose={() => onClose(i)}
          >
            <Toast.Body>{toast.text}</Toast.Body>
          </Toast>
        ))}
      </ToastContainer>
    </div>
  );
};
