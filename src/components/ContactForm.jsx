import { useState, useEffect } from "react";
import { Send } from "lucide-react";
// Note: You would need to install EmailJS with: npm install @emailjs/browser
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Validate form (simple validation)
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate a successful form submission
    setSubmitStatus("Message sent successfully!");

    // Clear form data after submission
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus(null);
    }, 3000);
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
                    onClick={handleSubmit}
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
                    className={`mt-4 text-sm ${
                        submitStatus.includes("successfully")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                    >
                    {submitStatus}
                    </div>
                )}
                </div>
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
