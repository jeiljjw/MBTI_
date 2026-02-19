import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServiceWorkerRegister } from "@/components/service-worker-register";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.simplembti.com"),
  title: "MBTI 성격 유형 테스트",
  description: "나의 성격 유형을 알아보는 MBTI 테스트",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MBTI Test",
  },
  openGraph: {
    title: "MBTI 성격 유형 테스트",
    description: "나의 성격 유형을 알아보는 MBTI 테스트",
    url: "https://www.simplembti.com",
    siteName: "MBTI Test",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MBTI 성격 유형 테스트",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBTI 성격 유형 테스트",
    description: "나의 성격 유형을 알아보는 MBTI 테스트",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">

 <head>
 <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3266167319535063"
      crossOrigin="anonymous"></script>
 </head>

      <body
        className={`${notoSansKR.variable} antialiased`}
      >
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3266167319535063"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <ServiceWorkerRegister />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
