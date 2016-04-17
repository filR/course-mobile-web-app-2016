## Mobile Web App Course

These are the course materials for the University of Applied Sciences Upper Austria elective course. It's all about building an app for mobile devices using the "good old" web technologies - HTML, CSS and JavaScript.

[Link to the internal Elearning Forum](https://elearning.fh-hagenberg.at/course/view.php?id=5487)


# Classes

#### 01 - Page Layout and Camera

* Use modern CSS, such as flexbox and the viewport unit, to create an app layout.
* Create an app with which the user can take a photo (camera or photo stream) and apply an effect on it.

<img src="http://i.imgur.com/NPlQjiZ.jpg" height="250">
<img src="http://i.imgur.com/jVMHHvS.jpg" height="250">

#### 02 - Mapping and Geolocation

* Map the users location and path on a map.

<img src="http://i.imgur.com/FjDD8m4.jpg" height="250">

#### 03 - Acceleration & Rotation Sensors and 3D

* Access the acceleration sensors to change the background colour of the page depending on how fast the device is accelerating.
* Use the rotation sensors to move a 3d cube on the page.

<img src="http://i.imgur.com/lj2JAd3.png" height="250">

#### 04 - Gamepad & Pong

* Move a HTML element around using a USB game controller.
* Build a pong that can be controlled via a gamepad.

<img src="http://i.imgur.com/U7MF6Tc.jpg" height="250">

#### 05 - Chat

* Build a chat app using Firebase as a backend.

<img src="http://i.imgur.com/GAh4RSR.png" height="250">



# How-Tos

## Debug Websites on your Device from your Computer

It's great to open websites on your mobile phone to see what things look like on an actual device. But when the website doesn't look the way you thought it would, it's handy to be able to look at the website with developer tools to investigate what's going on.

#### Android

1. [Activate USB Debugging on your Android device](https://stackoverflow.com/questions/16707137/how-to-find-and-turn-on-usb-debugging-mode-on-nexus-4#answer-16707217)
2. Connect your device via USB
2. Open your Android device in Chrome by opening the URL `chrome://inspect/`

#### iOS

1. On your iOS device [turn on](https://blog.idrsolutions.com/2015/02/remote-debugging-ios-safari-on-os-x-windows-and-linux/) the `Web Inspector`  in the `Settings` -> `Safari` -> `Advanced`
2. In Safari, activate the `Develop menu` in the settings under "Advanced."
3. Connecting your device via USB
4. In the Safari menu, go to `Develop` -> `Your Device Name` -> `Inspect`


## Host a folder via HTTP

In order to open a local HTML file on another device, you need to host it via HTTP.

#### Mac

```
cd folder/with/source/code
python -m SimpleHTTPServer 8080
```
Then open the address [http://localhost:8080/]() in your browser.

#### Win

Download and install [MAMP](https://www.mamp.info/) or similar to host a folder.

## Other tools

* iOS simulator on Mac: [Install Xcode](https://developer.apple.com/xcode/)
* Android emulator: [Install the Android SDK](https://developer.android.com/sdk/index.html)
* Device testing in your browser: [Browserstack](https://www.browserstack.com/)
