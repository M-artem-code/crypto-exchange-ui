import "../styles/index.css";

import type { ReactNode } from "react";

export const metadata = {
  title: "Биржа с функционалом",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
