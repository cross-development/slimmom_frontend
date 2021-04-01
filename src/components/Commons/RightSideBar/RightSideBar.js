//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { authHooks } from 'redux/auth';
import { dailyHooks } from 'redux/daily';
//Styles
import { Section, Title } from './RightSideBar.styles';
import { SummaryWrap, SummaryList, SummaryItem, SummaryCount } from './RightSideBar.styles';
import { ProductWrap, ProductList, ProductItem, ProductMessage } from './RightSideBar.styles';

const RightSideBar = () => {
	const { todaySummary } = authHooks.useGetUser();
	const { userRate } = dailyHooks.useDailyRate();

	const date = todaySummary.date ? todaySummary.date : new Date().toLocaleDateString();

	return (
		<Section>
			<SummaryWrap>
				<Title>Сводка за {date}</Title>

				<SummaryList>
					<SummaryItem>
						Осталось <SummaryCount>{} ккал</SummaryCount>
					</SummaryItem>

					<SummaryItem>
						Употреблено <SummaryCount>{} ккал</SummaryCount>
					</SummaryItem>

					<SummaryItem>
						Дневная норма <SummaryCount>{} ккал</SummaryCount>
					</SummaryItem>

					<SummaryItem>
						n% от нормы <SummaryCount>{} ккал</SummaryCount>
					</SummaryItem>
				</SummaryList>
			</SummaryWrap>

			<ProductWrap>
				<Title>Нерекомендуемые продукты</Title>

				{userRate && (
					<ProductList>
						{userRate.notAllowedProducts.map(item => (
							<ProductItem>{item}</ProductItem>
						))}
					</ProductList>
				)}

				{!userRate && <ProductMessage>Здесь будет отображаться Ваш рацион</ProductMessage>}
			</ProductWrap>
		</Section>
	);
};

RightSideBar.propTypes = {};

export default RightSideBar;
