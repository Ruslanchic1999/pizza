import React from 'react';

import styles from '../components/notFound.jsx'

function NotFoundBlock(props) {
    return (
        <div className={styles.root}>
            <b>😕</b>
            <br></br>
            <h1>Nothing not found :(</h1>
            <p className={styles.description}>Unfortunately this page doesn't exist</p>
        </div>
    );
}

export default NotFoundBlock;