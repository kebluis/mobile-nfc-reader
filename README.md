## Overview & Setup
This is practically a very simple implementation of RFID reading using your mobile phone's NFC reader. Disclaimer, I only provisioned for an android app since I don't own any apple products.

Due to the dependency, react-native-nfc-manager, the reader won't function not unless we run it using the Expo Dev Client. This means that we need to make a prebuild before running the app.

This next one is optional but I'm leaving you with the configuration if you don't want to use the method that I'm exactly using.
I wirelessly connected my android phone to my computer by using:
```bash
adb connect <LOCAL IP ADDRESS:PORT>
```
By using the adb cli this means we need to install Android Studio as well.

## Pre requisite
1. Android Phone
2. NFC Built-In
3. Expo Go App

## Getting Started

After cloning, make sure that you open your NFC reader on your mobile phone.

Install the dependencies by running the script:
```bash
npm install
```

REQUIRED! pre-build your codes
```bash
npm run prebuild
```

Then, run the development server:

```bash
npm run start
```

Open your Expo Go App and scan the QR shown on your terminal OR insert the URL manually.
If you also connect your android phone wirelessly using "adb" then just press "a" once you see the QR code.

For reading of RFID, make sure you tap the card closely to your phone's NFC
