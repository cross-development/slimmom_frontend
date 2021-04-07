//Core
import styled from 'styled-components';
//Settings
import { device } from 'styles/index.styles';

const AddBtnWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media ${device.tablet} {
		display: none;
	}
`;

const AddButton = styled.button`
	color: #ffffff;
	font-weight: bold;
	font-size: 20px;
	line-height: 20px;
	letter-spacing: 0.04em;

	display: block;

	padding: 0;

	width: 50px;
	height: 50px;
	border: none;
	border-radius: 30px;

	background: #fc842d;
	box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
`;

export { AddBtnWrap, AddButton };
