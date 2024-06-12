//Create Context API so that can be able to pass API response data from one page to the next 
import { JsxEmit } from 'typescript';
import React, { createContext, useState, useEffect, ReactNode } from 'react';


type AppContextProps = {

    isQuickMenuVisible: boolean; // Add this line
    setIsQuickMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;

};

export const AppContext = createContext<AppContextProps>({

    isQuickMenuVisible: false,
    setIsQuickMenuVisible: () => {}, 


});

export const AppContextProvider: React.FC<{ children: ReactNode }>  = ({ children }) => {

 const [isQuickMenuVisible, setIsQuickMenuVisible] = useState(false);


    return (
        <AppContext.Provider value={{

          isQuickMenuVisible,
          setIsQuickMenuVisible,
          
          }}>
            {children}
        </AppContext.Provider>
    );

};

export default AppContext;
