//Core
import styled from 'styled-components';
//Assets
import vector from 'assets/img/vector.png';
import banana from 'assets/img/banana.png';
import layer2 from 'assets/img/layer2.png';
import strawberry from 'assets/img/strawberry.png';
//Settings
import { device } from 'index.styles';
//Router
import { Link } from 'react-router-dom';

const Form = styled.form`
	margin-top: 40px;
	margin-bottom: 20px;

	@media ${device.tablet} {
		margin-top: 156px;
		margin-bottom: 0;

		display: flex;
		flex-direction: column;
	}
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

	@media ${device.tablet} {
		margin-bottom: 20px;

		text-align: left;
	}
`;

const Label = styled.label`
	@media ${device.tablet} {
		width: 70%;

		&:not(:last-of-type) {
			margin-bottom: 20px;
		}
	}
`;

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

	@media ${device.tablet} {
		flex-direction: row;
		justify-content: space-between;

		margin-top: 40px;
	}
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

		&:first-child {
			margin-right: 30px;
		}
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

const PromoWrap = styled.div`
	display: none;

	@media ${device.tablet} {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: stretch;

		min-height: 100%;
		flex: 1 0 auto;
		overflow: hidden;

		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;

		background-image: url(${banana}), url(${strawberry}), url(${layer2}), url(${vector});
		background-size: 62%, 40%, 90%, 68%;
		background-repeat: no-repeat;
		background-position: 100% 115%, 110% 68%, 50% 20%, 100% 100%;
	}

	@media ${device.desktop} {
	}
`;

export { PromoWrap, Heading, Form, Label, Input, BtnGroup, Button, SignUpLink };
