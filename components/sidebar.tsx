import Link from 'next/link';

export default function Sidebar() {
  return (
    <div style={{
      width: 200,
      padding: 20,
      background: '#111',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }}>
      <h3>Coach AI</h3>

      <Link href="/dashboard">Dashboard</Link>
      <Link href="/calendario">Calendario</Link>
      <Link href="/allenamenti">Allenamenti</Link>
      <Link href="/chat">Chat</Link>
    </div>
  );
}
