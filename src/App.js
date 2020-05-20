import React, { useReducer } from "react";
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
import UseReducerCounter from "./components/UseReducerCounter";
import UseReducerCounter2 from "./components/UseReducerCounter2";
import UseReducerCounter3 from "./components/UseReducerCounter3";
import ComponentA from "./components/UseReducerandUseContext/ComponentA";
import ComponentB from "./components/UseReducerandUseContext/ComponentB";
import ComponentsC from "./components/UseReducerandUseContext/ComponentsC";
import DataFectingOne from "./components/DataFecting/DataFectingOne";
import DataFectingReducer from "./components/DataFecting/DataFectingReducer";
import ParentComp from "./components/UseCallback/ParentComp";
import CounterMemo from "./components/UseMemoHook/CounterMemo";
import FocusInput from "./components/UseRefHook/FocusInput";
import HookTimer from "./components/UseRefHook/HookTimer";
import CustomeTitleOne from "./components/CustomeHook.js/CustomeTitleOne";
import CustomeTitleTwo from "./components/CustomeHook.js/CustomeTileTwo";
import CustomerCounterHookTwo from "./components/CustomeHook.js/CustomerCounterHookTwo";
import CustomerCounterHookOne from "./components/CustomeHook.js/CustomerCounterHookOne";
import CustomeInputHooks from "./components/CustomeHook.js/CustomeInputHooks";
// export const userContext = React.createContext()
// export const channelContext = React.createContext()
export const CountContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
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
      {/* <userContext.Provider value={'Muruks'}>
          <channelContext.Provider value={'Reacthook'} >
            <ComponentC />
          </channelContext.Provider>
        </userContext.Provider> */}
      {/* <UseReducerCounter /> */}
      {/* <UseReducerCounter2 /> */}
      {/* <UseReducerCounter3 /> */}
      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentsC />
      </CountContext.Provider> */}
      {/* <DataFectingOne /> */}
      {/* <DataFectingReducer /> */}
      {/* <ParentComp /> */}
      {/* <CounterMemo /> */}
      {/* <FocusInput /> */}
      {/* <HookTimer /> */}
      {/* <CustomeTitleOne />
      <CustomeTitleTwo /> */}
      {/* <CustomerCounterHookOne />
      <CustomerCounterHookTwo /> */}
      <CustomeInputHooks />
    </div>
  );
}

export default App;
