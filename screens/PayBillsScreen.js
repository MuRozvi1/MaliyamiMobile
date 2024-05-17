import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PayBillsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image
            source={require('../assets/pictures/user.jpg')}
            style={styles.image}
          />
          <Text style={styles.user}>Hi Mr Dhewa</Text>
        </View>
        <TouchableOpacity style={styles.bell} onPress={() => navigation.navigate('Option 1')}>
          <Icon name="bell" size={25} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.balanceContainer}>
          <View style={styles.cardContent}>
            <Text style={styles.balance}>$1860.79</Text>
            <Text style={styles.balanceTitle}>Total balace in USD</Text>
          </View>
        </View>

        <View style={styles.optionsContainer}>
  <View style={styles.optionsRow}>
    <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('Send')}>
      <Icon name="send" size={30} color="#fff" />
      <Text style={styles.optionText}>Send</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('Withdraw')}>
      <Icon name="money" size={30} color="#fff" />
      <Text style={styles.optionText}>Withdraw</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('PayBill')}>
      <Icon name="bitcoin" size={30} color="#fff" />
      <Text style={styles.optionText}>Pay Bill</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('More')}>
      <Icon name="th-large" size={30} color="#fff" />
      <Text style={styles.optionText}>More</Text>
    </TouchableOpacity>
  </View>
</View>
      </View>

      <View style={styles.footer}>
        <View style={styles.navBar}>
        <TouchableOpacity style={styles.navBarItem} onPress={() => navigation.navigate('Dashboard')}>
            <Icon name="home" size={40} color="#5580a0" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navBarItem} onPress={() => navigation.navigate('Scan')}>
            <Icon name="qrcode" size={40} color="#5580a0" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navBarItem} onPress={() => navigation.navigate('Wallet')}>
            <Icon name="bank" size={40} color="#5580a0" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navBarItem} onPress={() => navigation.navigate('Card')}>
            <Icon name="credit-card" size={40} color="#5580a0" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navBarItem} onPress={() => navigation.navigate('Settings')}>
            <Icon name="cog" size={40} color="#5580a0" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121025',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  user: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  balanceContainer: {
    position: 'fixed',
    height: 200,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  balance: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFF',
  },
  optionsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 500,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionItem: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 100,
    padding: 10,
    marginHorizontal: 1,
  },
  optionText: {
    fontSize: 12,
    color: '#fff',
  },
  footer: {
    paddingVertical: 10,
    borderRadius: 10,
    borderTopColor: '#000',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  navBarItem: {
    alignItems: 'center',
    paddingVertical: 5,
  },
  navBarTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PayBillsScreen;