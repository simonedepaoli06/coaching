import "./globals.css";

export const metadata = {
  title: "Coach AI",
  description: "Coach digitale per corsa e ciclismo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body style={{ margin: 0, background: '#0a0a0a', color: 'white' }}>
        {children}
      </body>
    </html>
  );
}
