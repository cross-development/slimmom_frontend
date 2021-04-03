//Core
import React from 'react';
//Redux
import { authHooks, authOperations } from 'redux/auth';
//Styles
import { UserInfoWrap, Border, UserName, SignOutLink } from './UserInfo.styles';

const UserInfo = () => {
	const { user } = authHooks.useGetUser();

	const signOutUser = authHooks.useUserEmptyAction(authOperations.userSighOut);

	const handleSignOut = () => signOutUser();

	return (
		<UserInfoWrap>
			<UserName>{user.username}</UserName>

			<Border />

			<SignOutLink to="/" onClick={handleSignOut}>
				Выйти
			</SignOutLink>
		</UserInfoWrap>
	);
};

export default UserInfo;
