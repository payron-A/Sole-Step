import {useRef, createContext, useContext } from "react";
const ToastContext = createContext();
export function ToastProvider(){
    const toastRef = useRef();
    function showToast(msg){
        toastRef.current.textContent = msg;
        toastRef.current.classList.add("show");
        setTimeout(() => {
        toastRef.current.classList.remove("show");
        }, 2000);
  }
    return (
    <ToastContext.Provider value={{showToast,useToast}}>
        <div className="toast" ref={toastRef}></div>
    </ToastContext.Provider>)
}
export function useToast(){
    return useContext(ToastContext)
}