import React, { useContext } from "react";
import ComponentE from "../components/ComponentE";
import {userContext,channelContext} from "../App"

function ComponentD() {
    const user = useContext(userContext)
    const channel = useContext(channelContext)
  return (
    <div>
      {/* <ComponentE /> */}
{user} - {channel}
    </div>
  );
}

export default ComponentD;
