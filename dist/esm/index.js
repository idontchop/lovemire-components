import n,{useState as e,useRef as o,useEffect as t}from"react";import r,{css as i,keyframes as l}from"styled-components";function d(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var a,c,s,u,p,b,m,h,f,g,x,v,k,w,y,E,C,z,B,S,R,N,A,M,D,T,Y=r.div(a||(a=d(["\n    display: flex;\n    align-items: flex-start;\n    text-align: center;\n    padding: 5px;\n    border: color: ",";\n    background-color: ",";\n    border-radius: 5px;\n"],["\n    display: flex;\n    align-items: flex-start;\n    text-align: center;\n    padding: 5px;\n    border: color: ",";\n    background-color: ",";\n    border-radius: 5px;\n"])),(function(n){var e,o;return(null===(o=null===(e=n.theme)||void 0===e?void 0:e.borders)||void 0===o?void 0:o.secondary)?n.theme.borders.secondary:"blue"}),(function(n){var e,o;return(null===(o=null===(e=n.theme)||void 0===e?void 0:e.colors)||void 0===o?void 0:o.primary)?n.theme.colors.primary:"#ebe6e6"})),H=r.div(c||(c=d(["\n    background-color: ",";\n    color: ","; \n    padding: 5px;\n    border-radius: 5px;\n    font-size: 0.8em;\n    min-width: 40%;\n    ","\n\n    p {\n        margin: 5px;\n        padding: 0;\n        color: ",";\n        font-size: 1em;\n        font-weight: lighter;\n        font-family: ",";\n    }\n\n"],["\n    background-color: ",";\n    color: ","; \n    padding: 5px;\n    border-radius: 5px;\n    font-size: 0.8em;\n    min-width: 40%;\n    ","\n\n    p {\n        margin: 5px;\n        padding: 0;\n        color: ",";\n        font-size: 1em;\n        font-weight: lighter;\n        font-family: ",";\n    }\n\n"])),(function(n){return n.selected?"#CAB5B5":"inherit"}),(function(n){var e,o;return(null===(o=null===(e=null==n?void 0:n.theme)||void 0===e?void 0:e.colors)||void 0===o?void 0:o.p)?n.theme.colors.p:"blue"}),(function(n){return!n.selected&&"cursor: pointer;"}),(function(n){var e,o;return(null===(o=null===(e=null==n?void 0:n.theme)||void 0===e?void 0:e.colors)||void 0===o?void 0:o.p)?n.theme.colors.p:"blue"}),(function(n){var e,o;return(null===(o=null===(e=n.theme)||void 0===e?void 0:e.fonts)||void 0===o?void 0:o.p)?n.theme.fonts.p:"'Roboto', serif"})),O=function(e){return(null==e?void 0:e.selections)&&(null==e?void 0:e.select)?n.createElement(Y,null,e.selections.map((function(o){return n.createElement(H,{selected:o.selected,onClick:function(){return e.select(o.name)}},n.createElement("p",null,o.title))}))):n.createElement("div",null,"Error: Check RadioSelection")},U=r.div(s||(s=d(["\n    height: 20px;\n    width: 40px;\n    display: inline-block;\n    cursor: pointer;\n"],["\n    height: 20px;\n    width: 40px;\n    display: inline-block;\n    cursor: pointer;\n"]))),j=r.span(u||(u=d(["\n    width: 100%;\n    height: 80%;\n    background-color: ",";;\n    border-radius: 500px;\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%);\n    display: inline-block;\n    margin: 0; padding: 0;\n    transition: left 1s, right 1s, background-color 0.5s, border-color 0.5s, transform 0.5s;\n"],["\n    width: 100%;\n    height: 80%;\n    background-color: ",";;\n    border-radius: 500px;\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%);\n    display: inline-block;\n    margin: 0; padding: 0;\n    transition: left 1s, right 1s, background-color 0.5s, border-color 0.5s, transform 0.5s;\n"])),(function(n){var e,o;return n.selected?(null===(e=n.theme)||void 0===e?void 0:e.selected)?n.theme.selected:"#cab5b5":(null===(o=n.theme)||void 0===o?void 0:o.unselected)?n.theme.unselected:"#707070"})),P=r.span(p||(p=d(["\n    width: 50%;\n    height: 120%;\n    border-radius: 50%;\n    border: 2px solid ",";\n    background-color: ",";\n    position: absolute;\n    top: 50%; \n    transform: translateY(-50%);\n    margin: 0; padding: 0;\n    ","\n    transition: left 3s, right 3s, background-color 0.5s, border-color 0.5s, transform 0.5s;\n"],["\n    width: 50%;\n    height: 120%;\n    border-radius: 50%;\n    border: 2px solid ",";\n    background-color: ",";\n    position: absolute;\n    top: 50%; \n    transform: translateY(-50%);\n    margin: 0; padding: 0;\n    ","\n    transition: left 3s, right 3s, background-color 0.5s, border-color 0.5s, transform 0.5s;\n"])),(function(n){var e,o;return n.selected?(null===(e=n.theme)||void 0===e?void 0:e.selected)?n.theme.selected:"#cab5b5":(null===(o=n.theme)||void 0===o?void 0:o.unselected)?n.theme.unselected:"#707070"}),(function(n){var e,o;return n.selected?(null===(e=n.theme)||void 0===e?void 0:e.selected)?n.theme.selectedHighlight:"#c9a5a5":(null===(o=n.theme)||void 0===o?void 0:o.selected)?n.theme.unselectedHighlight:"white"}),(function(n){return n.selected?"right: 0;":"left : 0;"})),I=function(e){return e.className?n.createElement("div",{className:e.className,onClick:function(){return e.onClick&&e.onClick()}},n.createElement(j,{selected:e.selected},n.createElement(P,{selected:e.selected}))):n.createElement(U,{onClick:function(){return e.onClick()}},n.createElement(j,{selected:e.selected},n.createElement(P,{selected:e.selected})))},L=r.input(b||(b=d(["\n    height: 30px;\n    width: 90%;\n    margin: 0;\n    border: "," 1px solid;\n    padding: 5px;\n    background-color: ",";\n    color: ",";\n    border-radius: 5px;\n    box-shadow: 0 0 2px 0 rgba(0,0,0,0.75);\n    -webkit-box-shadow: 0 0 2px 0 rgba(0,0,0,0.75);\n    -moz-box-shadow: 0 0 2px 0 rgba(0,0,0,0.75);\n"],["\n    height: 30px;\n    width: 90%;\n    margin: 0;\n    border: "," 1px solid;\n    padding: 5px;\n    background-color: ",";\n    color: ",";\n    border-radius: 5px;\n    box-shadow: 0 0 2px 0 rgba(0,0,0,0.75);\n    -webkit-box-shadow: 0 0 2px 0 rgba(0,0,0,0.75);\n    -moz-box-shadow: 0 0 2px 0 rgba(0,0,0,0.75);\n"])),(function(n){var e,o;return(null===(o=null===(e=null==n?void 0:n.theme)||void 0===e?void 0:e.colors)||void 0===o?void 0:o.p)?n.theme.colors.p:"blue"}),(function(n){var e,o;return(null===(o=null===(e=null==n?void 0:n.theme)||void 0===e?void 0:e.colors)||void 0===o?void 0:o.primary)?n.theme.colors.primary:"lightblue"}),(function(n){var e,o;return(null===(o=null===(e=null==n?void 0:n.theme)||void 0===e?void 0:e.colors)||void 0===o?void 0:o.p)?n.theme.colors.p:"black"})),q=r.textarea(m||(m=d(["\n    height: 40px;\n    width: 90%;\n    resize: vertical;\n    margin: 0;\n    border: "," 1px solid;\n    padding: 5px;\n    background-color: ",";\n    color: ",";\n    border-radius: 5px;\n    box-shadow: 0 0 2px 0 rgba(0,0,0,0.75);\n    -webkit-box-shadow: 0 0 2px 0 rgba(0,0,0,0.75);\n    -moz-box-shadow: 0 0 2px 0 rgba(0,0,0,0.75);\n"],["\n    height: 40px;\n    width: 90%;\n    resize: vertical;\n    margin: 0;\n    border: "," 1px solid;\n    padding: 5px;\n    background-color: ",";\n    color: ",";\n    border-radius: 5px;\n    box-shadow: 0 0 2px 0 rgba(0,0,0,0.75);\n    -webkit-box-shadow: 0 0 2px 0 rgba(0,0,0,0.75);\n    -moz-box-shadow: 0 0 2px 0 rgba(0,0,0,0.75);\n"])),(function(n){var e,o;return(null===(o=null===(e=null==n?void 0:n.theme)||void 0===e?void 0:e.colors)||void 0===o?void 0:o.p)?n.theme.colors.p:"blue"}),(function(n){var e,o;return(null===(o=null===(e=null==n?void 0:n.theme)||void 0===e?void 0:e.colors)||void 0===o?void 0:o.primary)?n.theme.colors.primary:"lightblue"}),(function(n){var e,o;return(null===(o=null===(e=null==n?void 0:n.theme)||void 0===e?void 0:e.colors)||void 0===o?void 0:o.p)?n.theme.colors.p:"black"})),F=function(e){return n.createElement(L,{onChange:function(n){return e.select(n.target.value)},value:e.value?e.value:""})},G=function(e){return n.createElement(q,{onChange:function(n){return e.onChange(n.target.value)}},e.children)},J=r.select(h||(h=d(["\n    outline: none;\n    border: none;\n    border-bottom: 2px solid ",";  \n    text-align: center;\n    cursor: pointer;\n    background-color: inherit;\n    color: ",";\n    font-family: ",";\n\n"],["\n    outline: none;\n    border: none;\n    border-bottom: 2px solid ",";  \n    text-align: center;\n    cursor: pointer;\n    background-color: inherit;\n    color: ",";\n    font-family: ",";\n\n"])),(function(n){var e,o;return(null===(o=null===(e=null==n?void 0:n.theme)||void 0===e?void 0:e.colors)||void 0===o?void 0:o.p)?n.theme.colors.p:"blue"}),(function(n){var e,o;return(null===(o=null===(e=null==n?void 0:n.theme)||void 0===e?void 0:e.colors)||void 0===o?void 0:o.p)?n.theme.colors.p:"blue"}),(function(n){var e,o;return(null===(o=null===(e=null==n?void 0:n.theme)||void 0===e?void 0:e.fonts)||void 0===o?void 0:o.p)?n.theme.fonts.p:"serif"})),K=function(e){return n.createElement(J,{onChange:function(n){e.select&&e.select(n.target.value)}},e.selections&&e.selections.map((function(e){return n.createElement("option",{key:e.name,value:e.value?e.value:e.name},e.title)})))},Q=r.div(f||(f=d(["\noutline: none;\nbox-sizing: border-box;\nwidth: 100%;\nheight: 100%;\nborder-radius: 0;\nborder: none;\npadding: 8px;\nfont-size: 0.8em;\nfont-family: 'Roboto', serif;\nbackground-color: white;\nbox-shadow: inset 0 -2px 5px #CAB5B5;\ncolor: #707070;\ntext-align: center;\ncursor: pointer;\n\n@media (max-width: 600px) {\n    font-size: 0.8em;\n}\n\np {\n    font-size: 1em;\n    font-family: 'Roboto', serif;\n    margin: 1vh;\n}\n\n"],["\noutline: none;\nbox-sizing: border-box;\nwidth: 100%;\nheight: 100%;\nborder-radius: 0;\nborder: none;\npadding: 8px;\nfont-size: 0.8em;\nfont-family: 'Roboto', serif;\nbackground-color: white;\nbox-shadow: inset 0 -2px 5px #CAB5B5;\ncolor: #707070;\ntext-align: center;\ncursor: pointer;\n\n@media (max-width: 600px) {\n    font-size: 0.8em;\n}\n\np {\n    font-size: 1em;\n    font-family: 'Roboto', serif;\n    margin: 1vh;\n}\n\n"]))),V=r.div(g||(g=d(["\noutline: none;\nbox-sizing: border-box;\nwidth: 80%;\nheight: 95%;\nborder-radius: 20px;\nborder: none;\npadding: 5px;\nmargin: auto;\nfont-size: 0.8em;\nfont-family: 'Roboto', serif;\nbackground-color: #CAB5B5;\nbox-shadow: inset 0 2px 6px rgba(0,0,0,0.4);\ncolor: #707070;\ntext-align: center;\n\n@media (max-width: 600px) {\n    font-size: 0.8em;\n}\n\np {\n    font-size: 1em;\n    font-family: 'Roboto', serif;\n    margin: 1vh;\n}\n\n"],["\noutline: none;\nbox-sizing: border-box;\nwidth: 80%;\nheight: 95%;\nborder-radius: 20px;\nborder: none;\npadding: 5px;\nmargin: auto;\nfont-size: 0.8em;\nfont-family: 'Roboto', serif;\nbackground-color: #CAB5B5;\nbox-shadow: inset 0 2px 6px rgba(0,0,0,0.4);\ncolor: #707070;\ntext-align: center;\n\n@media (max-width: 600px) {\n    font-size: 0.8em;\n}\n\np {\n    font-size: 1em;\n    font-family: 'Roboto', serif;\n    margin: 1vh;\n}\n\n"]))),W=r.div(x||(x=d(["\n    padding: 5px;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n"],["\n    padding: 5px;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n"]))),X=r.div(v||(v=d(["\n    display: flex;\n    width: 100%;\n    height: 100%;\n    \n    span {\n        margin: auto;\n    }\n\n"],["\n    display: flex;\n    width: 100%;\n    height: 100%;\n    \n    span {\n        margin: auto;\n    }\n\n"]))),Z=r.span(k||(k=d(["\n    margin: auto;\n    display: inline-block;\n    text-align: center;\n    overflow: hidden;\n    flex: 1;\n"],["\n    margin: auto;\n    display: inline-block;\n    text-align: center;\n    overflow: hidden;\n    flex: 1;\n"]))),$=r.span(w||(w=d(["\n    color: white;\n    background-color: #a17a7a;\n    box-sizing: border-box;\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 2px 3px;\n    margin: auto;\n    display: inline-block;\n    text-align: center;\n"],["\n    color: white;\n    background-color: #a17a7a;\n    box-sizing: border-box;\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 2px 3px;\n    margin: auto;\n    display: inline-block;\n    text-align: center;\n"]))),_=function(e){return n.createElement(Z,null,n.createElement($,null,e.children))},nn=function(e){return e.selected?n.createElement(W,null,n.createElement(V,null,!!e.showNotificationsOnSelected&&n.createElement(X,null,e.notifications&&e.notifications.length>0&&n.createElement(_,null,e.notifications[0]),n.createElement("span",null,e.children),e.notifications&&e.notifications.length>1&&n.createElement(_,null,e.notifications[1])),!e.showNotificationsOnSelected&&n.createElement(X,null,n.createElement("span",null,e.children)))):n.createElement(Q,{onClick:function(){return e.onClick&&e.onClick()}},n.createElement(X,null,e.notifications&&e.notifications.length>0&&n.createElement(_,null,e.notifications[0]),n.createElement("span",{style:{flex:"2"}},e.children),e.notifications&&e.notifications.length>1&&n.createElement(_,null,e.notifications[1])))},en=r.div(y||(y=d(["\n    width: 0; \n    height: 0; \n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    cursor: pointer;\n\n    border-top: 10px solid #CAB5B5;\n"],["\n    width: 0; \n    height: 0; \n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    cursor: pointer;\n\n    border-top: 10px solid #CAB5B5;\n"]))),on=r.div(E||(E=d(["\n    width: 0; \n    height: 0; \n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent;\n\n    border-left: 10px solid #CAB5B5;\n"],["\n    width: 0; \n    height: 0; \n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent;\n\n    border-left: 10px solid #CAB5B5;\n"]))),tn=r.div(C||(C=d(["\n    width: 0; \n    height: 0; \n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent; \n    cursor: pointer;\n\n    border-right:10px solid #CAB5B5; \n"],["\n    width: 0; \n    height: 0; \n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent; \n    cursor: pointer;\n\n    border-right:10px solid #CAB5B5; \n"]))),rn=r.button(z||(z=d(["\n    width: 250px;\n    border-radius: 5px;\n    display: block;\n    margin: 0 auto;\n    font-size: 1.2em;\n    font-family: ",";\n    padding: 10px 25px;\n    border: ",";\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n"],["\n    width: 250px;\n    border-radius: 5px;\n    display: block;\n    margin: 0 auto;\n    font-size: 1.2em;\n    font-family: ",";\n    padding: 10px 25px;\n    border: ",";\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n"])),(function(n){var e,o;return(null===(o=null===(e=n.theme)||void 0===e?void 0:e.fonts)||void 0===o?void 0:o.titleScript)?n.theme.fonts.titleScript:"serif"}),(function(n){var e,o;return(null===(o=null===(e=n.theme)||void 0===e?void 0:e.borders)||void 0===o?void 0:o.expandableMenu)?n.theme.borders.expandableMenu:"2px #303030 solid"}),(function(n){var e,o;return(null===(o=null===(e=n.theme)||void 0===e?void 0:e.colors)||void 0===o?void 0:o.primary)?n.theme.colors.primary:"darkseagreen"}),(function(n){var e,o;return(null===(o=null===(e=n.theme)||void 0===e?void 0:e.colors)||void 0===o?void 0:o.secondary)?n.theme.colors.secondary:"#707070"})),ln=r.button(B||(B=d(["\n    outline: none;\n    border-radius: 5px;\n    border: ",";\n    padding: 5px;\n    margin: 0px 3px;\n    font-size: 0.6em;\n    font-family: 'Roboto', serif;\n    background-color: ",";\n    color: black;\n    ","\n\n    input {\n        height: 13px;\n        width: 13px;\n    }\n\n    @media (max-width: 600px) {\n        font-size: 0.8em;\n    }\n\n    p {\n        font-family: 'Roboto', serif;\n        display: inline-block;\n    }\n\n    span {\n        font-size: 1.8em;\n        padding: 0 2px;\n        margin: auto;\n    }\n\n\n\n"],["\n    outline: none;\n    border-radius: 5px;\n    border: ",";\n    padding: 5px;\n    margin: 0px 3px;\n    font-size: 0.6em;\n    font-family: 'Roboto', serif;\n    background-color: ",";\n    color: black;\n    ","\n\n    input {\n        height: 13px;\n        width: 13px;\n    }\n\n    @media (max-width: 600px) {\n        font-size: 0.8em;\n    }\n\n    p {\n        font-family: 'Roboto', serif;\n        display: inline-block;\n    }\n\n    span {\n        font-size: 1.8em;\n        padding: 0 2px;\n        margin: auto;\n    }\n\n\n\n"])),(function(n){return n.theme.borders.button}),(function(n){return n.selected?"#a2dbc6":n.theme.colors.button}),(function(n){return!n.selected&&"box-shadow: 1px 3px 1px #707070;"})),dn=function(e){return n.createElement("button",{onClick:function(n){return e.onClick(n)}},n.createElement(on,null))},an=function(e){return n.createElement("button",{style:{border:"none",background:"none"},onClick:function(n){return e.onClick(n)}},n.createElement(en,null))},cn=function(e){return n.createElement("button",{style:{border:"none",background:"none"},onClick:function(n){return e.onClick(n)}},n.createElement(tn,null))},sn=function(e){return n.createElement(rn,{className:e.className?e.className:"",onClick:function(){return e.onClick()}},e.children)},un=function(e){return n.createElement(ln,{selected:e.selected,onClick:e.onClick},n.createElement("div",{style:{display:"flex"}},n.createElement("p",{style:{fontSize:"1.2em"}},e.children),n.createElement("span",null,e.selected?!e.noCheckMark&&"✔":!e.noCheckBox&&n.createElement("input",{type:"checkbox"}))))},pn=r.div(S||(S=d(["\n    width: 100%;\n    padding: 2%;\n    box-sizing: border-box;\n    cursor: pointer;\n\n"],["\n    width: 100%;\n    padding: 2%;\n    box-sizing: border-box;\n    cursor: pointer;\n\n"]))),bn=r.div(R||(R=d(["\n    width: 100%;\n    font-family: ",";\n    text-align: left;\n    background-color: inherit;\n    padding: 0; margin: 0; overflow: none;\n    display: flex;\n    align-items: center;\n    user-select: none;\n    flex-grow: 0;\n\n    h2 {\n        color: ",";\n        font-size: 1.2em;\n        font-weight: normal;\n        font-family: ",";\n        display: inline-block;\n        margin: auto auto auto 15px;\n        flex-grow: 1;\n        padding: 10px 2px;\n\n    }\n\n    p {\n    }\n\n"],["\n    width: 100%;\n    font-family: ",";\n    text-align: left;\n    background-color: inherit;\n    padding: 0; margin: 0; overflow: none;\n    display: flex;\n    align-items: center;\n    user-select: none;\n    flex-grow: 0;\n\n    h2 {\n        color: ",";\n        font-size: 1.2em;\n        font-weight: normal;\n        font-family: ",";\n        display: inline-block;\n        margin: auto auto auto 15px;\n        flex-grow: 1;\n        padding: 10px 2px;\n\n    }\n\n    p {\n    }\n\n"])),(function(n){var e,o;return(null===(o=null===(e=n.theme)||void 0===e?void 0:e.fonts)||void 0===o?void 0:o.subtitle)?n.theme.fonts.subtitle:"serif"}),(function(n){var e,o;return(null===(o=null===(e=n.theme)||void 0===e?void 0:e.colors)||void 0===o?void 0:o.title)?n.theme.colors.title:"#707070"}),(function(n){var e,o;return(null===(o=null===(e=n.theme)||void 0===e?void 0:e.fonts)||void 0===o?void 0:o.titleScript)?n.theme.fonts.titleScript:"serif"})),mn=r.div(N||(N=d(["\n    box-sizing: border-box;\n    border: 0;\n    background-color: inherit;\n    border-radius: 5px;\n    width: 100%;\n    overflow: hidden;\n    transform-origin: top;\n    transition:transform 0.3s ease-out;\n    ","\n"],["\n    box-sizing: border-box;\n    border: 0;\n    background-color: inherit;\n    border-radius: 5px;\n    width: 100%;\n    overflow: hidden;\n    transform-origin: top;\n    transition:transform 0.3s ease-out;\n    ","\n"])),(function(n){return n.expanded?"transform: scaleY(1);":"transform: scaleY(0);"})),hn=r.div(A||(A=d(["\n    box-sizing: border-box;\n    border-radius: 5px;\n    border: ",";\n    background-color: ",";\n    width: 100%;\n    overflow: hidden;\n\n"],["\n    box-sizing: border-box;\n    border-radius: 5px;\n    border: ",";\n    background-color: ",";\n    width: 100%;\n    overflow: hidden;\n\n"])),(function(n){var e,o;return(null===(o=null===(e=n.theme)||void 0===e?void 0:e.borders)||void 0===o?void 0:o.expandableMenu)?n.theme.borders.expandableMenu:"2px #303030 solid"}),(function(n){var e,o;return(null===(o=null===(e=n.theme)||void 0===e?void 0:e.colors)||void 0===o?void 0:o.secondaryBackground)?n.theme.colors.secondaryBackground:"#e0e0e0"})),fn=function(e){var o=n.useState(!1),t=o[0],r=o[1];return n.createElement(pn,{className:e.className?e.className:""},n.createElement(bn,{onClick:function(){return r(n=!t),void(e.expandedCallBack&&e.expandedCallBack(n));var n}},n.createElement("h2",null,e.title?e.title:"Menu Item"),t&&n.createElement(an,null),!t&&n.createElement(cn,null)),n.createElement(hn,null,e.children&&t?n.createElement(mn,{expanded:t},e.children):n.createElement(mn,null," ")))},gn=function(n){var e,o;return l(M||(M=d(["\n    from {\n        background-color: none;\n    }\n    to {\n        background-color: ",";\n    }\n"],["\n    from {\n        background-color: none;\n    }\n    to {\n        background-color: ",";\n    }\n"])),(null===(o=null===(e=n.theme)||void 0===e?void 0:e.colors)||void 0===o?void 0:o.selectedHighlight)?n.theme.colors.selectedHighlight:"blue")},xn=function(n){return n.duration&&n.duration>0&&n.duration<100?n.duration.toString()+"s":"1s"},vn=r.button(T||(T=d(["\n    user-select: none;\n    background-color: inherit;\n    ","\n\n"],["\n    user-select: none;\n    background-color: inherit;\n    ","\n\n"])),(function(n){return n.hold&&i(D||(D=d(["animation: "," "," infinite alternate;"],["animation: "," "," infinite alternate;"])),xn,gn)})),kn=function(r){var i,l,d=e(0),a=d[0],c=d[1],s=e(!1),u=s[0],p=s[1],b=e(!1),m=b[0],h=b[1],f=e(!1),g=f[0],x=f[1],v=e(!0),k=v[0],w=v[1],y=o(),E=o(),C=function(n){n.preventDefault(),a>0&&(!g||k)&&(p(!0),y.current=setTimeout((function(){S()}),1e3*a))},z=function(){p(!1),y.current&&clearTimeout(y.current)},B=function(){m&&S()},S=function(){g?k&&(x(!1),p(!1),r.onUnSelect?r.onUnSelect():r.onSelected(!1)):(x(!0),p(!1),r.onSelected())};return t((function(){r.selected?x(!0):x(!1),r.selectedBy&&(r.selectedBy.hold&&r.selectedBy.hold>0&&r.selectedBy.hold<=10?c(r.selectedBy.hold):c(0),h(!!r.selectedBy.doubleClick),w(!!r.selectedBy.unSelectedable))}),[r]),n.createElement(vn,{className:r.className&&r.className,style:r.style&&r.style,hold:u,duration:(null===(i=r.selectedBy)||void 0===i?void 0:i.blinkDuration)?r.selectedBy.blinkDuration:(null===(l=r.selectedBy)||void 0===l?void 0:l.hold)?r.selectedBy.hold:1,onTouchStart:C,onMouseDown:C,onMouseUp:z,onMouseLeave:z,onTouchEnd:z,onClick:function(){var n,e;(null===(n=r.selectedBy)||void 0===n?void 0:n.hold)||(null===(e=r.selectedBy)||void 0===e?void 0:e.doubleClick)?E.current?(B(),clearTimeout(E.current),E.current=null):E.current=setTimeout((function(){E.current=null}),250):S()}},(!g||!r.onSelectedChildren)&&(!u||!r.keyDownChildren)&&r.children,u&&r.keyDownChildren&&r.keyDownChildren,g&&r.onSelectedChildren&&!(u&&r.keyDownChildren)&&r.onSelectedChildren)};export{fn as CollaspableMenu,kn as ConfigurableButton,an as DownArrowButton,F as Field,cn as LeftArrowButton,nn as NavButton,O as RadioSelection,sn as ReloadButton,dn as RightArrowButton,K as Select,un as SelectButton,I as Switch,G as TextArea};
//# sourceMappingURL=index.js.map
