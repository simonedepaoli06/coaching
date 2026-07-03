export default function Dashboard() {
  const card = {
    background: '#1a1a1a',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard atleta</h2>

      <div style={card}>Forma fisica</div>
      <div style={card}>Recupero</div>
      <div style={card}>Carico settimanale</div>
      <div style={card}>Ultimo allenamento</div>

      <div style={{ marginTop: 20, ...card }}>
        Insight Coach AI
      </div>
    </div>
  );
}
