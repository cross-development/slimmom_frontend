//Core
import styled from 'styled-components';
//Assets
import vector from 'assets/img/vector.png';
import banana from 'assets/img/banana.png';
import layer from 'assets/img/layer.png';
import layer3 from 'assets/img/layer3.png';
import strawberry from 'assets/img/strawberry.png';
//Settings
import { device } from 'styles/index.styles';

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

		background-image: url(${banana}), url(${layer3}), url(${strawberry}), url(${vector});
		background-size: 60%, 80%, 32%, 80%;
		background-repeat: no-repeat;
		background-position: 100% 115%, 8% 100%, 92% 76%, 180% 168%;
	}

	@media ${device.desktop} {
		min-height: 100%;

		background-image: url(${banana}), url(${layer}), url(${strawberry}), url(${vector});
		background-size: 36%, 60%, 25%, 54%;
		background-repeat: no-repeat;
		background-position: 100% 0%, 62% 0, 98% 100%, 118% 100%;
	}
`;

export { PromoWrap };
