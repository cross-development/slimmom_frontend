//Core
import React from 'react';
//Components
import Logo from './Logo';
import UserInfo from './UserInfo';
import AuthInfo from './AuthInfo';
import Navigation from './Navigation';
//Redux
import { userHooks } from 'redux/user';
//Styles
import { HeaderWrap, Border } from './Header.styles';

const Header = () => {
	const { userInfo } = userHooks.useGetUser();

	return (
		<HeaderWrap>
			<Logo isAuth={Boolean(userInfo)} />

			<Border />

			{userInfo && <Navigation />}

			{userInfo ? <UserInfo /> : <AuthInfo />}
		</HeaderWrap>
	);
};

export default Header;
