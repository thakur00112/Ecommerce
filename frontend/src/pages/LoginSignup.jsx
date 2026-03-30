import React, { useState } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col font-dm" style={{ backgroundColor: 'var(--surface-900)' }}>
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div 
          className="max-w-md w-full overflow-hidden" 
          style={{ 
            backgroundColor: 'var(--surface-850)', 
            borderColor: 'var(--border-2)', 
            borderWidth: '1px',
            borderStyle: 'solid',
            boxShadow: 'var(--shadow-glass)' 
          }}
        >
         

          <div className="p-8 sm:p-10">
            <h2 className="text-2xl font-bold mb-6 flex items-baseline gap-2" style={{ color: 'var(--text-heading)' }}>
              {isLogin ? 'Login' : 'Signup'} 
              <span className="text-sm font-normal" style={{ color: 'var(--text-muted)' }}>or</span> 
              <span 
                className="text-lg font-bold cursor-pointer transition-opacity hover:opacity-80" 
                onClick={() => setIsLogin(!isLogin)} 
                style={{ color: 'var(--color-brand)' }}
              >
                {isLogin ? 'Signup' : 'Login'}
              </span>
            </h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required
                    className="w-full px-4 py-3 outline-none transition-all duration-200"
                    style={{ 
                      backgroundColor: 'var(--surface-800)', 
                      color: 'var(--text-body)', 
                      border: '1px solid var(--border)', 
                      borderRadius: '2px' 
                    }}
                  />
                </div>
              )}
              
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  className="w-full px-4 py-3 outline-none transition-all duration-200"
                  style={{ 
                    backgroundColor: 'var(--surface-800)', 
                    color: 'var(--text-body)', 
                    border: '1px solid var(--border)', 
                    borderRadius: '2px' 
                  }}
                />
              </div>

              <div>
                <input 
                  type="password" 
                  placeholder="Password" 
                  required
                  className="w-full px-4 py-3 outline-none transition-all duration-200"
                  style={{ 
                    backgroundColor: 'var(--surface-800)', 
                    color: 'var(--text-body)', 
                    border: '1px solid var(--border)', 
                    borderRadius: '2px' 
                  }}
                />
              </div>

              <div className="text-xs mt-4 mb-4" style={{ color: 'var(--text-muted)' }}>
                By continuing, I agree to the <span className="font-semibold cursor-pointer" style={{ color: 'var(--color-brand)' }}>Terms of Use</span> & <span className="font-semibold cursor-pointer" style={{ color: 'var(--color-brand)' }}>Privacy Policy</span>
              </div>

              <button 
                type="submit" 
                className="w-full py-3.5 font-bold tracking-wide text-white transition-opacity hover:opacity-90 mt-2 rounded-sm"
                style={{ backgroundColor: 'var(--color-brand)' }}
              >
                CONTINUE
              </button>

              <div className="mt-6 text-sm" style={{ color: 'var(--text-muted)' }}>
                Have trouble logging in? <span className="font-semibold cursor-pointer" style={{ color: 'var(--color-brand)' }}>Get help</span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginSignup;