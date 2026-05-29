import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "One O Eight Lifestyle Cafe | Australian Brunch & Coffee — Koregaon Park, Pune",
  description:
    "One O Eight Lifestyle Cafe — Pune's favourite Australian-style brunch cafe in Koregaon Park. All-day breakfast, wood-fired pizza, smoothie bowls, artisan coffee & healthy eats. Vegan & gluten-free options.",
  keywords: [
    "One O Eight Cafe",
    "One O Eight Lifestyle Cafe",
    "108 Cafe Pune",
    "Australian Cafe Pune",
    "Brunch Cafe Pune",
    "Koregaon Park Cafe",
    "Healthy Cafe Pune",
    "Smoothie Bowl Pune",
    "Wood Fired Pizza Pune",
    "Best Coffee Pune",
    "Vegan Cafe Pune",
    "All Day Breakfast Pune",
  ],
  authors: [{ name: "One O Eight Lifestyle Cafe" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "One O Eight Lifestyle Cafe | Australian Brunch & Coffee",
    description:
      "Pune's favourite Australian-style cafe. All-day breakfast, smoothie bowls, wood-fired pizza & artisan coffee.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "One O Eight Lifestyle Cafe | Australian Brunch & Coffee",
    description:
      "Pune's favourite Australian-style cafe. All-day breakfast, smoothie bowls, wood-fired pizza & artisan coffee.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${jakarta.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
