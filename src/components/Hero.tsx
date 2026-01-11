import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { useThemeStore } from '../store/theme-store';

const Hero: React.FC = () => {
    const { theme } = useThemeStore();
    const [isDark, setIsDark] = useState(false);

    // Determine if we're in dark mode (considering system preference)
    useEffect(() => {
        if (theme === 'system') {
            const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDark(systemDark);

            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
            mediaQuery.addEventListener('change', handler);
            return () => mediaQuery.removeEventListener('change', handler);
        } else {
            setIsDark(theme === 'dark');
        }
    }, [theme]);

    // Choose image based on theme
    const heroImage = isDark ? '/dark.png' : '/hero-illustration-optimized.png';

    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Content */}
                <div className="max-w-xl">
                    <h1 className="text-[3.5rem] leading-[1.1] font-bold text-foreground mb-6 tracking-tight">
                        Put people <span className="relative inline-block">
                            first
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-foreground opacity-20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-medium">
                        Fast, user-friendly and engaging - turn HR into people and culture and streamline your daily operations with your own branded app.
                    </p>

                    {/* Email Form */}
                    <div className="flex flex-col sm:flex-row gap-3 p-1.5 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-md max-w-md mb-12 focus-within:ring-2 focus-within:ring-monotree-green/20 transition-all">
                        <input
                            type="email"
                            placeholder="Enter work email"
                            className="flex-1 px-4 py-3 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                        />
                        <button className="px-6 py-3 bg-monotree-green hover:bg-green-400 text-black font-bold rounded-xl transition-colors whitespace-nowrap shadow-sm">
                            Book a demo
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="flex items-start gap-12 border-t border-border pt-8">
                        <div>
                            <div className="text-3xl font-bold text-foreground mb-1">75.2%</div>
                            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Average daily activity</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-foreground mb-1">~20k</div>
                            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Average daily users</div>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-8">
                        <div className="flex gap-0.5 text-foreground">
                            {[1, 2, 3, 4].map(i => <Star key={i} size={20} fill="currentColor" />)}
                            <div className="relative">
                                <Star size={20} fill="currentColor" className="text-muted-foreground opacity-30" />
                                <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
                                    <Star size={20} fill="currentColor" className="text-foreground" />
                                </div>
                            </div>
                        </div>
                        <span className="font-bold text-foreground ml-1">4.5</span>
                        <span className="text-muted-foreground text-sm">Average user rating</span>
                    </div>
                </div>

                {/* Right Content - Illustration Area */}
                <div className="relative h-[700px] w-full hidden lg:block perspective-1000">
                    <div className="absolute inset-0 flex items-center justify-center scale-110">
                        <img
                            src={heroImage}
                            alt="App Illustration"
                            className="w-full h-full object-contain drop-shadow-2xl transition-opacity duration-300"
                            loading="eager"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                if (target.src.includes('.png')) {
                                    target.src = '/hero-fallback.svg';
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

