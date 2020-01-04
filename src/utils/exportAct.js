import moment from "moment";

export const layoutStyle = {
  sectionTitleLayout: {
    fillColor: "#efefef",
    hLineWidth: function() {
      return 0.5;
    },
    vLineWidth: function(i) {
      return 0;
    },
    hLineColor: function() {
      return "#ccc";
    }
  },
  tableHorizonBorderOnly: {
    hLineWidth: function(i, node) {
      if (i === 0 || i === node.table.body.length) {
        return 1;
      }
      return i === node.table.headerRows ? 1 : 0;
    },
    vLineWidth: function(i) {
      return 0;
    },
    hLineColor: function() {
      return "#ccc";
    }
  },
  noBorder: {
    hLineWidth: function() {
      return 0;
    },
    vLineWidth: function(i) {
      return 0;
    },
    hLineColor: function() {
      return "#fff";
    }
  }
};
export const cssStyle = {
  sectionTitleBar: {
    fontSize: 10,
    noBorders: true,
    noBorders: true
  },
  colorPrimary: "#0078d4",
  colorPrimaryDark: "#003964",
  colorPrimaryLite: "#017bd7",
  colorGrey: "#666666"
};
export function sectionTitleBar(name) {
  const text = {
    text: name.toUpperCase(),
    fontSize: 12
  };
  const sectionTitle = {
    style: cssStyle.sectionTitleBar,
    table: {
      widths: ["*"],
      body: [[text]]
    },
    margin: [0, 15, 0, 15],
    layout: layoutStyle.sectionTitleLayout
  };
  return sectionTitle;
}

export function getIntroContent(list) {
  let content = [];
  const contact = list.find(e => e.type === "contacts");
  const item = list.find(e => e.type === "intro");
  const contactVal = contact.values || [];
  const contactText = [];
  if (contactVal.length > 0) {
    contactVal.forEach(function(ci, c1) {
      const t = {
        text: `\n${ci.desc}`,
        link: ci.link,
        fontSize: 10,
        alignment: "right",
        color: cssStyle.colorPrimaryLite
      };
      contactText.push(t);
    });
  }
  const intro = {
    columns: [
      {
        width: "*",
        text: [
          {
            text: item.name,
            fontSize: 18,
            color: cssStyle.colorPrimary
          },
          {
            text: `\n${item.title}`,
            fontSize: 12
          }
        ]
      },
      {
        width: 200,
        text: contactText,
        style: cssStyle.contact
      }
    ]
  };
  content.push(intro);
  const el = document.createElement("html");
  el.innerHTML = item.desc;
  const arr = el.getElementsByTagName("p");
  const descIntroText = [];
  if (arr.length > 0) {
    Array.from(arr).forEach(function(element) {
      const desc = {
        text: `\n${element.innerText}`
      };
      descIntroText.push(desc);
    });
  }
  const introdesc = {
    style: "introDesc",
    table: {
      widths: ["*"],
      body: [[descIntroText]]
    },
    layout: layoutStyle.tableHorizonBorderOnly
  };
  content.push(introdesc);
  return content;
}

export function getExpertiseContent(content, key) {
  let groupKey = key;
  let cs = [];
  if (content.values && content.values.length > 0) {
    let newcontentkey = [];

    content.values.forEach(function(item) {
      newcontentkey.push(item[groupKey]);
    });
    let uniqkey = Array.from(new Set(newcontentkey));
    uniqkey.forEach(function(item, index) {
      let newOb = {
        id: index,
        name: item,
        values: []
      };
      content.values.forEach(function(j) {
        if (j[groupKey] == item) {
          newOb.values.push(j);
        }
      });
      cs.push(newOb);
    });
    console.log(cs);
  }

  let contentr = [];
  cs.forEach(function(item, index) {
    const text = {
      text: item.name,
      fontSize: 12,
      color: cssStyle.colorPrimaryLite,
      margin: [20, 0, 2, 3]
    };
    contentr.push(text);
    const ul = [];
    item.values.forEach(function(itemv, index) {
      const li = `${itemv.name} : ${itemv.values.join(", ")}.`;
      // const li = [{text: itemv.name,  bold: true} , itemv.values.join(", ")];
      ul.push(li);
    });
    contentr.push({
      ul: ul,
      margin: [30, 0, 2, 3],
      lineHeight: 1.5
    });
  });

  return contentr;
}

export function getSkillsContent(cs) {
  let contentr = [];
  let contentOdd = [];
  let contentEven = [];
  cs.values.forEach(function(item, index) {
    const text = `${item.name} : ${item.percentage}%`;
    if (index % 2) {
      contentEven.push(text);
    } else {
      contentOdd.push(text);
    }
    contentr.push(text);
  });
  const ret = {
    style: "tableExample",
    layout: layoutStyle.noBorder,
    widths: ["*", "*"],
    table: {
      body: [
        [
          {
            stack: [
              {
                ul: contentOdd,
                margin: [30, 0, 2, 3]
              }
            ]
          },
          {
            stack: [
              {
                ul: contentEven
              }
            ]
          }
        ]
      ]
    }
  };
  return ret;
}

