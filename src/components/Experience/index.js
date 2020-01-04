import React, { Component } from "react";

import {
  Card,
  ICardTokens,
  ICardSectionStyles,
  ICardSectionTokens
} from "@uifabric/react-cards";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import {
  Callout,
  getTheme,
  FontWeights,
  mergeStyleSets,
  getId
} from "office-ui-fabric-react";

import { useConstCallback } from "@uifabric/react-hooks";
import {
  ActionButton,
  IButtonStyles,
  IIconProps,
  Icon,
  IIconStyles,
  Image,
  Persona,
  Stack,
  IStackTokens,
  Text,
  ITextStyles
} from "office-ui-fabric-react";

import DateDivider from "../DateDivider";
const siteTextStyles: ITextStyles = {
  root: {
    color: "#025F52"
  }
};
const descriptionTextStyles: ITextStyles = {
  root: {
    color: "#333333"
  }
};
const helpfulTextStyles: ITextStyles = {
  root: {
    color: "#333333"
  }
};
const iconStyles: IIconStyles = {
  root: {
    color: "#0078D4",
    fontSize: 16
  }
};
const footerCardSectionStyles: ICardSectionStyles = {
  root: {
    borderTop: "1px solid #F3F2F1"
  }
};

const dateTextStyles: ITextStyles = {
  root: {
    color: "#505050"
  }
};
const subduedTextStyles: ITextStyles = {
  root: {
    color: "#666666"
  }
};
const actionButtonStyles: IButtonStyles = {
  root: {
    border: "none",
    color: "#333333",
    height: "auto",
    minHeight: 0,
    minWidth: 0,
    padding: 0,

    selectors: {
      ":hover": {
        color: "#0078D4"
      }
    }
  },
  textContainer: {
    fontSize: 12
  }
};
const addFriendIcon: IIconProps = { iconName: "AddFriend" };
const sectionStackTokens: IStackTokens = { childrenGap: 30 };
const cardTokens: ICardTokens = { childrenMargin: 12 };
const footerCardSectionTokens: ICardSectionTokens = { padding: "12px 0px 0px" };
const backgroundImageCardSectionTokens: ICardSectionTokens = { padding: 12 };
const agendaCardSectionTokens: ICardSectionTokens = { childrenGap: 0 };
const attendantsCardSectionTokens: ICardSectionTokens = { childrenGap: 6 };
const theme = getTheme();
const styles = mergeStyleSets({
  buttonArea: {
    verticalAlign: "top",
    display: "inline-block",
    textAlign: "center",
    margin: "0 100px",
    minWidth: 130,
    height: 32
  },
  callout: {
    maxWidth: 300
  },
  header: {
    padding: "18px 24px 12px"
  },
  title: [
    theme.fonts.xLarge,
    {
      margin: 0,
      color: theme.palette.neutralPrimary,
      fontWeight: FontWeights.semilight
    }
  ],
  inner: {
    height: "100%",
    padding: "0 24px 20px"
  },
  actions: {
    position: "relative",
    marginTop: 20,
    width: "100%",
    whiteSpace: "nowrap"
  },
  subtext: [
    theme.fonts.small,
    {
      margin: 0,
      color: theme.palette.neutralPrimary,
      fontWeight: FontWeights.semilight
    }
  ],
  link: [
    theme.fonts.medium,
    {
      color: theme.palette.neutralPrimary
    }
  ]
});

export default class Experience extends Component {
  state = {
    showmod: {},
    technology: {},
    toogleModal: false,
    isCalloutVisible: false,
    iref: ""
  };
  openModel = item => {
    this.setState({
      toogleModal: !this.state.toogleModal,
      showmod: item
    });
  };

  closeModel = () => {
    this.setState({
      toogleModal: !this.state.toogleModal
    });
  };

  toogleCallOut = (item, iref) => {
    console.log(item);
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible,
      iref: iref,
      technology: item
    });
  };

  render() {
    const { showMenu } = this.props;
    const showOrHide = showMenu ? "flex" : "none";

    return (
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          {this.props.data &&
            this.props.data.values.length > 0 &&
            this.props.data.values.map((item, index) => {
              return (
                <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                  <Card
                    aria-label="Clickable vertical card with image bleeding at the center of the card"
                    tokens={cardTokens}
                  >
                    <Card.Item>
                      <Persona
                        text={item.name}
                        secondaryText={` ${item.company} - ${item.location}`}
                      />
                    </Card.Item>
                    <Card.Item fill></Card.Item>
                    <Card.Section>
                      <Text variant="small" styles={siteTextStyles}>
                        <DateDivider
                          startdate={item.startdate}
                          enddate={item.enddate}
                        />
                      </Text>
                      <Text styles={descriptionTextStyles}>{item.desc}</Text>
                      <Text variant="small" styles={helpfulTextStyles}></Text>
                    </Card.Section>
                    <Card.Section
                      horizontal
                      styles={footerCardSectionStyles}
                      tokens={footerCardSectionTokens}
                    >
                      {item.values && (
                        <ActionButton
                          styles={iconStyles}
                          onClick={() => {
                            this.openModel(item);
                          }}
                          iconProps={addFriendIcon}
                          allowDisabledFocus
                        >
                          Responsibilities
                        </ActionButton>
                      )}
                     
                      {item.technology && (
                        <div>
                           <input
                        className="noShow"
                        type="text"
                        ref={input => {
                          this[
                            `btn_tech_${item.name.replace(/[^A-Z0-9]/gi, "_")}`
                          ] = input;
                        }}
                        value=""
                      />
                        
                        <ActionButton
                         
                          styles={iconStyles}
                          onClick={() => {
                            this.toogleCallOut(
                              item,
                              `btn_tech_${item.name.replace(
                                /[^A-Z0-9]/gi,
                                "_"
                              )}`
                            );
                          }}
                          iconProps={addFriendIcon}
                          allowDisabledFocus
                        >
                          Technology Used
                        </ActionButton></div>
                      )}
                      
                      <Stack.Item grow={1}>
                        <span />
                      </Stack.Item>
                      <Icon iconName="MoreVertical" styles={iconStyles} />
                    </Card.Section>
                  </Card>
                </div>
              );
            })}
        </div>
        {this.state.isCalloutVisible && (
          <Callout
            className={styles.callout}
            ariaLabelledBy={this._labelId}
            target={this[this.state.iref]}
            ariaDescribedBy={this._descriptionId}
            role="alertdialog"
            gapSpace={0}
            onDismiss={() => {
              this.toogleCallOut([], "");
            }}
            setInitialFocus={true}
          >
            <div className={styles.header}>
              <p className={styles.title} id={this._labelId}>
                Technology
              </p>
            </div>
            <div className={styles.inner}>
              {this.state.technology.technology &&
                this.state.technology.technology.length > 0 &&
                this.state.technology.technology.map((item1, index) => {
                  return <span class="badge badge-info mr-1">{item1}</span>;
                })}
              <div className={styles.actions}></div>
            </div>
          </Callout>
        )}
        <Panel
          type={PanelType.medium}
          customWidth={PanelType.medium}
          headerText="Responsibilities"
          isOpen={this.state.toogleModal}
          onDismiss={this.closeModel}
          // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
          closeButtonAriaLabel="Close"
        >
          <ol>
            {this.state.showmod.values &&
              this.state.showmod.values.length > 0 &&
              this.state.showmod.values.map((item, index) => {
                return <li>{item.name}</li>;
              })}
          </ol>
        </Panel>
      </div>
    );
  }
}
