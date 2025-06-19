import type { ConfigAPI } from '@babel/core';

export default function (api: ConfigAPI) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'] // 👈 Required for Reanimated
  };
}
