import { useState } from 'react';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here we would call the backend login API
        console.log('Admin logging in...', { email, password });
        window.location.href = '/'; // Redirect to dashboard
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-white rounded-[32px] shadow-2xl shadow-slate-200 border border-slate-100 p-10 space-y-8"
            >
                <div className="text-center space-y-3">
                    <div className="w-20 h-20 bg-orange-600 rounded-3xl mx-auto flex items-center justify-center text-white shadow-2xl shadow-orange-200 mb-6">
                        <ShieldCheck size={40} />
                    </div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Admin Portal</h1>
                    <p className="text-slate-500 font-medium">Securely access your storefront management</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors" size={20} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@company.com"
                                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-orange-50 focus:border-orange-600 transition-all font-bold text-slate-700 placeholder:text-slate-400 text-sm"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Master Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors" size={20} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-orange-50 focus:border-orange-600 transition-all font-bold text-slate-700 placeholder:text-slate-400 text-sm"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-4 bg-orange-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-orange-100 hover:bg-orange-700 active:scale-95 transition-all"
                    >
                        Sign In Now <ArrowRight size={20} />
                    </button>
                </form>

                <div className="text-center pt-4">
                  <p className="text-xs text-slate-400 font-medium">Restricted Access • Authorized Personnel Only</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
