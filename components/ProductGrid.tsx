export default function ProductGrid() {
  const products = ["Agrochemicals", "Fine Chemicals", "Polymers", "Nutrition", "Specialty Salts"];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">Featured Products</h2>
            <div className="mt-2 h-1.5 w-20 bg-blue-600"></div>
          </div>
          <button className="hidden font-bold text-blue-600 md:block">View Catalog</button>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <div key={i} className="overflow-hidden rounded-lg border border-slate-100 bg-white transition hover:border-blue-200 hover:shadow-md">
              <div className="h-48 bg-slate-200 bg-[url('https://placehold.co/600x400/png')] bg-cover"></div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{p}</h3>
                <p className="mb-4 text-sm text-slate-500">High-purity solutions tailored for global industrial applications.</p>
                <button className="text-sm font-bold text-blue-900">VIEW DETAILS</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}