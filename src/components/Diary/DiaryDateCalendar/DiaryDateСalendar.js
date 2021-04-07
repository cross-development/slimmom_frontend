//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Packages
import Calendar from 'react-calendar';
import { CSSTransition } from 'react-transition-group';
import { FaRegCalendarAlt } from 'react-icons/fa';
//Styles
import { CalendarWrap, CalendarBtn, CalendarDate } from './DiaryDateСalendar.styles';
import popTransition from 'styles/transitions/pop.module.css';
import 'react-calendar/dist/Calendar.css';

const DiaryDateCalendar = ({ onChangeDate, date }) => {
	const [isShowCalendar, setIsShowCalendar] = useState(false);

	const handleShowCalendar = () => setIsShowCalendar(!isShowCalendar);

	return (
		<CalendarWrap>
			<CalendarDate>{date.toLocaleDateString('ua-UA')}</CalendarDate>

			<CalendarBtn onClick={handleShowCalendar}>
				<FaRegCalendarAlt />
			</CalendarBtn>

			<CSSTransition in={isShowCalendar} timeout={150} classNames={popTransition} unmountOnExit>
				<Calendar onChange={onChangeDate} value={date} onClickDay={handleShowCalendar} />
			</CSSTransition>
		</CalendarWrap>
	);
};

DiaryDateCalendar.propTypes = {
	onChangeDate: PropTypes.func.isRequired,
	date: PropTypes.instanceOf(Date).isRequired,
};

export default DiaryDateCalendar;
