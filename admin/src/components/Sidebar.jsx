import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingBag, LogOut, PlusCircle, Settings } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Sidebar = () => {
    const location = useLocation();

    const links = [
        { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
        { name: 'Products', icon: <Package size={20} />, path: '/products' },
        { name: 'New Product', icon: <PlusCircle size={20} />, path: '/product/new' },
        { name: 'Orders', icon: <ShoppingBag size={20} />, path: '/orders' },
        { name: 'Settings', icon: <Settings size={20} />, path: '/settings' },
    ];

    return (
        <aside className="w-72 bg-white h-screen sticky top-0 border-r border-slate-100 flex flex-col p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-12 px-2">
                <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-orange-200">
                    D.k
                </div>
                <h1 className="text-xl font-bold tracking-tight text-slate-800">Deva.kart <span className="text-orange-600">Admin</span></h1>
            </div>

            <nav className="flex-1 space-y-2">
                {links.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={twMerge(
                            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium group",
                            location.pathname === link.path
                                ? "bg-orange-600 text-white shadow-xl shadow-orange-200 scale-105"
                                : "text-slate-600 hover:bg-orange-50 hover:text-orange-600"
                        )}
                    >
                        <span className={clsx("transition-transform duration-300", location.pathname !== link.path && "group-hover:scale-110")}>
                            {link.icon}
                        </span>
                        {link.name}
                    </Link>
                ))}
            </nav>

            <div className="pt-6 border-t border-slate-100 italic text-xs text-slate-400 text-center">
                Powered by Antigravity v1.0
            </div>
        </aside>
    );
};

export default Sidebar;
