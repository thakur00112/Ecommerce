import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { Link } from "react-router-dom";
import { FiMessageSquare, FiMapPin, FiMail, FiPhone, FiSend, FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-surface-950">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-32 lg:py-48">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <span className="text-brand text-xs font-black uppercase tracking-[0.4em] mb-6 block">Stay Connected</span>
          <h1 className="text-4xl md:text-6xl font-sora font-extrabold text-heading tracking-tighter mb-8">
             How can we <span className="text-brand">Help?</span>
          </h1>
          <p className="text-muted text-lg font-light leading-relaxed">
             Our dedicated team is here to assist you with any questions, feedback, or concerns. 
             We usually respond within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
           
           {/* Form Section */}
           <div className="p-10 md:p-14 bg-surface-850 rounded-[3rem] border border-themed-2 shadow-2xl shadow-black/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[100px] rounded-full -mr-32 -mt-32" />
              
              <div className="relative z-10">
                 <h2 className="text-2xl font-sora font-extrabold text-heading mb-10">Send a Message</h2>
                 
                 <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted ml-1">Full Name</label>
                          <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-surface-800 border border-themed-2 rounded-2xl outline-none focus:border-brand/40 transition-colors" />
                       </div>
                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted ml-1">Email Instance</label>
                          <input type="email" placeholder="john@domain.com" className="w-full px-6 py-4 bg-surface-800 border border-themed-2 rounded-2xl outline-none focus:border-brand/40 transition-colors" />
                       </div>
                    </div>

                    <div className="flex flex-col gap-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted ml-1">Inquiry Subject</label>
                       <select className="w-full px-6 py-4 bg-surface-800 border border-themed-2 rounded-2xl outline-none focus:border-brand/40 transition-colors appearance-none">
                          <option>General Support</option>
                          <option>Order Inquiries</option>
                          <option>Refund Request</option>
                          <option>Collaboration</option>
                       </select>
                    </div>

                    <div className="flex flex-col gap-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted ml-1">Message Detail</label>
                       <textarea rows={5} placeholder="Describe your inquiry..." className="w-full px-6 py-4 bg-surface-800 border border-themed-2 rounded-2xl outline-none focus:border-brand/40 transition-colors" />
                    </div>

                    <button className="btn-primary w-full !py-5 flex items-center justify-center gap-3 !rounded-[1.5rem] shadow-2xl shadow-brand/20">
                       <FiSend size={18} />
                       <span>Dispatch Message</span>
                    </button>
                 </form>
              </div>
           </div>

           {/* Contact Info Section */}
           <div className="flex flex-col gap-12 pt-4">
              <div className="space-y-12">
                 <div className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-3xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                       <FiMapPin className="text-brand text-2xl" />
                    </div>
                    <div>
                       <h3 className="text-heading font-sora font-extrabold text-xl mb-2">Corporate HQ</h3>
                       <p className="text-muted leading-relaxed">
                          1245 Innovation Way, Silicon Valley<br />
                          Suite 400, CA 94025, USA
                       </p>
                    </div>
                 </div>

                 <div className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-3xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                       <FiMail className="text-brand text-2xl" />
                    </div>
                    <div>
                       <h3 className="text-heading font-sora font-extrabold text-xl mb-2">Electronic Mail</h3>
                       <p className="text-muted leading-relaxed">
                          support@devakart.tech<br />
                          partnerships@devakart.tech
                       </p>
                    </div>
                 </div>

                 <div className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-3xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                       <FiPhone className="text-brand text-2xl" />
                    </div>
                    <div>
                       <h3 className="text-heading font-sora font-extrabold text-xl mb-2">Toll-Free Support</h3>
                       <p className="text-muted leading-relaxed">
                          +1 (800) 555-0199<br />
                          Mon-Fri, 9AM - 6PM EST
                       </p>
                    </div>
                 </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-12 border-t border-themed">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted mb-8 ml-1">Social Connectivity</h3>
                 <div className="flex gap-4">
                    {[FiTwitter, FiInstagram, FiFacebook].map((Icon, i) => (
                       <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-surface-850 border border-themed-2 flex items-center justify-center hover:bg-brand hover:border-brand hover:text-white transition-all">
                          <Icon size={20} />
                       </a>
                    ))}
                 </div>
              </div>
           </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
