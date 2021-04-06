//Core
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//Components
import DiaryDateCalendar from './DiaryDateCalendar';
import DiaryProductsList from './DiaryProductsList';
import DiaryAddProductForm from './DiaryAddProductForm';
//Redux
import { dayHooks, dayOperations } from 'redux/day';
//Styles
import {} from './Diary.styles';

const Diary = () => {
	const [date, setDate] = useState(new Date().toLocaleDateString());

	const { dayInfo } = dayHooks.useDayRate();
	const getDayInfo = dayHooks.useDayRateAction(dayOperations.getDayInfo);

	useEffect(() => getDayInfo({ date }), [getDayInfo, date]);

	const eatenProducts = dayInfo?.eatenProducts;

	return (
		<div>
			<DiaryDateCalendar date={date} onChangeDate={setDate} />

			<DiaryAddProductForm />

			{eatenProducts && <DiaryProductsList eatenProducts={eatenProducts} />}
		</div>
	);
};

Diary.propTypes = {};

export default Diary;
