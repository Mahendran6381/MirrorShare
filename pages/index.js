import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.css'
import Login from '../components/Auth/Login/Login'

function Home() {
 

  return (
    <main className={styles.main}>
     <Login/>
    </main>
  )
}

export default Home
