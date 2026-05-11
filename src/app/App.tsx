import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { TradingChart } from './components/TradingChart';
import { OrderBook } from './components/OrderBook';
import { TradeHistory } from './components/TradeHistory';
import { MarketData } from './components/MarketData';
import { MobileHeader } from './components/MobileHeader';
import { MobileTradingView } from './components/MobileTradingView';
import { MobileNavigation } from './components/MobileNavigation';

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="h-screen flex flex-col bg-background">
        <MobileHeader />
        <div className="flex-1 overflow-y-auto">
          <MobileTradingView />
        </div>
        <MobileNavigation />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">
            <div className="xl:col-span-2">
              <TradingChart />
            </div>
            <div className="h-[500px]">
              <OrderBook />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="h-[400px]">
              <TradeHistory />
            </div>
            <div className="h-[400px]">
              <MarketData />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}