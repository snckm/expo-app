# App Build Commands
cd snckm
npm install -g eas-cli
eas -version
eas login
eas build:configure
eas submit
eas build -p android --profile preview
eas fingerprint:generate
EAS_SKIP_AUTO_FINGERPRINT = 1 eas build -p android --profile preview

# reinstall or upgrade dependencies
rm -rf node_modules package-lock.json
npm install
npx expo start --clear
# or
npm install expo-web-browser@~14.2.0 react-native@0.79.4
npx expo start --clear



# Create new Expo App
npm install -g expo-cli

npx create-expo-app@latest

cd my-app
npx expo start
npx expo start --dev-client
npx expo start --android  # Android emulator
npx expo start --ios  # iOS simulator (macOS only)
npx expo start --web  # Web browser

# Build App using eas-cli
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

# Navigation
npx expo install react-native-screens react-native-safe-area-context @react-navigation/native @react-navigation/native-stack
# Async Storage
npx expo install @react-native-async-storage/async-storage
# File System
npx expo install expo-file-system
# Fonts
npx expo install expo-font