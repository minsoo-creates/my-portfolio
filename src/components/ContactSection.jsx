import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
} from "lucide-react";
import { ClassName } from "@/lib/utils";
import { useState, useEffect } from "react";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { format } from "date-fns";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const timestamp = format(new Date(), "yyyy-MM-dd HH:mm:ss");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: timestamp,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });

      toast.success("Thank you! Your message has been sent.", {
        toastId: "contact-success",
        position: "bottom-right",
        autoClose: 3500,
        theme: isDarkMode ? "dark" : "light",
        transition: Slide,
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Oops, something went wrong. Please try again later.", {
        toastId: "contact-error",
        position: "bottom-right",
        autoClose: 3500,
        theme: isDarkMode ? "dark" : "light",
        transition: Slide,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toastClassName = `relative flex items-center p-4 rounded-xl shadow-lg ${
    isDarkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
  }`;

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:ku.minsoo0314@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ku.minsoo0314@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+17036290964"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    🇺🇸 +1 (703) 629-0964
                  </a>
                  <br />
                  <a
                    href="tel:+8201021162919"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    🇰🇷 +82 (010) 2116-2919
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    🇺🇸 College Park, MD, USA
                  </span>
                  <br />
                  <span className="text-muted-foreground">
                    🇰🇷 Seoul, South Korea
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://linkedin.com/in/minsooku"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/minsoo-creates"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://instagram.com/minsoo.ku"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs flex items-center justify-center">
            {!isSent ? (
              <form className="space-y-6 w-full" onSubmit={handleSubmit}>
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary placeholder:text-gray-400"
                    placeholder="Minsoo Ku"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary placeholder:text-gray-400"
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none placeholder:text-gray-400"
                    placeholder="Hello, I'd like to talk about..."
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={ClassName(
                    "button-design w-full flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Message Sent!
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        closeButton={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        transition={Slide}
        toastClassName={toastClassName}
        bodyClassName="text-sm font-medium"
      />
    </section>
  );
};
