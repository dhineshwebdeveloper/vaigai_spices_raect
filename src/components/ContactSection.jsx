import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheckCircle, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

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
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
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
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
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



  // Animation variants
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
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4 md:p-8">
      <motion.div 
        className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:flex">
          {/* Left side - Decorative */}
          <div className="hidden md:block md:w-1/3 bg-gradient-to-b from-green-600 to-green-800 p-8 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="mb-6">We'd love to hear from you! Fill out the form and our team will get back to you soon.</p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center">
                  <div className="bg-green-500 bg-opacity-30 p-2 rounded-full mr-3">
                    <FiMail className="text-white" />
                  </div>
                  <span>contact@vaigaispices.com</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-500 bg-opacity-30 p-2 rounded-full mr-3">
                    <FiMessageSquare className="text-white" />
                  </div>
                  <span>+91 86109 89876</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right side - Form */}
          <div className="w-full md:w-2/3 p-8 md:p-10">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="mb-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-green-800">
                  "Spice up your life with every contact"
                </h2>
                <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full" />
              </motion.div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-10"
                >
                  <FiCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.form 
                  variants={containerVariants}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiUser className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`pl-10 p-4 border rounded-lg w-full focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiMail className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`pl-10 p-4 border rounded-lg w-full focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject (Optional)"
                      value={formData.subject}
                      onChange={handleChange}
                      className="p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-200"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <div className="relative">
                      <textarea
                        rows="5"
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`p-4 border rounded-lg w-full focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-green-800 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-900 transition-all shadow-lg hover:shadow-xl ${isLoading ? 'opacity-80' : ''}`}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.div>
                </motion.form>
              )}
              
              <motion.div 
                variants={itemVariants}
                className="mt-10 text-center text-sm text-gray-500"
              >
                Powered by <span className="font-semibold text-green-700">Vaigai Spices</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;