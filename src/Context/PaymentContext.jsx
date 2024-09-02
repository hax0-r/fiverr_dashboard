// PaymentContext.js
import React, { createContext, useContext, useState } from 'react';

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
    const [selectedMethod, setSelectedMethod] = useState('Transfer');
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleMethodSelect = (method) => {
        setSelectedMethod(method);
    };

    const handleFileChange = (file) => {
        setUploadedFile(file);
    };

    const handleFileDelete = () => {
        setUploadedFile(null);
    };

    return (
        <PaymentContext.Provider value={{
            selectedMethod,
            uploadedFile,
            handleMethodSelect,
            handleFileChange,
            handleFileDelete
        }}>
            {children}
        </PaymentContext.Provider>
    );
};

export const usePaymentContext = () => useContext(PaymentContext);
