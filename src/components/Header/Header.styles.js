//Core
import styled from 'styled-components';
//Settings
import { device, size } from 'styles/index.styles';

const HeaderWrap = styled.header`
	display: flex;
	align-items: center;

	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	z-index: 300;

	padding: 18px 15px;
	border-bottom: 2px solid #e0e0e0;

	background-color: #fff;

	@media ${device.tablet} {
		position: static;

		padding-left: 87px;
		padding-right: 87px;
	}

	@media ${device.desktop} {
	}
`;

export { HeaderWrap };
