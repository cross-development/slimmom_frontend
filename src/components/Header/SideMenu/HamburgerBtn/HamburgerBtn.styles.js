//Core
import styled from 'styled-components';
//Settings
import { device } from 'styles/index.styles';

const MenuButton = styled.button`
	display: block;

	transform-origin: 16px 11px;
	outline: 0;
	border: 0;

	background: none;

	span {
		transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	}

	&.active {
		span:nth-of-type(1) {
			transform: rotate(45deg) translate(7px, 7px);
			width: 20px;
		}
		span:nth-of-type(2) {
			opacity: 0;
			pointer-events: none;
		}
		span:nth-of-type(3) {
			transform: rotate(-45deg) translate(6px, -6px);
			width: 20px;
		}
	}
`;

const Bar = styled.span`
	display: block;

	width: 20px;
	height: 2px;

	&:not(:last-child) {
		margin-bottom: 7px;
	}

	background-color: #212121;
`;

export { MenuButton, Bar };
