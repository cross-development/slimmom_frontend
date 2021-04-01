//Core
import React from 'react';
//Components
import { CalculatorCaloriesForm } from 'components/Calculator';
import { RightSideBar } from 'components/Commons';
//Redux
import { authHooks } from 'redux/auth';
import { dailyHooks } from 'redux/daily';
import { dailyOperations } from 'redux/daily';

const CalculatorPage = () => {
	const {
		user: { userId },
	} = authHooks.useGetUser();

	const handleUserDailyRate = dailyHooks.useDailyRateAction(dailyOperations.userDailyRate);

	const handleSubmit = userCredentials => handleUserDailyRate({ userCredentials, userId });

	return (
		<section>
			<CalculatorCaloriesForm onSubmit={handleSubmit} />

			<RightSideBar />
		</section>
	);
};

export default CalculatorPage;
