import React, { useContext, useRef } from 'react';
import Alert from '../components/layouts/Alert';
import Users from '../components/layouts/Users';
import { context, dispatchContext } from '../components/react/context';

import styles from '../styles/homePage.module.css';

function HomePage() {
  const text = useRef();
  
  const { users } = useContext(context);
  const { searchUsers, clearUsers, setAlert } = useContext(dispatchContext);

  const setOnSubmit = (e) => {
    e.preventDefault();
    const user = text.current.value;
    
    if (user === '') {
      setAlert('Insira um texto válido');
      return;
    };

    searchUsers(user);
  };

  const setClear = () => {
    text.current.value = '';
    clearUsers()
  };

  return (
    <section className={styles.container}>
      <Alert />
      <form className={styles.form} onSubmit={setOnSubmit}>
        <input
          type="text"
          ref={text}
          placeholder='Pesquise por usuários'
        />

        <button
          type='submit'
          className={styles.btn}
        >
          Pesquisar
        </button>
        {users.length > 0 && (
          <button
            type='button'
            className={styles.btn2}
            onClick={setClear}
          >
            Limpar resultados
          </button>
        )}
      </form>

      <Users />

    </section>
  );
};

export default HomePage;
