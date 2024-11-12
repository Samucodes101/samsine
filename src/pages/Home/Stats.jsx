export default function Stats() {
    const stats = [
      { label: "Software Development", value: "91%" },
      { label: "Cyber Security", value: "83%" },
      { label: "Artificial Intelligence", value: "95%" },
      { label: "Web Development", value: "70%" }
    ];
  
    return (
      <section className="bg-white">
        <div className="w-full">
          {stats.map((stat, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between">
                <p className="font-semibold">{stat.label}</p>
                <p className="font-semibold">{stat.value}</p>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div
                  className="bg-[#03228F] h-3 rounded-full"
                  style={{ width: stat.value }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  