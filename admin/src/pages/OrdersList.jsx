import { Eye, Truck, CheckCircle, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const OrdersList = () => {
    return (
        <div className="max-w-7xl mx-auto py-8">
            <header className="flex justify-between items-end mb-10 pb-8 border-b border-slate-200/60">
                <div className="space-y-2">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Orders Tracking</h1>
                    <p className="text-slate-500 font-medium tracking-wide">Monitor customer orders, fulfillment status and revenue.</p>
                </div>
                <div className="flex gap-4">
                  <div className="relative group">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors" size={18} />
                    <input type="text" placeholder="Search orders..." className="pl-11 pr-5 py-2.5 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-600 transition-all font-medium text-slate-700 placeholder:text-slate-400 w-72" />
                  </div>
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all">
                      <Filter size={20} />
                      Filter
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
                              <th className="px-8 py-5">Order ID</th>
                              <th className="px-8 py-5">Customer</th>
                              <th className="px-8 py-5">Product Info</th>
                              <th className="px-8 py-5 text-center">Amount</th>
                              <th className="px-8 py-5 text-center">Status</th>
                              <th className="px-8 py-5 text-right">Actions</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                          {[1, 2, 3, 4, 5, 6].map(i => (
                              <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                  <td className="px-8 py-6 font-extrabold text-slate-800 text-sm">#ORD-092{i}</td>
                                  <td className="px-8 py-6">
                                      <div>
                                          <p className="font-bold text-slate-800">Mohit Kumar</p>
                                          <p className="text-xs text-slate-400 font-medium">mohit@example.com</p>
                                      </div>
                                  </td>
                                  <td className="px-8 py-6">
                                      <p className="text-sm font-bold text-slate-600 truncate max-w-[200px]">iPhone 15 Pro Max, Case...</p>
                                      <p className="text-xs text-slate-400 font-medium">Qty: 2</p>
                                  </td>
                                  <td className="px-8 py-6 text-center font-bold text-slate-900 tracking-tight">₹1,49,999</td>
                                  <td className="px-8 py-6 text-center">
                                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest border ${
                                          i % 3 === 0 ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                                          i % 2 === 0 ? "bg-orange-50 text-orange-600 border-orange-100" :
                                          "bg-blue-50 text-blue-600 border-blue-100"
                                      }`}>
                                          {i % 3 === 0 ? "Delivered" : i % 2 === 0 ? "Processing" : "Shipped"}
                                      </span>
                                  </td>
                                  <td className="px-8 py-6 text-right space-x-2">
                                      <button className="px-4 py-2 border border-slate-100 text-slate-400 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all font-bold text-xs uppercase tracking-widest">Details</button>
                                      <button className="p-2.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"><Truck size={18} /></button>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
                </div>
            </motion.div>
        </div>
    );
};

export default OrdersList;
