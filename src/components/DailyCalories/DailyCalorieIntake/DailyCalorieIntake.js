//Core
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
//Styles
import { ModalWrap, Heading, Subtitle, BtnGroup, SignUpLink } from './DailyCalorieIntake.styles';
import { GoBackContainer, GoBackIcon, GoBackBtn, ModalWindow } from './DailyCalorieIntake.styles';
import { DailyRate, ProductList, ProductItem, AdditionalInfo } from './DailyCalorieIntake.styles';

const DailyCalorieIntake = ({ dailyRate, notAllowedProducts, onCloseModal }) => {
	const productItems = useMemo(
		() =>
			notAllowedProducts.map((item, idx) => {
				const randProdIdx = Math.floor(Math.random() * notAllowedProducts.length);

				return idx < 4 && <ProductItem key={item}>{notAllowedProducts[randProdIdx]}</ProductItem>;
			}),
		[notAllowedProducts],
	);

	return (
		<ModalWrap>
			<GoBackContainer>
				<GoBackBtn onClick={onCloseModal}>
					<GoBackIcon />
				</GoBackBtn>
			</GoBackContainer>

			<ModalWindow>
				<Heading>Ваша рекомендуемая суточная норма калорий составляет</Heading>

				<DailyRate>
					{dailyRate} <span>ккал</span>
				</DailyRate>

				<AdditionalInfo>
					<Subtitle>Продукты, которые вам не рекомендуется употреблять</Subtitle>

					<ProductList>{productItems}</ProductList>
				</AdditionalInfo>

				<BtnGroup>
					<SignUpLink to="/sign-up" onClick={onCloseModal}>
						Начать худеть
					</SignUpLink>
				</BtnGroup>
			</ModalWindow>
		</ModalWrap>
	);
};

DailyCalorieIntake.propTypes = {
	dailyRate: PropTypes.number.isRequired,
	notAllowedProducts: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default DailyCalorieIntake;
