//Core
import styled from 'styled-components';
//Settings
import { device, size } from 'styles/index.styles';

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

	@media ${device.tablet} {
		justify-content: flex-start;

		position: static;

		width: ${size.tablet};

		padding-left: 87px;
		padding-right: 87px;
	}

	@media ${device.desktop} {
		width: ${size.desktop};
	}
`;
