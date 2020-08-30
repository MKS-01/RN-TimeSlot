import React, {useState} from 'react';
import {RootSafeAreaView, RootView} from '_styles/rootView';
import {
  Text,
  Container,
  Button,
  BtnText,
  ModalContainer,
  Image,
  ModalBtn,
} from '_styles/PhotoGallery';
import Lightbox from 'react-native-lightbox';
import {Modal} from 'react-native';

const Photo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <RootSafeAreaView>
      <RootView>
        <Text>Photo Gallery</Text>
        <Container>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              console.log('Modal has been closed.');
            }}>
            <ModalContainer>
              <Image source={require('../../assets/images/iron.png')} />
              <Button
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </Button>
            </ModalContainer>
          </Modal>

          <Button
            onPress={() => {
              setModalVisible(true);
            }}>
            <BtnText>Open</BtnText>
          </Button>
        </Container>
      </RootView>
    </RootSafeAreaView>
  );
};

export default Photo;
