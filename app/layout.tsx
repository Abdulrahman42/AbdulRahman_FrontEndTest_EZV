import type { Metadata } from "next";

import "./globals.css";
import Template from "@/Template/TemplateLayout";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo app with Redux Toolkit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Template>
          {children}
        </Template>
      </body>
    </html>
  );
}
