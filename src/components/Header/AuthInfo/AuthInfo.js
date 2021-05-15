//Core
import React from 'react';
//Styles
import { AuthMenu, AuthNav, AuthNavItem, AuthNavLink } from './AuthInfo.styles';

const AuthInfo = () => (
	<AuthMenu>
		<AuthNav>
			<AuthNavItem>
				<AuthNavLink to="/sign-in">Вход</AuthNavLink>
			</AuthNavItem>

			<AuthNavItem>
				<AuthNavLink to="/sign-up">Регистрация</AuthNavLink>
			</AuthNavItem>
		</AuthNav>
	</AuthMenu>
);

export default AuthInfo;
