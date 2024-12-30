import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script'; // Add this import
import './globals.css';
import Navbar from '@/components/Navbar';
import { AuthProvider } from './providers';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Clarity from '@microsoft/clarity';
const inter = Inter({ subsets: ['latin'] });

const projectId = "piazawt4d4"

Clarity.init(projectId);
export const metadata: Metadata = {
  title: 'Dialogflow Buddy',
  description: 'Your AI-powered assistant for Dialogflow development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script 
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "piazawt4d4");
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <div className="min-h-screen bg-gray-900">
            {children}
          </div>
          <Analytics />
          <SpeedInsights />
        </AuthProvider>
      </body>
    </html>
  );
}