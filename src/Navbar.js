import CartWidget from './CartWidget';

function Navbar () {
  return (
    <>
      <header>

        <nav>
          <CartWidget />
          <ul>
            <li><a href="inicio.html">Inicio</a></li>
            <li><a href="perfil.html">Perfil</a></li>
            <li><a href="informacion.html">Información</a></li>
            <li><a href="galeria.html">Galería</a></li>
            <li><a href="caracteristicas.html">Características</a></li>
        </ul>
        </nav>
        
      </header>
    </>
  );
}

export default Navbar