//Core
import React from 'react';
//Redux
import { authHooks, authOperations } from 'redux/auth';
import { userHooks } from 'redux/user';
//Styles
import { UserInfoWrap, Border, UserName, SignOutLink } from './UserInfo.styles';

const UserInfo = () => {
	const { userInfo } = userHooks.useGetUser();

	const signOutUser = authHooks.useAuthEmptyAction(authOperations.userSighOut);

	const handleSignOut = () => signOutUser();

	return (
		<UserInfoWrap>
			<UserName>{userInfo.username}</UserName>

			<Border />

			<SignOutLink to="/" onClick={handleSignOut}>
				Выйти
			</SignOutLink>
		</UserInfoWrap>
	);
};

export default UserInfo;
