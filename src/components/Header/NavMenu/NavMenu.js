//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { NavWrap, Menu, MenuLink } from './NavMenu.styles';

const NavMenu = ({ onToggleMenuMode }) => (
	<NavWrap>
		<Menu>
			<MenuLink to="/diary" onClick={onToggleMenuMode}>
				Дневник
			</MenuLink>

			<MenuLink to="/calculator" onClick={onToggleMenuMode}>
				Калькулятор
			</MenuLink>
		</Menu>
	</NavWrap>
);

NavMenu.propTypes = {
	onToggleMenuMode: PropTypes.func.isRequired,
};

export default NavMenu;
