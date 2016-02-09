System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SearchSelect;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SearchSelect = (function () {
                function SearchSelect() {
                    this.search = '';
                    this.items = ['apple', 'windows', 'android'];
                }
                SearchSelect.prototype.doSearch = function (key) {
                    var _this = this;
                    // filter(fn: (item: T) => boolean) : T[];
                    this.result = [];
                    clearTimeout(this.timeout);
                    this.timeout = setTimeout(function () {
                        console.log(key);
                        for (var item in _this.items) {
                            if (_this.items[item] == key) {
                                console.log(_this.items[item]);
                                _this.result.push(_this.items[item]);
                            }
                        }
                    }, 500);
                };
                SearchSelect = __decorate([
                    core_1.Component({
                        selector: 'search-selector'
                    }),
                    core_1.View({
                        template: '<input type="text" class="form-control" placeholder="Search here" #key (keyup)="doSearch(key.value)" ><ul class="list-group"><li class="list-group-item" *ngFor="#r of result">{{r}}</li></ul>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchSelect);
                return SearchSelect;
            })();
            exports_1("SearchSelect", SearchSelect);
            ;
        }
    }
});
//# sourceMappingURL=searchSelect.js.map