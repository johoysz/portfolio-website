import { useState, useRef } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [submitStatus, setSubmitStatus] = useState(null);
  const [statusType, setStatusType] = useState(null); // 'success' or 'error'

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("Please fill in all fields.");
      setStatusType("error");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("Please enter a valid email address.");
      setStatusType("error");
      return; 
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Send email using EmailJS
    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current,
      USER_ID
    )
      .then((result) => {
        console.log("Email successfully sent!", result.text);
        setSubmitStatus("Message sent successfully! I'll get back to you soon.");
        setStatusType("success");
        
        // Clear form data after successful submission
        setFormData({ name: "", email: "", message: "" });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setSubmitStatus("Failed to send message. Please try again later.");
        setStatusType("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact">
      <div className="min-h-screen bg-gray-800 text-white flex flex-col justify-between">
        {/* Contact header */}
        <div className="flex-grow flex flex-col items-center justify-center px-4 mt-20">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-4xl font-bold mb-2">Contact</h1>
            <div className="w-6 border-t-2 border-gray-200 mb-4"></div>
            <p className="text-sm text-gray-400">
              I'm currently available for freelance work
            </p>
          </div>

          {/* Send me a message button */}
          <div className="mb-8">
            <button className="px-6 py-2 hover:bg-gray-800 transition">
              Send Me A Message
            </button>
          </div>

          {/* Contact form */}
          <div className="w-full max-w-lg">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <label className="block text-sm mb-1">Your name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-gray-300"
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-sm mb-1">Your email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-gray-300"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm mb-1">Your message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your needs"
                  className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-gray-300"
                  rows={3}
                />
              </div>

              <div className="flex justify-center mt-8 flex-col items-center">
                <button
                  type="submit"
                  className={`bg-white text-gray-900 rounded-full px-6 py-2 flex items-center gap-2 hover:bg-gray-200 transition ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>

                {submitStatus && (
                  <div
                    className={`mt-4 text-sm flex items-center gap-2 ${
                      statusType === "success" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {statusType === "success" ? (
                      <CheckCircle size={16} />
                    ) : (
                      <AlertCircle size={16} />
                    )}
                    {submitStatus}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-900 mt-16 py-4 w-full flex flex justify-center items-center text-xs text-gray-500">
          <div>© 2025 Joy Lyka Buangjug. All rights reserved.</div>
        </div>
      </div>
    </section>
  );
}