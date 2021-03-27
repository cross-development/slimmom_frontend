//Core
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Settings
import { device } from 'index.styles';

const ModalDropdown = styled.div`
	@media ${device.tablet} {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10000;
		width: 100%;
		height: 100vh;

		background: rgba(33, 33, 33, 0.1);
	}
`;

const ModalWrap = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: calc(100vh - 85px);

	padding: 75px 15px 0;

	background-color: #fff;

	@media ${device.tablet} {
		top: 49%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: calc(100% - 87px - 87px);
		height: auto;

		padding: 64px 43px 68px;

		box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
	}
`;

const GoBackContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	position: absolute;
	width: 100%;
	height: 40px;
	top: 0;
	left: 0;

	padding: 0 15px;

	background-color: #eff1f3;

	@media ${device.tablet} {
		justify-content: flex-end;
		background-color: transparent;
	}
`;

const GoBackBtn = styled.button`
	border: none;
	background-color: transparent;
	width: 24px;
	height: 24px;

	&::before {
		font-size: 18px;
		content: '⮨';
	}

	@media ${device.tablet} {
		&::before {
			content: '×';
		}
	}
`;

const Heading = styled.h1`
	color: #212121;
	font-weight: bold;
	font-size: 18px;
	line-height: 22px;
	letter-spacing: 0.04em;

	margin-bottom: 20px;

	text-align: left;

	@media ${device.tablet} {
		font-size: 26px;
		line-height: 32px;

		text-align: center;
	}
`;

const DailyRate = styled.p`
	color: #264061;
	font-size: 48px;
	font-weight: bold;
	line-height: 58px;
	text-align: center;

	span {
		font-size: 16px;
	}
`;

const AdditionalInfo = styled.div`
	margin-top: 10px;
	padding-top: 18px;

	border-top: 1px solid #e0e0e0;

	@media ${device.tablet} {
		width: 330px;
		margin-left: auto;
		margin-right: auto;
	}
`;

const Subtitle = styled.h2`
	color: #212121;
	font-size: 14px;
	font-weight: bold;
	line-height: 17px;
	letter-spacing: 0.04em;

	margin-bottom: 20px;
`;

const ProductList = styled.ul`
	list-style: decimal inside;
`;

const ProductItem = styled.li`
	color: #9b9faa;
	font-weight: normal;
	font-size: 14px;
	line-height: 17px;
	letter-spacing: 0.04em;

	&:not(:last-child) {
		margin-bottom: 12px;
	}
`;

const BtnGroup = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	margin-top: 35px;
`;

const SignUpLink = styled(Link)`
	color: #ffffff;
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

	background: #fc842d;

	&:hover {
		box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
	}
`;

export {
	ModalDropdown,
	ModalWrap,
	GoBackContainer,
	GoBackBtn,
	Heading,
	DailyRate,
	AdditionalInfo,
	Subtitle,
	ProductList,
	ProductItem,
	BtnGroup,
	SignUpLink,
};
