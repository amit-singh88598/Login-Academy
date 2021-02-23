import React from 'react';
import CourseCard from '../components/courseCard';
import 'react-multi-carousel/lib/styles.css';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	ourCourses: {
		paddingLeft: 50,
		paddingRight: 50,
		paddingBottom: 80,
		backgroundColor: '#f5f5f5'
	}
}));

const courses = [
	{
		courseName: 'Lokseva Aayog Prepration',
		imgUrl: '/loksewa.jpg',
		courseDescription: [ 'Include of CCA', 'Adobe photoshop', 'Adobe Pagemaker', 'Basic Tally Accounting' ],
		courseDuraton: '6',
		fees: '3000'
	},
	{
		courseName: 'SEE',
		imgUrl: '/see.png',
		courseDescription: [
			'Fundamental of Computer',
			'Windows Overvew',
			'E-mail And Internet',
			'Virus',
			'Applcaton Software0',
			'Typping (Englsh+Nepali)'
		],
		courseDuraton: '6',
		fees: '6000'
	},
	{
		courseName: 'Siksha Seva Aayog',
		imgUrl: '/siksha.png',
		courseDescription: [
			'Include of CCA',
			'HTML5+CSS3+JS',
			'PHP/JSP/ASP',
			'CMS (WP/JUMLA)',
			'6 month Free (1 Domain+Hosting)'
		],
		courseDuraton: '6',
		fees: '8000'
	},
	{
		courseName: 'H.A / Staff / Narse',
		imgUrl: '/ha.jpg',
		courseDescription: [
			'Include of CCA',
			'core Java/ Swift Ui',
			'Android / IOS',
			'6 month Free (1 Domain+Hosting)'
		],
		courseDuraton: '6',
		fees: '10000'
	},
	{
		courseName: 'Veterinary',
		imgUrl: '/Veterinary.jpg',
		courseDescription: [
			'Basic Electronic',
			'Fundamental of PCB tracking',
			'Wifi configuring',
			'N-Plus Networking'
		],
		courseDuraton: '9',
		fees: '15000'
	},
	{
		courseName: 'Engineering Entrance',
		imgUrl: '/engineeringentrancenepal.jpg',
		courseDescription: [
			'Include of CCA',
			'Fundamental of Editing',
			'Live Project handling(wedding)',
			'FCP/EdiusX/premire pro'
		],
		courseDuraton: '6',
		fees: '15000'
	},
	{
		courseName: 'AutoCAD in ME,Civil',
		imgUrl: '/autoCad.jpg',
		courseDescription: [ '2D', '3D' ],
		courseDuraton: '6',
		fees: '8000'
	},
	{
		courseName: 'Nepal Army',
		imgUrl: '/nepalarmy.jpg',
		courseDescription: [ 'Drafting+2d/3d designing' ],
		courseDuraton: '6',
		fees: '8000'
	},
	{
		courseName: 'Tution for +2, BCA, B.Com, Bed, BSC',
		imgUrl: '/tution.jpg',
		courseDescription: [ 'Drafting+2d/3d designing' ],
		courseDuraton: '6',
		fees: '8000'
	},
	{
		courseName: 'Computer Training',
		imgUrl: '/computertraining.jpg',
		courseDescription: [ 'Drafting+2d/3d designing' ],
		courseDuraton: '6',
		fees: '8000'
	}
];

function CourseSection(props) {
	const classes = useStyles();
	return (
		<div className={classes.ourCourses}>
			<Grid>
				<Grid container>
					{courses.map((item) => (
						<Grid item xs={12} sm={4} key={item.courseName}>
							<CourseCard data={item} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</div>
	);
}

export default CourseSection;
