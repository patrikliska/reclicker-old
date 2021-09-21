import { createContext } from 'react';

export interface Store {}

const StoreContext = createContext<Store>({} as Store);

export default StoreContext;
