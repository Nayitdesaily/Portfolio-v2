import styles from '../styles/Project.module.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Project({
   title,
   technology,
   description,
   url,
   firstValueY,
   secondValueY,
   buttonDescription,
}) {
   const { scrollY } = useScroll()

   const opacity = useTransform(scrollY, [firstValueY, secondValueY], [0, 1])
   const letterSpacing = useTransform(
      scrollY,
      [firstValueY, secondValueY],
      ['.1rem', '0rem']
   )
   const scaleVectorY = useTransform(
      scrollY,
      [firstValueY, secondValueY],
      [0, 1]
   )

   return (
      <div className={styles.projectContainer}>
         <div className={styles.project}>
            <motion.span
               className={styles.vector}
               style={{ scaleY: scaleVectorY }}
            ></motion.span>
            <div className={styles.projectBox}>
               <motion.h4
                  className={styles.projectTitle}
                  style={{ opacity, letterSpacing }}
               >
                  {title}
               </motion.h4>
               <motion.h6 className={styles.projectFeature} style={{ opacity }}>
                  created with {technology}
               </motion.h6>
               <motion.p
                  className={styles.projectDescription}
                  style={{ opacity }}
               >
                  {description}
               </motion.p>
               <motion.button
                  className={styles.buttonProject}
                  initial={{ y: '-30px' }}
                  animate={{ y: 0 }}
                  transition={{
                     duration: 1,
                     ease: 'easeInOut',
                     repeatType: 'reverse',
                     repeat: Infinity,
                  }}
               >
                  <a href={url} target="_blank" rel="noreferrer">
                     {buttonDescription}
                  </a>
               </motion.button>
            </div>
            <motion.span
               className={styles.vector}
               style={{ scaleY: scaleVectorY }}
            ></motion.span>
         </div>
      </div>
   )
}
