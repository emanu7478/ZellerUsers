import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ZellerCustomer } from '../../types/user';

interface UserItemProps {
  user: ZellerCustomer;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  const initial = user.name.charAt(0).toUpperCase();
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initial}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.userType}>{user.role}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E3F2FD',
    borderRadius: 5,
    marginVertical: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#E6F0FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#0057FF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textContainer: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#000000' },
  userType: { fontSize: 14, color: '#757575' },
});

export default UserItem;
