//Core
import styled from 'styled-components';
//Assets
import layer1 from 'assets/img/layer1.png';
import layer5 from 'assets/img/layer5.png';
//Settings
import { device } from 'styles/index.styles';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	margin-top: 60px;
	padding: 40px 0 24px;

	background-color: #f0f1f3;

	@media ${device.tablet} {
		flex-direction: row;
		justify-content: space-between;
		align-items: stretch;

		margin-top: 67px;
		padding: 90px 20px;
		/* padding: 90px 87px; */

/*  */
		/* position: absolute;
		left: 0;
		bottom: 0;
		right: 0; */

		background-image: url(${layer1});
		background-size: contain;
		background-repeat: no-repeat;
		background-position: bottom right;
	}

	@media ${device.desktop} {
		flex-direction: column;

		padding: 295px 130px 160px 90px;

		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 58%;

		background-image: url(${layer5});
	}

	@media ${device.large} {
		left: 65%;

		padding: 295px 160px 160px 90px;
	}
`;

const SummaryWrap = styled.div`
	flex: 0 0 45%;
`;

const ProductWrap = styled.div`
	flex: 0 0 45%;
`;

const Title = styled.h3`
	color: #212121;
	font-size: 14px;
	font-weight: bold;
	line-height: 17px;
	letter-spacing: 0.04em;

	margin-bottom: 20px;

	@media ${device.tablet} {
		margin-bottom: 24px;
	}
`;

const SummaryList = styled.ul`
	margin-bottom: 40px;

	@media ${device.tablet} {
		margin-bottom: 0;
	}
`;

const fontStyle = () => ({
	color: '#9b9faa',
	'font-size': '14px',
	'font-weight': 'normal',
	'line-height': '17px',
	'letter-spacing': '0.04em',
});

const SummaryItem = styled.li`
	${fontStyle};

	display: flex;
	justify-content: space-between;

	&:not(:last-child) {
		margin-bottom: 14px;
	}
`;

const ProductList = styled.ul`
	max-height: 110px;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-track {
		background: #424242;
	}

	&::-webkit-scrollbar-thumb {
		background: #7a7e81;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #9e9e9e;
	}

	@media ${device.desktop} {
		max-height: 150px;
	}
`;

const ProductItem = styled.li`
	${fontStyle}
`;

const ProductMessage = styled.p`
	${fontStyle}
`;

export {
	Wrapper,
	Title,
	SummaryWrap,
	SummaryList,
	SummaryItem,
	ProductWrap,
	ProductList,
	ProductItem,
	ProductMessage,
};
