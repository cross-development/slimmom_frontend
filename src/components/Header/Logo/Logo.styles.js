//Core
import styled from 'styled-components';
//Router
import { Link } from 'react-router-dom';
//Settings
import { device } from 'index.styles';

const LogoWrap = styled.div`
	display: flex;
	align-items: center;
`;

const LogoLink = styled(Link)`
	@media ${device.tablet} {
		display: flex;
		align-items: center;
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
		margin-right: -8px;
	}
`;

const LogoText = styled.p`
	display: none;

	@media ${device.tablet} {
		color: #212121;
		font-size: 20px;
		line-height: 24px;
		letter-spacing: 0.06em;

		display: block;

		& span {
			color: #fc842d;
		}
	}

	@media ${device.desktop} {
		font-size: 18px;
		line-height: 18px;
	}
`;

export { LogoWrap, LogoLink, MainLogo, LogoText };
