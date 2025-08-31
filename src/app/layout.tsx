import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Reperio",
  description: "What is my IP? Instantly discover your IPv4 or IPv6 address, see your approximate location, and find out what information your IP reveals about you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
