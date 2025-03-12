import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {ZellerCustomer} from '../../types/user';
import UserItem from '../UserItem/UserItem';

interface UserListProps {
  users: ZellerCustomer[];
}

const UserList: React.FC<UserListProps> = ({users}) => (
  <FlatList
    data={users}
    keyExtractor={item => item.id}
    renderItem={({item}) => <UserItem user={item} />}
    style={styles.list}
  />
);

const styles = StyleSheet.create({
  list: {flex: 1},
});

export default UserList;
