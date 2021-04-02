//Core
import styled from 'styled-components';
//Assets
import vector from 'assets/img/vector.png';
import banana from 'assets/img/banana.png';
import layer from 'assets/img/layer.png';
import strawberry from 'assets/img/strawberry.png';
//Settings
import { device } from 'index.styles';

const PromoWrap = styled.div`
	display: none;

	@media ${device.tablet} {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: stretch;

		min-height: 50%;
		flex: 1 0 auto;
		overflow: hidden;

		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;

		background-image: url(${banana}), url(${strawberry}), url(${vector});
		background-size: 60%, 30%, 68%;
		background-repeat: no-repeat;
		background-position: 100% 200%, 86% 25%, 100% 100%;

		&::before {
			content: '';
			position: absolute;
			bottom: -25%;
			left: -15%;

			width: 100%;
			height: 100%;
			transform: rotate(90deg);

			background-image: url(${layer});
			background-size: 62%;
			background-repeat: no-repeat;
			background-position: 0 -20px;
		}
	}
`;

export { PromoWrap };
