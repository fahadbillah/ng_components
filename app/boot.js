System.register(['angular2/platform/browser', './components/searchSelect'], function(exports_1) {
    var browser_1, searchSelect_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (searchSelect_1_1) {
                searchSelect_1 = searchSelect_1_1;
            }],
        execute: function() {
            // import { App } from './components/app';
            browser_1.bootstrap(searchSelect_1.SearchSelect);
        }
    }
});
//# sourceMappingURL=boot.js.map