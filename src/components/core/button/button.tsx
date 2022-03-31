import styles from './button.module.css'
import type { ButtonProps } from './button.type'

const button = ({}: ButtonProps) => {
  return <button className={styles.btn}>button</button>
}

export default button
