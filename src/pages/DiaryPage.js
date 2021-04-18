//Core
import React, { useEffect, useState } from 'react';
//Components
import { DiaryAddProductForm, DiaryDateCalendar } from 'components/Diary';
import { DiaryProductsList, DiaryAddButton } from 'components/Diary';
import { RightSideBar } from 'components/Commons';
//Redux
import { userHooks, userOperations } from 'redux/user';

const DiaryPage = () => {
	const { dayInfo } = userHooks.useGetUser();

	const [date, setDate] = useState(new Date());
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => setIsModalOpen(prevState => !prevState);

	const getDayInfo = userHooks.useUserAction(userOperations.getDayInfo);
	useEffect(() => getDayInfo({ date }), [getDayInfo, date]);

	const removeProduct = userHooks.useUserAction(userOperations.removeDayProduct);
	const handleRemoveProduct = ({ target: { id: eatenProductId } }) => {
		removeProduct({ dayId: dayInfo.dayId, eatenProductId });
	};

	const addProduct = userHooks.useUserAction(userOperations.addDayProduct);
	const handleSubmit = ({ productId, weight }) => {
		addProduct({ productId, weight, date: date.toLocaleDateString('us-US') });
		handleOpenModal();
	};

	const eatenProducts = dayInfo?.eatenProducts || [];

	return (
		<section>
			<DiaryDateCalendar date={date} onChangeDate={setDate} />

			<DiaryAddProductForm
				isOpen={isModalOpen}
				onSubmit={handleSubmit}
				onCloseModal={handleOpenModal}
			/>

			<DiaryProductsList eatenProducts={eatenProducts} onRemoveProduct={handleRemoveProduct} />

			<DiaryAddButton onShowModal={handleOpenModal} />

			<RightSideBar />
		</section>
	);
};

export default DiaryPage;
