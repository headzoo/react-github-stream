!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports["react-github-stream"]=t(require("react"),require("prop-types")):e["react-github-stream"]=t(e.react,e["prop-types"])}(this,function(e,t){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.i=function(e){return e},__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=22)}([function(t,r){t.exports=e},function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.IssueLink=t.CommitLink=t.BranchLink=t.RepoLink=t.ActorLink=void 0;var n=r(0),a=_interopRequireDefault(n),u=r(5),o=_interopRequireDefault(u),i=r(6);t.ActorLink=function(e){var t=e.actor;return a.default.createElement("a",{href:o.default.getUserURL(t.login)},t.display_login)},t.RepoLink=function(e){var t=e.repo;return a.default.createElement("a",{href:o.default.getRepoURL(t.name)},t.name)},t.BranchLink=function(e){var t=e.repo,r=e.payload;return a.default.createElement("a",{href:o.default.getBranchURL(t.name,r.ref),className:"rgs-branch-name"},r.ref)},t.CommitLink=function(e){var t=e.repo,r=e.commit;return a.default.createElement("a",{href:o.default.getCommitURL(t.name,r.sha)},(0,i.commitish)(r.sha))},t.IssueLink=function(e){var t=e.repo,r=e.issue,n=e.comment;return a.default.createElement("a",{href:o.default.getIssueCommentURL(t.name,r.number,n.id)},t.name,"#",r.number)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n),u=function(e){var t=e.actor;return a.default.createElement("a",{href:t.url},a.default.createElement("img",{className:"rgs-event-avatar",src:t.avatar_url}))};t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n),u=function(e){var t=e.name;return a.default.createElement("span",{className:"octicon octicon-"+t})};u.STYLESHEET_URL="//cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css",t.default=u},function(e,r){e.exports=t},function(e,t,r){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.URL=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=r(19),u=function(e){return e&&e.__esModule?e:{default:e}}(a),o=r(6),i=t.URL="https://github.com",l=function(){function GithubAPI(){_classCallCheck(this,GithubAPI),this.ajax=new u.default}return n(GithubAPI,[{key:"setAjax",value:function(e){return this.ajax=e,this}},{key:"fetchEvents",value:function(e){var t="https://api.github.com/users/"+e+"/events";return this.ajax.fetch(t).then(function(e){if(void 0!==e.message)throw e;return e})}}],[{key:"getUserURL",value:function(e){return i+"/"+e}},{key:"getRepoURL",value:function(e){return i+"/"+e}},{key:"getBranchURL",value:function(e,t){return i+"/"+e+"/tree/"+t}},{key:"getCommitURL",value:function(e,t){return i+"/"+e+"/commit/"+(0,o.commitish)(t)}},{key:"getIssueCommentURL",value:function(e,t,r){return i+"/"+e+"/issues/"+t+"#issuecomment-"+r}}]),GithubAPI}();t.default=l},function(e,t,r){"use strict";function commitish(e){return e.substr(0,7)}Object.defineProperty(t,"__esModule",{value:!0}),t.commitish=commitish},function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),u=r(0),o=_interopRequireDefault(u),i=r(4),l=_interopRequireDefault(i),s=r(20),c=r(5),f=_interopRequireDefault(c),p=r(16),d=_interopRequireDefault(p),_=r(3),m=_interopRequireDefault(_),v=r(10),h=_interopRequireDefault(v),y=function(e){function GithubStream(e){_classCallCheck(this,GithubStream);var t=_possibleConstructorReturn(this,(GithubStream.__proto__||Object.getPrototypeOf(GithubStream)).call(this,e));return t.fetchEvents=function(){if(t.props.data.length>0)return void t.setState({events:t.props.data,error:null});""!=t.props.user&&t.api.fetchEvents(t.props.user).then(function(e){t.setState({events:e,error:null})}).catch(function(e){t.setState({error:e,events:[]})})},t.setupInterval=function(){t.interval&&clearInterval(t.interval),0!==t.props.interval&&(t.interval=setInterval(t.fetchEvents,t.props.interval))},t.state={events:[],error:null},t.interval=null,t.api=new f.default,t}return _inherits(GithubStream,e),a(GithubStream,[{key:"componentWillMount",value:function(){this.props.linkOcticons&&(0,s.linkStylesheet)(m.default.STYLESHEET_URL)}},{key:"componentDidMount",value:function(){this.fetchEvents(),this.setupInterval()}},{key:"componentWillReceiveProps",value:function(e){this.fetchEvents(),this.setupInterval()}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return this.state.error?o.default.createElement(h.default,{error:this.state.error}):Array.isArray(this.state.events)?o.default.createElement(d.default,n({},this.props,{events:this.state.events})):(console.error("Expected Github events to be an array."),null)}}]),GithubStream}(o.default.Component);y.propTypes={user:l.default.string.isRequired,types:l.default.array,linkOcticons:l.default.bool,interval:l.default.number,data:l.default.array},y.defaultProps={linkOcticons:!0,interval:6e4,data:[]},t.default=y},function(e,t){},function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=_interopRequireDefault(n),u=r(1),o=r(2),i=(_interopRequireDefault(o),function(e){var t=e.data;return a.default.createElement("div",{className:"rgs-event-title"},a.default.createElement(u.ActorLink,{actor:t.actor}),"  created ",t.payload.ref_type," ",t.ref?a.default.createElement("span",null,a.default.createElement(u.BranchLink,{repo:t.repo,payload:t.payload})," at  "):null,a.default.createElement(u.RepoLink,{repo:t.repo}))});t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n),u=function(e){var t=e.error;return a.default.createElement("div",{className:"rgs-error"},a.default.createElement("strong",null,"Github Error"),t.message,t.documentation_url?a.default.createElement("div",null,a.default.createElement("a",{href:t.documentation_url},t.documentation_url)):null)};t.default=u},function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=r(0),u=_interopRequireDefault(a),o=r(4),i=_interopRequireDefault(o),l=r(9),s=_interopRequireDefault(l),c=r(12),f=(_interopRequireDefault(c),r(13)),p=_interopRequireDefault(f),d=r(14),_=(_interopRequireDefault(d),r(15)),m=_interopRequireDefault(_),v=r(18),h=_interopRequireDefault(v),y=r(3),b=_interopRequireDefault(y),E=r(17),k=_interopRequireDefault(E),g={CreateEvent:"git-branch",WatchEvent:"star",PushEvent:"git-commit",IssueCommentEvent:"comment-discussion"},R=function(e){function Event(e){return _classCallCheck(this,Event),_possibleConstructorReturn(this,(Event.__proto__||Object.getPrototypeOf(Event)).call(this,e))}return _inherits(Event,e),n(Event,[{key:"renderEvent",value:function(e){switch(e.type){case"CreateEvent":return u.default.createElement(s.default,this.props);case"WatchEvent":return u.default.createElement(h.default,this.props);case"PushEvent":return u.default.createElement(m.default,this.props);case"IssueCommentEvent":return u.default.createElement(p.default,this.props);default:return null}}},{key:"render",value:function(){var e=this.props.data,t=this.renderEvent(e);return t?u.default.createElement("li",{className:"rgs-event"},u.default.createElement("div",{className:"rgs-event-icon"},u.default.createElement(b.default,{name:g[e.type]})),u.default.createElement("div",{className:"rgs-event-inner"},u.default.createElement("div",{className:"rgs-event-time"},u.default.createElement(k.default,{date:e.created_at})),t)):null}}]),Event}(u.default.Component);R.propTypes={data:i.default.object.isRequired},t.default=R},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n),u=function(){return a.default.createElement("div",null,"Fork!")};t.default=u},function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=_interopRequireDefault(n),u=r(1),o=r(2),i=_interopRequireDefault(o),l=function(e){var t=e.data;return a.default.createElement("div",null,a.default.createElement("div",{className:"rgs-event-title"},a.default.createElement(u.ActorLink,{actor:t.actor}),"  commented on issue ",a.default.createElement(u.IssueLink,{repo:t.repo,issue:t.payload.issue,comment:t.payload.comment})),a.default.createElement("div",{className:"rgs-event-details"},a.default.createElement(i.default,{actor:t.actor}),a.default.createElement("div",{className:"rgs-event-message"},t.payload.comment.body)))};t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n),u=function(){return a.default.createElement("div",null,"Pull request!")};t.default=u},function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=_interopRequireDefault(n),u=r(1),o=r(2),i=_interopRequireDefault(o),l=function(e){var t=e.data;return a.default.createElement("div",null,a.default.createElement("div",{className:"rgs-event-title"},a.default.createElement(u.ActorLink,{actor:t.actor})," pushed to ",a.default.createElement(u.RepoLink,{repo:t.repo})),a.default.createElement("div",{className:"rgs-event-details"},a.default.createElement(i.default,{actor:t.actor}),a.default.createElement("div",{className:"rgs-event-message"},a.default.createElement(u.CommitLink,{repo:t.repo,commit:t.payload.commits[0]})," ",t.payload.commits[0].message)))};t.default=l},function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _objectWithoutProperties(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(0),u=_interopRequireDefault(a),o=r(4),i=_interopRequireDefault(o),l=r(21),s=_interopRequireDefault(l),c=r(11),f=_interopRequireDefault(c),p=r(3),d=(_interopRequireDefault(p),function(e){var t=e.events,r=e.types,a=e.className,o=_objectWithoutProperties(e,["events","types","className"]);return u.default.createElement("ul",n({className:(0,s.default)("rgs-stream",a)},o),t.map(function(e,t){return-1===r.indexOf(e.type)?null:u.default.createElement(f.default,{key:t,data:e})}))});d.propTypes={events:i.default.array.isRequired,types:i.default.array,className:i.default.string},d.defaultProps={types:["CreateEvent","ForkEvent","IssueCommentEvent","PullRequestEvent","PushEvent","WatchEvent"]},t.default=d},function(e,t,r){"use strict";function ago(e){"string"==typeof e&&(e=new Date(e));var t=Math.floor((new Date-e)/1e3),r=Math.floor(t/31536e3);return r>1?r+" years":(r=Math.floor(t/2592e3))>1?r+" months":(r=Math.floor(t/86400))>1?r+" days":(r=Math.floor(t/3600))>1?r+" hours":(r=Math.floor(t/60),r>1?r+" minutes":Math.floor(t)+" seconds")}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n),u=function(e){var t=e.date;return a.default.createElement("span",null,ago(t)," ago")};t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n),u=r(1),o=function(e){var t=e.data;return a.default.createElement("div",{className:"rgs-event-title"},a.default.createElement(u.ActorLink,{actor:t.actor})," starred ",a.default.createElement(u.RepoLink,{repo:t.repo}))};t.default=o},function(e,t,r){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=function(){function Ajax(){_classCallCheck(this,Ajax)}return n(Ajax,[{key:"fetch",value:function(e){function fetch(t,r){return e.apply(this,arguments)}return fetch.toString=function(){return e.toString()},fetch}(function(e,t){return fetch(e,t).then(function(e){return e.json()})})}]),Ajax}();t.default=a},function(e,t,r){"use strict";function linkStylesheet(e){var t=document.head,r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)}Object.defineProperty(t,"__esModule",{value:!0}),t.linkStylesheet=linkStylesheet},function(e,t,r){var n,a;!function(){"use strict";function classNames(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n))e.push(classNames.apply(null,n));else if("object"===a)for(var u in n)r.call(n,u)&&n[u]&&e.push(u)}}return e.join(" ")}var r={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=classNames:(n=[],void 0!==(a=function(){return classNames}.apply(t,n))&&(e.exports=a))}()},function(e,t,r){r(7),e.exports=r(8)}])});