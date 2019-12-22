/* Import faunaDB sdk */


exports.handler = (event, context) => {
  console.log('Function `todo-read-all` invoked')
  var data = [
    {
        "social": {
            "name": "Ganesan Karuppaiya",
            "desc": "This Application developed in ReactJS and FabricJS",
            "values": [
                {
                    "icon": "fa-linkedin-in",
                    "name": "linkedin",
                    "elink": "https://in.linkedin.com/in/ganesankar"
                },
                {
                    "icon": "fa-twitter-square",
                    "name": "twitter",
                    "elink": "https://twitter.com/ganesankar"
                },
                {
                    "icon": "fa-facebook-square",
                    "name": "facebook",
                    "elink": "https://www.facebook.com/ganesankars"
                },
                {
                    "icon": "fas fa-cloud-download-alt",
                    "name": "Download",
                    "elink": "../GanesanKaruppaiya.pdf"
                }
            ]
        },
        "contacts": {
            "name": "",
            "desc": "",
            "values": [
                {
                    "name": "Location",
                    "ico": "Location",
                    "elink": "Chennai, IN",
                    "target": "https://www.google.com/maps/search/chennai/@13.0473748,79.9288061,10z"
                },
                {
                    "name": "Phone",
                    "ico": "Location",
                    "elink": "+91 994 373 2416",
                    "target": "tel:+919943732416"
                },
                {
                    "name": "Web",
                    "ico": "Location",
                    "elink": "http://ganesan.xyz",
                    "target": "http://ganesan.xyz"
                },
                {
                    "name": "Email",
                    "ico": "Location",
                    "elink": "ganesank@live.com",
                    "target": "mailto:ganesank@live.com"
                }
            ]
        },
        "intro": {
            "title": "Ganesan Karuppaiya",
            "name": "UI/ UX Consultant, Designer, Developer",
            "desc": "<p>"
        },
        "expertise": {
            "name": "Intro",
            "desc": "What I am about",
            "values": [
                {
                    "id": "01",
                    "name": "Interaction Design and Documentation",
                    "values": [
                        {
                            "name": "Front End",
                            "value": [
                                "HTML 5/4",
                                "XHTML",
                                "CSS1/2/3"
                            ]
                        },
                        {
                            "name": "JavaScript Framework & Library",
                            "value": [
                                "ES5/6",
                                "ReactJS",
                                "Angular",
                                "TypeScript",
                                "VueJS",
                                "Redux",
                                "RxJS"
                            ]
                        },
                        {
                            "name": "Server Side",
                            "value": [
                                "NodeJS",
                                "ExpressJS",
                                "AWS Lambda"
                            ]
                        },
                        {
                            "name": "Database",
                            "value": [
                                "MondoDB",
                                "DynamoDB",
                                "GraphQL"
                            ]
                        },
                        {
                            "name": "CSS Frameworks and Pre-processer",
                            "value": [
                                "Bootstrap",
                                "Foundation",
                                "UI Kit",
                                "Material design",
                                "Metro UI",
                                "Less",
                                "Sass",
                                "PostCSS"
                            ]
                        },
                        {
                            "name": "Open-source CMS Administration",
                            "value": [
                                "WordPress",
                                "Joomla",
                                "Ghost"
                            ]
                        },
                        {
                            "name": "Designing tool",
                            "value": [
                                "Adobe Photoshop",
                                "Indesign",
                                "Illustrator"
                            ]
                        }
                    ]
                },
                {
                    "id": "02",
                    "name": "Production and Management",
                    "values": [
                        {
                            "name": "Prototyping",
                            "value": [
                                "High-fidelity mock-ups",
                                "Photoshop and Illustrator Designing",
                                "PowerPoint",
                                "Visio",
                                "Wire-frames",
                                "Flowcharts"
                            ]
                        },
                        {
                            "name": "Interaction",
                            "value": [
                                "Brainstorming",
                                "Requirements Gathering",
                                "Iterative Refinement of Design Ideas",
                                "Strict Adherence to Deadlines",
                                "Construction of Site Maps",
                                "Storyboards",
                                "Use Cases"
                            ]
                        },
                        {
                            "name": "Documentation",
                            "value": [
                                "Detailed Design Specifications, and User Manuals",
                                "Usability Testing",
                                "Persona & Scenario",
                                "Contextual Inquiry",
                                "Analytics",
                                "Cognitive Walk-through"
                            ]
                        }
                    ]
                }
            ]
        },
        "percentage": {
            "name": "SKILLS",
            "desc": "In Progress bars, anything else?",
            "values": [
                {
                    "name": "HTML5",
                    "ico": "75"
                },
                {
                    "name": "CSS3 and Animation",
                    "ico": "75"
                },
                {
                    "name": "Javascript : ES5 & ES6",
                    "ico": "60"
                },
                {
                    "name": "Typescript",
                    "ico": "60"
                },
                {
                    "name": "ReactJs / Redux",
                    "ico": "70"
                },
                {
                    "name": "Angular / RxJS",
                    "ico": "60"
                },
                {
                    "name": "VueJS / Vuex",
                    "ico": "60"
                },
                {
                    "name": "BackboneJs",
                    "ico": "45"
                },
                {
                    "name": "NodeJS, ExpressJS",
                    "ico": "65"
                },
                {
                    "name": "AWS Lambda & Serverless",
                    "ico": "40"
                },
                {
                    "name": "Microservices",
                    "ico": "60"
                },
                {
                    "name": "Mongo DB",
                    "ico": "60"
                },
                {
                    "name": "DynamoDB",
                    "ico": "60"
                },
                {
                    "name": "GraphQL",
                    "ico": "60"
                },
                {
                    "name": "Adobe Photoshop",
                    "ico": "80"
                },
                {
                    "name": "Adobe  Illustrator",
                    "ico": "60"
                },
                {
                    "name": "Adobe  Indesign",
                    "ico": "40"
                },
                {
                    "name": "Wordpress",
                    "ico": "40"
                },
                {
                    "name": "SEO",
                    "ico": "20"
                }
            ]
        },
        "experience": {
            "name": "EXPERIENCE",
            "desc": "Yes. I've been around.",
            "values": [
                {
                    "period": {
                        "start": "19/02/2018",
                        "end": "c"
                    },
                    "name": "Technology Lead",
                    "comp": "Infosys Ltd",
                    "loc": "Chennai IN",
                    "desc": "Working as Technology Lead  for the b2b e commerce unit for leading Indian retail organization, developing and involved in  both angular and Reactjs based front-end web applications,",
                    "responsibility": [
                        {
                            "name": "Will be responsible to collect requirements and data from client business team  directly and drafting the business scope and implementing in development and directing the team"
                        },
                        {
                            "name": "Responsible to conduct demonstration and presentation to provide information about our application towards various people across different time zones."
                        },
                        {
                            "name": "Investigated integration of new components and enhancements into existing applications to provide more advantages and better experience."
                        },
                        {
                            "name": "Contributed in various team building activates, such as knowledge gathering and circulating, consulting on scope in technology, carrier, relation and etc."
                        }
                    ]
                },
                {
                    "period": {
                        "start": "08/03/2013",
                        "end": "16/02/2013"
                    },
                    "name": "Project Lead",
                    "comp": "Larsen &amp; Toubro Infotech",
                    "loc": "Chennai IN",
                    "desc": "Joined L&amp;T Infotech as Software Engineer at first, worked in different domains across all global clients, and got opportunity to work as Project lead in a automation oriented research and development projects where, we have chosen ITSM based platform which provided added advantages to real time ITSM applications like Governance dashboard, Monitoring and Diagnosis, Automated IT operation Center through Machine Learning/ clustering and automation discovery platform.",
                    "responsibility": [
                        {
                            "name": "As lead to the Governance dashboard project, will be responsible to collect requirements and data from different client accounts regarding their ITSM and the reports they used to generate, recreate the same as web based dashboard by coordinating with team."
                        },
                        {
                            "name": "Responsible to conduct demonstration and presentation to provide information about our application towards various people across different time zones."
                        },
                        {
                            "name": "Being UI designer in nature, worked in create complete Front End user experience part using Trending HTML5, AngularJS, D3 and c3 Charts and others utilizing REST API web services for above mentioned various application."
                        },
                        {
                            "name": "Investigated integration of new components and enhancements into existing applications to provide more advantages and better experience."
                        },
                        {
                            "name": "Worked closely with team researchers to define features and interaction, leading to high-fidelity mockups of use case scenarios for the design and product teams."
                        },
                        {
                            "name": "Contributed in various team building activates, such as knowledge gathering and circulating, consulting on scope in technology, carrier, relation and etc."
                        },
                        {
                            "name": "Created a wireframes, UI templates for their organization website using promising AngularJS, HTML5 and different HTML wireframes like Bootstrap, foundation."
                        },
                        {
                            "name": "Revamped client&rsquo;s internal application(s) like CRM, BI using new HTML and JavaScript frameworks and as shadow resources supported other different products in account to help in resolving critical issues in development."
                        }
                    ]
                },
                {
                    "period": {
                        "start": "25/07/2011",
                        "end": "28/02/2011"
                    },
                    "name": "Flash Developer",
                    "comp": " Nittany Technologies (Division of Nittany Creative Pvt. Ltd.)",
                    "loc": "Chennai IN",
                    "desc": "Responsible for the development of Flash Action script based design studio applications and few different kind of websites including",
                    "responsibility": [
                        {
                            "name": "Custom Design studio application embedded with server scripting and database using Adobe flash and ActionScript 3"
                        },
                        {
                            "name": "Designing and implementation of websites, using HTML5, XHTML, CSS 3, JavaScript, JQuery and Flash."
                        },
                        {
                            "name": "Integrating Web designs into Open source scripts templates such as Wordpress, BigCommerce and Volusion."
                        }
                    ]
                },
                {
                    "period": {
                        "start": "25/05/2009",
                        "end": "21/07/2011"
                    },
                    "name": "WEB DESIGNER",
                    "comp": "Victory Visions Pvt. Ltd",
                    "loc": "Chennai IN",
                    "desc": "Responsible for the development &nbsp;of a wide variety of websites, micro-sites and widgets from initial concept to go-live and support including",
                    "responsibility": [
                        {
                            "name": "Designing and implementation of websites, using XHTML, CSS 3, JavaScript, JQuery and Flash."
                        },
                        {
                            "name": "User Interface for .net based applications like EPOS Software."
                        },
                        {
                            "name": "Graphic design for print leaflets, data sheets, folders and product guides.esigns into Open source scripts templates such as Wordpress, BigCommerce and Volusion."
                        }
                    ]
                }
            ]
        },
        "education": {
            "name": "EDUCATION",
            "desc": "Lazy isn't in my vocabulary.",
            "values": [
                {
                    "period": "Sep 2004 &ndash;  May 2008",
                    "name": " B.Tech (Information Technology)",
                    "comp": "J. J. College of Engineering and Technology, Trichy",
                    "loc": "Anna University, Chennai",
                    "desc": ""
                },
                {
                    "period": " 2003 &ndash;  2004",
                    "name": "H.S.C (Computer Science)",
                    "comp": "Kamala Subramaniam Matric. Hr. Sec. School. ",
                    "loc": " Tanjore IN",
                    "desc": ""
                },
                {
                    "period": " 2001 &ndash;  2002",
                    "name": "S.S.L.C (Matriculation)",
                    "comp": "Kamala Subramaniam Matric. Hr. Sec. School. ",
                    "loc": " Tanjore IN",
                    "desc": ""
                }
            ]
        },
        "projects": {
            "name": "PROJECTS DONE",
            "desc": "Involved in following projects while working in Larsen & Toubro Infotech, under various domains, accounts and teams.",
            "values": [
                {
                    "period": "Feb 2018- Present",
                    "name": "Capacity Visibility",
                    "small": "Global Footwear and apparel Manufacturer",
                    "team": "Infosys",
                    "size": 6,
                    "Domain": "B2B Retail",
                    "desc": "AWS hosted server-less application with ReactJS front end and AWS Lambda & DynamoDB based back-end application helps Management Unit to have Insights and control on routine Products development",
                    "value": [
                        "React",
                        "Redux",
                        "HTML5",
                        "CSS3",
                        "WebPack",
                        "AWS Serverless",
                        "AWS Lambda",
                        "AWS DynamoDB"
                    ]
                },
                {
                    "period": "Feb 2018- Present",
                    "name": "B2B E commerce Retail Store Front",
                    "small": "Indian Retail Gaint",
                    "team": "Infosys",
                    "size": 12,
                    "Domain": "B2B Retail",
                    "desc": "Stand alone front end for Hybris RestAPI service dependent  Store front application for leading Indian retail Organization ",
                    "value": [
                        "React",
                        "Redux",
                        "HTML5",
                        "CSS3",
                        "WebPack",
                        "Hybris",
                        "SQL"
                    ]
                },
                {
                    "period": "Aug 2016- Feb 2018",
                    "name": "IT Operation Center",
                    "small": "(ITSM Based Automated Tickets Resolver)",
                    "team": "L&amp;T Infotech, ACE Initiative",
                    "size": 12,
                    "desc": "ITSM based Automated Tickets resolving tool, works on various frameworks altogether such as machine learning, orchestrator, kdb, etc. Where the front end web application part is developed using AngularJS, HTML5 and web services integrated with ITSM like service now or BMC remedy, Azure ML, MULE, Monitoring and Governance Tool.&nbsp; This Application Frontend is created using RESTAPI web service based AngularJS/ Bootstrap application and utilized different report generating Plugins like C3, D3 Charts, Vis Timeline, etc. and developed and UX enriched Application.",
                    "value": [
                        "NodeJS",
                        "ExpressJS",
                        "MongoDB",
                        "Angular",
                        "WebPack",
                        " Bootstrap4",
                        "HTML5",
                        "CSS3",
                        "Azure Web service",
                        "Azure Passport Authentication",
                        "Jquery",
                        "D3 Charts",
                        "C3 Charts",
                        "Mule",
                        "Service Now Integration"
                    ]
                },
                {
                    "period": "Aug 2016- Feb 2018",
                    "name": "Automation Discovery ",
                    "small": "(ITSM Based Automation Discovery Platform)",
                    "team": "L&amp;T Infotech, ACE Initiative",
                    "size": " 8",
                    "desc": "ITSM Based discovery platform Tool helps to identify the area for automation for organization using ITSM tickets history and Machine learning clustering, for this Application Frontend is created using RESTAPI web service based AngularJS/ Bootstrap application and utilized different report generating Plugins like C3, D3 Charts, Vis Timeline, etc. and developed and UX enriched Application.",
                    "value": [
                        "Angular",
                        "WebPack",
                        " Bootstrap4",
                        "HTML5",
                        "CSS3",
                        "Azure Web service",
                        "Azure Passport Authentication",
                        "Jquery",
                        "D3 Charts",
                        "C3 Charts",
                        "Mule",
                        "Service Now Integration"
                    ]
                },
                {
                    "period": " Mar 2016-Feb 2018",
                    "name": "  Governance Dashboard ",
                    "small": " (ITSM Based Analytics Tool)",
                    "team": "L&amp;T Infotech, ACE Initiative",
                    "size": " 4",
                    "desc": "ITSM Based Data Analysis and Governance Tool helps to track, generate reports and identify the team/ account/ regional or divisional analysis based upon the user selection regarding the performance and area of resource utilization and other activates. Initially developed in complete ASP.Net MVC and we have migrated to Complete RESTAPI web service based AngularJS/ Bootstrap application and utilized different report generating Plugins like C3, D3 Charts, Vis Timeline, etc. and developed and UX enriched Application.",
                    "value": [
                        "Angular",
                        "WebPack",
                        " Bootstrap4",
                        "HTML5",
                        "CSS3",
                        "Azure Web service",
                        "Azure Passport Authentication",
                        "Jquery",
                        "D3 Charts",
                        "C3 Charts",
                        "Mule",
                        "Service Now Integration"
                    ]
                },
                {
                    "period": "Feb 2016-Mar 2016",
                    "name": "PRIME ",
                    "small": "(Product Repository with Info. Mgmt. Envelope)",
                    "team": "R&amp;D Based Internal Project. L&T Infotech, ACE Initiative",
                    "size": " 12",
                    "desc": "Material design concept implemented responsive Repository portal similar to CNET Reviews Portal (https://www.cnet.com/reviews/) developed for Organization Employees to Add/ update Open source/ Internal Products and review it and share it. Developed in AngularJS, MongoDB and ASP.Net. Attempted initially to develop in NodeJS and Modified to C#. Created Mockups, HTML templates using Material Design Framework and AngularJS form Google and received positive response on this initiative.",
                    "value": [
                        "AngularJS",
                        "WebPack",
                        "Angular Material Design",
                        "HTML5",
                        "CSS3",
                        "C#",
                        "MongoDB"
                    ]
                },
                {
                    "period": "Jul 2015-Jan-2016",
                    "name": " BSS Symphony Redesign ",
                    "small": "Japan based Consumer Products Industry",
                    "team": "L&amp;T Infotech, HiCE",
                    "size": " 7",
                    "desc": "Redesigning the entire existing website of Billing System of Services – Symphony website. Recommended to use Bootstrap and BackboneJS, Created Wireframes, mockups and custom HTML components based on the design.  ",
                    "value": [
                        "AngularJS",
                        "Bootstrap3",
                        "HTML5",
                        "CSS3",
                        "Java Spring"
                    ]
                },
                {
                    "period": "Jan 2015- Jul-2015",
                    "name": "  Organization CRM Portal ",
                    "small": "US based Semiconductor Industry",
                    "team": "L&amp;T Infotech, HiCE",
                    "size": " 12",
                    "desc": "Created new Customer relationship management portal replacing the existing application and to overcome the drawback In features, created selective web design layouts, wireframes and UI Kit to utilize all over the application. Used AngularJS and developed a small plugin to overcome certain issues and it is highly recognized by clients. ",
                 "value": [
                        "AngularJS",
                        "Bootstrap3",
                        "HTML5",
                        "CSS3",
                        "Java Spring"
                    ]},
                {
                    "period": "Aug 2014-Oct-2014",
                    "name": "Organization Site Redesign ",
                    "small": "US based Semiconductor Industry",
                    "team": "L & T Infotech, HiCE",
                    "size": " 14",
                    "desc": "Redesigning the entire layout of existing website of leading Semiconductor industry all over the globe with the Bootstrap HTML framework. The main challenge was to overcome the existing JavaScript and CSS and preventing the compatibility issues across the entire browser and the different sub modules working with various JavaScript features. Got appreciation for providing huge support with the new framework to allover the team on development.",
                 "value": [
                        "AngularJS",
                        "Bootstrap3",
                        "HTML5",
                        "CSS3",
                        "Java Spring"
                    ]},
                {
                    "period": "Jan 2014-Jul-2014",
                    "name": "Parametric Search",
                    "small": "US based Semiconductor Industry",
                    "team": "L & T Infotech, HiCE",
                    "size": " 7",
                    "desc": "A keyword based query search result displaying the product list with different filtering option enable the end user to filter, compare and to select the product with the AngularJS JavaScript framework and bootstrap HTML Framework that provided for leading Semiconductor industry all over the globe. With new framework and complex requirement, we have done lot of proof of concept with numerous possibilities and achieved the success in deliverables. ",
                 "value": [
                        "AngularJS",
                        "Bootstrap3",
                        "HTML5",
                        "CSS3",
                        "Java Spring"
                    ]},
                {
                    "period": "Jun 2013-Dec-2013",
                    "name": "Web Keyword Search ",
                    "small": "US based Semiconductor Industry",
                    "team": "L & T Infotech, HiCE",
                    "size": " 7",
                    "desc": "A keyword based query search result similar to Google Keyword Search, Will generate the list based on the XSLT and the XML feed with the backend of Java, Optimizing that into JSON based Reference and displaying it in Frontend. ",
                 "value": [
                        "AngularJS",
                        "Bootstrap3",
                        "HTML5",
                        "CSS3",
                        "Java Spring"
                    ]},
                {
                    "period": "Mar 2013-Jun-2013",
                    "name": "HR Portal for Management ",
                    "small": "Leading Solar Energy Generator Industry",
                    "team": "L & T Infotech, HiCE",
                    "size": " 12",
                    "desc": "The Virtual HR Portal aim at providing a single place of contact for all information / queries regarding the companies HR Policies and activities. The Portal was for a leading Solar power plant company in North America. The main challenge was to provide an intuitive UI which would encourage the employee in the plants and other manufacturing units to use the new portal.",
                "value": [
                        "AngularJS",
                        "Bootstrap3",
                        "HTML5",
                        "CSS3",
                        "Java Spring"
                    ] },
                {
                    "period": " Mar 2013-Jun-2013",
                    "name": "Business Development Portal ",
                    "small": " (Internal Management Tool)",
                    "team": "L&T Infotech High Commands Business Unit.",
                    "size": " 5",
                    "desc": "Internal application for Business developing team to store all business related documents and to generate various reports based on the inputs provided regarding new business to the BU developed on Microsoft SharePoint platform.",
                "value": [
                        "HTML5", "CSS3",
                        "SharePoint"
						
                        
                    ]},
                {
                    "period": "Dec 2012-Feb-2013",
                    "name": "Mystique Creative Canada ",
                    "small": " (WordPress CMS)",
                    "team": "Nittany.",
                    "size": " 3",
                    "desc": "Brand developing and Online solution providing Vendor, creating websites and brand identity for their customers, displaying their services. Major role is to create frontend Page designing, Flash Designing tool Developing, HTML and JQuery Coding.",
                "value": [
                        "HTML5",
                        
                       
                        "CSS3", "PHP",
						"Wordpress",
                        "MySQL"
                    ]},
                {
                    "period": " Feb 2012-Jun-2012",
                    "name": "  Balloons and Napkins ",
                    "small": " (Adobe Flash Based Interactive Tool)",
                    "team": "Nittanys",
                    "size": " 4",
                    "desc": "An Adobe Flash based PHP Ecommerce website, to create customized design on the product available through design studio tool. The Portal was for leading Balloons and Napkins exporters in North America. The main challenge was to overlay the custom designs what the end user generated on the available products and to export the source for printing purpose. Major role is to create frontend Page designing, Flash Designing tool Developing, HTML and JQuery Coding.",
                "value": [
                        "HTML5",
                        "Adobe Flash",
						
                        "PHP",
                        "CSS3",
                        "MySQL"
                    ]},
                {
                    "period": "Sep 2011- Jan-2012",
                    "name": " USB Direct Canada ",
                    "small": " (Adobe Flash Based Interactive Tool)",
                    "team": "Nittany.",
                    "size": "  6",
                    "desc": "  Ecommerce oriented Custom PHP website, to create customized USB Flash drives and sell through online ordering.",
					 "value": [
                        "HTML5",
                        "PHP",
                        "CSS3",
                        "MySQL"
                    ]
                }
            ]
        },
        "otherproj": {
            "name": "OTHER OLD PROJECTS",
            "desc": "Some things which cant be missed.",
            "values": [
                {
                    "name": "American Mailing Solutions",
                    "elink": "http://www.americanmailingsolutions.com"
                },
                {
                    "name": "A-1 Enterprise",
                    "elink": "http://a-1enterprises.com/web/"
                },
                {
                    "name": "Artizan Food ",
                    "elink": "http://artizanfood.ie"
                },
                {
                    "name": "BBVA",
                    "elink": "http://bbva.net.au"
                },
                {
                    "name": "Esthell Hotel and Resort",
                    "elink": "http://esthell.com"
                },
                {
                    "name": "Graphical Systems USA",
                    "elink": "http://www.graphicalsystemsusa.com"
                },
                {
                    "name": "Logo USA",
                    "elink": "http://logousa.com"
                },
                {
                    "name": "Qualita Papers ",
                    "elink": "http://www.qualitapaper.com"
                },
                {
                    "name": "USB Direct Canada",
                    "elink": "http://www.usbdirect.ca"
                }
            ]
        },
        "awards": {
            "name": "Awards",
            "desc": "Happy times!",
            "values": [
                {
                    "name": "Insta Award",
                    "period": "Dec 2018",
                    "desc": "For Providing optimized and quicker delivery of the complex e-commerce  based front-end solution in short span as individual performe.',"
                },
                {
                    "name": "Best Team Performance",
                    "period": "2016",
                    "desc": "After being Promoted as Project Lead, in Automation Center of Excellence for                    Implementing and Proposing various RFP, POC, Governance dashboard for                    Different client and on getting remarkable feedback"
                },
                {
                    "name": "Best Individual Performer for  Quateryly Period",
                    "period": "Apr 2014- Jun 2014 ",
                    "desc": "For providing exception UI Support for US based Semiconductor Industry’s                    Product search Application in AngularJS"
                }
            ]
        },
        "profile": {
            "name": "Profile",
            "desc": "You can get more about me!",
            "values": [
                {
                    "name": "About",
                    "icon": "ti-user",
                    "elink": "http://ganesan.xyz/about/",
                    "desc": "About me page from My Personal website"
                },
                {
                    "name": "Blog",
                    "icon": "ti-pencil-alt",
                    "elink": "http://ganesan.xyz/blog/",
                    "desc": "Things i am writing about"
                },
                {
                    "name": "GitHub",
                    "icon": "ti-github",
                    "elink": "https://github.com/ganesankar",
                    "desc": "All my open source projects for you analyze"
                },
                {
                    "name": "Talk to Me",
                    "icon": "ti-email",
                    "elink": "http://ganesan.xyz/contact/",
                    "desc": "Need to discuss much"
                }
            ]
        }
    }
];
  return {
          statusCode: 200,
          body: JSON.stringify(data)
        }
}
