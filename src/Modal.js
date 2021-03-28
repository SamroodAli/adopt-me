import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const elRef = useRef(null); //elRef is a container for state that survives past render cycles
  if (!elRef.current) {
    elRef.current = document.createElement("div"); //initialize if hasnt been //wont create new div every rerender
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current); //div as sometimes children can be a list of elements, it needs to be a single parent
};

export default Modal;
