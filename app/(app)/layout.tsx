import BottomNav from "../../components/bottom-nav";
import Sidebar from "../../components/sidebar";

export default function AppLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div className="desktop">
        <Sidebar />
      </div>

      <main style={{ flex: 1, paddingBottom: 80 }}>
        {children}
      </main>

      <div className="mobile">
        <BottomNav />
      </div>
    </div>
  );
}
