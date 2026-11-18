'use client';

import { useState } from 'react';
import { X, Send, ArrowUpRight, MessageSquare, Phone } from 'lucide-react';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
}

export default function MeetAiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hey—I’m Digitacurve AI. Tell me your business goal and I’ll suggest the right service. Rishabh Jaiswal and our Noida studio team are here to help. Hindi or English—both work.",
    },
  ]);
  const [input, setInput] = useState('');

  const quickPrompts = [
    'Build my 60-second project brief',
    'Which service fits me?',
    'Build my website',
    'Get more leads',
    'Run Google or Meta Ads',
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Simulate AI response
    setTimeout(() => {
      let responseText = "Based on your request, our Digitacurve team led by Rishabh Jaiswal recommends starting with a comprehensive Website & Digital Readiness Audit. You can WhatsApp RJ directly at +91 75720 94201 or request a free proposal!";
      const q = query.toLowerCase();
      if (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('package')) {
        responseText = "Digitacurve provides 100% transparent pricing: Essential Growth at ₹24,999 (one-time build), Business Scaler at ₹49,999 (build + growth), and custom Enterprise tiers. WhatsApp Founder RJ directly at +91 75720 94201 for an instant customized estimate!";
      } else if (q.includes('seo') || q.includes('rank') || q.includes('google') || q.includes('traffic')) {
        responseText = "For SEO & Google Maps 3-Pack domination, Digitacurve implements spatial entity schema, AEO, and high-intent commercial keyword hubs across Noida, Delhi & Gurugram. Connect on WhatsApp (+91 75720 94201) to get a free live keyword audit!";
      } else if (q.includes('website') || q.includes('build') || q.includes('next') || q.includes('developer')) {
        responseText = "For website development, Digitacurve crafts custom Next.js 15 platforms with sub-second LCP (<0.8s), zero WordPress plugin bloat, and automated WhatsApp CRM lead routing. Message RJ on WhatsApp (+91 75720 94201) to discuss your scope.";
      } else if (q.includes('lead') || q.includes('ads') || q.includes('marketing')) {
        responseText = "Digitacurve engineers high-ROAS Google Search & Meta Ad funnels with Server-Side CAPI, targeting high-intent buyers while filtering junk leads. WhatsApp RJ at +91 75720 94201 to launch your campaign.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: responseText,
        },
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[380px] h-[520px] liquid-glass rounded-3xl shadow-[0_25px_60px_rgba(37,99,235,0.2)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Drawer Header */}
          <div className="p-4 bg-white/60 backdrop-blur-xl border-b border-white/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-black text-xs text-white shadow-md">
                DC
              </div>
              <div>
                <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  DIGITACURVE AI
                  <span className="liquid-glass-pill text-blue-700 text-[9px] px-2 py-0.5 rounded-full font-mono font-bold">
                    FREE · ASSISTANT
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  ACTIVE · NOIDA BASE
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-500 hover:text-slate-900 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <span className="text-[9px] font-mono text-slate-400 mb-1">
                  {msg.sender === 'user' ? 'YOU' : 'DIGITACURVE AI'}
                </span>
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none shadow-md shadow-blue-600/20'
                      : 'liquid-glass text-slate-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Quick Prompt Chips */}
            <div className="pt-2 flex flex-wrap gap-1.5">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="liquid-glass-pill hover:bg-blue-100/80 text-blue-700 text-[10px] px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-all"
                >
                  {prompt} <ArrowUpRight className="w-2.5 h-2.5" />
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white/60 backdrop-blur-xl border-t border-white/80 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              className="flex-1 bg-white/90 border border-slate-200 text-slate-900 text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-inner"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="liquid-glass-button bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white p-2 rounded-xl transition-all"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Direct WhatsApp Footer */}
          <div className="px-3 py-2 bg-slate-50/80 backdrop-blur-md border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-mono">
            <span>RESPONSES BY DIGITACURVE AI</span>
            <a
              href="https://wa.me/917572094201"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-0.5 font-bold"
            >
              WHATSAPP ↗
            </a>
          </div>
        </div>
      )}

      {/* Action Buttons: WhatsApp Quick Contact + AI Widget Toggle */}
      <div className="flex items-center gap-2.5">
        <a
          href="https://wa.me/917572094201?text=Hi%20Digitacurve%2C%20I%20want%20to%20discuss%20web%20development%20and%20SEO%20growth%20for%20my%20business"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Inquiry with Founder Rishabh Jaiswal"
          className="group bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full border border-emerald-400/40 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-600/30"
        >
          <Phone className="w-4 h-4 text-white" />
          <span className="hidden sm:inline text-xs font-black tracking-tight leading-none pr-1">
            WHATSAPP
          </span>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full liquid-glass-button border border-white/40 flex items-center gap-3 transition-all hover:scale-105 shadow-xl shadow-blue-600/30"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-black text-xs text-white">
            DC
          </div>
          <div className="hidden sm:flex flex-col items-start pr-2">
            <span className="text-xs font-black tracking-tight leading-none">
              DIGITACURVE AI
            </span>
            <span className="text-[9px] font-mono text-blue-100 uppercase">
              ASK ANYTHING
            </span>
          </div>
          <MessageSquare className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
