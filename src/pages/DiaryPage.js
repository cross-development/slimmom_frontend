//Core
import React, { useEffect, useState } from 'react';
//Components
import { DiaryAddProductForm, DiaryDateCalendar } from 'components/Diary';
import { DiaryProductsList, DiaryAddButton } from 'components/Diary';
import { RightSideBar } from 'components/Commons';
//Redux
import { dayHooks, dayOperations } from 'redux/day';

const DiaryPage = () => {
	const { dayInfo } = dayHooks.useDayRate();

	const [date, setDate] = useState(new Date());
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => setIsModalOpen(prevState => !prevState);

	const getDayInfo = dayHooks.useDayRateAction(dayOperations.getDayInfo);

	useEffect(() => getDayInfo({ date }), [getDayInfo, date]);

	const removeProduct = dayHooks.useDayRateAction(dayOperations.removeDayProduct);

	const handleRemoveProduct = ({ target: { id } }) => {
		removeProduct({ dayId: dayInfo.id, eatenProductId: id });
	};

	const addProduct = dayHooks.useDayRateAction(dayOperations.addDayProduct);

	const handleSubmit = ({ id, weight }) => {
		console.log({ productId: id, date, weight });

		// addProduct({ productId: id, date, weight });
	};

	const eatenProducts = dayInfo?.eatenProducts;

	return (
		<section>
			<DiaryDateCalendar date={date} onChangeDate={setDate} />

			<DiaryAddProductForm
				isOpen={isModalOpen}
				onSubmit={handleSubmit}
				onCloseModal={handleOpenModal}
			/>

			{eatenProducts && (
				<DiaryProductsList eatenProducts={eatenProducts} onRemoveProduct={handleRemoveProduct} />
			)}

			<DiaryAddButton onShowModal={handleOpenModal} />

			<RightSideBar />
		</section>
	);
};

export default DiaryPage;
