//Core
import React, { useState } from 'react';
//Components
import NavMenu from '../NavMenu';
import SideMenu from '../SideMenu';
//Styles
import { NavWrap } from './Navigation.styles';

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenuMode = () => setIsOpen(!isOpen);

	return (
		<NavWrap>
			<SideMenu isOpen={isOpen} onToggleMenuMode={toggleMenuMode} />

			<NavMenu onToggleMenuMode={toggleMenuMode} />
		</NavWrap>
	);
};

export default Navigation;
