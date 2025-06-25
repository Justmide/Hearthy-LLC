// contexts/FormContext.jsx
import React, { createContext, useContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const submitContactForm = async (formData) => {
      const baseUrl = import.meta.env.VITE_FORMSPREE;
      try {
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          data.append(key, value);
        });

        const response = await fetch(baseUrl, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });

        if (!response.ok) 
            throw new Error("Form submission failed");

        return { 
            success: true 
        };
      } catch (error) {
        console.error("Form submission error:", error);
        return { 
            success: false, 
            error
         };
      }
    };

    return (
      <FormContext.Provider value={{ submitContactForm }}>
        {children}
      </FormContext.Provider>
    );
};

export const useFormHandler = () => useContext(FormContext);
