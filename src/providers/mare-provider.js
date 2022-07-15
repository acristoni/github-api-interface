import React, { createContext, useCallback, useState, useEffect } from "react";
import api from "../services/api";
///ARRANJAR UM JEITO DE IMPORTAR AS INFORMAÇÕES LAT, LNG E DATA

export const MareContext = createContext([]);

const MareProvider = ({ children }) => {
  const [mareState, setMareState] = useState([
    
    {
        "height": 1,
        "time": "",
        "type": "high"
    },
    {
        "height": 1,
        "time": "",
        "type": "low"
    },
    {
        "height": 1,
        "time": "",
        "type": "high"
    },
    {
        "height": 1,
        "time": "",
        "type": "low"
    }
    
  ]);

  const getMareData = (lat,lng,date) => {
    
      if(lat && lng) {
        const data = `point?lat=${lat}&lng=${lng}&${date}`
        
        
        api
          .get(data)
          .then((response) => setMareState(response.data.data))
    }

  };

  const calcHora = (xx) => {
      const time = xx;
      const hora = time[11] + time[12] + time[13] + time[14] + time[15];
      return hora;
  };

  const contextValue = {
    mareState,
    getMareData: useCallback((lat,lng,date) => getMareData(lat,lng,date), []),
    calcHora: useCallback((xx) => calcHora(xx), []),
  };

  return (
    <MareContext.Provider value={contextValue}>
      {children}
    </MareContext.Provider>
  );
};

export default MareProvider;