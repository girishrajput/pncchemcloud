const data = [
  { title: "RDT", icon: "🔬", desc: "Advanced molecular research and technological innovation." },
  { title: "Manufacturing", icon: "🏭", desc: "Scalable, high-precision industrial production facilities." },
  { title: "Quality", icon: "🛡️", desc: "Global standards in quality assurance and compliance." }
];

export default function Capabilities() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-16 text-center text-4xl font-bold text-slate-900">Our Capabilities</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {data.map((item) => (
            <div key={item.title} className="group rounded-xl bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-6 text-5xl">{item.icon}</div>
              <h3 className="mb-4 text-2xl font-bold text-blue-900">{item.title}</h3>
              <p className="leading-relaxed text-slate-600">{item.desc}</p>
              <button className="mt-6 font-semibold text-blue-600 group-hover:underline">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}