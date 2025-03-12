import React, {useState} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import RadioButton from '../../components/RadioButton/RadioButton';
import UserList from '../../components/UserList/UserList';
import {useUsers} from '../../hooks/useUsers';

const UserScreen: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('Admin');
  const {users, loading, error} = useUsers(selectedRole);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.header}>User Types</Text>
        <RadioButton
          label="Admin"
          selected={selectedRole === 'Admin'}
          onPress={() => setSelectedRole('Admin')}
        />
        <RadioButton
          label="Manager"
          selected={selectedRole === 'Manager'}
          onPress={() => setSelectedRole('Manager')}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>{selectedRole} Users</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0057FF" testID="loading" />
        ) : error ? (
          <Text style={styles.errorText}>Error: {error.message}</Text>
        ) : users.length > 0 ? (
          <UserList users={users} />
        ) : (
          <Text style={styles.noUsersText}>No users found</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10, backgroundColor: '#FFFFFF'},
  section: {marginBottom: 20},
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  errorText: {color: 'red', textAlign: 'center', marginTop: 20},
  noUsersText: {textAlign: 'center', marginTop: 20, color: '#757575'},
});

export default UserScreen;
