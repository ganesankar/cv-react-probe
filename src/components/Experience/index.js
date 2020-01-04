import React, { Component } from "react";
import { Card, ICardTokens } from "@uifabric/react-cards";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import {
  Callout,
  getTheme,
  FontWeights,
  mergeStyleSets,
  ActionButton,
  IIconProps,
  Icon,
  Persona,
  Stack,
  IStackTokens,
  Text
} from "office-ui-fabric-react";

import DateDivider from "../DateDivider";

const theme = getTheme();
const styles = mergeStyleSets({
  addFriendIcon: { iconName: "AddFriend" },
  cardTokens: { childrenMargin: 12 },
  card: {
    padding: "10px"
  },
  footerCardSectionTokens: { padding: "12px 0px 0px" },

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
  link: [
    theme.fonts.medium,
    {
      color: theme.palette.neutralPrimary
    }
  ],
  siteTextStyles: {
    root: {
      color: "#025F52"
    }
  },
  descriptionTextStyles: {
    root: {
      color: "#333333"
    }
  },
  helpfulTextStyles: {
    root: {
      color: "#333333"
    }
  },
  iconStyles: {
    root: {
      color: "#0078D4",
      fontSize: 16
    }
  },
  footerCardSectionStyles: {
    root: {
      borderTop: "1px solid #F3F2F1"
    }
  },
  dateTextStyles: {
    root: {
      color: "#505050"
    }
  },
  subduedTextStyles: {
    root: {
      color: "#666666"
    }
  },
  actionButtonStyles: {
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
  }
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
                    tokens={styles.cardTokens}
                    styles={styles.card}
                  >
                    <Card.Item>
                      <Persona
                        text={item.name}
                        secondaryText={` ${item.company} - ${item.location}`}
                      />
                    </Card.Item>
                    <Card.Item fill></Card.Item>
                    <Card.Section>
                      <Text variant="small" styles={styles.siteTextStyles}>
                        <DateDivider
                          startdate={item.startdate}
                          enddate={item.enddate}
                        />
                      </Text>
                      <Text styles={styles.descriptionTextStyles}>
                        {item.desc}
                      </Text>
                      <Text
                        variant="small"
                        styles={styles.helpfulTextStyles}
                      ></Text>
                    </Card.Section>
                    <Card.Section
                      horizontal
                      styles={styles.footerCardSectionStyles}
                      tokens={styles.footerCardSectionTokens}
                    >
                      {item.values && (
                        <ActionButton
                          styles={styles.iconStyles}
                          onClick={() => {
                            this.openModel(item);
                          }}
                          iconProps={styles.addFriendIcon}
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
                                `btn_tech_${item.name.replace(
                                  /[^A-Z0-9]/gi,
                                  "_"
                                )}`
                              ] = input;
                            }}
                            value=""
                          />

                          <ActionButton
                            styles={styles.iconStyles}
                            onClick={() => {
                              this.toogleCallOut(
                                item,
                                `btn_tech_${item.name.replace(
                                  /[^A-Z0-9]/gi,
                                  "_"
                                )}`
                              );
                            }}
                            iconProps={styles.addFriendIcon}
                            allowDisabledFocus
                          >
                            Technology Used
                          </ActionButton>
                        </div>
                      )}

                      <Stack.Item grow={1}>
                        <span />
                      </Stack.Item>
                      <Icon
                        iconName="MoreVertical"
                        styles={styles.iconStyles}
                      />
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
