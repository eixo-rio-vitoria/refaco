import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {
	Container,
	ModalContainer,
	ModalTitle,
	ModalImg,
	ModalText,
	ConfirmBtn,
	ConfirmBtnText,
} from './styles';
import Modal from 'react-native-modal';
import SprayImg from '../../assets/spray.jpg';

export default function App() {
	const [hasPermission, setHasPermission] = useState(null as any);
	const [scanned, setScanned] = useState(false);
	const [scannedData, setscannedData] = useState('');

	useEffect(() => {
		(async () => {
			const {
				status,
			} = (await BarCodeScanner.requestPermissionsAsync()) as any;
			setHasPermission(status === 'granted');
		})();
	}, []);

	const handleBarCodeScanned = ({ type, data }: any) => {
		setScanned(true);
		setscannedData(data);
	};

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<Container>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={StyleSheet.absoluteFillObject}
			/>
			{scanned && (
				<Modal isVisible={true}>
					<ModalContainer style={{ flex: 1 }}>
						<ModalTitle>Item escaneado</ModalTitle>
						<Text>Confirme o escaneamento</Text>
						<ModalImg source={SprayImg} />
						<ModalText>Vaselina Spray Mundial Prime | 120g</ModalText>

						<ConfirmBtn onPress={() => setScanned(false)}>
							<ConfirmBtnText>Adicionar item</ConfirmBtnText>
						</ConfirmBtn>
					</ModalContainer>
				</Modal>
			)}
		</Container>
	);
}
