import styles from '../styles/Contact.module.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import CircleVector from './CircleVector'

export default function Contact() {
   const { scrollY } = useScroll()

   const translateXTitle = useTransform(scrollY, [2700, 3000], [-30, 0])
   const translateXTitleShadow = useTransform(scrollY, [2700, 3000], [30, 0])
   const opacity = useTransform(scrollY, [2700, 3000], [0, 1])
   const changeBackgroundColor = useTransform(
      scrollY,
      [2500, 3000],
      ['#89B0AC', '#FFDD00']
   )

   return (
      <motion.div
         className={styles.contact}
         id="contact"
         style={{ backgroundColor: changeBackgroundColor }}
      >
         <div className={styles.contactTitleContainer}>
            <motion.h1
               className={styles.contactTitle}
               style={{ translateX: translateXTitle, opacity }}
            >
               Contact
            </motion.h1>
            <motion.h1
               className={styles.contactTitleShadow}
               style={{ translateX: translateXTitleShadow, opacity }}
            >
               Contact.
            </motion.h1>
         </div>
         <motion.h5 className={styles.getInTouch} style={{ opacity }}>
            Lets get in touch!
         </motion.h5>
         <motion.p className={styles.contactDescription} style={{ opacity }}>
            I'm very active on
            <a
               href="https://www.linkedin.com/in/nayit-desaily"
               target="_blank"
               rel="noopener"
            >
               LinkedIn
            </a>
            but if you want contact to me you can send me an email ,I am ready
            to apply all my knowledge and sure that i can be a great piece for
            your company to achieve all goals
         </motion.p>

         <motion.a
            type="application/pdf"
            download="resume.pdf"
            href="/resume.pdf"
            className={styles.cvButton}
            initial={{ y: '0px' }}
            animate={{ y: '20px' }}
            transition={{
               duration: 1.5,
               ease: 'linear',
               repeat: Infinity,
               repeatType: 'reverse',
            }}
         >
            <p>Download CV</p>
            <FontAwesomeIcon icon={faFileDownload} />
         </motion.a>

         <div className={styles.socialNetwork}>
            <ul>
               <li>
                  <a
                     href="https://github.com/Nayitdesaily"
                     className={styles.socialLink}
                  >
                     Github
                  </a>
               </li>
               <li>
                  <a
                     href="www.linkedin.com/in/nayit-desaily"
                     className={styles.socialLink}
                  >
                     Linkedin
                  </a>
               </li>
               <li>
                  <a
                     href="mailto: nayitdesailydev@gmail.com"
                     className={styles.socialLink}
                  >
                     nayitdesailydev@gmail.com
                  </a>
               </li>
            </ul>
         </div>
         <CircleVector topVector="10%" leftVector="15%" />
         <CircleVector topVector="75%" leftVector="70%" />
      </motion.div>
   )
}
