import React from "react";
import { userContext, channelContext } from "../App";

function ComponentE() {
  return (
    <div>
      ComponentE
      <userContext.Consumer>
        {(user) => {
          return (
            <channelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    the value from parent Comp {user} and the channel is{" "}
                    {channel}
                  </div>
                );
              }}
            </channelContext.Consumer>
          );
        }}
      </userContext.Consumer>
    </div>
  );
}

export default ComponentE;
