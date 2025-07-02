import React, { createContext, useContext } from "react";
import emailjs from "emailjs-com";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const submitContactForm = async (formData, templateType = 'contact') => {
    try {
      const fullName = `${formData["first-name"] || ''} ${formData["last-name"] || ''}`.trim();

      const templateParams = {
        name: fullName,
        email: formData.email,
        phone: formData.phone || 'N/A',
        consultationType: formData.consultationType || 'N/A',
        message: formData.message,
        time: new Date().toLocaleString(),
      };

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateId =
        templateType === 'consultation'
          ? import.meta.env.VITE_EMAILJS_CONSULTATION_TEMPLATE_ID
          : import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

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
