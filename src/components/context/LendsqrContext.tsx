import { useState, createContext, useContext } from "react";
import axios from "axios";

type LendsqrProviderProp = { 
  children: React.ReactNode;
};

type LendsqrStateType = {
  item: []
};

// I changed the type to any so as to explore it usage
// type LendsqrStateType2 = {
//  userDetails: any;
// }

type LendsqrContextType = {
  user: LendsqrStateType | null;  
  userDetails :  null | any
  setUser: React.Dispatch<React.SetStateAction<LendsqrStateType | null>>
  setUserDetails:  React.Dispatch<React.SetStateAction< any | null>>
  getUsers: () => void
  getUserDetails: (url: string) => void 
};


const LendsqrContext = createContext({} as LendsqrContextType );

export const LendsqrProvider = ({ children }: LendsqrProviderProp) => {
  const [user, setUser] = useState<LendsqrStateType | null>(null);
  const [ userDetails , setUserDetails] = useState<any | null>(null);


  const getUsers = async () => {
    const response = await axios.get(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );

    const userResponse = response.data;
    setUser(userResponse);
  };

  const getUserDetails = async (url: string) => {
    const response = await axios.get(url);
    const userResponse = response.data;

    setUserDetails(userResponse);
    // console.log(userResponse)
  }


  return (
    <LendsqrContext.Provider
      value={{
        user,
        userDetails,
        setUser,
        setUserDetails,
        getUsers,
        getUserDetails
      }}
    >
      {children}
    </LendsqrContext.Provider>
  );
};

export default LendsqrContext;
