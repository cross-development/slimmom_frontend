//Core
import styled from 'styled-components';
//Settings
import { device } from 'styles/index.styles';

export const StyledArticle = styled.main`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
	position: relative;

	margin-left: auto;
	margin-right: auto;
	padding-left: 15px;
	padding-right: 15px;

	/* background: linear-gradient(180deg, #fff, #fff 562px, #f0f1f3 0, #f0f1f3); */

	@media ${device.tablet} {
		justify-content: flex-start;

		position: static;

		padding-left: 87px;
		padding-right: 87px;

		/* background: transparent; */
	}

	@media ${device.desktop} {
		padding-left: 115px;
		padding-right: 115px;
	}
`;
