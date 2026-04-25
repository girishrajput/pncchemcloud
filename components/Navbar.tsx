"use client";
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold tracking-tighter text-blue-900">
          P&C <span className="text-blue-600">ChemCloud</span>
        </div>
        
        <div className="hidden space-x-8 lg:flex">
          <Link href="/" className="text-sm font-medium text-blue-900 hover:text-blue-600">Home</Link>
          <div className="group relative">
            <button className="flex items-center text-sm font-medium text-blue-900 hover:text-blue-600">
              About 
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="Step 19 9l-7 7-7-7" /></svg>
            </button>
            <div className="invisible absolute top-full w-48 rounded-md border bg-white p-2 shadow-xl group-hover:visible">
              <Link href="/about/overview" className="block p-2 text-sm hover:bg-blue-50">Overview</Link>
              <Link href="/about/vision" className="block p-2 text-sm hover:bg-blue-50">Vision & Values</Link>
            </div>
          </div>
          <Link href="/capabilities" className="text-sm font-medium text-blue-900 hover:text-blue-600">Capabilities</Link>
          <Link href="/products" className="text-sm font-medium text-blue-900 hover:text-blue-600">Products</Link>
          <Link href="/contact" className="rounded-full bg-blue-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-800">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;