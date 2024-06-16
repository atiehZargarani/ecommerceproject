import React, { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
function Toast({ type = 'info', message = '' }) {
    useEffect(() => {
        if (type !== 'info') {
            toast[type](message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    })
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export default Toast