import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiSend, FiAlertCircle } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    queryType: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.queryType) newErrors.queryType = 'Please select a query type';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        queryType: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputVariants = {
    focus: {
      boxShadow: "0 0 0 2px rgba(74, 222, 128, 0.5)",
      borderColor: "#10b981"
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    tap: { scale: 0.98 },
    hover: { scale: 1.02 }
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-green-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-green-100">
          {/* Decorative header */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 p-6 text-center">
            <h3 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <motion.span 
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                ✉️
              </motion.span>
              Send Us a Message
              <motion.span 
                animate={{ rotate: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
              >
                📨
              </motion.span>
            </h3>
          </div>

          <div className="p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="grid gap-6">
              {/* Full Name */}
              <div className="relative">
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`peer w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 pt-6 pb-2 text-sm outline-none focus:ring-0`}
                  placeholder=" "
                  variants={inputVariants}
                  whileFocus="focus"
                />
                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600">
                  Full Name
                </label>
                <AnimatePresence>
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-1 text-xs text-red-500 flex items-center gap-1"
                    >
                      <FiAlertCircle className="inline" /> {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email */}
              <div className="relative">
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`peer w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 pt-6 pb-2 text-sm outline-none focus:ring-0`}
                  placeholder=" "
                  variants={inputVariants}
                  whileFocus="focus"
                />
                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600">
                  Email Address
                </label>
                <AnimatePresence>
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-1 text-xs text-red-500 flex items-center gap-1"
                    >
                      <FiAlertCircle className="inline" /> {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Phone Number */}
              <div className="relative">
                <motion.input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-300"
                  placeholder=" "
                  variants={inputVariants}
                  whileFocus="focus"
                />
                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600">
                  Phone Number (Optional)
                </label>
              </div>

              {/* Query Type */}
              <div className="relative">
                <motion.select
                  name="queryType"
                  value={formData.queryType}
                  onChange={handleChange}
                  required
                  className={`peer w-full border ${errors.queryType ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 pt-6 pb-2 text-sm outline-none focus:ring-0 bg-white`}
                  defaultValue=""
                  variants={inputVariants}
                  whileFocus="focus"
                >
                  <option disabled value="">Select Query Type</option>
                  <option value="General">General Inquiry</option>
                  <option value="Order">Order</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Wholesale">Wholesale Inquiry</option>
                </motion.select>
                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-focus:text-green-600">
                  Query Type
                </label>
                <AnimatePresence>
                  {errors.queryType && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-1 text-xs text-red-500 flex items-center gap-1"
                    >
                      <FiAlertCircle className="inline" /> {errors.queryType}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Subject */}
              <div className="relative">
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`peer w-full border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 pt-6 pb-2 text-sm outline-none focus:ring-0`}
                  placeholder=" "
                  variants={inputVariants}
                  whileFocus="focus"
                />
                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600">
                  Subject / Message Title
                </label>
                <AnimatePresence>
                  {errors.subject && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-1 text-xs text-red-500 flex items-center gap-1"
                    >
                      <FiAlertCircle className="inline" /> {errors.subject}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Message */}
              <div className="relative">
                <motion.textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`peer w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 pt-6 pb-2 text-sm outline-none focus:ring-0 resize-none`}
                  placeholder=" "
                  variants={inputVariants}
                  whileFocus="focus"
                ></motion.textarea>
                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600">
                  Your Message
                </label>
                <AnimatePresence>
                  {errors.message && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-1 text-xs text-red-500 flex items-center gap-1"
                    >
                      <FiAlertCircle className="inline" /> {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md relative overflow-hidden"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={isLoading}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="inline" /> Send Message
                    </>
                  )}
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.button>

              {/* Form Messages */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2"
                  >
                    <FiAlertCircle className="text-lg" />
                    <span>{error}</span>
                  </motion.div>
                )}

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-3 bg-green-50 text-green-600 rounded-lg flex items-center gap-2"
                  >
                    <FiCheckCircle className="text-lg" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;