import { Sparkles, Zap, Globe, Lock, Bot, Store, Link2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useConfig } from '@/lib/useConfig';
import { useMerchantRoute, MERCHANT_SLUGS } from '@/lib/useMerchantRoute';
import { MERCHANTS } from '@/data/merchantDatabase';
import MerchantControlBox from '@/components/MerchantControlBox';
import ChatWidget from '@/components/ChatWidget';

const FEATURES = [
  {
    icon: Zap,
    title: 'Instant Roman Urdu',
    desc: 'Street-smart local replies, bilkul jaise WhatsApp pe baat hoti hai.',
  },
  {
    icon: Globe,
    title: 'COD Nationwide',
    desc: 'TCS / Leopards se 2-4 working days, pure Pakistan Cash on Delivery.',
  },
  {
    icon: Lock,
    title: 'Private & Local',
    desc: 'API key sirf aapke browser me rehti hai, kahin upload nahi hoti.',
  },
];

const STEPS = [
  { num: '01', title: 'API Key Paste', desc: 'Google AI Studio se free key copy karein aur Control Box me daalein.' },
  { num: '02', title: 'Visit Merchant URL', desc: 'URL me ?shop=almadina ya ?shop=hsthrift lagayein.' },
  { num: '03', title: 'Go Live', desc: 'Chat widget us merchant ki inventory ke saath live ho jata hai.' },
];

export default function App() {
  const { config, update, loaded } = useConfig();
  const { merchant, slug } = useMerchantRoute();

  const setShopParam = (s: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('shop', s);
    window.history.replaceState({}, '', url.toString());
    window.location.reload();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-80 w-80 rounded-full bg-teal-100/50 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(15,23,42) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Top nav */}
      <header className="relative z-10 border-b border-slate-200/70 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-sm">
              <Store className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-slate-900">Bazar Assistant</p>
              <p className="text-[11px] text-slate-500">Integration Tool</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {merchant ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                <Link2 className="h-3.5 w-3.5" />
                ?shop={merchant.slug}
              </span>
            ) : null}
            <span className="hidden items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 sm:inline-flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              System Operational
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
              <Bot className="h-3.5 w-3.5 text-emerald-500" />
              v1.0
            </span>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 mx-auto max-w-6xl px-5 py-10 sm:py-14">
        {/* Hero */}
        <section className="mb-8 text-center sm:mb-12">
          <div className="animate-fade-up inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/70 px-3.5 py-1.5 text-xs font-medium text-emerald-700">
            <Sparkles className="h-3.5 w-3.5" />
            Pakistani E-commerce AI Support
          </div>
          <h1 className="animate-fade-up mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl [animation-delay:80ms]">
            Bazar Assistant
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Integration Tool
            </span>
          </h1>
          <p className="animate-fade-up mx-auto mt-4 max-w-xl text-base text-slate-500 [animation-delay:160ms]">
            Apne online store ko ek Roman Urdu AI customer support assistant do. URL me{' '}
            <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm text-slate-700">?shop=almadina</code>{' '}
            lagayein, aur chat widget us merchant ki inventory ke saath live ho jayega.
          </p>
        </section>

        {/* Active merchant banner */}
        <section className="mb-8">
          {merchant ? (
            <div className="animate-fade-up mx-auto flex max-w-2xl items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50/70 px-4 py-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-800">
                  Active Merchant: {merchant.shopName}
                </p>
                <p className="text-xs text-slate-500">
                  {merchant.tagline} • {merchant.inventory.length} products loaded • WhatsApp:{' '}
                  {merchant.whatsapp}
                </p>
              </div>
            </div>
          ) : (
            <div className="animate-fade-up mx-auto flex max-w-2xl items-center gap-3 rounded-xl border border-amber-200 bg-amber-50/70 px-4 py-3">
              <AlertCircle className="h-5 w-5 shrink-0 text-amber-600" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-800">Koi merchant selected nahi</p>
                <p className="text-xs text-slate-500">
                  Neeche se ek merchant choose karein ya URL me ?shop= add karein.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Merchant switcher */}
        <section className="mb-10 flex flex-wrap justify-center gap-2">
          {MERCHANT_SLUGS.map((s) => {
            const m = MERCHANTS[s];
            const active = slug === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setShopParam(s)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                  active
                    ? 'border-emerald-500 bg-emerald-600 text-white shadow-sm'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:bg-emerald-50'
                }`}
              >
                <Store className="h-3.5 w-3.5" />
                {m.shopName}
              </button>
            );
          })}
        </section>

        {/* Steps */}
        <section className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className="animate-fade-up flex items-start gap-3 rounded-xl border border-slate-200 bg-white/70 p-4 backdrop-blur-sm"
              style={{ animationDelay: `${200 + i * 80}ms` }}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
                {s.num}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-800">{s.title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Control box */}
        <section className="flex justify-center">
          {loaded ? (
            <MerchantControlBox config={config} onChange={update} />
          ) : (
            <div className="h-72 w-full max-w-2xl animate-pulse rounded-2xl border border-slate-200 bg-white/60" />
          )}
        </section>

        {/* Features */}
        <section className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="animate-fade-up group rounded-xl border border-slate-200 bg-white/70 p-5 backdrop-blur-sm transition hover:border-emerald-200 hover:shadow-md"
              style={{ animationDelay: `${300 + i * 80}ms` }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition group-hover:scale-110">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-slate-800">{f.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-14 border-t border-slate-200 pt-6 text-center">
          <p className="text-xs text-slate-400">
            Bazar Assistant Integration Tool • Roman Urdu AI Customer Support for Pakistani E-commerce
          </p>
        </footer>
      </main>

      {/* Floating chat widget */}
      <ChatWidget config={config} merchant={merchant} />
    </div>
  );
}
