//Core
import styled from 'styled-components';
//Settings
import { device } from 'styles/index.styles';

const CalendarWrap = styled.div`
	position: relative;

	display: flex;

	margin-bottom: 30px;
	margin-top: 80px;

	& .react-calendar {
		width: 290px;
		position: absolute;
		top: 25px;
		left: 0;
		right: 0;
		z-index: 1000;
	}

	@media ${device.tablet} {
		margin-top: 100px;
	}

	@media ${device.desktop} {
		margin-top: 137px;
	}

	@media ${device.large} {
	}
`;

const CalendarDate = styled.p`
	color: #212121;
	font-size: 18px;
	line-height: 22px;
	font-weight: bold;

	margin-right: 20px;
`;

const CalendarBtn = styled.button`
	color: #9b9faa;
	font-size: 20px;
	line-height: 20px;

	width: 20px;
	height: 20px;
	border: none;

	background-color: transparent;
`;

export { CalendarBtn, CalendarWrap, CalendarDate };
