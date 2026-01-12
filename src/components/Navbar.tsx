import React from 'react';
import { ChevronDown, Leaf } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/30">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="text-foreground transform rotate-45">
                        <Leaf size={24} fill="currentColor" className="text-foreground" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">Monotree</span>
                </div>

                {/* Links - Hidden on mobile, visible on lg */}
                <div className="hidden lg:flex items-center gap-8">
                    {['Product', 'Why us', 'About us', 'Cases', 'Blog'].map((item) => (
                        <div key={item} className="flex items-center gap-1 group cursor-pointer">
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                {item}
                            </span>
                            {item === 'Product' && <ChevronDown size={14} className="text-muted-foreground group-hover:text-foreground" />}
                        </div>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <button className="hidden sm:block px-5 py-2.5 bg-card/70 hover:bg-card border border-border/50 text-sm font-semibold text-foreground rounded-xl transition-colors shadow-sm">
                        Book a demo
                    </button>

                    <div className="flex items-center gap-1 cursor-pointer text-muted-foreground hover:text-foreground">
                        <span className="text-sm font-medium">English</span>
                        <ChevronDown size={14} />
                    </div>

                    {/* Theme Toggle */}
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
