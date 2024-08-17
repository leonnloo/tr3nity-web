import type { Metadata } from "next";
import { figtree } from "./fonts";
import "./globals.css";
import Navbar from "@/components/header/navbar";
import { GrantProvider } from "@/context/grant-context";
import { ProjectProvider } from "@/context/project-context";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/context/cart-context";
export const metadata: Metadata = {
  title: "T3inity",
  description: "Your source of funding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <CartProvider>
          <GrantProvider>
            <ProjectProvider>
              <Navbar />
              {children}
              <Toaster />
            </ProjectProvider>
          </GrantProvider>
        </CartProvider>
      </body>
    </html>
  );
}
