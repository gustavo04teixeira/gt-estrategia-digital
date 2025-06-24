declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = 'G-0BFVZMZRE0'; // seu ID do Google Analytics

// Envia um pageview manualmente
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
