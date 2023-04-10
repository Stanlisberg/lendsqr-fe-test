import { useState, createContext, useContext } from "react";
import axios from "axios";

type LendsqrProviderProp = {
  children: React.ReactNode;
};

export type LendsqrStateType = {
  item: []
};

type LendsqrStateType2 = {
  info: []
}

type LendsqrContextType = {
  user: LendsqrStateType | null;  
  userDetails : LendsqrStateType2 | null;  
  setUser: React.Dispatch<React.SetStateAction<LendsqrStateType | null>>
  setUserDetails:  React.Dispatch<React.SetStateAction<LendsqrStateType2 | null>>
  getUsers: () => void
  getUserDetails: () => void
};



const LendsqrContext = createContext({} as LendsqrContextType);

export const LendsqrProvider = ({ children }: LendsqrProviderProp) => {
  const [user, setUser] = useState<LendsqrStateType | null>(null);
  const [ userDetails , setUserDetails] = useState<LendsqrStateType2 | null>(null);

  const getUsers = async () => {
    const response = await axios.get(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );

    const userResponse = response.data;
    setUser(userResponse);
    
  };

  // const getUserDetails = async (url) => {
  //   const response = await axios.get(url);
    
  //   const userResponse = response.data;
  //   setUserDetails(userResponse);
  // }

  const getUserDetails = (url: string ) => {
    fetch(url)
    .then((response) => {
      response.json()
    })
    .then((data) => {
      console.log(data)
    })
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
