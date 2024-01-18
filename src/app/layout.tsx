import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import "./navigation.modules.scss";

export const metadata: Metadata = {
  title: "LiveInGreece",
  description: "Great Website About Greece",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
