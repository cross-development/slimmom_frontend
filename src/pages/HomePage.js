//Core
import React from 'react';
//Components
import { DailyCaloriesForm, DailyCalorieIntake } from 'components/DailyCalories';
//Redux
import { dailyHooks } from 'redux/daily';
import { dailyOperations } from 'redux/daily';

const HomePage = () => {
	const { guestRate } = dailyHooks.useDailyRate();

	const handleGuestDailyRate = dailyHooks.useDailyRateAction(dailyOperations.guestDailyRate);
	// handleGuestDailyRate({ ...credentials });
	const handleSubmit = credentials => {
		console.log(credentials);
	};

	return (
		<section>
			<DailyCaloriesForm onSubmit={handleSubmit} />

			{guestRate && <DailyCalorieIntake {...guestRate} />}
		</section>
	);
};

export default HomePage;
