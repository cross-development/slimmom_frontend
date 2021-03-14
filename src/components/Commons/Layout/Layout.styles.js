//Core
import styled from 'styled-components';
//Settings
import { device, size } from 'index.styles';

export const StyledArticle = styled.main`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;

	margin-left: auto;
	margin-right: auto;
	padding-left: 15px;
	padding-right: 15px;

	width: ${size.mobile};

	@media ${device.tablet} {
		width: ${size.tablet};
	}

	@media ${device.desktop} {
		width: ${size.desktop};
	}
`;
