//Core
import React from 'react';
//Assets
import logo from 'assets/img/logo.png';
//Styles
import { LogoWrap, LogoLink, MainLogo, LogoText } from './Logo.styles';

const Logo = () => (
	<LogoWrap>
		<LogoLink to="/">
			<MainLogo src={logo} alt="logo" />

			<LogoText>
				Slim<span>Mom</span>
			</LogoText>
		</LogoLink>
	</LogoWrap>
);

export default Logo;
