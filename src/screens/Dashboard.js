import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet, TextInput, Text, Button } from "react-native";

import NfcManager from "react-native-nfc-manager";
import Ionicons from "@expo/vector-icons/Ionicons";

import ScanningModal from "../components/modals/ScanningModal";
import { PLACEHOLDERS } from "../constants";

const DashboardScreen = () => {
  const [refId, setRefId] = useState(null);
  const [rfid, setRfid] = useState(null);
  const [showScanning, setShowScanning] = useState(false);

  useEffect(() => {
    const checkNfc = async () => {
      const { start, isSupported } = NfcManager;
      const supported = await isSupported();
      if (supported) await start();
    };
    checkNfc();
  }, []);

  return (
    <View style={styles.container}>
      <ScanningModal
        show={showScanning}
        onHide={() => setShowScanning(false)}
        onReadRfid={setRfid}
        rfid={rfid}
      />
      <View>
        <Text style={styles.center}>
        <Image
          style={[styles.spacing, styles.logo]}
          source={require("../../assets/logo.png")}
          />
          </Text>
        <View style={styles.spacing}>
          {!rfid ? (
            <Button title="Scan A Tag" onPress={() => setShowScanning(true)} />
          ) : (
            <>
              <Text>Account ID:</Text>
              <Text>
                <Text>{rfid}</Text>
                <Ionicons
                  name="md-close"
                  size={16}
                  color="gray"
                  onPress={() => setRfid(null)}
                />
              </Text>
            </>
          )}
          <Text style={styles.mt3}>Reference Number:</Text>
          <TextInput
            value={refId}
            onChange={(e) => setRefId(e.nativeEvent.text)}
            placeholder={PLACEHOLDERS.REFERENCE}
          />
        </View>
        <Button title="Submit" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
  spacing: {
    marginVertical: 16,
  },
  mt3: {
    marginTop: 16,
  },
  logo: {
    width: 36,
    height: 36,
    
  },
  center: {
    textAlign: "center",
    fontSize: 50,
    height: 50,
  }
});

export default DashboardScreen;
