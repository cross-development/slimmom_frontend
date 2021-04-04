//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { MenuButton, Bar } from './HamburgerBtn.styles';

const HamburgerBtn = ({ isOpen, onToggleMenuMode }) => (
	<MenuButton
		className={isOpen ? 'active' : ''}
		aria-label="Открыть главное меню"
		onClick={onToggleMenuMode}
	>
		<Bar />
		<Bar />
		<Bar />
	</MenuButton>
);

HamburgerBtn.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onToggleMenuMode: PropTypes.func.isRequired,
};

export default HamburgerBtn;
