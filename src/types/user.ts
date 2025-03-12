export interface ZellerCustomer {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface ZellerCustomerConnection {
  items: ZellerCustomer[];
  nextToken: string | null;
}
