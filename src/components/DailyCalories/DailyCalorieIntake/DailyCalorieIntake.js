//Core
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
//Styles
import { GoBackContainer, GoBackBtn, AdditionalInfo } from './DailyCalorieIntake.styles';
import { ModalDropdown, DailyRate, ProductList, ProductItem } from './DailyCalorieIntake.styles';
import { ModalWrap, Heading, Subtitle, BtnGroup, SignUpLink } from './DailyCalorieIntake.styles';

const DailyCalorieIntake = ({ dailyRate, notAllowedProducts, onCloseModal }) => {
	const productItems = useMemo(
		() => notAllowedProducts.map((itm, i) => <ProductItem key={`${i}${itm}`}>{itm}</ProductItem>),
		[notAllowedProducts],
	);

	return (
		<ModalDropdown>
			<ModalWrap>
				<GoBackContainer>
					<GoBackBtn onClick={onCloseModal}></GoBackBtn>
				</GoBackContainer>

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
			</ModalWrap>
		</ModalDropdown>
	);
};

DailyCalorieIntake.propTypes = {
	dailyRate: PropTypes.number.isRequired,
	notAllowedProducts: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default DailyCalorieIntake;
