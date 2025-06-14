# Create Expo App
npm install -g expo-cli

npx create-expo-app@latest

cd my-app
npx expo start
npx expo start --dev-client
npx expo start --android  # Android emulator
npx expo start --ios  # iOS simulator (macOS only)
npx expo start --web  # Web browser

npm install -g eas-cli
eas -version
eas login  # if you have an Expo account
eas build:configure
eas build -p android
eas build -p android --profile preview
eas build -p android --profile preview --non-interactive --auto-submit
eas build -p android --profile development
eas build -p ios

npx expo install expo-updates
eas update --branch preview


# Set Environment Variable Inline (One-time used)

# Bash (macOS/Linux/WSL)
EAS_SKIP_AUTO_FINGERPRINT = 1 eas build -p android --profile preview

# Cmd (Windows)
set EAS_SKIP_AUTO_FINGERPRINT = 1
eas build -p android --profile preview

# Powershell (Windows)
$env:EAS_SKIP_AUTO_FINGERPRINT = "1"
eas build -p android --profile preview


# Navigation
npx expo install react-native-screens react-native-safe-area-context @react-navigation/native @react-navigation/native-stack
# Async Storage
npx expo install @react-native-async-storage/async-storage
# File System
npx expo install expo-file-system
# Fonts
npx expo install expo-font



# Build Commands

cd snckm
# ~/snckm $

npm install -g eas-cli
# packages are looking for funding
#  run `npm fund` for details

eas -version
# eas-cli/16.10.1 android-arm64 node-v22.15.0

eas login
# You are already logged in as snckm.
# ✔ Do you want to continue? … yes
# Log in to EAS with email or username (exit and run eas login --help to see other login options)
# ✔ Email or username … snckm
# ✔ Password … **************
# One-time password from authenticator required.
# ✔ One-time password or backup code (press Enter for more options): … 007800
# Logged in

eas build:configure
# 💡 The following process will configure your iOS and/or Android project to be compatible with EAS Build. These changes only apply to your local project files and you can safely revert them at any time.
# ✔ Which platforms would you like to configure for EAS Build? › Android
# 🎉 Your project is ready to build.
# - Run eas build when you are ready to create your first build.
# - Once the build is completed, run eas submit to upload the app to app stores.
# - Learn more about other capabilities of EAS Build: https://docs.expo.dev/build/introduction


eas build -p android --profile preview
# Resolved "preview" environment for the build. Learn more: https://docs.expo.dev/eas/environment-variables/#setting-the-environment-for-your-builds
# No environment variables with visibility "Plain text" and "Sensitive" found for the "preview" environment on EAS.
# ✔ Using remote Android credentials (Expo server)
# ✔ Using Keystore from configuration: Build Credentials uwtn1GIEo8 (default)
# Compressing project files and uploading to EAS Build. Learn more: https://expo.fyi/eas-build-archive
# ✔ Uploaded to EAS 4s
# ⌛️ Computing the project fingerprint is taking longer than expected...
# ⏩ To skip this step, set the environment variable: EAS_SKIP_AUTO_FINGERPRINT=1
# ✖ Failed to compute project fingerprint
# ⏩ To skip this step, set the environment variable: EAS_SKIP_AUTO_FINGERPRINT=1
# Expected `concurrency` to be a number from 1 and up
#     Error: build command failed.


eas fingerprint:generate
# ✔ Select platform › Android
# ⌛️ Computing the project fingerprint is taking longer than expected...
# ⏩ To skip this step, set the environment variable: EAS_SKIP_AUTO_FINGERPRINT=1
# ✖ Failed to compute project fingerprint
# ⏩ To skip this step, set the environment variable: EAS_SKIP_AUTO_FINGERPRINT=1
# Expected `concurrency` to be a number from 1 and up
#     Error: fingerprint:generate command failed.

EAS_SKIP_AUTO_FINGERPRINT = 1 eas build -p android --profile preview
# Resolved "preview" environment for the build. Learn more: https://docs.expo.dev/eas/environment-variables/#setting-the-environment-for-your-builds
# No environment variables with visibility "Plain text" and "Sensitive" found for the "preview" environment on EAS.
# Environment variables loaded from the "preview" build profile "env" configuration: ENV.

# ✔ Using remote Android credentials (Expo server)
# ✔ Using Keystore from configuration: Build Credentials uwtn1GIEo8 (default)

# Compressing project files and uploading to EAS Build. Learn more: https://expo.fyi/eas-build-archive
# ✔ Uploaded to EAS 4s
# Skipping project fingerprint

# Build details: https://expo.dev/accounts/snckm/projects/snckm/builds/2a6d1ca4-f86e-4ac1-9afd-72b0a5970e95

# Waiting for build to complete. You can press Ctrl+C to exit.
# ✔ Build finished

# Show QR Code
# 🤖 Open this link on your Android devices (or scan the QR code) to install the app:
# https://expo.dev/accounts/snckm/projects/snckm/builds/2a6d1ca4-f86e-4ac1-9afd-72b0a5970e95

# ✔ Install and run the Android build on an emulator? … yes

# ✔ Successfully downloaded app 4m 55s
# adb executable doesn't seem to work. Please make sure Android Studio is installed on your device and ANDROID_HOME or ANDROID_SDK_ROOT env variables are set.
# spawn adb EACCES
#     Error: build command failed.