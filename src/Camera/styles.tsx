import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
`;

export const ModalContainer = styled.View`
	flex: 0.8;
	background-color: white;
	align-items: center;
	justify-content: space-evenly;
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

export const ConfirmBtn = styled.TouchableOpacity`
	width: 200px;
	height: 50px;
	border-color: black;
	border-width: 1px;
	border-radius: 12px;
	justify-content: center;
	align-items: center;
`;

export const ConfirmBtnText = styled.Text`
	font-size: 15px;
	color: black;
`;
