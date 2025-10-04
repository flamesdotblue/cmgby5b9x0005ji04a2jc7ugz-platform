import React from 'react';
import { Rocket } from 'lucide-react';

export default function DeployCTA() {
  return (
    <section id="start" className="relative py-24 bg-gradient-to-b from-black to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Deploy in seconds</h2>
            <p className="mt-4 text-white/70">Connect your Git repository and watch your app go live on our global network. No servers to manage. No config files to juggle.</p>
            <div className="mt-8 flex gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition">
                <Rocket className="h-4 w-4" />
                Deploy from Git
              </a>
              <a href="#docs" className="inline-flex items-center gap-2 rounded-md bg-white/10 text-white px-5 py-3 text-sm font-medium hover:bg-white/20 transition">
                Read the docs
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Terminal
            </div>
            <pre className="p-4 text-sm leading-6 overflow-auto"><code>
$ npm create nebula@latest
✔ Framework detected: React + Vite
✔ Creating project scaffolding
✔ Installing dependencies

$ git push origin main
✔ Build complete in 12s
✔ Deployed to 310 datacenters
✔ Preview: https://nebula.app/your-branch
✔ Production: https://your-app.app
            </code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
