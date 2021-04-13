//Core
import React, { useState } from 'react';
//Components
import { DailyCaloriesForm, DailyCalorieIntake, DailyCaloriePromo } from 'components/DailyCalories';
//Redux
import { dailyHooks } from 'redux/daily';
import { dailyOperations } from 'redux/daily';

const HomePage = () => {
	const { dailyRateInfo } = dailyHooks.useDailyRate();
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

			{isModalOpen && dailyRateInfo && (
				<DailyCalorieIntake {...dailyRateInfo} onCloseModal={handleOpenModal} />
			)}

			<DailyCaloriePromo />
		</section>
	);
};

export default HomePage;
