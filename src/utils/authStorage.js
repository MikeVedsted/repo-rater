import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const storedToken = await AsyncStorage.getItem(
      `${this.namespace}:access-token`,
    );

    return storedToken ? JSON.parse(storedToken) : '';
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
      `${this.namespace}:access-token`,
      JSON.stringify(accessToken)
    );
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:access-token`);
  }
}

export default AuthStorage;
