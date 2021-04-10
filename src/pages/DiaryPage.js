//Core
import React, { useEffect, useState } from 'react';
//Components
import { DiaryAddProductForm, DiaryDateCalendar } from 'components/Diary';
import { DiaryProductsList, DiaryAddButton } from 'components/Diary';
import { RightSideBar } from 'components/Commons';
//Redux
import { dayHooks, dayOperations } from 'redux/day';
import slideLeftTransition from 'styles/transitions/slideLeft.module.css';
//Styles
import { CSSTransition } from 'react-transition-group';

const DiaryPage = () => {
	const { dayInfo } = dayHooks.useDayInfo();

	const [date, setDate] = useState(new Date());
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => setIsModalOpen(prevState => !prevState);

	const getDayInfo = dayHooks.useDayInfoAction(dayOperations.getDayInfo);
	useEffect(() => getDayInfo({ date }), [getDayInfo, date]);

	const removeProduct = dayHooks.useDayInfoAction(dayOperations.removeDayProduct);
	const handleRemoveProduct = ({ target: { id: eatenProductId } }) => {
		removeProduct({ dayId: dayInfo.id, eatenProductId });
	};

	const addProduct = dayHooks.useDayInfoAction(dayOperations.addDayProduct);
	const handleSubmit = ({ productId, weight }) => {
		addProduct({ productId, weight, date: date.toLocaleDateString('us-US') });
		handleOpenModal();
	};

	const eatenProducts = dayInfo?.eatenProducts;

	return (
		<section>
			<DiaryDateCalendar date={date} onChangeDate={setDate} />

			<CSSTransition in={isModalOpen} timeout={200} classNames={slideLeftTransition} unmountOnExit>
				<DiaryAddProductForm
					isOpen={isModalOpen}
					onSubmit={handleSubmit}
					onCloseModal={handleOpenModal}
				/>
			</CSSTransition>

			{eatenProducts && (
				<DiaryProductsList eatenProducts={eatenProducts} onRemoveProduct={handleRemoveProduct} />
			)}

			<DiaryAddButton onShowModal={handleOpenModal} />

			<RightSideBar />
		</section>
	);
};

export default DiaryPage;
