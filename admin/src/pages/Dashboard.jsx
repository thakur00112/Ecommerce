import { ShoppingCart, Package, Users, DollarSign, TrendingUp, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const DashboardCard = ({ title, value, icon, color, trend }) => (
    <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
    >
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-2xl ${color} bg-opacity-10 text-${color.split('-')[1]}-600`}>
                {icon}
            </div>
            {trend && (
              <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                <TrendingUp size={12} />
                {trend}%
              </div>
            )}
        </div>
        <div>
            <p className="text-slate-500 font-medium mb-1 text-sm uppercase tracking-wide">{title}</p>
            <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">{value}</h3>
        </div>
    </motion.div>
);

const Dashboard = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-10">
            <header className="flex justify-between items-end pb-8 border-b border-slate-200/60">
                <div>
                   <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">Overview</h1>
                   <p className="text-slate-500">Welcome back! Here's what's happening today.</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-all">Download Report</button>
                  <button className="px-5 py-2.5 bg-orange-600 text-white rounded-xl font-medium shadow-lg shadow-orange-100 hover:bg-orange-700 transition-all">Export Data</button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <DashboardCard title="Total Sales" value="₹1,24,500" icon={<DollarSign size={24} />} color="bg-emerald-500" trend="12.5" />
                <DashboardCard title="Total Orders" value="482" icon={<ShoppingCart size={24} />} color="bg-blue-500" trend="8.2" />
                <DashboardCard title="Total Products" value="1,240" icon={<Package size={24} />} color="bg-orange-500" />
                <DashboardCard title="Active Users" value="3,120" icon={<Users size={24} />} color="bg-purple-500" trend="5.1" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm min-h-[400px]">
                    <h3 className="text-xl font-bold mb-6 flex justify-between items-center">
                        Sales Performance
                        <select className="border border-slate-200 text-sm rounded-lg px-2 py-1 outline-none">
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                        </select>
                    </h3>
                    <div className="w-full h-64 flex items-center justify-center text-slate-400 font-medium">
                        [ Sales Chart Component ]
                    </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold">Recent Orders</h3>
                        <button className="text-orange-600 font-semibold text-sm hover:underline flex items-center">View All <ChevronRight size={16} /></button>
                    </div>
                    <div className="space-y-5">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="flex items-center gap-4 group">
                          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-slate-600 group-hover:bg-orange-100/50 group-hover:text-orange-600 transition-all">#0{i}</div>
                          <div className="flex-1">
                            <p className="font-bold text-slate-800 text-sm">₹2,499.00</p>
                            <p className="text-xs text-slate-400">User 0{i} • 2 mins ago</p>
                          </div>
                          <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-orange-100 text-orange-600">Processing</div>
                        </div>
                      ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
