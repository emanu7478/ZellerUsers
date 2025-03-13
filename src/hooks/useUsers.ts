import {useQuery} from '@apollo/client';
import {LIST_ZELLER_CUSTOMERS} from '../graphql/queries';
import {ZellerCustomerConnection} from '../types/user';

interface ListZellerCustomersData {
  listZellerCustomers: ZellerCustomerConnection;
}

interface ListZellerCustomersVars {
  filter: {role: {eq: string}};
}

export const useUsers = (role: string) => {
  const {data, loading, error} = useQuery<
    ListZellerCustomersData,
    ListZellerCustomersVars
  >(LIST_ZELLER_CUSTOMERS, {
    variables: {filter: {role: {eq: role}}},
  });

  return {
    users: data?.listZellerCustomers.items || [],
    loading,
    error,
  };
};
