//Core
import React from 'react';
//Redux
import { authHooks } from 'redux/auth';
import { dailyHooks } from 'redux/daily';
//Styles
import { Wrapper, Title } from './RightSideBar.styles';
import { SummaryWrap, SummaryList, SummaryItem } from './RightSideBar.styles';
import { ProductWrap, ProductList, ProductItem, ProductMessage } from './RightSideBar.styles';

const RightSideBar = () => {
	const {
		todaySummary,
		user: { userData },
	} = authHooks.useGetUser();
	// const { userRate } = dailyHooks.useDailyRate();

	const date = todaySummary?.date ? todaySummary.date : new Date().toLocaleDateString();
	const kcalLeft = todaySummary?.kcalLeft || '000';
	const kcalConsumed = Math.floor(todaySummary?.kcalConsumed) || '000';
	const dailyRate = userData?.dailyRate || '000';
	const percentsOfDailyRate = todaySummary?.percentsOfDailyRate || '000';

	return (
		<Wrapper>
			<SummaryWrap>
				<Title>Сводка за {date}</Title>

				<SummaryList>
					<SummaryItem>
						Осталось <span>{kcalLeft} ккал</span>
					</SummaryItem>

					<SummaryItem>
						Употреблено <span>{kcalConsumed} ккал</span>
					</SummaryItem>

					<SummaryItem>
						Дневная норма <span>{dailyRate} ккал</span>
					</SummaryItem>

					<SummaryItem>
						n% от нормы <span>{percentsOfDailyRate} %</span>
					</SummaryItem>
				</SummaryList>
			</SummaryWrap>

			<ProductWrap>
				<Title>Нерекомендуемые продукты</Title>

				{userData && (
					<ProductList>
						{userData.notAllowedProducts.map((item, idx) => (
							<ProductItem key={`${item}${idx}`}>{item}</ProductItem>
						))}
					</ProductList>
				)}

				{!userData && <ProductMessage>Здесь будет отображаться Ваш рацион</ProductMessage>}
			</ProductWrap>
		</Wrapper>
	);
};

export default RightSideBar;
