//Core
import styled from 'styled-components';
//Router
import { NavLink } from 'react-router-dom';
//Settings
import { device } from 'styles/index.styles';

const NavWrap = styled.div`
	margin-left: auto;

	@media ${device.tablet} {
		order: 3;

		margin-left: 0;
	}
`;

const Menu = styled.nav`
	display: block;

	position: fixed;
	right: 0;
	bottom: -83px;
	z-index: 293;

	min-height: 100%;
	width: 100%;

	padding-top: 60px;

	background: #264061;
`;

const MenuLink = styled(NavLink)`
	display: block;
	text-align: center;
	max-width: 100%;

	text-decoration: none;
	color: #fff;
	font-size: 18px;
	line-height: 22px;
	font-weight: bold;
	text-transform: uppercase;

	&.active {
		color: #9b9faa;
	}

	&:first-of-type {
		margin-bottom: 30px;
	}
`;

export { NavWrap, Menu, MenuLink };
