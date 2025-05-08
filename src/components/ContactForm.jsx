import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your validation logic here
    alert("Form submitted successfully! (Demo)")
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Get Started Now</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name*"
            required
            className="w-full p-2 border rounded-lg"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input
            type="email"
            placeholder="Email*"
            required
            className="w-full p-2 border rounded-lg"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-2 border rounded-lg"
            onChange={(e) => setFormData({...formData, company: e.target.value})}
          />
          <select
            required
            className="w-full p-2 border rounded-lg"
            onChange={(e) => setFormData({...formData, licenseType: e.target.value})}
          >
            <option value="">Select License Type*</option>
            <option>Microsoft Windows</option>
            <option>Microsoft Office</option>
            <option>Adobe Creative Cloud</option>
            <option>Other</option>
          </select>
          <textarea
            placeholder="Additional Details"
            rows="4"
            className="w-full p-2 border rounded-lg"
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}
