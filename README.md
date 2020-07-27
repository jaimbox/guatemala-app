## Guatemala-App
## Requirements
- [Ionic Installation](https://ionicframework.com/docs/intro/cli)
- [Capacitor Installation](https://capacitorjs.com/docs/getting-started)

## Clone repository
To begin, run the following command to download the starter project using Git:

`$ git clone https://github.com/jaimbox/guatemala-app.git`

Move into the new folder

`$ cd guatemala-app`

## Install packages

`$ npm install`

## Configure Server IP Address
Open `environment.prod.ts` file located at `src/environments` 

Write your Local IP address in `ipAddress`

For example: `ipAddress: '192.168.100.8'`

## Run the App

`ionic serve`

## Compile the App

`ionic build`

## Copy web assets to platforms

`npx cap copy`

## Adding the Android platform

`npx cap add android`

## Adding the iOS platform

`npx cap add ios`

## Generate custom icons and splash 

`ionic cordova resources`

## Copy resources to Android and iOS

`npm run copy-resources`

## Opening iOS Project
To open the project in Xcode, run:

`npx cap open ios`

## Opening Android Project
To open the project in Android Studio, run:

`npx cap open android`
