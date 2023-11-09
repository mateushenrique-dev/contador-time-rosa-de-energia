'use client'

import useDaysLeft from '../../hooks/useDaysLeft';
import styles from "./styles/index.module.scss";

export default function CounterHandler({ daysLeft }: any) {

  const { daysPassed, resetCounter } = useDaysLeft(daysLeft);

  return (
    <div className={styles.counterHandler}>
      <strong className={styles.number}>{daysPassed}</strong>
      <div className={styles.buttons}>
        <button onClick={resetCounter}>Zerar</button>
      </div>
    </div>
  )
}