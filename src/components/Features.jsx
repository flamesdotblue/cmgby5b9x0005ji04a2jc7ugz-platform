import React from 'react';
import { Boxes, Rocket, Shield, Zap, Server } from 'lucide-react';

const FEATURES = [
  {
    icon: <Zap className="h-5 w-5 text-emerald-400" />,
    title: 'Edge Runtime',
    desc: 'Dynamic rendering near your users for low latency and blazing fast responses.',
  },
  {
    icon: <Boxes className="h-5 w-5 text-emerald-400" />,
    title: 'Zero Config',
    desc: 'Push to deploy. We infer your framework, commands, and routes automatically.',
  },
  {
    icon: <Server className="h-5 w-5 text-emerald-400" />,
    title: 'Global Network',
    desc: 'Deploy across multiple regions with automatic failover and smart caching.',
  },
  {
    icon: <Shield className="h-5 w-5 text-emerald-400" />,
    title: 'Security Built-in',
    desc: 'Automatic HTTPS, isolation, and secrets management keep your apps protected.',
  },
  {
    icon: <Rocket className="h-5 w-5 text-emerald-400" />,
    title: 'Preview Workflows',
    desc: 'Every PR gets a unique environment for reviews and QA. No extra setup needed.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Everything you need to go from idea to production</h2>
          <p className="mt-4 text-white/70">A platform optimized for speed, collaboration, and reliability.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition p-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                  {f.icon}
                </div>
                <h3 className="font-medium">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
