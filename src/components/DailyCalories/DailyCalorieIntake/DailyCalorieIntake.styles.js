//Core
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoReturnDownBackSharp } from 'react-icons/io5';

const ModalWrap = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;

	background-color: #fff;
`;

const ModalWindow = styled.div`
	padding: 0 15px 0;
`;

const GoBackContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	padding-left: 15px;
	margin-bottom: 30px;

	height: 40px;

	background: #eff1f3;
`;

const GoBackBtn = styled.button`
	border: none;
	background-color: transparent;
`;

const GoBackIcon = styled(IoReturnDownBackSharp)`
	font-size: 18px;
`;

const Heading = styled.h1`
	color: #212121;
	font-weight: bold;
	font-size: 18px;
	line-height: 22px;
	letter-spacing: 0.04em;

	margin-bottom: 20px;

	text-align: left;
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
	ModalWrap,
	ModalWindow,
	GoBackContainer,
	GoBackBtn,
	GoBackIcon,
	Heading,
	DailyRate,
	AdditionalInfo,
	Subtitle,
	ProductList,
	ProductItem,
	BtnGroup,
	SignUpLink,
};
