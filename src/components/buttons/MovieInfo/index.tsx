import Link from 'next/link';
import style from './style.module.css';

type TporpsId = {
  id_movie: number;
};
const InfoMore = ({ id_movie }: TporpsId) => {
  return (
    <button className={style.button}>
      <Link href={{ pathname: '/movie', query: { id: id_movie } }}>
        Saiba mais...
      </Link>
    </button>
  );
};

export default InfoMore;
