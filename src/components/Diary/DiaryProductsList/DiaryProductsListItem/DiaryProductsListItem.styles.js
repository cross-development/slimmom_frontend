//Core
import styled from 'styled-components';

const ListItem = styled.li`
	color: #212121;
	font-size: 14px;
	line-height: 17px;
	font-weight: normal;

	display: flex;
	align-items: flex-end;

	&:not(:first-child) {
		margin-top: 20px;
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
`;

const Kcal = styled.p`
	text-align: center;

	margin-right: 10px;
	flex: 1 1;

	${itemBorder}

	& span {
		font-size: 10px;
	}
`;

const RemoveBtn = styled.button`
	color: #9b9faa;
	background-color: transparent;
	border: none;
	margin-right: 8px;
	margin-bottom: 10px;

	&::before {
		content: '×';
		font-size: 20px;
	}
`;

export { ListItem, Title, Weight, Kcal, RemoveBtn };
