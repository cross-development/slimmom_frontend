//Core
import React from 'react';
//Components
import { CalculatorCaloriesForm } from 'components/Calculator';
import { RightSideBar } from 'components/Commons';
//Redux
import { userHooks } from 'redux/user';
import { dailyHooks, dailyOperations } from 'redux/daily';

const CalculatorPage = () => {
	const {
		userInfo: { userId },
	} = userHooks.useGetUser();

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
