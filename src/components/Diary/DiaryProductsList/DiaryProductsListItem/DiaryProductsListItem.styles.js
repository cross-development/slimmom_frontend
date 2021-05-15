//Core
import styled from 'styled-components';
//Settings
import { device } from 'styles/index.styles';

const ListItem = styled.li`
	color: #212121;
	font-size: 14px;
	line-height: 17px;
	font-weight: normal;

	display: flex;
	align-items: flex-end;

	margin-right: 8px;

	&:not(:first-child) {
		margin-top: 20px;
	}

	@media ${device.tablet} {
		margin-right: 30px;

		&:not(:first-child) {
			margin-top: 15px;
		}
	}
`;

const itemBorder = () => ({
	'border-bottom': '1px solid #e0e0e0',
	'padding-bottom': '10px',
});

const Title = styled.p`
	letter-spacing: 0.04em;

	display: inline-block;
	margin-right: 10px;
	white-space: normal;
	overflow: auto;
	flex: 3 1;

	${itemBorder}

	@media ${device.tablet} {
		margin-right: 30px;
	}
`;

const Weight = styled.p`
	text-align: center;
	display: inline-block;
	margin-right: 10px;
	white-space: nowrap;
	overflow: auto;
	flex: 1 1;

	${itemBorder}

	& span {
		font-size: 12px;
	}

	@media ${device.tablet} {
		text-align: right;

		margin-right: 30px;

		& span {
			font-size: 14px;
		}
	}
`;

const Kcal = styled.p`
	text-align: center;

	margin-right: 10px;
	flex: 1 1;
	flex: 0 0 15%;

	${itemBorder}

	& span {
		font-size: 10px;
	}

	@media ${device.tablet} {
		text-align: right;

		margin-right: 30px;

		& span {
			font-size: 14px;
		}
	}
`;

const RemoveBtn = styled.button`
	color: #9b9faa;
	background-color: transparent;
	border: none;
	margin-bottom: 10px;
	width: 20px;
	height: 20px;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;
	transition: all 250ms linear;

	&::before {
		content: '×';
		font-size: 20px;
	}

	&:hover {
		color: #424242;
	}

	@media ${device.tablet} {
		width: 25px;
		height: 25px;

		&::before {
			font-size: 30px;
		}
	}
`;

export { ListItem, Title, Weight, Kcal, RemoveBtn };
