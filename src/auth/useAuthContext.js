import { useContext } from 'react';
//
import { AuthContext } from './JwtContext';

// ----------------------------------------------------------------------

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  console.log(context);
  if (!context) throw new Error('useAuthContext context must be use inside AuthProvider');

  return context;
};
