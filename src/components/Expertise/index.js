import React from "react";
import _ from "lodash";
import {
  Stack,
  IStackStyles,
  IStackTokens
} from "office-ui-fabric-react/lib/Stack";
import { DefaultPalette } from "office-ui-fabric-react/lib/Styling";

const textStyles: React.CSSProperties = {
  padding: "5px",
  margin: "0  10px 10px 0 ",
  height: 22,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: DefaultPalette.white
};
const firstStackItemStyles: React.CSSProperties = {
  ...textStyles,
  background: DefaultPalette.themePrimary
};
const Expertise = props => {
  const expresult = _.groupBy(props.data.values, "desc");
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        {props.data &&
          Object.keys(expresult).map((key, value, index) => {
            return (
              <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                <strong> {key}</strong>
                <br />
                <ol>
                  {expresult[key].length > 0 &&
                    expresult[key].map((item, index) => {
                      return (
                        <div className="ms-ListItem is-unread is-focusable">
                          <span className="ms-ListItem-primaryText">
                            {item.name}
                          </span>
                          <span className="ms-ListItem-tertiaryText">
                            <Stack horizontal wrap>
                              {item.values &&
                                item.values.length > 0 &&
                                item.values.map((item1, index) => {
                                  return (
                                    <span style={firstStackItemStyles}>
                                      {" "}
                                      {item1}
                                    </span>
                                  );
                                })}
                            </Stack>
                          </span>
                        </div>
                      );
                    })}
                </ol>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Expertise;
