//Core
import styled from 'styled-components';

const ListItem = styled.li``;

const Title = styled.p``;

const Weight = styled.p``;

const Kcal = styled.p``;

const RemoveBtn = styled.button`
	&::before {
		content: '×';
		font-size: 18px;
	}
`;

export { ListItem, Title, Weight, Kcal, RemoveBtn };
