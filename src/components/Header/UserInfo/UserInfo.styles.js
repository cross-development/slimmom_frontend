//Core
import styled from 'styled-components';
//Router
import { Link } from 'react-router-dom';
//Settings
import { device } from 'styles/index.styles';

const UserInfoWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;

	position: absolute;
	width: 100%;
	height: 40px;
	top: 85px;
	/* bottom: -42px; */
	left: 0;
	right: 0;
	z-index: 100;

	padding: 4px 15px;

	background-color: #eff1f3;

	@media ${device.tablet} {
		order: 2;

		position: static;
		width: auto;

		margin-left: auto;
		margin-right: 53px;
		padding: 4px 0;

		background-color: transparent;
	}

	@media ${device.desktop} {
		order: 3;

		align-items: flex-end;

		margin-right: 0;
		padding: 0;
	}
`;

const UserName = styled.p`
	color: #212121;
	font-size: 14px;
	font-weight: bold;
	line-height: 17px;
	letter-spacing: 0.04em;
`;

const Border = styled.div`
	width: 32px;
	transform: rotate(90deg);
	border: 1px solid #e0e0e0;

	@media ${device.desktop} {
		margin-bottom: 5px;
	}
`;

const SignOutLink = styled(Link)`
	color: #9b9faa;
	font-size: 14px;
	font-weight: bold;
	line-height: 17px;
	letter-spacing: 0.04em;

	transition: all 250ms linear;

	&:hover {
		color: #212121;
	}
`;

export { UserInfoWrap, Border, UserName, SignOutLink };
