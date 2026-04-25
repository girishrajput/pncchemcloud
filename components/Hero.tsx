export default function Hero() {
  return (
    <section className="relative flex h-[90vh] items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1532187875605-1ef6c237ddc4?auto=format&fit=crop&q=80')] bg-cover bg-center" />
      
      <div className="container relative z-10 mx-auto px-6 text-center text-white">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
          Innovating Chemistry for a <br />
          <span className="text-blue-400">Better Tomorrow</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-200 md:text-xl">
          A global leader in specialty chemicals, driven by advanced R&D, 
          manufacturing excellence, and a commitment to sustainable solutions.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-md bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700">
            Explore Products
          </button>
          <button className="rounded-md border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-slate-900">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}