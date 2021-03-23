//Core
import styled from 'styled-components';
//Settings
import { device } from 'index.styles';
//Router
import { Link } from 'react-router-dom';

const Form = styled.form`
	margin-top: 40px;
	margin-bottom: 20px;
`;

const Heading = styled.h1`
	color: #fc842d;
	font-weight: bold;
	font-size: 18px;
	line-height: 22px;
	letter-spacing: 0.04em;
	text-transform: uppercase;

	margin-bottom: 40px;

	text-align: center;
`;

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

const SignUpLink = styled(Link)`
	color: #fc842d;
	font-size: 14px;
	font-weight: bold;
	line-height: 17px;
	letter-spacing: 0.04em;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 176px;
	height: 44px;
	border-radius: 30px;
	border: 2px solid #fc842d;
	transition: all 250ms linear;

	background: transparent;

	&:hover {
		box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
	}
`;

export { Heading, Form, Label, Input, BtnGroup, Button, SignUpLink };
