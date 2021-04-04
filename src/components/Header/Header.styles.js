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
		align-items: flex-end;

		padding: 82px 90px 10px;

		border-bottom: none;

		background-color: transparent;
	}
`;

const Border = styled.div`
	display: none;

	@media ${device.desktop} {
		display: block;

		width: 32px;
		transform: rotate(90deg);
		border: 1px solid #e0e0e0;

		margin-bottom: 5px;
	}
`;

export { HeaderWrap, Border };
