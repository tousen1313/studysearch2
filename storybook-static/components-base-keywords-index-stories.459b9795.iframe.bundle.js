(self.webpackChunkengage_search2_front=self.webpackChunkengage_search2_front||[]).push([[481],{"./app/components/base-keywords/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),esm=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),dist_esm=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),react=__webpack_require__("./node_modules/react/index.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),icon=__webpack_require__("./components/icon/index.tsx"),__jsx=react.createElement;function cov_1j7kj6zrl8(){var path="/Users/ryota_yamada/source/engage-search2-front/app/components/base-keywords/index.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"692b6de88c39ca0f3a37a088d8093cf3456136d7"===coverage[path].hash||(coverage[path]={path:"/Users/ryota_yamada/source/engage-search2-front/app/components/base-keywords/index.tsx",statementMap:{0:{start:{line:9,column:28},end:{line:29,column:1}},1:{start:{line:10,column:23},end:{line:10,column:28}},2:{start:{line:11,column:2},end:{line:28,column:4}},3:{start:{line:19,column:10},end:{line:24,column:17}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:9,column:28},end:{line:9,column:29}},loc:{start:{line:9,column:46},end:{line:29,column:1}},line:9},1:{name:"(anonymous_1)",decl:{start:{line:18,column:22},end:{line:18,column:23}},loc:{start:{line:19,column:10},end:{line:24,column:17}},line:19}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0,1:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"692b6de88c39ca0f3a37a088d8093cf3456136d7"});var actualCoverage=coverage[path];return cov_1j7kj6zrl8=function(){return actualCoverage},actualCoverage}cov_1j7kj6zrl8(),cov_1j7kj6zrl8().s[0]++;var _Default$parameters,_Default$parameters2,BaseKeywords=function BaseKeywords(props){cov_1j7kj6zrl8().f[0]++;var keywords=(cov_1j7kj6zrl8().s[1]++,props).keywords;return cov_1j7kj6zrl8().s[2]++,__jsx("div",null,__jsx("div",{className:"flex items-center"},__jsx(icon.AD,{className:"mr-1 h-5 w-5 text-red-1","data-testid":"title-tag-left-icon"}),__jsx("h2",{className:"flex items-center py-2 text-xl font-semibold"},"求人検索")),__jsx("div",{className:"mb-8 mt-5 text-center md:mb-[72px] md:mt-6"},keywords.map((function(keyword,index){return cov_1j7kj6zrl8().f[1]++,cov_1j7kj6zrl8().s[3]++,__jsx(link_default(),{key:index,href:"/求人?keyword=".concat(keyword)},__jsx("div",{className:"mx-2 mb-2 inline-flex cursor-pointer rounded-md border-2 border-slate-200 bg-white p-2 text-xs leading-none hover:text-orange-1"},__jsx(icon.AD,{className:"mr-1 text-red-1","data-testid":"keyword-tag-left-icon"}),keyword))}))))};BaseKeywords.displayName="BaseKeywords",BaseKeywords.__docgenInfo={description:"",methods:[],displayName:"BaseKeywords",props:{keywords:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""}}};try{BaseKeywords.displayName="BaseKeywords",BaseKeywords.__docgenInfo={description:"",displayName:"BaseKeywords",props:{keywords:{defaultValue:null,description:"",name:"keywords",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/base-keywords/index.tsx#BaseKeywords"]={docgenInfo:BaseKeywords.__docgenInfo,name:"BaseKeywords",path:"app/components/base-keywords/index.tsx#BaseKeywords"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const index_stories={title:"App/Components/BaseKeywords",component:BaseKeywords,tags:["autodocs"],argTypes:{keywords:{control:"object",description:"軸キーワードになります。最大で50件表示します。"}}};var _play,Default={args:{keywords:["北海道-札幌市-中央区×アパレル","動画編集-北海道","データ入力","アパレル","英語","一般事務","フルリモート","在宅勤務","短期","調剤薬局事務","通販","転勤なし","動画制作","新規事業","内職"]},play:(_play=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(_ref){var canvasElement,canvas,textElement;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref.canvasElement,canvas=(0,dist_esm.uh)(canvasElement),_context.next=4,canvas.findByText(/求人検索/);case 4:textElement=_context.sent,(0,esm.l)(textElement).toBeInTheDocument();case 6:case"end":return _context.stop()}}),_callee)}))),function play(_x){return _play.apply(this,arguments)})};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    keywords: ['北海道-札幌市-中央区×アパレル', '動画編集-北海道', 'データ入力', 'アパレル', '英語', '一般事務', 'フルリモート', '在宅勤務', '短期', '調剤薬局事務', '通販', '転勤なし', '動画制作', '新規事業', '内職']\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const textElement = await canvas.findByText(/求人検索/);\n    expect(textElement).toBeInTheDocument();\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"?4f7e":()=>{}}]);