import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'aiteam — AI Team tự động build phần mềm',
  description: 'Mô tả ý tưởng qua Telegram, AI team tự động phân tích, build và deploy.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="dark">
      <body className="bg-bg-dark text-text-white antialiased">
        {children}
      </body>
    </html>
  );
}
