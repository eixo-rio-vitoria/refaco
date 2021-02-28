import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
`;

export const ModalContainer = styled.View`
	flex: 0.7;
	background-color: white;
	align-items: center;
	border-radius: 12px;
`;

export const ModalTitle = styled.Text`
	margin-top: 20px;
	font-size: 20px;
	color: black;
	font-weight: bold;
`;

export const ModalImg = styled.Image`
	margin-top: 15px;
	width: 300px;
	height: 300px;
	border-color: #d3d3d3;
	border-width: 1px;
	border-radius: 12px;
`;

export const ModalText = styled.Text`
	margin-top: 10px;
	font-size: 15px;
	color: black;
	font-weight: bold;
`;
