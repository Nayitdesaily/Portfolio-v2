import styles from '../styles/Home.module.scss'
import PageLayout from '../components/PageLayout'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import About from '../components/About'
import Work from '../components/Work'
import Contact from '../components/Contact'

export default function Home() {
   const { scrollY } = useScroll()

   const opacityDescription = useTransform(scrollY, [0, 250], [1, 0])
   const translateXFirstHomeDescription = useTransform(
      scrollY,
      [0, 200],
      [0, -50]
   )
   const translateXSecondHomeDescription = useTransform(
      scrollY,
      [0, 200],
      [0, 50]
   )

   return (
      <PageLayout>
         <div className={styles.home}>
            <div className={styles.homeContainer}>
               <motion.h1
                  className={styles.homePresentation}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  style={{ opacity: opacityDescription }}
               >
                  <span className={styles.homePresentationName}>
                     Nayit Desaily.
                  </span>{' '}
                  <br />
                  <span className={styles.homePresentationCarrer}>
                     <span>Frontend & Backend</span> developer
                  </span>
               </motion.h1>

               <div className={styles.homeDescription}>
                  <motion.p
                     className={styles.homeDescriptionOne}
                     initial={{ y: '10vh', opacity: 0 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{
                        duration: 1.5,
                        delay: 0.5,
                        ease: 'backInOut',
                     }}
                     style={{
                        opacity: opacityDescription,
                        translateX: translateXFirstHomeDescription,
                     }}
                  >
                     I am full stack software developer from Perú, <br />{' '}
                     passionate about technology and <br /> software development
                  </motion.p>
                  <motion.p
                     className={styles.homeDescriptionTwo}
                     initial={{ y: '10vh', opacity: 0 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{
                        duration: 1.5,
                        delay: 0.6,
                        ease: 'backInOut',
                     }}
                     style={{
                        opacity: opacityDescription,
                        translateX: translateXSecondHomeDescription,
                     }}
                  >
                     Keep learning every single day to have <br /> the best
                     tools in order to give the best <br /> service to the
                     clients.
                  </motion.p>
               </div>
            </div>
            <motion.div
               className={styles.scrollDown}
               initial={{ y: -10 }}
               animate={{ y: 0 }}
               transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 2,
                  delay: 1.5,
               }}
               style={{ opacity: opacityDescription }}
            >
               <p>Scroll Down</p>
               <div>
                  <FontAwesomeIcon
                     icon={faArrowDown}
                     className={styles.scrollDownSvg}
                  />
               </div>
            </motion.div>
         </div>
         <About />
         <Work />
         <Contact />
      </PageLayout>
   )
}
