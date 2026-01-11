
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground font-primary selection:bg-monotree-green/30 transition-colors duration-200">
        <Navbar />
        <main>
          <Hero />
        </main>

        {/* Cookie Banner (Placeholder for now) */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-40">
          <div className="bg-card/90 backdrop-blur-sm rounded-xl shadow-lg border border-border/50 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-2xl">🍪</div>
              <div className="text-sm text-muted-foreground font-medium">
                <span className="font-bold text-foreground">Cookie Time</span> We use cookies to enhance your experience. Learn more in our <a href="#" className="underline hover:text-foreground">Cookie Policy</a>.
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-sm font-semibold rounded-lg border border-border hover:border-border hover:bg-muted transition-colors">
                Accept
              </button>
              <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
