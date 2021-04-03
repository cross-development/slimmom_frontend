//Core
import React from 'react';
import PropTypes from 'prop-types';
//Assets
import logo from 'assets/img/logo.png';
//Styles
import { LogoWrap, LogoLink, MainLogo, LogoText } from './Logo.styles';

const Logo = ({ isAuth }) => (
	<LogoWrap>
		<LogoLink to="/">
			<MainLogo src={logo} alt="logo" />

			<LogoText isAuth={isAuth}>
				Slim<span>Mom</span>
			</LogoText>
		</LogoLink>
	</LogoWrap>
);

Logo.propTypes = {
	isAuth: PropTypes.bool.isRequired,
};

export default Logo;
