import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent opacity-90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent opacity-90" />
      <div className="pointer-events-none absolute -inset-x-10 top-1/3 h-64 blur-3xl" aria-hidden>
        <div className="mx-auto max-w-5xl h-full bg-emerald-500/10 rounded-full" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
              Build. Preview. Ship.
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Ship modern web apps at the edge with zero-config deployments, smart previews, and global scale—designed for performance and developer happiness.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#start" className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition">
                Start Deploying
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#docs" className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 text-white px-5 py-3 text-sm font-medium hover:bg-white/20 transition">
                Read the docs
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-emerald-400" />
                Edge-first
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-400" />
                Secure by default
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
