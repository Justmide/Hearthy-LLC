import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRef, useState } from 'react';
import { useFormHandler } from '../context/FormContext'; // Reusing your existing context

const consultationOptions = [
  { value: 'special_student', label: 'Special Education Student Support' },
  { value: 'teacher_training', label: 'Teacher Training Program' },
  { value: 'usa_teaching', label: 'Coming to USA for Teaching' }
];

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  consultationType: yup.string().required('Please select an option'),
  message: yup.string().required('Please enter your message')
});

const ConsultationForm = () => {
  const { submitContactForm } = useFormHandler(); // ✅ Reused
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      consultationType: '',
      message: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setSubmitStatus(null);

      const fakeFormData = {
        'first-name': values.name,
        'last-name': '', // You can extend this if needed
        email: values.email,
        message: `Consultation Type: ${
          consultationOptions.find(opt => opt.value === values.consultationType)?.label
        }\nPhone: ${values.phone}\n\n${values.message}`
      };

      const response = await submitContactForm(fakeFormData);

      if (response.success) {
        setSubmitStatus({ success: true, message: 'Thank you! We will contact you soon.' });
        formik.resetForm();
      } else {
        setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
      }

      setIsSubmitting(false);
    }
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" style={{ backgroundColor: '#1877F2' }}>
      <h2 className="text-2xl font-bold mb-4 text-white">Schedule a Consultation</h2>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="mt-1 text-sm text-yellow-300">{formik.errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="mt-1 text-sm text-yellow-300">{formik.errors.email}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="mt-1 text-sm text-yellow-300">{formik.errors.phone}</p>
          )}
        </div>

        {/* Consultation Type */}
        <div>
          <label htmlFor="consultationType" className="block text-sm font-medium text-white">
            I'm interested in:
          </label>
          <select
            id="consultationType"
            name="consultationType"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.consultationType}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
          >
            <option value="">Select an option</option>
            {consultationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {formik.touched.consultationType && formik.errors.consultationType && (
            <p className="mt-1 text-sm text-yellow-300">{formik.errors.consultationType}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <p className="mt-1 text-sm text-yellow-300">{formik.errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-[#1877F2] font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300"
          >
            {isSubmitting ? 'Sending...' : 'Submit Request'}
          </button>
        </div>

        {/* Submission Status */}
        {submitStatus && (
          <div className={`mt-4 p-3 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ConsultationForm;
