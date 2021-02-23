import React from 'react';
import Link from 'next/link';
import Header from '../layouts/header';
import CourseCard from '../components/courseCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CourseSection from '../components/courseSection';
import Footer from '../layouts/footer';
import { makeStyles } from '@material-ui/core';
import Divider from '../components/divider';
import IndividualCard from '../components/individualCard';
import Layout from '../layouts/layout';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
	introSection: {
		paddingLeft: 50,
		paddingRight: 50,
		paddingTop: 40,
		paddingBottom: 20,
		backgroundColor: '#f5f5f5',
		textAlign: 'center'
	},
	headng: {
		textTransform: 'uppercase',
		color: theme.palette.secondary.main
	}
}));

function Courses(props) {
	const classes = useStyles();
	return (
		<Layout>
			<div>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<title>Courses</title>
				</Head>
				<div className={classes.introSection}>
					<h1 className={classes.headng}>OUR COURSES</h1>
					<Divider />
				</div>
				{/* <div className={classes.ourCours}>
        <h1>Our Courses</h1>
      </div> */}
				<CourseSection />
				{/* <div className={classes.introSection}>
					<h1 className={classes.headng}>INDIVIDUAL COURSES</h1>
					<Divider />
				</div>
				{/* <IndividualCard /> */}
			</div>
		</Layout>
	);
}

export default Courses;
