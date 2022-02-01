import React from 'react';
import Image from 'next/image';

import spinner from './spinner.gif';
import styles from '../../styles/loader.module.css';

function Loader() {

  return (
    <div className={styles.container}>
      <Image
        src={spinner}
        width={200}
        height={200}
        layout='fixed'
        alt='Carregando...'
      />
    </div>
  )
};

export default Loader;