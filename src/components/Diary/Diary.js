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

	const removeProduct = dayHooks.useDayRateAction(dayOperations.removeDayProduct);

	const handleRemoveProduct = ({ target: { id } }) => {
		removeProduct({ dayId: dayInfo.id, eatenProductId: id });
	};

	const addProduct = dayHooks.useDayRateAction(dayOperations.addDayProduct);

	const handleSubmit = ({ id, weight }) => {
		addProduct({ productId: id, date, weight });
	};

	const eatenProducts = dayInfo?.eatenProducts;

	return (
		<div>
			<DiaryDateCalendar date={date} onChangeDate={setDate} />

			<DiaryAddProductForm onSubmit={handleSubmit} />

			{eatenProducts && (
				<DiaryProductsList eatenProducts={eatenProducts} onRemoveProduct={handleRemoveProduct} />
			)}
		</div>
	);
};

Diary.propTypes = {};

export default Diary;
