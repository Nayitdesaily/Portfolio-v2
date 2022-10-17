import styles from '../styles/CircleVector.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { motion } from 'framer-motion'

export default function CircleVector({ topVector, leftVector }) {
   return (
      <motion.div
         className={styles.circleVector}
         initial={{ rotateZ: '0deg' }}
         animate={{ rotateZ: '360deg' }}
         transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
         }}
         style={{ top: topVector, left: leftVector }}
      >
         <FontAwesomeIcon icon={faCircle} className={styles.circleVectorItem} />
         <FontAwesomeIcon icon={faCircle} className={styles.circleVectorItem} />
         <FontAwesomeIcon icon={faCircle} className={styles.circleVectorItem} />
         <FontAwesomeIcon icon={faCircle} className={styles.circleVectorItem} />
      </motion.div>
   )
}
