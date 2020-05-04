import React from "react";
import ClassCounter from "../src/components/classCounter";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import HookCounter4 from "./components/HookCounter4";
import ClassCounterOne from "./components/ClassCounterOne";
import HookUseEffectCounter from "./components/HookUseEffectCounter";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import ClassIntervalCounter from "./components/ClassIntervalCounter";
import HookIntervalCounter from "./components/HookIntervalCounter";
import DataFetching from "./components/DataFetching";
import ComponentC from "./components/ComponentC";
export const userContext = React.createContext()
export const channelContext = React.createContext()
function App () {

  
  return (
    <div>
      
        {/* <ClassCounter /> */}
        {/* <HookCounter /> */}
        {/* <HookCounter2 /> */}
        {/* <HookCounter3 /> */}
        {/* <HookCounter4 /> */}
        {/* <ClassCounterOne /> */}
        {/* <HookUseEffectCounter /> */}
        {/* <ClassMouse /> */}
        {/* <HookMouse /> */}
        {/* <MouseContainer /> */}
        {/* <ClassIntervalCounter /> */}
        {/* <HookIntervalCounter /> */}
        {/* <DataFetching /> */}
        <userContext.Provider value={'Muruks'}>
          <channelContext.Provider value={'Reacthook'} >
            <ComponentC />
          </channelContext.Provider>
        </userContext.Provider>
       
    </div>
  );
};

export default App;
