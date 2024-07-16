'use client';

import Link from 'next/link';
import './style.min.css';

import { BiSearchAlt } from 'react-icons/bi';

const HandleSearch = () => {
  return (
    <button className="buttonLupa" type="button">
      <Link
        href={{
          pathname: '/search',
          query: 'q=',
        }}
      >
        <BiSearchAlt />
      </Link>
    </button>
  );
};

export default HandleSearch;
