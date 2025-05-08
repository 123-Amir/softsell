const steps = [
    { icon: "📤", title: "Upload License", desc: "Share your license details securely" },
    { icon: "💸", title: "Get Valuation", desc: "Instant fair market price calculation" },
    { icon: "💰", title: "Receive Payment", desc: "Fast payment via preferred method" },
  ]
  
  export default function HowItWorks() {
    return (
      <section className="py-12 bg-gray-50 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  