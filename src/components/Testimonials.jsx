const testimonials = [
    {
      name: "Rahul Sharma",
      role: "CTO",
      company: "TechNova Solutions",
      text: "SoftSell helped us recover 40% cost on unused Microsoft licenses. Highly recommended!",
    },
    {
      name: "Priya Mehta",
      role: "IT Manager",
      company: "InnoTech Systems",
      text: "Simplified process with instant payments. Will definitely use again.",
    },
  ]
  
  export default function Testimonials() {
    return (
      <section className="py-12 bg-gray-50 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">
                {testimonial.role} @ {testimonial.company}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  