export function returnDate(datet) {
  let date = "Present";
  if (datet !== "c") {
    let dates = new Date(datet);
    date = moment(datet, "MM/DD/YYYY").format("MMM - YYYY");
  }
  return date;
}
export function getExperienceContent(cs) {
  const content = [];
  cs.values.forEach(function(item, index) {
    const head = {
      table: {
        widths: ["*", "auto"],

        body: [
          [
            [
              {
                text: item.name,
                fontSize: 13,
                margin: [0, 0, 0, 0],
                color: cssStyle.colorPrimary
              },
              {
                text: `${item.company}`,
                link: item.link,
                fontSize: 10,
                margin: [0, 0, 0, 0],
                color: cssStyle.colorGrey
              }
            ],
            [
              {
                text: `${item.location}`,
                fontSize: 10,
                alignment: "right",
                margin: [0, 0, 0, 0],
                color: cssStyle.colorPrimaryLite
              },
              {
                text: `${returnDate(item.startdate)} - ${returnDate(
                  item.enddate
                )}`,
                fontSize: 10,
                margin: [0, 0, 0, 0],
                alignment: "right"
              }
            ]
          ]
        ]
      },
      margin: [30, 0, 0, 0],
      layout: layoutStyle.noBorder
    };

    content.push(head);

    const introdesc = {
      style: "introDesc",
      table: {
        widths: ["*"],
        body: [[item.desc]]
      },
      margin: [30, 5, 0, 5],
      layout: layoutStyle.tableHorizonBorderOnly
    };
    content.push(introdesc);
    const ul = [];
    item.values.forEach(function(itemv, index) {
      ul.push(itemv.name);
    });
    content.push({
      ul: ul,
      margin: [30, 0, 2, 3],
      lineHeight: 1.5
    });
  });

  return content;
}

export function getEducationContent(cs) {
  const content = [];
  cs.values.forEach(function(item, index) {
    const head = {
      table: {
        widths: ["*", "auto"],

        body: [
          [
            [
              {
                text: item.name,
                fontSize: 13,
                margin: [0, 0, 0, 0],
                color: cssStyle.colorPrimary
              },
              {
                text: `${item.institute}`,
                link: item.link,
                fontSize: 10,
                margin: [0, 0, 0, 0],
                color: cssStyle.colorGrey
              }
            ],
            [
              {
                text: `${item.location}`,
                fontSize: 10,
                alignment: "right",
                margin: [0, 0, 0, 0],
                color: cssStyle.colorPrimaryLite
              },
              {
                text: `${returnDate(item.startdate)} - ${returnDate(
                  item.enddate
                )}`,
                fontSize: 10,
                margin: [0, 0, 0, 0],
                alignment: "right"
              }
            ]
          ]
        ]
      },
      margin: [10, 0, 10, 10],
      layout: layoutStyle.tableHorizonBorderOnly
    };

    content.push(head);
    if (cs.type == "awards") {
      const introdesc = {
        style: "introDesc",
        table: {
          widths: ["*"],
          body: [[item.desc]]
        },
        margin: [30, 5, 0, 5],
        layout: layoutStyle.tableHorizonBorderOnly
      };
      content.push(introdesc);
    }
  });

  return content;
}

export function getProjectContent(cs) {
    const content = [];
    cs.values.forEach(function(item, index) {
      const head = {
        table: {
          widths: ["*", "auto"],
  
          body: [
            [
              [
                {
                  text: item.name,
                  fontSize: 13,
                  margin: [0, 0, 0, 0],
                  color: cssStyle.colorPrimary
                },
                {
                  text: `${item.company}`,
                  link: item.link,
                  fontSize: 10,
                  margin: [0, 0, 0, 0],
                  color: cssStyle.colorGrey
                }
              ],
              [
                {
                  text: `${item.location}`,
                  fontSize: 10,
                  alignment: "right",
                  margin: [0, 0, 0, 0],
                  color: cssStyle.colorPrimaryLite
                },
                {
                  text: `${returnDate(item.startdate)} - ${returnDate(
                    item.enddate
                  )}`,
                  fontSize: 10,
                  margin: [0, 0, 0, 0],
                  alignment: "right"
                }
              ]
            ]
          ]
        },
        margin: [30, 0, 0, 0],
        layout: layoutStyle.noBorder
      };
  
      content.push(head);
  
      const introdesc = {
        style: "introDesc",
        table: {
          widths: ["*"],
          body: [[item.desc]]
        },
        margin: [30, 5, 0, 5],
        layout: layoutStyle.tableHorizonBorderOnly
      };
      content.push(introdesc);
      const ul = [];
      
      
    });
  
    return content;
  }
