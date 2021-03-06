//Core
import styled from 'styled-components';
//Settings
import { device } from 'styles/index.styles';

const DailyWrapper = styled.div`
	margin-top: 30px;

	@media ${device.tablet} {
		margin-top: 100px;
	}

	@media ${device.desktop} {
		margin-top: 137px;

		width: 55%;
	}

	@media ${device.large} {
		margin-top: 85px;
	}
`;

const Form = styled.form`
	margin-top: 25px;

	@media ${device.tablet} {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		margin-top: 50px;
	}
`;

const InputWrap = styled.div`
	flex: 0 0 45%;

	@media ${device.tablet} {
		&:first-of-type {
			margin-right: 31px;
		}
	}

	@media ${device.desktop} {
		flex: 0 0 40%;
	}
`;

const Heading = styled.h1`
	color: #212121;
	font-weight: bold;
	font-size: 18px;
	line-height: 26px;
	letter-spacing: 0.06em;

	text-align: left;

	@media ${device.tablet} {
		font-size: 30px;
		line-height: 36px;
	}

	@media ${device.desktop} {
		font-size: 34px;
		line-height: 41px;
	}
`;

const BloodType = styled.p`
	color: #9b9faa;
	font-size: 14px;
	font-weight: bold;
	line-height: 17px;
	letter-spacing: 0.04em;

	@media ${device.tablet} {
		margin-bottom: 16px;
	}
`;

const Label = styled.label`
	display: block;

	margin-bottom: 20px;

	position: relative;

	@media ${device.tablet} {
		margin-bottom: 30px;

		&:last-child {
			margin-bottom: 0;
		}
	}
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

	@media ${device.tablet} {
		padding: 16px 5px;
	}
`;

const Message = styled.span`
	color: #e74c3c;
	font-size: 12px;

	position: absolute;
	bottom: -14px;
	left: 0;
`;

const RadioGroupWrap = styled.div`
	padding-left: 5px;
`;

const RadioGroup = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-top: 6px;
`;

const Radio = styled.div`
	display: inline-block;
	color: #9b9faa;

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

	margin-top: 35px;

	@media ${device.tablet} {
		margin-top: 60px;
	}

	@media ${device.desktop} {
		margin-left: 55%;
	}
`;

const Button = styled.button`
	color: #ffffff;
	font-size: 14px;
	font-weight: bold;
	line-height: 17px;
	letter-spacing: 0.04em;

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
`;

export {
	DailyWrapper,
	Heading,
	BloodType,
	Form,
	InputWrap,
	Radio,
	Label,
	Input,
	Message,
	RadioGroupWrap,
	RadioGroup,
	BtnGroup,
	Button,
};
