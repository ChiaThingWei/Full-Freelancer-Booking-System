import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useClientStore } from '@/lib/store/clientStore';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const {language} = useClientStore()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname,language]);

  return null;
}