import {
  ConnectWallet,
  embeddedWallet,
  localWallet,
  metamaskWallet,
  rainbowWallet,
  ThirdwebProvider,
  trustWallet,
  walletConnect,
} from '@thirdweb-dev/react-native';
import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TW_CLIENT_ID} from '@env';
import StackNavigator from './src/Navigation/StackNavigator';

const App = () => {
  return (
    <ThirdwebProvider
      activeChain= "mumbai"
      clientId={TW_CLIENT_ID}
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
        rainbowWallet(),
        walletConnect({
          recommended: true,
        }),
        embeddedWallet({
          auth: {
            // you need to enable EmbeddedWallets under your API Key in your thirdweb dashboard:
            // https://thirdweb.com/dashboard/settings/api-keys
            options: ['email', 'google'],
            // you need to add this deeplink in your allowed `Redirect URIs` under your API Key in your thirdweb dashboard:
            // https://thirdweb.com/dashboard/settings/api-keys
            redirectUrl: 'rnstarter://',
          },
        }),
        trustWallet(),
        localWallet(),
      ]}>
      <StackNavigator />
    </ThirdwebProvider>
  );
};



const styles = StyleSheet.create({
  view: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
