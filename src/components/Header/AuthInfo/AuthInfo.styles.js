//Core
import styled from 'styled-components';
//Router
import { NavLink } from 'react-router-dom';

const AuthMenu = styled.menu`
	flex-basis: 60%;
`;

const AuthNav = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const AuthNavItem = styled.li`
	list-style: none;
`;

const AuthNavLink = styled(NavLink)`
	display: block;

	color: #9b9faa;
	font-size: 14px;
	font-weight: bold;
	line-height: 13px;
	letter-spacing: 0.04em;

	text-align: right;
	text-transform: uppercase;

	&.active {
		color: #212121;
	}
`;

export { AuthMenu, AuthNav, AuthNavItem, AuthNavLink };