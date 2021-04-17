//Core
import styled from 'styled-components';

const ProductWrap = styled.div`
	margin-bottom: 60px;

	& ul {
		height: 260px;
		overflow-y: scroll;
		overflow-x: hidden;

		margin-right: -15px;

		&::-webkit-scrollbar {
			width: 6px;
		}

		&::-webkit-scrollbar-track {
			background: #424242;
			background: #f0f1f3;
		}

		&::-webkit-scrollbar-thumb {
			background: #7a7e81;
		}

		&::-webkit-scrollbar-thumb:hover {
			background: #9e9e9e;
		}
	}
`;

export { ProductWrap };
