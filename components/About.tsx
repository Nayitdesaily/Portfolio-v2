import styles from '../styles/About.module.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNodeJs } from '@fortawesome/fontawesome-free-brands'

export default function About() {
   const { scrollY } = useScroll()

   const changeBckgrndColor = useTransform(
      scrollY,
      [0, 600],
      ['#3E3963', '#B6AF59']
   )

   const scaleVectorX = useTransform(scrollY, [400, 600], [0, 1])
   const scaleVectorY = useTransform(scrollY, [400, 600], [0, 1])
   const opacity = useTransform(scrollY, [300, 600], [0, 1])

   return (
      <motion.div
         className={styles.about}
         id="expertise"
         style={{ backgroundColor: changeBckgrndColor }}
      >
         <div className={styles.aboutTitle}>
            <motion.h4 style={{ opacity }}>My Expertise.</motion.h4>
         </div>

         <motion.span
            className={styles.vector}
            style={{ scaleX: scaleVectorX }}
         ></motion.span>

         <div className={styles.expertiseContainer}>
            <motion.div className={styles.expertise} style={{ opacity }}>
               <motion.div
                  className={styles.expertiseVector}
                  style={{ scaleY: scaleVectorY }}
               ></motion.div>
               <div className={styles.expertiseCard}>
                  <motion.div className={styles.expertiseTitleContainer}>
                     <FontAwesomeIcon
                        icon={faReact}
                        className={styles.technologySvg}
                     />
                     <motion.h4 className={styles.expertiseTitle}>
                        Frontend Dev. <br /> React, NextJS
                     </motion.h4>
                  </motion.div>

                  <p className={styles.expertiseDescription}>
                     Experience in HTML, CSS, Bootstrap, Javascript, React &
                     Next JS framework, animation librariy such as Framer
                     Motion.
                  </p>
               </div>
            </motion.div>
            <motion.div className={styles.expertise} style={{ opacity }}>
               <motion.div
                  className={styles.expertiseVector}
                  style={{ scaleY: scaleVectorY }}
               ></motion.div>
               <div className={styles.expertiseCard}>
                  <div className={styles.expertiseTitleContainer}>
                     <FontAwesomeIcon
                        icon={faNodeJs}
                        className={styles.technologySvg}
                     />
                     <h4 className={styles.expertiseTitle}>
                        Backend Dev. <br /> NodeJS, ExpressJS
                     </h4>
                  </div>
                  <div className={styles.expertiseDescription}>
                     <p>
                        Develop with NodeJS, ExpressJS, ORM such as Sequelize,
                        MVC Arquitecture, JWT (Authentication), PostgreSQL.
                     </p>
                  </div>
               </div>
               <motion.div
                  className={styles.expertiseVector}
                  style={{ scaleY: scaleVectorY }}
               ></motion.div>
            </motion.div>
         </div>

         <motion.span
            className={styles.vector}
            style={{ scaleX: scaleVectorX }}
         ></motion.span>
      </motion.div>
   )
}
