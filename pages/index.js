import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Head from 'next/head'
import Layout from '../layouts/layout';
import styles from '../styles/Home.module.css'
import Home from './home'


export default function Index() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <main>
      <Home />
      </main>
    </div>
  )
}
