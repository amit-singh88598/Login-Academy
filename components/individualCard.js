import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { Grid, makeStyles } from '@material-ui/core';
import CardIndividual from './cardIndividual';

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
		courseName: 'Typping(Eng/Nep)',
		courseDuraton: '1',
		fees: '1500'
	},
	{
		courseName: 'UniCode',
		courseDuraton: '15',
		fees: '1500'
	},
	{
		courseName: 'Application Software',
		courseDuraton: '2',
		fees: '2000'
	},
	{
		courseName: 'Microsoft Word',
		courseDuraton: '1',
		fees: '1500'
	},
	{
		courseName: 'Microsoft power point',
		courseDuraton: '1',
		fees: '1500'
	},
	{
		courseName: 'Microsoft Excel',
		courseDuraton: '1',
		fees: '1500'
	},
	{
		courseName: 'Microsoft Access DB',
		courseDuraton: '1',
		fees: '1500'
	},
	{
		courseName: 'PHP serverside',
		courseDuraton: '3',
		fees: '5000'
	},
	{
		courseName: 'JSP serverside',
		courseDuraton: '3',
		fees: '5000'
	},
	{
		courseName: 'ASP serverside',
		courseDuraton: '3',
		fees: '5000'
	},
	{
		courseName: 'Adobe Photoshop',
		courseDuraton: '2',
		fees: '3500'
	},
	{
		courseName: 'Adobe Pagemaker',
		courseDuraton: '1',
		fees: '3500'
	},
	{
		courseName: 'Corel Draw',
		courseDuraton: '1',
		fees: '3500'
	},
	{
		courseName: 'C programming',
		courseDuraton: '3',
		fees: '5000'
	},
	{
		courseName: 'C++ programing',
		courseDuraton: '3',
		fees: '5500'
	},
	{
		courseName: 'Java core',
		courseDuraton: '3',
		fees: '6500'
	},
	{
		courseName: 'java Advance',
		courseDuraton: '3',
		fees: '6500'
	},
	{
		courseName: 'Android',
		courseDuraton: '6',
		fees: '9000'
	},
	{
		courseName: 'Ios',
		courseDuraton: '6',
		fees: '9000'
	},
	{
		courseName: 'Swift Ui',
		courseDuraton: '3',
		fees: '6500'
	},
	{
		courseName: 'VB Basic',
		courseDuraton: '3',
		fees: '6500'
	},
	{
		courseName: 'VB.NET',
		courseDuraton: '3',
		fees: '6500'
	},
	{
		courseName: 'Linux Os',
		courseDuraton: '3',
		fees: '5500'
	},
	{
		courseName: 'Oracle',
		courseDuraton: '2',
		fees: '4000'
	},
	{
		courseName: 'SQL server',
		courseDuraton: '2',
		fees: '4000'
	},
	{
		courseName: 'Mysql server',
		courseDuraton: '2',
		fees: '4000'
	},
	{
		courseName: 'HTML5+CSS3',
		courseDuraton: '2',
		fees: '4500'
	},
	{
		courseName: 'JavaScript',
		courseDuraton: '1',
		fees: '3500'
	},
	{
		courseName: 'shell Scripting',
		courseDuraton: '2',
		fees: '4500'
	},
	{
		courseName: 'Python ML',
		courseDuraton: '2',
		fees: '9000'
	},
	{
		courseName: 'Tally Accounting',
		courseDuraton: '3',
		fees: '4500'
	},
	{
		courseName: 'FACT Accounting',
		courseDuraton: '2',
		fees: '3500'
	},
	{
		courseName: 'E-mail & Internet',
		courseDuraton: '1',
		fees: '2000'
	},
	{
		courseName: 'AutoCad',
		courseDuraton: '2',
		fees: '6000'
	},
	{
		courseName: 'Spoken English (Complete)',
		courseDuraton: '3',
		fees: '5000'
	},
	{
		courseName: 'Spoken English',
		courseDuraton: '20',
		fees: '1500'
	}
];

function IndividualCard(props) {
	const classes = useStyles();
	return (
		<div className={classes.ourCourses}>
			<Grid>
				<Grid container>
					{courses.map((item) => (
						<Grid item xs={12} sm={3} key={item.courseName}>
							<CardIndividual data={item} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</div>
	);
}

export default IndividualCard;
