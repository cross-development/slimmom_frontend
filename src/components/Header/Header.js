//Core
import React from 'react';
//Components
import Logo from './Logo';
import UserInfo from './UserInfo';
import AuthInfo from './AuthInfo';
import Navigation from './Navigation';
//Redux
import { authHooks } from 'redux/auth';
//Styles
import { HeaderWrap } from './Header.styles';

const Header = () => {
	const { user } = authHooks.useGetUser();

	return (
		<HeaderWrap>
			<Logo />

			{user && <Navigation />}

			{user ? <UserInfo /> : <AuthInfo />}
		</HeaderWrap>
	);
};

export default Header;