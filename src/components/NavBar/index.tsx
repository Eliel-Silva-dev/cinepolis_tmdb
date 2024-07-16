import Link from 'next/link';
import style from './style.min.module.css';
import { BiSolidCameraMovie } from 'react-icons/bi';
import Lupa from '../buttons/Lupa';

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <div id={style.logo}>
        <BiSolidCameraMovie />
        <h2 className={style.logo_title}>
          <Link href={'/'}>Cinemania</Link>
        </h2>
        <ul id={style.menu}>
          <li>
            <Link href={'/'}>Inicio</Link>
          </li>
          <li>
            <Link href={'/moviesGenre'}>Filmes</Link>
          </li>
          <li className={style.block}>
            <Link href={'/'}>Series</Link>
          </li>
        </ul>
      </div>
      <Lupa />
    </nav>
  );
};

export default NavBar;
