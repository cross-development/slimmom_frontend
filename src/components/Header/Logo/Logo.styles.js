//Core
import styled from 'styled-components';
//Router
import { Link } from 'react-router-dom';
//Settings
import { device } from 'styles/index.styles';

const LogoWrap = styled.div`
	display: flex;
	align-items: center;
`;

const LogoLink = styled(Link)`
	display: flex;
	align-items: center;

	@media ${device.tablet} {
	}

	@media ${device.desktop} {
		align-items: flex-end;
	}
`;

const MainLogo = styled.img`
	width: 47px;
	height: 47px;

	margin-right: 10px;

	@media ${device.desktop} {
		margin-right: -10px;

		width: 70px;
		height: 66px;
	}
`;

const LogoText = styled.p`
	color: #212121;
	font-size: 20px;
	line-height: 24px;
	letter-spacing: 0.06em;

	display: ${({ isAuth }) => (isAuth ? 'block' : 'none')};

	& span {
		color: #fc842d;
	}

	@media ${device.tablet} {
		display: block;
	}

	@media ${device.desktop} {
		font-size: 20px;
		line-height: 20px;
	}
`;

export { LogoWrap, LogoLink, MainLogo, LogoText };
