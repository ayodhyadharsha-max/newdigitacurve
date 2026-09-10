'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Phone, MapPin, Instagram, MessageSquare, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Web Development & Next.js Application',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '7e356166-b322-41d7-a244-7e9bdf676cd8',
          from_name: 'Digitacurve Contact Form',
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone || 'N/A',
          Service: formData.service || 'N/A',
          Message: formData.message,
          subject: `New Lead: ${formData.name} - ${formData.service || 'Inquiry'}`,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success === true) {
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'Web Development & Next.js Application',
          message: '',
        });
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err: any) {
      setError('Network error. Please try again or call +91 75720 94201 directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-600 selection:text-white">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 font-mono text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT CHANNELS / NOIDA STUDIO</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase">
            LET’S START A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              CONVERSATION.
            </span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
            Whether you need a new web application, an ad campaign audit, or an industry growth platform, our team in Noida is ready.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left - Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#050B14] border border-blue-900/40 space-y-6">
            <h2 className="text-3xl font-black uppercase text-white tracking-tight">SEND AN INQUIRY</h2>
            <p className="text-slate-400 text-xs font-light">Fill out the form below and Founder Rishabh Jaiswal (RJ) or our technical team will respond within 24 hours.</p>

            {submitted ? (
              <div className="p-6 bg-emerald-950/60 border border-emerald-500/60 rounded-2xl space-y-2 text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase">INQUIRY SENT SUCCESSFULLY</h3>
                <p className="text-xs text-emerald-300 font-light leading-relaxed">
                  Thank you! Your inquiry has been sent to digitacurve@gmail.com. Rishabh Jaiswal (RJ) will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form className="space-y-4 pt-2" onSubmit={handleSubmit}>
                {error && (
                  <div className="p-3 bg-red-950/80 border border-red-500/50 rounded-xl text-xs text-red-300">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-slate-400 uppercase">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Rishabh Sharma"
                      className="w-full bg-[#030712] border border-blue-900/60 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-slate-400 uppercase">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#030712] border border-blue-900/60 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-slate-400 uppercase">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="contact@yourbusiness.com"
                    className="w-full bg-[#030712] border border-blue-900/60 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-slate-400 uppercase">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#030712] border border-blue-900/60 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Web Development & Next.js Application">Web Development &amp; Next.js Application</option>
                    <option value="Mobile App Development">Mobile App Development (iOS &amp; Android)</option>
                    <option value="Digital Marketing & Ads">Digital Marketing &amp; Google/Meta Ads</option>
                    <option value="SEO Optimization">SEO Optimization &amp; Organic Growth</option>
                    <option value="Real Estate Solution">Real Estate Solution</option>
                    <option value="Healthcare / Travel / Solar">Healthcare / Travel / Solar Solution</option>
                    <option value="Custom Consultation">Other / Custom Consultation</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-slate-400 uppercase">Project Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    placeholder="Tell us about your project, current website, timeline, or business goals..."
                    className="w-full bg-[#030712] border border-blue-900/60 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold text-xs px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                >
                  {sending ? 'SENDING INQUIRY...' : 'SUBMIT INQUIRY'} <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right - Studio Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#000B29] border border-blue-900/50 space-y-6">
              <h3 className="text-xl font-black uppercase text-white tracking-tight">DIRECT CHANNELS</h3>

              <div className="space-y-4">
                <a
                  href="mailto:contact@digitacurve.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#050B14] border border-blue-900/40 hover:border-blue-500/80 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-950 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">EMAIL ADDRESS</div>
                    <div className="text-sm font-bold text-white">contact@digitacurve.com</div>
                  </div>
                </a>

                <a
                  href="tel:+917572094201"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#050B14] border border-blue-900/40 hover:border-blue-500/80 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-950 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">PHONE &amp; WHATSAPP</div>
                    <div className="text-sm font-bold text-white">+91 75720 94201</div>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/digitacurve/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#050B14] border border-blue-900/40 hover:border-pink-500/80 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-950 flex items-center justify-center text-pink-400 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">INSTAGRAM</div>
                    <div className="text-sm font-bold text-white">@digitacurve</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-8 rounded-3xl bg-[#050B14] border border-blue-900/40 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-400" />
                <h4 className="font-bold text-white text-base">STUDIO LOCATION</h4>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed font-light">
                Digitacurve Digital Agency <br />
                Noida, Uttar Pradesh, India <br />
                Pincode: 201301
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Clock className="w-3.5 h-3.5" /> IST Hours: 09:30 AM – 07:30 PM (Mon – Sat)
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
