import React from "react";
import { Separator } from "office-ui-fabric-react/lib/Separator";
import { List } from "office-ui-fabric-react/lib/List";
import {
  ITheme,
  mergeStyleSets,
  getTheme,
  getFocusStyle
} from "office-ui-fabric-react/lib/Styling";

import DateDivider from "../DateDivider";

interface IListBasicExampleClassObject {
  itemCell: string;
  itemImage: string;
  itemContent: string;
  itemName: string;
  itemIndex: string;
  chevron: string;
}

const theme: ITheme = getTheme();
const { palette, semanticColors, fonts } = theme;

const classNames: IListBasicExampleClassObject = mergeStyleSets({
  itemCell: [
    getFocusStyle(theme, { inset: -1 }),
    {
      minHeight: 54,
      padding: 10,
      boxSizing: "border-box",
      borderBottom: `1px solid #00000008`,
      display: "flex",
      selectors: {
        "&:hover": { background: "#00000008" }
      }
    }
  ],
  itemImage: {
    flexShrink: 0
  },
  itemContent: {
    marginLeft: 10,
    overflow: "hidden",
    flexGrow: 1
  },
  itemName: [
    fonts.xLarge,
    {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  ],
  itemIndex: {
    fontSize: fonts.small.fontSize,
    color: palette.neutralTertiary,
    marginBottom: 10
  }
});

const Education = props => {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
          {props.data &&
            props.data.values.length > 0 &&
            props.data.values.map((item, index) => {
              return (
                <div className={classNames.itemCell} data-is-focusable={true}>
                  <div className={classNames.itemContent}>
                    <DateDivider
                      startdate={item.startdate}
                      enddate={item.enddate}
                    />

                    <div className={classNames.itemName}>{item.name}</div>
                    <div className={classNames.itemIndex}>{`${
                      item.institute
                    } ${item.location && item.location}`}</div>
                    <div>{item.desc}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Education;
