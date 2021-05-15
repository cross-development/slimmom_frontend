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

	@media ${device.tablet} {
		justify-content: flex-start;

		position: static;
	}
`;
