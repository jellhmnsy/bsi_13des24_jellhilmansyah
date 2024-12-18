import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Button, View, SafeAreaView, TouchableOpacity} from 'react-native';

export default function ModalComponent ({modalVisible, setModalVisible}) {
   
    return (
        <SafeAreaView>
          
            <Modal
            onRequestClose={() => setModalVisible(false)}
            visible={modalVisible}
            presentationStyle='pageSheet'
            animationType="slide"
            >
                <View style={styles.modalView}>
                    <Button title="Terms and Conditions" onPress={() => setModalVisible(false)}/>
                    <Text style={styles.modalText}>hello hello hello hellohellohellohelloh ellohellohello hellohellohellohelloh ellohellohellohello hellohellohellohello hellohellohellohellohe llohellohellohellohel lohellohellohellohelloh ellohello hellohellohellohellohello  hellohellohellohellohellohellohello hellohellohellohellohellohellohellohello hel  lohellohello h el  lohellohell ohelloh ellohellov hellohello hellohel lohellohell ohellohel lohelloh ellohellov</Text>
                </View>
            </Modal>
        </SafeAreaView>
    )    }
const styles = StyleSheet.create({
    modalView : {
    fontWeight: 400,
    fontSize: 14,
    color: '#19918F',
    },
    modalText : {
    
    }
  });