import { useState, createContext, useContext } from "react";
import axios from "axios";

type LendsqrProviderProp = {
  children: React.ReactNode;
};

export type LendsqrStateType = {
  item: [];
};

type LendsqrContextType = {
  user: LendsqrStateType | null;  
  setUser: React.Dispatch<React.SetStateAction<LendsqrStateType | null>>
  getUsers: () => void
};

const LendsqrContext = createContext({} as LendsqrContextType);

export const LendsqrProvider = ({ children }: LendsqrProviderProp) => {
  const [user, setUser] = useState<LendsqrStateType | null>(null);

  const getUsers = async () => {
    const response = await axios.get(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );

    const userResponse = response.data
    setUser(userResponse);
    
  };

  
  return (
    <LendsqrContext.Provider
      value={{
        user,
        setUser,
        getUsers,
      }}
    >
      {children}
    </LendsqrContext.Provider>
  );
};

export default LendsqrContext;
