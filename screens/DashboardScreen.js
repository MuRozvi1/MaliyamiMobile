import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DashboardScreen = ({ navigation }) => {
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
          <Icon name="bell" size={25} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.card}>
        <ImageBackground source={require('../assets/pictures/card.jpg')} style={styles.backgroundImage}>
          <View style={styles.cardContent}>
            <Text style={styles.balance}>$1860.79</Text>
            <Text style={styles.balanceTitle}>Total balace in USD</Text>
          </View>
          </ImageBackground>
        </View>

        <View style={styles.optionsContainer}>
  <View style={styles.optionsRow}>
    <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('Send')}>
      <Icon name="send" size={30} color="#000" />
      <Text style={styles.optionText}>Send</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('Withdraw')}>
      <Icon name="money" size={30} color="#000" />
      <Text style={styles.optionText}>Withdraw</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('PayBill')}>
      <Icon name="bitcoin" size={30} color="#000" />
      <Text style={styles.optionText}>Pay Bill</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('MoreOptions')}>
      <Icon name="th-large" size={30} color="#000" />
      <Text style={styles.optionText}>More</Text>
    </TouchableOpacity>
  </View>
</View>

<View style={styles.transactionContainer}>
  <View style={styles.transactionRow}>
    <TouchableOpacity style={styles.transactionItem} onPress={() => navigation.navigate('Send')}>
      <Icon name="arrow-circle-up" size={20} color="#FF0000" />
      <Text style={styles.optionText}>Send</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.transactionItem} onPress={() => navigation.navigate('Withdraw')}>
      <Icon name="arrow-circle-up" size={20} color="#FF0000" />
      <Text style={styles.optionText}>Withdraw</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.transactionItem} onPress={() => navigation.navigate('PayBill')}>
      <Icon name="arrow-circle-down" size={20} color="#00FF00" />
      <Text style={styles.optionText}>Pay Bill</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.transactionItem} onPress={() => navigation.navigate('MoreOptions')}>
    <Icon name="arrow-circle-up" size={20} color="#FF0000" />
      <Text style={styles.optionText}>More</Text>
    </TouchableOpacity>
  </View>
</View>

     </View>

      <View style={styles.footer}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navBarItem} onPress={() => navigation.navigate('Dashboard')}>
            <Icon name="home" size={40} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navBarItem} onPress={() => navigation.navigate('Scan')}>
            <Icon name="qrcode" size={40} color="#E0701E" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navBarItem} onPress={() => navigation.navigate('Wallet')}>
            <Icon name="bank" size={40} color="#E0701E" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navBarItem} onPress={() => navigation.navigate('Card')}>
            <Icon name="credit-card" size={40} color="#E0701E" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navBarItem} onPress={() => navigation.navigate('Settings')}>
            <Icon name="cog" size={40} color="#E0701E" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    position: 'center',
    height: 200,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderCurve: 40,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0)', // Adjust the opacity as needed
  },
  balanceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',

    marginRight: 150,
  },
  balance: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 100,
    marginRight: 150,
  },
  optionsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0701E',
    borderRadius: 10,
    marginBottom: 100,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    color: '#000',
  },

  transactionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#80080',
    borderRadius: 10,
  },
  transactionRow: {

  },
  transactionItem: {
    alignItems: 'left',
    alignItems: 'center',
    borderRadius: 10,

  },
  optionText: {
    fontSize: 12,
    color: '#000',
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

export default DashboardScreen;