import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-24 md:py-32 bg-blue-600 dark:bg-blue-900 text-white px-4"
      id="hero"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-5">
        Sell Unused Software Licenses Effortlessly
      </h1>
      <p className="mb-8 text-lg md:text-2xl text-blue-100 dark:text-blue-200">
        Get instant cash offers for your unused software licenses.
      </p>
      <button
        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold shadow hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        onClick={() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Sell My Licenses Now
      </button>
    </motion.section>
  );
}

  