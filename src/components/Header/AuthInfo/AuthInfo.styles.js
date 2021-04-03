//Core
import styled from 'styled-components';
//Router
import { NavLink } from 'react-router-dom';

const AuthMenu = styled.menu`
	margin-left: auto;
`;

const AuthNav = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const AuthNavItem = styled.li`
	list-style: none;

	&:first-child {
		margin-right: 15px;
	}
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
