import Link from 'next/link';

export default function BottomNav() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-around',
      padding: 12,
      background: '#111'
    }}>
      <Link href="/dashboard">Home</Link>
      <Link href="/calendario">Calendario</Link>
      <Link href="/allenamenti">Allenamenti</Link>
      <Link href="/chat">Chat</Link>
    </div>
  );
}
