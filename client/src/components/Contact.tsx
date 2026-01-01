import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918401100351"; // change later if needed
const WHATSAPP_MESSAGE =
  "Hi, I found Code-O-Logic and would like to discuss automation or web systems for my business.";

export  function Contact() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <section id="contact" className="py-24 relative">
      {/* subtle background separation */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="bg-card border border-white/10 rounded-2xl p-10 md:p-14 text-center relative overflow-hidden"
        >
          {/* Soft glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary
/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="text-sm font-medium text-primary block mb-3">
              Let’s talk
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5">
              Want to simplify your business operations?
            </h2>

            <p className="max-w-2xl mx-auto text-gray-400 mb-10 leading-relaxed">
              If you’re dealing with manual work, scattered tools, or missing
              visibility, let’s talk. We’ll understand your process and suggest
              practical automation or web solutions — no pressure, no jargon.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-primary
 text-black font-semibold text-sm uppercase tracking-wide hover:bg-cyan-400 transition-colors shadow-[0_0_25px_rgba(6,182,212,0.35)]"
            >
              <MessageCircle className="w-5 h-5" />
              Talk to us on WhatsApp
            </a>

            <p className="text-xs text-gray-500 mt-6">
              We usually reply within a few hours during business time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
