import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import Timeline from 'react-visjs-timeline';
import moment from 'moment';


// Redux
import { connect } from "react-redux";
import { getPosts, deleteItem } from "../actions/post";


export function getDate(tdate) {
  const pD =
    tdate === 'c' || tdate === 'p'
      ? moment(new Date()).format('DD/MM/YYYY')
      : tdate;
  const p = moment(pD, ['DD/MM/YYYY']).format('YYYY-MM-DD');

  return p;
}
class Vis extends Component {
  state = {
    posts: [],
    options: {
      width: '100%',
      //height:  window.innerHeight,stack: false,
      showMajorLabels: true,
      orientation: { axis: 'top', item: 'top' },
      zoomMax: 946080000000,
      zoomMin: 31536000000,
      max: new Date(),
      min: new Date('06/26/1987'),
      selectable: true
    },
    items: [
      {
        id: 900001,
        content: 'Education',
        start: '1990-06-14',
        end: '2008-01-20',
        type: 'background'
      },
      {
        id: 900002,
        content: 'Experience',
        start: '2009-05-25',
        end: getDate('c'),
        type: 'background'
      }
    ]
  };

  componentDidMount() {
    this.props.getPosts(); 
  }

  render() {
    console.log(this.props);
    const content= [];
    const items = [];
    let contentdata= [];
    if(this.props.post.length > 0){
      this.props.post.forEach(function(item, index) {
        content.push(item.data);
      });
      contentdata = content.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    }
    console.log(contentdata);
const notimeline= [
  'intro',
  'contacts',
  'social',
  'expertise',
  'profile',
  'otherprojects'
];
    contentdata.forEach(function(item, index) {
      if (!notimeline.includes(item.type)) {
        //console.log(" ");
        //console.log("type", item.type);
      
        if (item.values) {
          // eslint-disable-next-line max-statements
          item.values.forEach(function(itemx, indexx) {
            //console.log("itemx", itemx);

            const newI = {
              start: getDate(itemx.startdate),
              end: getDate(itemx.enddate || 'c'), // end is optional
              content: itemx.name || itemx.title,
              ctype: item.type,
              className: item.type
            };
            if (item.type === 'lifeevents') {
              newI.content = `<i class="${itemx.icon}"></i> ${itemx.name}`;
            }
            if (item.type === 'skills') {
              newI.content = `<i class="fas fa-tools"></i> ${itemx.name} : ${itemx.percentage}`;
           
            }
            if (item.type === 'experience') {
              newI.content = `<i class="fas fa-business-time"></i> ${itemx.name} `;

            }

            if (item.type === 'education') {
              newI.content = `<i class="fas fa-graduation-cap"></i> ${itemx.name} `;
             
            }
            if (item.type === 'awards') {
              newI.type = 'point';
              newI.content = `<i class="fas fa-award"></i> ${itemx.name} `;

            }

            if (item.type === 'projects') {
              newI.content = `<i class="fas fa-award"></i> ${itemx.name} `;
           
            }

            items.push(newI);

          });
        }

      }
    });
   

    
    return (
      <Fragment>
        <Container className="py-4">
          <h2 className="text-primary"> Vis TimeLine</h2>
          {items.length && (
                  <Timeline
                    selectHandler={this.selectHandler}
                    options={this.state.options}
                    items={items}
                  />
                )}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getPosts, deleteItem })(Vis);
