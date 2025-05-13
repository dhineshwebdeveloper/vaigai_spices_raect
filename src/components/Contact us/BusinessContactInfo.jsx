import { MapPin, Mail, PhoneCall, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const BusinessContactInfo = () => {
  const contactItems = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Company Address",
      content: (
        <>
          Vaigai Spices Pvt Ltd,<br />
          123 Harvest Lane, Madurai, Tamil Nadu - 625001,<br />
          India
        </>
      ),
      link: "https://maps.google.com?q=Vaigai+Spices+Madurai",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "support@vaigaispices.com",
      link: "mailto:support@vaigaispices.com",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: <PhoneCall className="w-6 h-6" />,
      title: "Call / WhatsApp",
      content: "+91 98765 43210",
      link: "tel:+919876543210",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: (
        <>
          Monday – Saturday: 9:00 AM – 6:00 PM<br />
          Sunday: Closed
        </>
      ),
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-green-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Decorative header */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 p-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-3">
              <span className="inline-block animate-bounce">📌</span>
              Our Contact Details
              <span className="inline-block animate-bounce delay-100">📌</span>
            </h2>
          </div>

          {/* Contact items grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-green-100"
          >
            {contactItems.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`p-8 hover:${item.bgColor} transition-colors duration-300 group`}
              >
                <div className="flex items-start gap-5">
                  <div className={`p-3 rounded-full ${item.bgColor} ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-sm text-gray-600 hover:text-green-700 transition-colors block"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-600">{item.content}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Google Maps embed */}
          <div className="p-6 border-t border-green-100">
            <h4 className="font-semibold text-lg text-gray-800 mb-4 text-center">Find Us on Map</h4>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31432.38767686447!2d78.119324!3d9.925789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnMzIuOCJOIDc4wrAwNyczOS42IkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BusinessContactInfo;