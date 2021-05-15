//Core
import React from 'react';
//Components
import Container from '../Container';
//Redux
import { userHooks } from 'redux/user';
import { dailyHooks } from 'redux/daily';
//Styles
import { Background, Wrapper, Title } from './RightSideBar.styles';
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
		<Background>
			<Container>
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
			</Container>
		</Background>
	);
};

export default RightSideBar;
