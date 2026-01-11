
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-[#EFEDE6] text-monotree-black font-primary selection:bg-monotree-green/30">
      <Navbar />
      <main>
        <Hero />
      </main>

      {/* Cookie Banner (Placeholder for now) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-40">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-300/50 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-2xl">🍪</div>
            <div className="text-sm text-gray-600 font-medium">
              <span className="font-bold text-black">Cookie Time</span> We use cookies to enhance your experience. Learn more in our <a href="#" className="underline hover:text-black">Cookie Policy</a>.
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm font-semibold rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors">
              Accept
            </button>
            <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
