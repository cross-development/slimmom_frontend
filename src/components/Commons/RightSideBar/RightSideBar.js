//Core
import React from 'react';
//Redux
import { userHooks } from 'redux/user';
import { dailyHooks } from 'redux/daily';
//Styles
import { Wrapper, Title } from './RightSideBar.styles';
import { SummaryWrap, SummaryList, SummaryItem } from './RightSideBar.styles';
import { ProductWrap, ProductList, ProductItem, ProductMessage } from './RightSideBar.styles';

const RightSideBar = () => {
	const {
		dayInfo,
		userInfo: { userData },
	} = userHooks.useGetUser();

	const { userRate } = dailyHooks.useDailyRate();

	const date = dayInfo?.date || new Date().toLocaleDateString('us-US');
	const kcalLeft = dayInfo?.kcalLeft || '000';
	const kcalConsumed = dayInfo?.kcalConsumed || '000';
	const dailyRate = userRate?.dailyRate || userData?.dailyRate || '000';
	const percentsOfDailyRate = dayInfo?.percentsOfDailyRate || '000';

	const notAllowedProducts = userRate?.notAllowedProducts || userData?.notAllowedProducts;

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

				{!!notAllowedProducts.length && (
					<ProductList>
						{notAllowedProducts.map((item, idx) => (
							<ProductItem key={`${item}${idx}`}>{item}</ProductItem>
						))}
					</ProductList>
				)}

				{!notAllowedProducts.length && (
					<ProductMessage>Здесь будет отображаться Ваш рацион</ProductMessage>
				)}
			</ProductWrap>
		</Wrapper>
	);
};

export default RightSideBar;
// const date = todaySummary?.date ? todaySummary.date : new Date().toLocaleDateString();
// const kcalLeft = todaySummary?.kcalLeft || '000';
// const kcalConsumed = Math.floor(todaySummary?.kcalConsumed) || '000';
// const dailyRate = userData?.dailyRate || '000';
// const percentsOfDailyRate = todaySummary?.percentsOfDailyRate || '000';
