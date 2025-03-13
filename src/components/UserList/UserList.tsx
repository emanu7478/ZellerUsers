import React, {useState} from 'react';
import {FlatList, StyleSheet, RefreshControl} from 'react-native';
import {ZellerCustomer} from '../../types/user';
import UserItem from '../UserItem/UserItem';

interface UserListProps {
  users: ZellerCustomer[];
  onRefresh: () => Promise<void>;
}

const UserList: React.FC<UserListProps> = ({users, onRefresh}) => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await onRefresh();
    setRefreshing(false);
  };

  return (
    <FlatList
      data={users}
      keyExtractor={item => item.id}
      renderItem={({item}) => <UserItem user={item} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {flex: 1},
});

export default UserList;
