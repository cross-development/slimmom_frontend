//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import HamburgerBtn from '../SideMenu/HamburgerBtn';
//Styles
import { SideWrap, Menu, MenuLink } from './SideMenu.styles';
import { CSSTransition } from 'react-transition-group';
import slideTransition from 'styles/transitions/slide.module.css';

const SideMenu = ({ isOpen, onToggleMenuMode }) => (
	<SideWrap>
		<HamburgerBtn isOpen={isOpen} onToggleMenuMode={onToggleMenuMode} />

		<CSSTransition in={isOpen} timeout={250} classNames={slideTransition} unmountOnExit>
			<Menu isOpen={isOpen}>
				<MenuLink to="/diary" onClick={onToggleMenuMode}>
					Дневник
				</MenuLink>

				<MenuLink to="/calculator" onClick={onToggleMenuMode}>
					Калькулятор
				</MenuLink>
			</Menu>
		</CSSTransition>
	</SideWrap>
);

SideMenu.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onToggleMenuMode: PropTypes.func.isRequired,
};

export default SideMenu;
