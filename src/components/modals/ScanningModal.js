import React, { useEffect } from "react";
import {
  Modal,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  Button,
  TouchableOpacity,
} from "react-native";
import NfcManager, { NfcTech } from "react-native-nfc-manager";

const ScanningModal = ({ show, onHide, onReadRfid, rfid }) => {

  useEffect(() => {
    if(!rfid && show) {
      readNdef()
    }
  }, [rfid, show])

  const readNdef = async () => {
    try {
      // register for the NFC tag with NDEF in it
      const tech = NfcTech.MifareClassic;
      await NfcManager.requestTechnology(tech);
      const tag = await NfcManager.getTag();

      onReadRfid(tag.id);
    } catch (ex) {
      console.warn("Error on reading tags!", ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent
        visible={show}
        onRequestClose={null}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {!rfid ? (
              <>
                <Text style={styles.modalText}>
                  Place Your Card On The NFC Scanner...
                </Text>
                <ActivityIndicator />
              </>
            ) : (
              <>
                <Text style={styles.modalText}>Kindly Confirm Your Account ID:</Text>
                <Text style={styles.modalText}>{rfid}</Text>
                <Text style={styles.modalActions}>
                  <View style={styles.buttonRescan}>
                    <TouchableOpacity style={styles.rescanText} onPress={() => onReadRfid(null)}>
                      <Text>Rescan</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.button]}>
                    <Button onPress={() => onHide()} title="Confirm"></Button>
                  </View>
                </Text>
              </>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    paddingHorizontal: 8,
  },
  buttonRescan: {
    paddingHorizontal: 8,
    borderRadius: 4, 
    borderWidth: 1,
    borderColor: "#000"
  },
  buttonOpen: {
    backgroundColor: "#FFF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  rescanText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    marginTop: 6

  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalActions: {
    marginTop: 15,
    textAlign: "center",
  },
});

export default ScanningModal;
