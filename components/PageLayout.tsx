import Head from 'next/head'
import styles from '../styles/PageLayout.module.scss'
import Image from 'next/future/image'
import Logo from '../assets/logodev.svg'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

export default function PageLayout({ children }) {
   const { scrollY } = useScroll()

   const itemLinkOne = {
      show: {
         opacity: 1,
         x: 0,
         transition: {
            duration: 0.5,
         },
      },
      hidden: { opacity: 0, x: -100 },
   }

   const itemLinkTwo = {
      show: {
         opacity: 1,
         x: 0,
         transition: {
            duration: 0.5,
            delay: 0.3,
         },
      },
      hidden: { opacity: 0, x: -120 },
   }

   const itemLinkThree = {
      show: {
         opacity: 1,
         x: 0,
         transition: {
            duration: 0.7,
            delay: 0.5,
            ease: 'bounceIn',
         },
      },
      hidden: { opacity: 0, x: -140 },
   }

   const itemLinkFour = {
      show: {
         opacity: 1,
         x: 0,
         transition: {
            duration: 0.9,
            delay: 0.7,
            ease: 'bounceIn',
         },
      },
      hidden: { opacity: 0, x: -160 },
   }

   const opacity = useTransform(scrollY, [0, 200], [1, 0])
   const gap = useTransform(scrollY, [400, 600], ['1rem', '1rem'])

   return (
      <>
         <Head>
            <title>Nayit Desaily</title>
         </Head>
         <header className={styles.header}>
            <motion.div style={{ opacity }}>
               <Image
                  src={Logo}
                  className={styles.logoImg}
                  alt="My brand logo"
               />
            </motion.div>

            <nav className={styles.navBar}>
               <motion.ul className={styles.navBarList} style={{ gap }}>
                  <AnimatePresence>
                     <Link href="/">
                        <motion.a
                           className={styles.navBarListLink}
                           whileHover={{
                              color: 'white',
                              rotate: '-5deg',
                           }}
                           variants={itemLinkOne}
                           initial="hidden"
                           animate="show"
                        >
                           Home
                        </motion.a>
                     </Link>
                     <Link href="#expertise">
                        <motion.a
                           className={styles.navBarListLink}
                           variants={itemLinkTwo}
                           initial="hidden"
                           animate="show"
                           whileHover={{
                              color: 'white',
                              rotate: '-5deg',
                           }}
                        >
                           Expertise
                        </motion.a>
                     </Link>
                     <Link href="#work">
                        <motion.a
                           className={styles.navBarListLink}
                           variants={itemLinkThree}
                           initial="hidden"
                           animate="show"
                           whileHover={{
                              color: 'white',
                              rotate: '-5deg',
                           }}
                        >
                           Work
                        </motion.a>
                     </Link>
                     <Link href="#contact">
                        <motion.a
                           className={styles.navBarListLink}
                           variants={itemLinkFour}
                           initial="hidden"
                           animate="show"
                           whileHover={{
                              color: 'white',
                              rotate: '-5deg',
                           }}
                        >
                           Contact
                        </motion.a>
                     </Link>
                  </AnimatePresence>
               </motion.ul>
            </nav>
         </header>

         <main className={styles.main}>{children}</main>
      </>
   )
}
