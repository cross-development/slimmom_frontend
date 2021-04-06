//Core
import styled from 'styled-components';
//Settings
import { device } from 'styles/index.styles';

const Form = styled.form``;

const Label = styled.label`
	display: block;

	margin-bottom: 20px;

	position: relative;
`;

const Input = styled.input`
	font-weight: bold;
	font-size: 14px;
	line-height: 17px;
	letter-spacing: 0.04em;

	padding: 10px 5px;

	width: 100%;
	border: none;
	border-bottom: 1px solid #e0e0e0;

	background-color: transparent;
`;

const Message = styled.span`
	color: #e74c3c;
	font-size: 12px;

	position: absolute;
	bottom: -14px;
	left: 0;
`;

const BtnWrap = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	margin-top: 60px;
`;

const Button = styled.button`
	color: #ffffff;
	font-weight: bold;
	font-size: 14px;
	line-height: 17px;
	letter-spacing: 0.04em;

	display: block;

	padding: 13px 46px;

	border-radius: 30px;
	border: none;

	background: #fc842d;
	box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);

	&::before {
		content: 'Добавить';
		font-size: 14px;
	}

	@media ${device.tablet} {
		padding: 0;

		width: 50px;
		height: 50px;

		&::before {
			content: '+';
			font-size: 20px;
		}
	}

	@media ${device.desktop} {
		box-shadow: none;

		&:hover {
			box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
		}
	}
`;

export { Form, Label, Input, Message, BtnWrap, Button };
