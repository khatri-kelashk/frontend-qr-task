import React, { useCallback } from 'react';

import { URLS } from '../../../constants/constants';

import styles from './index.module.css';

export const NotFound = ({ navigate }) => {
  const handleMainBtn = useCallback(() => navigate(URLS.HOME), [navigate]);

  return (
    <div className={styles.notFoundPage}>
      <Logo lg />
      <div className={styles.head}>
        <h1 className={styles.pageHeader}>404</h1>
        <h2 className={styles.pageHeader}>Page Not Found</h2>
      </div>
      <p className={styles.pageDescription}>
        Requested page does not exist. Return to the home page by clicking the button below.
      </p>
      <div>
        <button onClick={handleMainBtn}>Go to Dashboard</button>
      </div>
    </div>
  );
};
