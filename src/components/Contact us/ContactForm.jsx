import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiSend, FiAlertCircle, FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';

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
    if (error) setError(null);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.queryType) newErrors.queryType = 'Please select a query type';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);

      try {
        const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
          setSubmitted(true);
          setFormData({ name: '', email: '', phone: '', queryType: '', subject: '', message: '' });
          setTimeout(() => setSubmitted(false), 3000);
        } else {
          alert('Failed to send message. Try again later.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
      } finally {
        setIsLoading(false);
      }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-xl overflow-hidden border border-green-100"
        >
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
              <motion.div variants={itemVariants} className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-400" />
                </div>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`peer w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg pl-10 pr-4 py-3 text-sm outline-none focus:ring-0`}
                  placeholder="Full Name"
                  variants={inputVariants}
                  whileFocus="focus"
                />
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
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants} className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-400" />
                </div>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`peer w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg pl-10 pr-4 py-3 text-sm outline-none focus:ring-0`}
                  placeholder="Email Address"
                  variants={inputVariants}
                  whileFocus="focus"
                />
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
              </motion.div>

              {/* Phone Number */}
              <motion.div variants={itemVariants} className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiPhone className="text-gray-400" />
                </div>
                <motion.input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="peer w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 text-sm outline-none focus:ring-0"
                  placeholder="Phone Number (Optional)"
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>

              {/* Query Type */}
              <motion.div variants={itemVariants} className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FiMessageSquare />
                </div>
                <motion.select
                  name="queryType"
                  value={formData.queryType}
                  onChange={handleChange}
                  className={`peer w-full border ${errors.queryType ? 'border-red-500' : 'border-gray-300'} rounded-lg pl-10 pr-4 py-3 text-sm outline-none focus:ring-0 bg-white`}
                  variants={inputVariants}
                  whileFocus="focus"
                >
                  <option value="" disabled>Select Query Type</option>
                  <option value="General">General Inquiry</option>
                  <option value="Order">Order</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Support">Support</option>
                  <option value="Other">Other</option>
                </motion.select>
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
              </motion.div>

              {/* Subject */}
              <motion.div variants={itemVariants} className="relative">
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`peer w-full border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg pl-4 pr-4 py-3 text-sm outline-none focus:ring-0`}
                  placeholder="Subject"
                  variants={inputVariants}
                  whileFocus="focus"
                />
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
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants} className="relative">
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`peer w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 text-sm resize-none outline-none focus:ring-0`}
                  placeholder="Your Message"
                  variants={inputVariants}
                  whileFocus="focus"
                />
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
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 shadow-md"
                disabled={isLoading}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                {isLoading ? 'Sending...' : (
                  <>
                    Send Message <FiSend />
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-green-100 text-green-800 rounded-md py-2 px-4 flex items-center gap-2"
                  >
                    <FiCheckCircle className="text-lg" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
