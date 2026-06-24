import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import SectionTitle from "../ui/SectionTitle";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Contact Me"
            subtitle="Feel free to reach out for internships, freelance work, collaborations, or full-time opportunities."
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">

          {/* Contact Info */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="bg-slate-800 p-6 rounded-xl flex items-center gap-4 hover:border-pink-500 border border-slate-700 transition-all duration-300">

              <Mail className="text-pink-500" size={28} />

              <div>
                <h3 className="text-white font-semibold">
                  Email
                </h3>

                <p className="text-gray-400">
                  itsmepreethi2005@gmail.com
                </p>
              </div>

            </div>

            <div className="bg-slate-800 p-6 rounded-xl flex items-center gap-4 hover:border-pink-500 border border-slate-700 transition-all duration-300">

              <Phone className="text-pink-500" size={28} />

              <div>
                <h3 className="text-white font-semibold">
                  Phone
                </h3>

                <p className="text-gray-400">
                  +91 94882 61226
                </p>
              </div>

            </div>

            <div className="bg-slate-800 p-6 rounded-xl flex items-center gap-4 hover:border-pink-500 border border-slate-700 transition-all duration-300">

              <MapPin className="text-pink-500" size={28} />

              <div>
                <h3 className="text-white font-semibold">
                  Location
                </h3>

                <p className="text-gray-400">
                  Tamil Nadu, India
                </p>
              </div>

            </div>

          </motion.div>

          

        </div>

      </div>
    </section>
  );
}

export default Contact;