import "./globals.css";
import { Inter, WindSong } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const windSong = WindSong({ weight: "500", subsets: ["latin"] });
export const metadata = {
  title: "MineSweeper",
  description: "MineSweeper app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kablammo&family=Press+Start+2P&family=Roboto&family=WindSong:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={windSong.className}>{children}</body>
    </html>
  );
}
