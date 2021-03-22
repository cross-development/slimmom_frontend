//Core
import styled from 'styled-components';
//Settings
import { device } from 'index.styles';

const Form = styled.form`
	margin-top: 60px;
	margin-bottom: 20px;
`;

const Heading = styled.h1`
	color: #212121;
	font-weight: bold;
	font-size: 18px;
	line-height: 22px;
	letter-spacing: 0.04em;

	margin-bottom: 40px;

	text-align: left;
`;

const Subtitle = styled.p``;

const Label = styled.label``;

const Input = styled.input`
	font-weight: bold;
	font-size: 14px;
	line-height: 17px;
	letter-spacing: 0.04em;

	padding: 20px 5px;

	width: 100%;
	border: none;
	border-bottom: 1px solid #e0e0e0;
`;

const RadioGroup = styled.div``;

const RadioWrap = styled.div`
	display: inline-block;

	& input[type='radio'] {
		position: absolute;
		z-index: -1;
		opacity: 0;

		&:focus + label::before {
			border-color: #fc842d;
		}
	}

	& label {
		display: inline-block;
		cursor: pointer;
		position: relative;
		padding-left: 25px;
		margin-right: 0;
		line-height: 18px;
		user-select: none;
		transition: all 250ms linear;
	}

	& label::after {
		content: '';
		display: inline-block;
		width: 10px;
		height: 10px;
		position: absolute;
		left: 5px;
		top: 5px;
		border-radius: 50px;
		transition: all 250ms linear;
	}

	& label::before {
		content: '';
		display: inline-block;
		width: 20px;
		height: 20px;
		position: absolute;
		left: 0;
		bottom: 0;
		top: 0;
		right: 0;
		border-radius: 50px;
		border: 1px solid #e0e0e0;
		transition: all 250ms linear;
		background-color: #fff;
	}

	/* Checked */
	& input[type='radio']:checked + label {
		color: #fc842d;
	}

	& input[type='radio']:checked + label::before {
		background-color: #ffffff;
	}

	& input[type='radio']:checked + label::after {
		background-color: #fc842d;
	}

	/* Hover */
	& label:hover::before {
		border: 1px solid #fc842d;
	}
`;

const BtnGroup = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	margin-top: 60px;
`;

const Button = styled.button`
	color: #ffffff;
	font-size: 14px;
	font-weight: bold;
	line-height: 17px;
	letter-spacing: 0.04em;

	margin-bottom: 20px;

	border: none;
	width: 176px;
	height: 44px;
	cursor: pointer;
	text-align: center;
	border-radius: 30px;
	transition: all 250ms linear;

	background: #fc842d;

	&:hover {
		box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
	}

	@media ${device.tablet} {
		margin-bottom: 0;
	}

	@media ${device.desktop} {
	}
`;

export { Heading, Subtitle, Form, RadioWrap, Label, Input, RadioGroup, BtnGroup, Button };
