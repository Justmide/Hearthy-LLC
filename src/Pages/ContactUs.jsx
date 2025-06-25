// ContactUs.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useFormHandler } from "../Context/FormContext";

const ContactUs = () => {
  const { submitContactForm } = useFormHandler();
  const [submitState, setSubmitState] = useState("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setSubmitState("submitting");
      const result = await submitContactForm({
        "first-name": data.firstName,
        "last-name": data.lastName,
        email: data.email,
        message: data.message,
      });

      if (result.success) {
        setSubmitState("submitted");
        reset();
      } else {
        alert("Failed to send message");
        setSubmitState("idle");
      }
    } catch (error) {
      alert("An error occurred");
      setSubmitState("idle");
    }
  };

  return (
    <section className="px-6 py-12 bg-[#f4f9f8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl text-gray-700 font-semibold">Special Education & Teacher Training</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
            Supporting Everyday Learning for All
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Have questions about special education, inclusive teaching, or our workshops? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0190654253286!2d-122.41941548468107!3d37.77492927975986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2f7df7a3%3A0xfec1d1d1b6dcb4b3!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1614846600023!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">First Name</label>
                <input
                  {...register("firstName", { required: "First name is required" })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="First Name"
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Last Name</label>
                <input
                  {...register("lastName", { required: "Last name is required" })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Last Name"
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/, message: "Invalid email address" },
                })}
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="name@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="How can we support you?"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-800 hover:font-bold transition disabled:opacity-60"
              disabled={submitState === "submitting" || submitState === "submitted"}
            >
              {submitState === "submitting"
                ? "Submitting..."
                : submitState === "submitted"
                  ? "Submitted ✅"
                  : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
