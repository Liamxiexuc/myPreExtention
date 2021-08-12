import React from 'react';
import EmptyLightning from '../../../../assets/lightning-empty.png';
import FullLightning from '../../../../assets/lightning-full.png';
import styles from './GradeSection.module.css';

const GradeSection = ({ inviteCount, isAdmin }) => {
  let isPro = inviteCount > 2;
  let fullIconCount = inviteCount > 3 ? 3 : inviteCount;
  let emptyIconCount = 3 - inviteCount > 0 ? 3 - inviteCount : 0;
  if (isAdmin) {
    isPro = true;
    fullIconCount = 3;
    emptyIconCount = 0;
  }
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
          .map((_, index) => (
            <img
              key={index}
              className={styles.img}
              src={FullLightning}
              alt="yellow lightning icon"
            ></img>
          ))}
        {Array(emptyIconCount)
          .fill(1)
          .map((_, index) => (
            <img
              key={index}
              className={styles.img}
              src={EmptyLightning}
              alt="grey lightning icon"
            ></img>
          ))}
      </div>
    </>
  );
};

export default GradeSection;
