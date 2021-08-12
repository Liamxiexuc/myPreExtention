import React from 'react';
import EmptyLightning from '../../../../assets/lightning-empty.png';
import FullLightning from '../../../../assets/lightning-full.png';
import styles from './GradeSection.module.css';

const GradeSection = ({ inviteCount }) => {
  const isPro = inviteCount > 2;
  const fullIconCount = inviteCount > 3 ? 3 : inviteCount;
  const emptyIconCount = 3 - inviteCount > 0 ? 3 - inviteCount : 0;
  return (
    <>
      {isPro ? (
        <p className={styles.msg}>
          ENJOY UNLIMITED AND ALL THE ADVANCED POWER FEATURES...
        </p>
      ) : (
        <p className={styles.msg}>
          ADD {emptyIconCount} MORE INVITE TO UNLOCK THE ADVANCED
          POWER FEATURES...
        </p>
      )}
      <div className={styles.iconWrap}>
        {Array(fullIconCount)
          .fill(1)
          .map(() => (
            <img
              className={styles.img}
              src={FullLightning}
              alt="default"
            ></img>
          ))}
        {Array(emptyIconCount)
          .fill(1)
          .map(() => (
            <img
              className={styles.img}
              src={EmptyLightning}
              alt="default"
            ></img>
          ))}
      </div>
    </>
  );
};

export default GradeSection;
