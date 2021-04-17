//Core
import React, { useState } from 'react';
//Components
import { DailyCaloriesForm, DailyCalorieIntake, DailyCaloriePromo } from 'components/DailyCalories';
//Redux
import { dailyHooks, dailyOperations } from 'redux/daily';

const HomePage = () => {
	const { guestRate } = dailyHooks.useDailyRate();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleGuestDailyRate = dailyHooks.useDailyRateAction(dailyOperations.guestDailyRate);

	const handleOpenModal = () => setIsModalOpen(prevState => !prevState);

	const handleSubmit = guestCredentials => {
		handleGuestDailyRate({ guestCredentials });
		handleOpenModal();
	};

	return (
		<section>
			<DailyCaloriesForm onSubmit={handleSubmit} />

			{isModalOpen && guestRate && (
				<DailyCalorieIntake {...guestRate} onCloseModal={handleOpenModal} />
			)}

			<DailyCaloriePromo />
		</section>
	);
};

export default HomePage;
