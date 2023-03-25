export type ClientData = {
  id: number;
  firstName: string;
  lastName: string;
  balance: number;
  status: boolean;
  selected: boolean;
};

export type TableData = {
  heading: string;
  theadData: string[];
  tbodyData: Array<{
    id: number;
    firstName: string;
    lastName: string;
    balance: number;
    status: boolean;
  }>;
};

export type OptionalClientData = {
  id?: number;
  firstName?: string;
  lastName?: string;
  balance?: number;
  status?: boolean;
  selected?: boolean;
};

export type RefData = {
  //temp fix
  firstNameRef: any;
  lastNameRef: any;
  balanceRef: any;
  statusRef: any;
};

export type stateData = {
  clients: Array<{
    id: number;
    firstName: string;
    lastName: string;
    balance: number;
    status: boolean;
  }>;
  displayedClients: Array<{
    id: number;
    firstName: string;
    lastName: string;
    balance: number;
    status: boolean;
  }>;
  selectedClient: ClientData;
  editFormOpen: boolean;
  addFormOpen: boolean;
};
