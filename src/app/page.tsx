import CounterHandler from '../components/Counter';
import { api } from '../services/axios/api';
import styles from "./styles/index.module.scss";
import { Chakra_Petch } from "next/font/google";

const chrakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--chakra'
})

export default async function Counter() {
  return (
    <main className={`${styles.counterWrapper} ${chrakraPetch.variable}`}>
      <div className={styles.counter}>     
        <h1>Quanto tempo o <span className={styles.highlightPink}>time rosa</span> está com <span className={styles.highlightYellow}>energia</span> 💡</h1>
        <CounterHandler />
      </div>
    </main>
  )
}