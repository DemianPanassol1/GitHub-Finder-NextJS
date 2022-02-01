import React, { useContext } from 'react';
import { context, dispatchContext } from '../react/context';

import styles from '../../styles/alert.module.css';

function Alert() {
    const { alertMessage } = useContext(context);
    const { dismissAlert } = useContext(dispatchContext);

    return alertMessage !== null && (
        <div className={styles.container}>
            <p>{alertMessage}</p>
            <button onClick={() => dismissAlert()}>
                <i className="fas fa-times"></i>
            </button>
        </div>
    );
};

export default Alert;
