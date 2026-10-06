import { Header } from '../Header/Header';  // ← con llaves
import { Footer } from '../Footer/Footer';  // ← con llaves
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;