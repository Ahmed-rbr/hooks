import React from "react";
import UseState from "./hooks/UseState";
import UseEffect from "./hooks/UseEffect";
import UseRef from "./hooks/UseRef";
import UseMemo from "./hooks/UseMemo";
import UseCallback from "./hooks/UseCallback";
import UseReducer from "./hooks/UseReducer";
import UserReducer from "./hooks/UserReducer";
const App = () => {
  return (
    <div className="w-full flex flex-col m-3 items-center justify-center my-8">
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <UseReducer /> */}
      <UserReducer />
    </div>
  );
};

export default App;
