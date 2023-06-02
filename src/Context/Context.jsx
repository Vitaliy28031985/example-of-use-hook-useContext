import React from 'react';
import { useContext, useState, useEffect } from 'react';
import fetchTrendingDay from '../service/API';

const ContextState = React.createContext();

export const useContextMim = () => {
    return useContext(ContextState);
}

const Context = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchTrendingDay().then(res => setVideos(res.results));
    }, [])

    return (
        <ContextState.Provider value={{
            toggleValue: toggle,
            toggle: setToggle,
            videosArr: videos
        }}>
            {children}
      </ContextState.Provider>
  )  
}

export default Context;