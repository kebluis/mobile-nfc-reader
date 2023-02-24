## Overview & Setup
This is practically a very simple implementation of RFID reading using your mobile phone's NFC reader. Disclaimer, I only provisioned for an android app since I don't own any apple products.

Due to the dependency, react-native-nfc-manager, the reader won't function not unless we run it using the Expo Dev Client. This means that we need to make a build using the EAS cli and once the apk is installed we'll prebuild our app to see real-time changes

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
4. EAS CLI
5. EAS account

## Getting Started

After cloning, make sure that you open your NFC reader on your mobile phone.

Install the dependencies by running the script:
```bash
npm install
```

Login using your EAS account. *Make sure you've installed the EAS CLI here
```bash
eas login
```

Create your first android build
```bash
npm run build:android
```

After building, install the apk from your eas account.

Once you installed the apk app on your phone, you can easily pre-build your codes to see hot changes on the app.
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
