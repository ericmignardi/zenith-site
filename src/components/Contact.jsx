import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center section-padding">
      {/* Description */}
      <div className="h-full flex flex-col justify-between items-start gap-4 py-10 lg:py-0 text-center lg:text-left">
        <div className="flex flex-col justify-center items-center lg:items-start gap-4">
          <p className="subtitle-dark">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeIn" }}
              viewport={{ once: true }}
              className="text-text/80"
            >
              &bull; Contact
            </motion.span>
          </p>
          <motion.h2
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            viewport={{ once: true }}
            className="title-dark"
          >
            Get in <span className="italic">touch</span>
          </motion.h2>
          <motion.p
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            viewport={{ once: true }}
            className="text-xs lg:text-sm text-text/60"
          >
            Receive expert guidance to maximize your next purchase.
          </motion.p>
        </div>
        {/* Address */}
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-2 text-left"
        >
          <div className="flex gap-4 items-center">
            <div className="bg-primary rounded-full p-4 text-background">
              <FiMapPin />
            </div>
            <p>123 Example Road, Hamilton, ON L0K2J7</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-primary rounded-full p-4 text-background">
              <FiMail />
            </div>
            <p>email@example.com</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-primary rounded-full p-4 text-background">
              <FiPhone />
            </div>
            <p>(555) 555-5555</p>
          </div>
        </motion.div>
      </div>
      {/* Form */}
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        viewport={{ once: true }}
        className="bg-primary text-background rounded-xl"
      >
        <form className="flex flex-col justify-center p-4 gap-4">
          <label htmlFor="name">Your Name</label>
          <input
            className="py-2 px-4 border border-gray-200 rounded-xl text-xs lg:text-sm"
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            className="py-2 px-4 border border-gray-200 rounded-xl text-xs lg:text-sm"
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            required
          />
          <label htmlFor="phone">Your Phone Number</label>
          <input
            className="py-2 px-4 border border-gray-200 rounded-xl text-xs lg:text-sm"
            type="text"
            name="phone"
            id="phone"
            placeholder="Your phone number"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            className="h-30 py-2 px-4 border border-gray-200 rounded-xl resize-none text-xs lg:text-sm"
            name="message"
            id="message"
            placeholder="Type something here"
            required
          ></textarea>
          <button
            type="submit"
            className="button-light self-center lg:self-start"
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
