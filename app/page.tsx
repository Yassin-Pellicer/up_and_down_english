'use client';

import { useEffect, useState } from 'react';
import { Details } from './components/details';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { useTranslation } from 'react-i18next';
import { InViewSection } from './components/motion';

export default function Home() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (i18n.isInitialized) {
      setReady(true);
    } else {
      i18n.on('initialized', () => setReady(true));
    }

    return () => {
      i18n.off('initialized', () => setReady(true));
    };
  }, [i18n]);

  if (!mounted || !ready) return null;

  return (
    <div className="flex justify-center flex-col items-center bg-gradient-to-br from-[#c9f5f6] to-blue-600">
      <Header />
      <div className="flex flex-col max-w-6xl px-8">
        <InViewSection triggerKey={i18n.language}>
          <Hero />
        </InViewSection>
      </div>
      <div className="flex flex-col max-w-6xl px-8">
        <InViewSection triggerKey={i18n.language}>
          <Details />
        </InViewSection>
      </div>
    </div>
  );
}
