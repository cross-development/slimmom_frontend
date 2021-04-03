//Core
import React, { useState } from 'react';
//Components
import HamburgerBtn from '../HamburgerBtn';
//Styles
import { CSSTransition } from 'react-transition-group';
import { NavWrap, Menu, MenuLink } from './Navigation.styles';
import slideTransition from 'styles/transitions/slide.module.css';

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenuMode = () => setIsOpen(!isOpen);

	return (
		<NavWrap>
			<HamburgerBtn isOpen={isOpen} onToggleMenuMode={toggleMenuMode} />

			<CSSTransition in={isOpen} timeout={250} classNames={slideTransition} unmountOnExit>
				<Menu isOpen={isOpen}>
					<MenuLink to="/diary" onClick={toggleMenuMode}>
						Дневник
					</MenuLink>

					<MenuLink to="/calculator" onClick={toggleMenuMode}>
						Калькулятор
					</MenuLink>
				</Menu>
			</CSSTransition>
		</NavWrap>
	);
};

export default Navigation;
