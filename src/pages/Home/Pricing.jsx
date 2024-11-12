export default function Pricing() {
    const plans = [
      { name: "Silver", price: "$29.99/mo", features: ["3 Projects", "5 GB Storage", "Email Support"], button: "Choose Silver" },
      { name: "Gold", price: "$39.99/mo", features: ["15 Projects", "30 GB Storage", "24/7 Support"], button: "Choose Gold", isPopular: true },
      { name: "Platinum", price: "$79.99/mo", features: ["Unlimited Projects", "Unlimited Storage", "Dedicated Support"], button: "Choose Platinum" },
    ];
  
    return (
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Pricing Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div key={idx} className={`relative bg-gray-50 rounded-lg shadow-lg p-8 ${plan.isPopular ? "border-4 border-indigo-500" : ""}`}>
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-indigo-500 text-white text-sm px-3 py-1 rounded-bl-lg">
                    Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-semibold mb-6">{plan.price}</p>
                <ul className="mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
                <button className="bg-[#1640A7] text-white px-6 py-3 rounded-lg hover:bg-[#257CE1] transition">{plan.button}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  