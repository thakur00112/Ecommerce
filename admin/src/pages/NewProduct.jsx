import { useState } from 'react';
import { Camera, Save, ArrowLeft, ImagePlus, X, Box, Tag, CreditCard, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const NewProduct = () => {
    const [images, setImages] = useState([]);

    return (
        <div className="max-w-4xl mx-auto py-8">
            <header className="flex items-center justify-between mb-10 pb-8 border-b border-slate-200/60">
                <div className="flex gap-4 items-center">
                    <button className="p-3 bg-white border border-slate-200 text-slate-400 rounded-xl hover:text-orange-600 hover:border-orange-100 hover:bg-orange-50 transition-all">
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">New Product</h1>
                        <p className="text-slate-500 font-medium text-sm tracking-wide">Enter the product details to add to your inventory.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all">Cancel</button>
                  <button className="flex items-center gap-2 px-8 py-2.5 bg-orange-600 text-white rounded-xl font-bold shadow-xl shadow-orange-100 hover:bg-orange-700 transition-all active:scale-95">
                      <Save size={20} />
                      Publish Product
                  </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6"
                    >
                        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2"><Box size={20} className="text-orange-600" /> Basic Information</h3>
                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest px-1">Product Name</label>
                                <input type="text" placeholder="e.g. Premium Leather Jacket" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-orange-50 focus:border-orange-600 transition-all font-medium text-slate-700 placeholder:text-slate-400" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest px-1">Description</label>
                                <textarea placeholder="Tell us about the product..." rows={4} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-orange-50 focus:border-orange-600 transition-all font-medium text-slate-700 placeholder:text-slate-400 resize-none" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
                        className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6"
                    >
                        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2"><CreditCard size={20} className="text-orange-600" /> Pricing & Inventory</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest px-1">Price (₹)</label>
                                <input type="number" placeholder="4,999" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-orange-50 focus:border-orange-600 transition-all font-medium text-slate-700" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest px-1">Stock Amount</label>
                                <input type="number" placeholder="100" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-orange-50 focus:border-orange-600 transition-all font-medium text-slate-700" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="space-y-8">
                     <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6"
                    >
                        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2"><ImagePlus size={20} className="text-orange-600" /> Media & Category</h3>
                        <div className="space-y-6">
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest px-1">Product Images</label>
                                <div className="border-4 border-dashed border-slate-100 rounded-3xl p-10 flex flex-col items-center justify-center gap-4 hover:border-orange-200 hover:bg-orange-50/20 transition-all cursor-pointer group">
                                    <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-50 group-hover:scale-110 transition-transform"><Camera size={32} /></div>
                                    <div className="text-center">
                                        <p className="font-bold text-slate-700 text-sm">Upload product photos</p>
                                        <p className="text-xs text-slate-400 font-medium mt-1">PNG, JPG, up to 10MB</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest px-1">Category</label>
                                <select className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-orange-50 focus:border-orange-600 transition-all font-bold text-slate-700 appearance-none cursor-pointer">
                                  <option>Select Category</option>
                                  <option>Electronics</option>
                                  <option>Home & Garden</option>
                                  <option>Fashion</option>
                                  <option>Fitness</option>
                                </select>
                            </div>

                             <div className="space-y-1.5">
                                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest px-1">Brand/Seller</label>
                                <input type="text" placeholder="e.g. Apple, Nike" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-orange-50 focus:border-orange-600 transition-all font-medium text-slate-700" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
