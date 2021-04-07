//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { AddBtnWrap, AddButton } from './DiaryAddButton.styles';

const DiaryAddButton = ({ onShowModal }) => (
	<AddBtnWrap>
		<AddButton type="button" onClick={onShowModal}>
			+
		</AddButton>
	</AddBtnWrap>
);

DiaryAddButton.propTypes = {
	onShowModal: PropTypes.func.isRequired,
};

export default DiaryAddButton;
