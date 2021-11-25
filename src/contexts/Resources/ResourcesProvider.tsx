import React, { useEffect, useState } from 'react';
import ResourcesContext from './ResourcesContext';

const StoreProvider = ({ children }) => {
  return <ResourcesContext.Provider value={{}}>{children}</ResourcesContext.Provider>;
};

StoreProvider.defaultProps = {
  children: [],
};

export default StoreProvider;
