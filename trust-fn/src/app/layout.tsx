import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NotificationProvider } from "./ui/shared/notification/notificationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:  "Trust - find trusted home service workers",
    template: "Trust - %s"
  },
  description: "trusted workers online ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <NotificationProvider>
          {children}
        </NotificationProvider>
        </body>
    </html>
  );
}
