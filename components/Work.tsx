import { motion, useScroll, useTransform } from 'framer-motion'
import styles from '../styles/Work.module.scss'
import Project from './Project'

export default function Work() {
   const { scrollY } = useScroll()

   const opacity = useTransform(scrollY, [800, 1100], [0, 1])

   const changeBackgroundColor = useTransform(
      scrollY,
      [800, 1200],
      ['#B6AF59', '#89B0AC']
   )

   return (
      <motion.div
         className={styles.work}
         id="work"
         style={{ backgroundColor: changeBackgroundColor }}
      >
         <motion.h3 className={styles.workTitle} style={{ opacity }}>
            My Work.
         </motion.h3>

         <Project
            title="Pokedex"
            technology="HTML | CSS | ReactJs | Axios"
            description="A website where you can find your fav pokemon and watch out
                  their stats but first you must enter your name, this web was
                  developed with API where i get all pokemon's information"
            url="https://pokedex-nayit-desaily.netlify.app"
            firstValueY="1100"
            secondValueY="1300"
            buttonDescription="Show Project"
         />

         <Project
            title="Rick & Morty"
            technology="HTML | CSS | ReactJs | React-bootstrap | Axios"
            description="A website where you can browse between the rick and morty's universe, 
            you can filter the characther by universe number and watch the stats of every single charachter"
            url="https://pokedex-nayit-desaily.netlify.app"
            firstValueY="1300"
            secondValueY="1700"
            buttonDescription="Show Project"
         />

         <Project
            title="Linguini Rest"
            technology="NodeJS | Express | JWT | Sequelize | Bcrypt | PostgreSQL"
            description="A backend app was develop with CRUD method and MVC arquitecture, 
            use enviroment variables to protect credentials and hash password for major security "
            url="https://github.com/Nayitdesaily/academlo-meals.git"
            firstValueY="1700"
            secondValueY="2100"
            buttonDescription="Show Code (Github)"
         />

         <Project
            title="Ecommerce"
            technology="NodeJS | Express | JWT | Sequelize | Bcrypt | PostgreSQL | Heroku"
            description="A backend app was develop with CRUD method and MVC arquitecture, 
            use enviroment variables to protect credentials and hash password for major security"
            url="https://github.com/Nayitdesaily/ecommerce-academlo-store.git"
            firstValueY="2100"
            secondValueY="2500"
            buttonDescription="Show Code (Github)"
         />
      </motion.div>
   )
}
