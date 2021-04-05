//Core
import React from 'react';
//Components
import Diary from 'components/Diary';
import { RightSideBar } from 'components/Commons';

const DiaryPage = () => {
	return (
		<section>
			<Diary />

			<RightSideBar />
		</section>
	);
};

export default DiaryPage;
