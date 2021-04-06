//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Components
import Calendar from 'react-calendar';
//Styles
import { CSSTransition } from 'react-transition-group';
import {} from './DiaryDateСalendar.styles';
import popTransition from 'styles/transitions/pop.module.css';
import 'react-calendar/dist/Calendar.css';

const DiaryDateCalendar = ({ onChangeDate, date }) => {
	const [isShowCalendar, setIsShowCalendar] = useState(false);

	return (
		<div>
			<button style={{ marginTop: '100px' }} onClick={() => setIsShowCalendar(!isShowCalendar)}>
				asd
			</button>

			<CSSTransition in={isShowCalendar} timeout={150} classNames={popTransition} unmountOnExit>
				<Calendar onChange={onChangeDate} value={new Date(date)} />
			</CSSTransition>
		</div>
	);
};

DiaryDateCalendar.propTypes = {};

export default DiaryDateCalendar;
