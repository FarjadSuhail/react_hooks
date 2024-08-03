import React from "react";
import ClassCounter from "./components/useStateHook/ClassCounter";
import HookCounter from "./components/useStateHook/HookCounter";
import HookCounter2 from "./components/useStateHook/HookCounter2";
import HookCounter3 from "./components/useStateHook/HookCounter3";
import HookCounter4 from "./components/useStateHook/HookCounter4";
import ClassCounterOne from "./components/useEffectHook/ClassCounterOne";
import HookCounterOne from "./components/useEffectHook/HookCounterOne";

function App() {
  return (
    <div className="">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter4 /> */}
      {/* <ClassCounterOne /> */}
      <HookCounterOne />
    </div>
  );
}

export default App;
