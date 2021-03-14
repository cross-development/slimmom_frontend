//Core
import React from 'react';
//Router
import { Link } from 'react-router-dom';
//Assets
import logo from 'assets/img/logo.png';
//Styles
import { LogoWrap, MainLogo } from './Logo.styles';

const Logo = () => (
	<LogoWrap>
		<Link to="/">
			<MainLogo src={logo} alt="logo" />
		</Link>
	</LogoWrap>
);

export default Logo;
