//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import DiaryDateCalendar from './DiaryDateCalendar';
import DiaryProductsList from './DiaryProductsList';
import DiaryAddProductForm from './DiaryAddProductForm';
//Styles
import {} from './Diary.styles';

const Diary = () => {
	return (
		<div>
			<DiaryDateCalendar />

			<DiaryProductsList />

			<DiaryAddProductForm />
		</div>
	);
};

Diary.propTypes = {};

export default Diary;
