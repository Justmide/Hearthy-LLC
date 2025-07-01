import React, { createContext, useContext } from "react";
import emailjs from "emailjs-com";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const submitContactForm = async (formData) => {
    try {
      
      const templateParams = {
        name: name, 
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(), 
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      return { success: true, result };
    } catch (error) {
      console.error("EmailJS error:", error);
      return { success: false };
    }
  };

  return (
    <FormContext.Provider value={{ submitContactForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormHandler = () => useContext(FormContext);
