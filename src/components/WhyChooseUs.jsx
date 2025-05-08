const features = [
    { icon: "⚡", title: "Lightning Fast", desc: "Complete process in under 24 hours" },
    { icon: "🔒", title: "Secure", desc: "Bank-grade security for all transactions" },
    { icon: "💎", title: "Best Prices", desc: "Guanteed highest market rates" },
  ]
  
  export default function WhyChooseUs() {
    return (
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose SoftSell</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  