import { Edit, Trash2, Plus, Search, Filter, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductsList = () => {
    return (
        <div className="max-w-7xl mx-auto py-8">
            <header className="flex justify-between items-end mb-10 pb-8 border-b border-slate-200/60">
                <div className="space-y-2">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Product Management</h1>
                    <p className="text-slate-500 font-medium tracking-wide">Manage your inventory, pricing and visibility.</p>
                </div>
                <div className="flex gap-4">
                  <div className="relative group">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors" size={18} />
                    <input type="text" placeholder="Search products..." className="pl-11 pr-5 py-2.5 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-600 transition-all font-medium text-slate-700 placeholder:text-slate-400 w-72" />
                  </div>
                  <button className="p-3 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-all">
                    <Filter size={20} />
                  </button>
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-orange-600 text-white rounded-xl font-bold shadow-xl shadow-orange-100 hover:bg-orange-700 transition-all active:scale-95">
                      <Plus size={20} />
                      Add Product
                  </button>
                </div>
            </header>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
            >
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                      <thead>
                          <tr className="bg-slate-50 text-slate-500 font-bold text-xs uppercase tracking-widest">
                              <th className="px-8 py-5">Product Info</th>
                              <th className="px-8 py-5">Category</th>
                              <th className="px-8 py-5 text-center">Price</th>
                              <th className="px-8 py-5 text-center">Stock</th>
                              <th className="px-8 py-5 text-right w-40">Actions</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                          {[1, 2, 3, 4, 5, 6].map(i => (
                              <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                  <td className="px-8 py-6">
                                      <div className="flex items-center gap-4">
                                          <div className="w-16 h-16 bg-slate-100 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-slate-400 group-hover:scale-110 transition-transform">Img</div>
                                          <div>
                                              <p className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Premium Wireless Headphones</p>
                                              <p className="text-xs text-slate-400 font-medium">#PROD-00{i}2</p>
                                          </div>
                                      </div>
                                  </td>
                                  <td className="px-8 py-6">
                                      <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-extrabold uppercase tracking-widest rounded-lg border border-blue-100">Electronics</span>
                                  </td>
                                  <td className="px-8 py-6 text-center font-bold text-slate-800">₹14,999</td>
                                  <td className="px-8 py-6 text-center">
                                      <div className="flex flex-col items-center gap-1.5">
                                          <span className="font-bold text-slate-800">42</span>
                                          <div className="w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                                              <div className="w-2/3 h-full bg-orange-500 rounded-full"></div>
                                          </div>
                                      </div>
                                  </td>
                                  <td className="px-8 py-6 text-right space-x-3">
                                      <button className="p-2.5 text-slate-400 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all">
                                          <Edit size={18} />
                                      </button>
                                      <button className="p-2.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
                                          <Trash2 size={18} />
                                      </button>
                                      <button className="p-2.5 text-slate-400 hover:text-slate-900 rounded-xl transition-all">
                                          <MoreHorizontal size={18} />
                                      </button>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
                </div>
                <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                   <p className="text-slate-500 text-sm font-medium">Showing 6 of 1240 products</p>
                   <div className="flex gap-2">
                     <button className="px-3 py-1.5 border border-slate-200 bg-white text-slate-500 rounded-lg text-sm disabled:opacity-50">Prev</button>
                     <button className="px-3 py-1.5 border border-slate-200 bg-white text-slate-500 rounded-lg text-sm">Next</button>
                   </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProductsList;
