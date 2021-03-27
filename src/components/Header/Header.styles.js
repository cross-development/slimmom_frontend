//Core
import styled from 'styled-components';
//Settings
import { device, size } from 'index.styles';

const HeaderWrap = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 18px 15px;
	border-bottom: 2px solid #e0e0e0;

	@media ${device.tablet} {
		width: ${size.tablet};

		padding-left: 87px;
		padding-right: 87px;
	}

	@media ${device.desktop} {
		width: ${size.desktop};
	}
`;

export { HeaderWrap };
