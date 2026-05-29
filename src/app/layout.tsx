import type { Metadata } from "next";
import { Lora, Karla } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cafe Kathaa | Where Books Meet Gourmet Delights — FC Road, Pune",
  description:
    "Cafe Kathaa — Where stories unfold over handcrafted coffee. A bungalow-style book cafe on FC Road, Pune with co-working space, literary vibes, chicken steaks, fruit pizzas & blueberry cheesecake. Featured on Shark Tank India.",
  keywords: [
    "Cafe Kathaa",
    "Cafe कथा",
    "Book Cafe Pune",
    "FC Road Cafe",
    "Co-working Cafe Pune",
    "Shark Tank Cafe",
    "Best Cafe FC Road",
    "Literary Cafe Pune",
    "Chicken Steak Pune",
    "Fruit Pizza Pune",
    "Blueberry Cheesecake Pune",
    "Laptop Friendly Cafe Pune",
  ],
  authors: [{ name: "Cafe Kathaa" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Cafe Kathaa | Where Books Meet Gourmet Delights",
    description:
      "A bungalow-style book cafe on FC Road. Books, co-working, handcrafted coffee & gourmet food.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafe Kathaa | Where Books Meet Gourmet Delights",
    description:
      "A bungalow-style book cafe on FC Road. Books, co-working, handcrafted coffee & gourmet food.",
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
        className={`${lora.variable} ${karla.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
