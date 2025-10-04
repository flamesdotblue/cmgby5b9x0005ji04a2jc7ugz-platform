import React from 'react';
import { Rocket, Globe, Server } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-green-400/90" />
          <span className="font-semibold tracking-tight">Nebula Deploy</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#docs" className="hover:text-white transition flex items-center gap-2"><Globe className="h-4 w-4" />Docs</a>
          <a href="#regions" className="hover:text-white transition flex items-center gap-2"><Server className="h-4 w-4" />Regions</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#login" className="text-sm text-white/80 hover:text-white transition">Log in</a>
          <a href="#start" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition">
            <Rocket className="h-4 w-4" />
            Deploy
          </a>
        </div>
      </div>
    </header>
  );
}
