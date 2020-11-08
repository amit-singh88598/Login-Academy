import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Head from 'next/head'
import Footer from '../layouts/footer';
import Header from '../layouts/header';
import Layout from '../layouts/layout';
import styles from '../styles/Home.module.css'
import About from './about';
import Courses from './courses';
import Home from './home'


export default function Index() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Home</title>
      </Head>
      <main>
      <Home />
      </main>
    </div>
  )
}
