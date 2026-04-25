const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 pb-8 grid gap-12 md:grid-cols-4">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-bold text-white mb-4">P&C ChemCloud</h3>
          <p className="text-sm leading-relaxed">
            A global leader in specialty chemicals, driving innovation through R&D and 
            sustainable manufacturing practices.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">Sitemap</li>
            <li className="hover:text-blue-400 cursor-pointer">Careers</li>
            <li className="hover:text-blue-400 cursor-pointer">Sustainability</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Policies</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-blue-400 cursor-pointer">Terms of Service</li>
            <li className="hover:text-blue-400 cursor-pointer">Payment Terms</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Contact Info</h4>
          <p className="text-sm">123 Industrial Hub, Tech City</p>
          <p className="text-sm">Email: contact@P&C chemcloud.com</p>
          <p className="text-sm">Phone: +1 (555) 000-CHEM</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6 text-center text-xs">
        © {new Date().getFullYear()} P&C ChemCloud. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;