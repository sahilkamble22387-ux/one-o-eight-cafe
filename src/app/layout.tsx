import type { Metadata } from "next";
import { Pacifico, Poppins } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  variable: "--font-pacifico",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cafe Mhuzo Goa | Pune's Favourite Goan Book Cafe — FC Road",
  description:
    "Cafe Mhuzo Goa — 'My Goa' in Konkani. Pune's beloved Goan-styled book cafe on FC Road with swings, bunk beds, bean bags, books, open mic events & beach vibes. Great coffee, sandwiches, fries & more.",
  keywords: [
    "Cafe Mhuzo Goa",
    "Cafe Mhuzo",
    "Book Cafe Pune",
    "Goan Cafe Pune",
    "FC Road Cafe",
    "Boho Cafe Pune",
    "Pet Friendly Cafe Pune",
    "Open Mic Pune",
    "Best Cafe FC Road",
    "Swings Cafe Pune",
    "Bunk Bed Cafe",
  ],
  authors: [{ name: "Cafe Mhuzo Goa" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Cafe Mhuzo Goa | Pune's Favourite Goan Book Cafe",
    description:
      "Goan-styled book cafe on FC Road. Swings, bunk beds, books, beach vibes & great food.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafe Mhuzo Goa | Pune's Favourite Goan Book Cafe",
    description:
      "Goan-styled book cafe on FC Road. Swings, bunk beds, books, beach vibes & great food.",
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
        className={`${pacifico.variable} ${poppins.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
