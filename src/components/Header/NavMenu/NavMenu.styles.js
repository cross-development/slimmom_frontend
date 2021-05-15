//Core
import styled from 'styled-components';
//Router
import { NavLink } from 'react-router-dom';
//Settings
import { device } from 'styles/index.styles';

const NavWrap = styled.div`
	display: none;

	@media ${device.desktop} {
		display: block;
	}
`;

const Menu = styled.nav`
	display: flex;
	align-items: flex-end;
`;

const MenuLink = styled(NavLink)`
	color: #9b9faa;
	font-weight: bold;
	font-size: 14px;
	line-height: 14px;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	text-decoration: none;

	display: block;

	transition: all 250ms linear;

	&.active {
		color: #212121;
	}

	&:hover {
		color: #212121;
	}

	&:first-of-type {
		margin-right: 22px;
	}
`;

export { NavWrap, Menu, MenuLink };
