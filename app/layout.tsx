import type { Metadata } from "next";
import { figtree } from "./fonts";
import "./globals.css";
import Navbar from "@/components/header/navbar";
import { GrantProvider } from "@/context/grant-context";
import { ProjectProvider } from "@/context/project-context";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/context/cart-context";
import { Footer } from "@/components/footer/footer";
import { ResearcherProvider } from "@/context/researcher-proposal-context";
export const metadata: Metadata = {
  title: "TR3DAO",
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
    <ResearcherProvider>

              <Navbar />
              {children}
              <Toaster />
              <Footer />
              </ResearcherProvider>
            </ProjectProvider>
          </GrantProvider>
        </CartProvider>
      </body>
    </html>
  );
}
