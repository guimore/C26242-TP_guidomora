
import "./Footer.css";

export const Footer = () => {
  const equipo = [
    { id: 1, nombre: "Guido", rol: "Fundador & Dueño", foto: "https://i.pravatar.cc/150?img=12", linkedin: "#" },
    { id: 2, nombre: "Belén Romero", rol: "Desarrolladora", foto: "https://i.pravatar.cc/150?img=5", linkedin: "#" },
    { id: 3, nombre: "Juan Pérez", rol: "Atención al Cliente", foto: "https://i.pravatar.cc/150?img=3", linkedin: "#" }
  ];

  return (
    <footer>
      <div className="footer-info">
        <h3>🛒 Mi Kiosco</h3>
        <p>Tu kiosco de confianza, con todo lo que necesitás.</p>
        <p>📧 contacto@mikiosco.com</p>
        <p>📞 +54 11 1234-5678</p>
        <p>📍 Buenos Aires, Argentina</p>
      </div>

      <div className="footer-team">
        <h4>Nuestro Equipo</h4>
        <div className="team-cards">
          {equipo.map((persona) => (
            <div key={persona.id} className="team-card">
              <img src={persona.foto} alt={persona.nombre} />
              <h5>{persona.nombre}</h5>
              <p>{persona.rol}</p>
              <a href={persona.linkedin}>LinkedIn</a>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Mi Kiosco. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};