'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function BrandUniverse() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    industry: 'Travel',
    plan: 'Growth Engine (₹35,000/mo)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
    }
  };

  const hospitalityBrandCards = [
    {
      name: 'Glenary’s',
      logoImg: '/brand-roster/glenarys.svg',
    },
    {
      name: 'Sheroes Hangout',
      logoImg: '/brand-roster/sheroes-hangout.svg',
    },
    {
      name: 'Glen’s Bakehouse',
      logoImg: '/brand-roster/glens-bakehouse.svg',
    },
    {
      name: 'Lakmé Salon',
      logoImg: '/brand-roster/lakme.svg',
    },
    {
      name: 'Jawed Habib',
      logoImg: '/brand-roster/jawed-habib.svg',
    },
    {
      name: 'Toni & Guy',
      logoImg: '/brand-roster/toni-guy.svg',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-blue-900/30 overflow-hidden">
      {/* Electric Blue Banner with Embedded Customer Inquiry Form */}
      <div id="contact" className="bg-blue-600 rounded-3xl p-6 sm:p-10 mb-16 text-white relative overflow-hidden shadow-2xl shadow-blue-600/30 border border-blue-400/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column: Heading & Info */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-mono text-blue-200 tracking-widest uppercase">
              03 / START A PROJECT
            </p>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[0.9] uppercase">
              READY TO<br />
              GROW YOUR<br />
              BUSINESS?
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed font-light">
              Fill out this quick form. Rishabh Jaiswal &amp; our team will review your business requirements and contact you within 2 hours.
            </p>
            <div className="pt-2 text-xs font-mono text-blue-200 space-y-1">
              <div>📍 HQ: Noida, NCR, India</div>
              <div>⚡ Direct Founder Response Guaranteed</div>
            </div>
          </div>

          {/* Right Column: Customer Lead Form */}
          <div className="lg:col-span-7 bg-slate-950/95 backdrop-blur-md rounded-2xl p-5 sm:p-8 border border-blue-400/20 text-slate-900 shadow-2xl">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-black text-white uppercase">INQUIRY RECEIVED!</h3>
                <p className="text-xs text-slate-300 font-light">
                  Thank you! We have received your details. Rishabh Jaiswal will reach out to you directly shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-300 uppercase mb-1">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-300 uppercase mb-1">
                      PHONE / WHATSAPP *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-300 uppercase mb-1">
                      BUSINESS TYPE
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors"
                    >
                      <option value="Travel">Travel &amp; Tourism</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Solar">Solar &amp; Clean Energy</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="NGO">NGO &amp; Non-Profit</option>
                      <option value="Doctor/Clinic">Doctor / Clinic / Cafe</option>
                      <option value="Other">Other Business</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-300 uppercase mb-1">
                      CHOOSE PLAN
                    </label>
                    <select
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors"
                    >
                      <option value="Essentials (₹15,000/mo)">Essentials Plan (₹15,000/mo)</option>
                      <option value="Growth Engine (₹35,000/mo)">Growth Engine (₹35,000/mo)</option>
                      <option value="Scale System (₹65,000/mo)">Scale System (₹65,000/mo)</option>
                      <option value="Custom Requirement">Custom Requirement</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-300 uppercase mb-1">
                    YOUR MESSAGE / REQUIREMENTS
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your business goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-blue-500 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3.5 rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  SUBMIT GROWTH INQUIRY <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Brand Group Stack */}
      <div id="work" className="space-y-16">
        {/* Cafés + Hospitality */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blue-900/40 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-blue-400 bg-blue-950 border border-blue-800/50 px-2.5 py-1 rounded">
                01
              </span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                CAFÉS + HOSPITALITY
              </h3>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              A focused hospitality row for café &amp; dining names.
            </p>
          </div>

          {/* Reverse Auto-sliding Marquee Rail */}
          <div className="flex w-max animate-marquee-reverse space-x-6 py-4">
            {[...hospitalityBrandCards, ...hospitalityBrandCards, ...hospitalityBrandCards].map((brand, idx) => (
              <div
                key={idx}
                className="w-64 h-40 bg-white rounded-2xl p-4 flex flex-col justify-between shadow-2xl hover:scale-105 transition-transform duration-300 group cursor-pointer border border-slate-200 shrink-0"
              >
                <div className="flex-1 flex items-center justify-center p-2 bg-slate-900 rounded-xl overflow-hidden">
                  <img
                    src={brand.logoImg}
                    alt={brand.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold text-slate-900 font-sans">
                  <span>{brand.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
