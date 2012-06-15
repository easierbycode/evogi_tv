/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'E',
            type:'image',
            rect:[0,0,90,85],
            fill:["rgba(0,0,0,0)",im+"E.png"]
         },
         {
            id:'Eshadow',
            type:'image',
            rect:[0,0,124,15],
            fill:["rgba(0,0,0,0)",im+"shadow.png"]
         },
         {
            id:'D',
            type:'image',
            rect:[0,0,96,85],
            fill:["rgba(0,0,0,0)",im+"D.png"],
            transform:[[250]]
         },
         {
            id:'DShadow',
            type:'image',
            rect:[0,0,124,15],
            fill:["rgba(0,0,0,0)",im+"shadow.png"]
         },
         {
            id:'G',
            type:'image',
            rect:[0,0,97,89],
            fill:["rgba(0,0,0,0)",im+"G.png"]
         },
         {
            id:'GShadow',
            type:'image',
            rect:[0,0,124,15],
            fill:["rgba(0,0,0,0)",im+"shadow.png"]
         },
         {
            id:'E2',
            type:'image',
            rect:[0,0,90,85],
            fill:["rgba(0,0,0,0)",im+"E.png"]
         },
         {
            id:'E2Shadow',
            type:'image',
            rect:[0,0,124,15],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"shadow.png"],
            transform:[[366,411]]
         },
         {
            id:'logo',
            type:'image',
            tag:'img',
            rect:[0,0,62,84],
            fill:["rgba(0,0,0,0)",im+"logo.png"]
         },
         {
            id:'logoShadow',
            type:'image',
            rect:[0,0,124,15],
            fill:["rgba(0,0,0,0)",im+"shadow.png"]
         },
         {
            id:'n',
            type:'image',
            rect:[0,0,22,22],
            fill:["rgba(0,0,0,0)",im+"n.png"],
            transform:[[478,462]]
         },
         {
            id:'i',
            type:'image',
            rect:[0,0,7,21],
            fill:["rgba(0,0,0,0)",im+"i.png"],
            transform:[[468,463]]
         },
         {
            id:'a2',
            type:'image',
            rect:[0,0,22,22],
            fill:["rgba(0,0,0,0)",im+"a2.png"],
            transform:[[443,462]]
         },
         {
            id:'r',
            type:'image',
            rect:[0,0,18,22],
            fill:["rgba(0,0,0,0)",im+"r.png"],
            transform:[[427,462]]
         },
         {
            id:'y',
            type:'image',
            rect:[0,0,13,20],
            fill:["rgba(0,0,0,0)",im+"y.png"],
            transform:[[405,471]]
         },
         {
            id:'b',
            type:'image',
            rect:[0,0,14,23],
            fill:["rgba(0,0,0,0)",im+"b.png"],
            transform:[[391,462]]
         },
         {
            id:'e',
            type:'image',
            rect:[0,0,14,15],
            fill:["rgba(0,0,0,0)",im+"e2.png"],
            transform:[[367,470]]
         },
         {
            id:'d',
            type:'image',
            rect:[0,0,17,23],
            fill:["rgba(0,0,0,0)",im+"d1.png"],
            transform:[[350,462]]
         },
         {
            id:'a',
            type:'image',
            rect:[0,0,12,15],
            fill:["rgba(0,0,0,0)",im+"a.png"],
            transform:[[337,470]]
         },
         {
            id:'m',
            type:'image',
            rect:[0,0,20,14],
            fill:["rgba(0,0,0,0)",im+"m.png"],
            transform:[[315,470]]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_DShadow}": [
            ["transform", "scaleY", '0.1'],
            ["transform", "scaleX", '0.1'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '410px'],
            ["transform", "translateX", '227px']
         ],
         "${_m}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '549.01px'],
            ["transform", "translateX", '315px']
         ],
         "${_e}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '549.01px'],
            ["transform", "translateX", '367.66px']
         ],
         "${_stage}": [
            ["color", "background-color", 'rgb(255, 255, 255)'],
            ["style", "width", '800px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${_E}": [
            ["transform", "translateX", '202.29px'],
            ["transform", "rotateZ", '0'],
            ["transform", "scaleX", '0.51764'],
            ["transform", "translateY", '-91.74px'],
            ["transform", "scaleY", '0.51764']
         ],
         "${_d}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '541.01px'],
            ["transform", "translateX", '350.52px']
         ],
         "${_a2}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '541.01px'],
            ["transform", "translateX", '443.58px']
         ],
         "${_E2}": [
            ["transform", "translateX", '249px'],
            ["transform", "translateY", '-97px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_a}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '549.01px'],
            ["transform", "translateX", '337.3px']
         ],
         "${_b}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '541.01px'],
            ["transform", "translateX", '391.25px']
         ],
         "${_logo}": [
            ["transform", "scaleY", '0.5'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1.88709'],
            ["transform", "translateY", '-107px'],
            ["style", "clip", [0,62,84,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateX", '139.49px']
         ],
         "${_E2Shadow}": [
            ["transform", "translateX", '227px'],
            ["transform", "scaleX", '0.1'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '410px'],
            ["transform", "scaleY", '0.1']
         ],
         "${_i}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '541.01px'],
            ["transform", "translateX", '468.63px']
         ],
         "${_GShadow}": [
            ["transform", "translateX", '227px'],
            ["transform", "scaleX", '0.1'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '410px'],
            ["transform", "scaleY", '0.1']
         ],
         "${_Eshadow}": [
            ["transform", "translateX", '231px'],
            ["transform", "scaleY", '0.1'],
            ["style", "height", '11px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '410px'],
            ["transform", "scaleX", '0.1']
         ],
         "${_D}": [
            ["transform", "translateX", '206.84px'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.51764'],
            ["transform", "translateY", '-97px'],
            ["transform", "scaleY", '0.51764']
         ],
         "${_n}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '541.01px'],
            ["transform", "translateX", '478.77px']
         ],
         "${_y}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '550.01px'],
            ["transform", "translateX", '405.77px']
         ],
         "${_logoShadow}": [
            ["transform", "translateX", '135px'],
            ["transform", "scaleX", '0.1'],
            ["style", "height", '11px'],
            ["style", "opacity", '0.5'],
            ["transform", "translateY", '410px'],
            ["transform", "scaleY", '0.1']
         ],
         "${_r}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '541.01px'],
            ["transform", "translateX", '427.97px']
         ],
         "${_G}": [
            ["transform", "translateX", '227px'],
            ["transform", "translateY", '-97px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12391,
         autoPlay: true,
         timeline: [
            { id: "eid261", tween: [ "transform", "${_logo}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 5600, duration: 245 },
            { id: "eid264", tween: [ "transform", "${_logo}", "rotateZ", '-69deg', { fromValue: '15deg'}], position: 5846, duration: 103 },
            { id: "eid265", tween: [ "transform", "${_logo}", "rotateZ", '0deg', { fromValue: '-69deg'}], position: 5950, duration: 290 },
            { id: "eid532", tween: [ "transform", "${_D}", "scaleX", '0.51764', { fromValue: '0.51764'}], position: 12391, duration: 0, easing: "easeOutBounce" },
            { id: "eid352", tween: [ "transform", "${_E}", "translateX", '359.48px', { fromValue: '202.29px'}], position: 8209, duration: 65 },
            { id: "eid400", tween: [ "transform", "${_E}", "translateX", '810px', { fromValue: '359.48px'}], position: 8274, duration: 254 },
            { id: "eid382", tween: [ "transform", "${_E}", "translateX", '232.6px', { fromValue: '-48.8px'}], position: 9304, duration: 757, easing: "easeOutCubic" },
            { id: "eid391", tween: [ "transform", "${_E}", "translateX", '253.6px', { fromValue: '232.6px'}], position: 10500, duration: 400, easing: "easeOutCubic" },
            { id: "eid526", tween: [ "transform", "${_E}", "translateX", '202.29px', { fromValue: '253.6px'}], position: 10900, duration: 1491, easing: "easeOutBounce" },
            { id: "eid132", tween: [ "transform", "${_E}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 853, duration: 136 },
            { id: "eid133", tween: [ "transform", "${_E}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 990, duration: 136 },
            { id: "eid535", tween: [ "transform", "${_logo}", "scaleX", '1.88709', { fromValue: '1.88709'}], position: 12391, duration: 0, easing: "easeOutBounce" },
            { id: "eid126", tween: [ "transform", "${_D}", "translateY", '264.49px', { fromValue: '-97px'}], position: 1030, duration: 262, easing: "easeOutBounce" },
            { id: "eid552", tween: [ "transform", "${_D}", "translateY", '264.49px', { fromValue: '264.49px'}], position: 1292, duration: 262, easing: "easeOutBounce" },
            { id: "eid554", tween: [ "transform", "${_D}", "translateY", '264.49px', { fromValue: '264.49px'}], position: 1554, duration: 196, easing: "easeOutBounce" },
            { id: "eid284", tween: [ "transform", "${_D}", "translateY", '316.09px', { fromValue: '264.49px'}], position: 6024, duration: 237, easing: "easeOutBounce" },
            { id: "eid539", tween: [ "transform", "${_D}", "translateY", '312.49px', { fromValue: '316.09px'}], position: 6261, duration: 180, easing: "easeOutBounce" },
            { id: "eid540", tween: [ "transform", "${_D}", "translateY", '312.49px', { fromValue: '312.49px'}], position: 6441, duration: 228, easing: "easeOutBounce" },
            { id: "eid531", tween: [ "transform", "${_D}", "translateY", '312.49px', { fromValue: '312.49px'}], position: 6669, duration: 883, easing: "easeOutBounce" },
            { id: "eid544", tween: [ "transform", "${_D}", "translateY", '312.49px', { fromValue: '312.49px'}], position: 7552, duration: 2273, easing: "easeOutBounce" },
            { id: "eid549", tween: [ "transform", "${_D}", "translateY", '313.49px', { fromValue: '312.49px'}], position: 10000, duration: 28, easing: "easeOutBounce" },
            { id: "eid537", tween: [ "transform", "${_D}", "translateY", '312.49px', { fromValue: '313.49px'}], position: 10028, duration: 17, easing: "easeOutBounce" },
            { id: "eid546", tween: [ "transform", "${_D}", "translateY", '312.49px', { fromValue: '312.49px'}], position: 10141, duration: 484, easing: "easeOutBounce" },
            { id: "eid520", tween: [ "style", "${_logo}", "clip", [0,62,84,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,62,84,0]}], position: 12391, duration: 0, easing: "easeOutBounce" },
            { id: "eid528", tween: [ "transform", "${_E}", "scaleX", '0.51764', { fromValue: '0.51764'}], position: 12391, duration: 0, easing: "easeOutBounce" },
            { id: "eid529", tween: [ "transform", "${_E}", "scaleY", '0.51764', { fromValue: '0.51764'}], position: 12391, duration: 0, easing: "easeOutBounce" },
            { id: "eid119", tween: [ "transform", "${_E}", "translateY", '312.49px', { fromValue: '-91.74px'}], position: 580, duration: 546, easing: "easeOutBounce" },
            { id: "eid538", tween: [ "transform", "${_E}", "translateY", '312.49px', { fromValue: '312.49px'}], position: 1126, duration: 204, easing: "easeOutBounce" },
            { id: "eid134", tween: [ "transform", "${_D}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 1292, duration: 131 },
            { id: "eid135", tween: [ "transform", "${_D}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1423, duration: 131 },
            { id: "eid282", tween: [ "transform", "${_D}", "rotateZ", '17deg', { fromValue: '0deg'}], position: 5950, duration: 227 },
            { id: "eid285", tween: [ "transform", "${_D}", "rotateZ", '0deg', { fromValue: '17deg'}], position: 6178, duration: 175 },
            { id: "eid283", tween: [ "transform", "${_D}", "translateX", '445px', { fromValue: '206.84px'}], position: 5950, duration: 721, easing: "easeOutCubic" },
            { id: "eid355", tween: [ "transform", "${_D}", "translateX", '975px', { fromValue: '445px'}], position: 8274, duration: 254 },
            { id: "eid378", tween: [ "transform", "${_D}", "translateX", '280.84px', { fromValue: '-48.8px'}], position: 9153, duration: 757, easing: "easeOutCubic" },
            { id: "eid393", tween: [ "transform", "${_D}", "translateX", '349.6px', { fromValue: '280.84px'}], position: 10538, duration: 404, easing: "easeOutCubic" },
            { id: "eid530", tween: [ "transform", "${_D}", "translateX", '249.84px', { fromValue: '349.6px'}], position: 10942, duration: 1449, easing: "easeOutBounce" },
            { id: "eid258", tween: [ "transform", "${_logo}", "scaleY", '0.5', { fromValue: '0.5'}], position: 5500, duration: 100 },
            { id: "eid262", tween: [ "transform", "${_logo}", "scaleY", '1', { fromValue: '0.5'}], position: 5600, duration: 166 },
            { id: "eid536", tween: [ "transform", "${_logo}", "scaleY", '0.5238', { fromValue: '1'}], position: 5766, duration: 6625, easing: "easeOutBounce" },
            { id: "eid260", tween: [ "transform", "${_logo}", "translateX", '161.37px', { fromValue: '139.49px'}], position: 5500, duration: 345 },
            { id: "eid551", tween: [ "transform", "${_logo}", "translateX", '191.99px', { fromValue: '161.37px'}], position: 5845, duration: 105 },
            { id: "eid267", tween: [ "transform", "${_logo}", "translateX", '139.49px', { fromValue: '191.99px'}], position: 5950, duration: 290 },
            { id: "eid345", tween: [ "transform", "${_logo}", "translateX", '-20px', { fromValue: '139.49px'}], position: 7500, duration: 546, easing: "easeInOutCubic" },
            { id: "eid346", tween: [ "transform", "${_logo}", "translateX", '192px', { fromValue: '-20px'}], position: 8046, duration: 453, easing: "easeOutBounce" },
            { id: "eid377", tween: [ "transform", "${_logo}", "translateX", '908px', { fromValue: '192px'}], position: 8948, duration: 447, easing: "easeOutCubic" },
            { id: "eid389", tween: [ "transform", "${_logo}", "translateX", '181px', { fromValue: '-60px'}], position: 10250, duration: 250 },
            { id: "eid408", tween: [ "transform", "${_logo}", "translateX", '175px', { fromValue: '181px'}], position: 10500, duration: 250, easing: "easeOutCubic" },
            { id: "eid521", tween: [ "transform", "${_logo}", "translateX", '139.63px', { fromValue: '175px'}], position: 10750, duration: 1641, easing: "easeOutBounce" },
            { id: "eid533", tween: [ "transform", "${_D}", "scaleY", '0.51764', { fromValue: '0.51764'}], position: 12391, duration: 0, easing: "easeOutBounce" },
            { id: "eid96", tween: [ "transform", "${_logo}", "translateY", '312px', { fromValue: '-107px'}], position: 0, duration: 750, easing: "easeOutBounce" },
            { id: "eid259", tween: [ "transform", "${_logo}", "translateY", '355px', { fromValue: '312px'}], position: 5500, duration: 100 },
            { id: "eid263", tween: [ "transform", "${_logo}", "translateY", '193.68px', { fromValue: '355px'}], position: 5600, duration: 245, easing: "easeOutCubic" },
            { id: "eid269", tween: [ "transform", "${_logo}", "translateY", '199.29px', { fromValue: '193.68px'}], position: 5846, duration: 103 },
            { id: "eid266", tween: [ "transform", "${_logo}", "translateY", '194px', { fromValue: '199.29px'}], position: 5950, duration: 121 },
            { id: "eid268", tween: [ "transform", "${_logo}", "translateY", '333px', { fromValue: '194px'}], position: 6071, duration: 467, easing: "easeOutBounce" },
            { id: "eid534", tween: [ "transform", "${_logo}", "translateY", '330.29px', { fromValue: '333px'}], position: 6538, duration: 114, easing: "easeOutBounce" },
            { id: "eid543", tween: [ "transform", "${_logo}", "translateY", '322.63px', { fromValue: '330.29px'}], position: 6652, duration: 847, easing: "easeOutBounce" },
            { id: "eid542", tween: [ "transform", "${_logo}", "translateY", '312.99px', { fromValue: '322.63px'}], position: 7500, duration: 4891, easing: "easeOutBounce" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-247620929");
