import React from "react";
import { Col, Container, Row } from "reactstrap";
import {
  FocusZone,
  FocusZoneDirection
} from "office-ui-fabric-react/lib/FocusZone";
import { List } from "office-ui-fabric-react/lib/List";
import { Image, ImageFit } from "office-ui-fabric-react/lib/Image";
import {
  ITheme,
  mergeStyleSets,
  getTheme,
  getFocusStyle
} from "office-ui-fabric-react/lib/Styling";

export interface IListGhostingExampleProps {
  items?: IExampleItem[];
}

interface IListGhostingExampleClassObject {
  container: string;
  itemCell: string;
  itemImage: string;
  itemContent: string;
  itemName: string;
  itemIndex: string;
  chevron: string;
}

const theme: ITheme = getTheme();
const { palette, semanticColors, fonts } = theme;

const classNames: IListGhostingExampleClassObject = mergeStyleSets({
  container: {
    overflow: "auto",
    maxHeight: 500
  },
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
const OtherProjects = props => {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
          {props.data &&
            props.data.values.length > 0 &&
            props.data.values.map((item, index) => {
              return (
                
                  <a
                    rel="noopener noreferrer"
                    href={item.portfolio ? item.portfolio : item.link}
                    target="_blank"
                    className={classNames.itemCell} data-is-focusable={true}
                  >
                    <div className={classNames.itemContent}>
                      <div className={classNames.itemName}>{item.name}</div>
                      <div className={classNames.itemIndex}>
                        {" "}
                        {item.portfolio ? item.portfolio : item.link}
                      </div>
                  </div>
                </a>
              );
            })}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default OtherProjects;
