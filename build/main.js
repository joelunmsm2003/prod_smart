webpackJsonp([9],{

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataProvider = /** @class */ (function () {
    function DataProvider(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.datoeliminar = {};
        console.log('Hello DataProvider Provider');
        this.server = "http://comunica7.com/apirestsmartgoal/public/";
        this.storage.get('usuario').then(function (val) {
            if (val) {
                _this.club_id = val.club;
            }
        });
    }
    DataProvider.prototype.traeclubs = function (club) {
        return this.http.get(this.server + 'list/club/null/' + club)
            .map(function (response) { return response; });
    };
    DataProvider.prototype.listajuegos = function (club) {
        return this.http.get(this.server + 'list/juego/1/' + club)
            .map(function (response) { return response; });
    };
    DataProvider.prototype.traejugadores = function (club, data) {
        return this.http.get(this.server + 'list/jugadores/1/' + this.club_id + '/' + data)
            .map(function (response) { return response; });
    };
    DataProvider.prototype.listajuegosdetalle = function (juego, club) {
        ///list/juegodet/{fjuego}/{fclub}/{fempresa}'
        return this.http.get(this.server + 'list/juegodet/' + juego + '/' + club + '/1')
            .map(function (response) { return response; });
    };
    DataProvider.prototype.guardajuego = function (data) {
        console.log('Guarda Juego...');
        data.addclub = 1;
        data.addempresa = 1;
        data.addusuario = 1;
        data.addproceso = 1;
        return this.http.post(this.server + 'add/juego/', data)
            .map(function (response) { return response; });
    };
    DataProvider.prototype.ingresar = function (data) {
        console.log('ngresando...', data);
        return this.http.get(this.server + 'login/validar/' + data.usuario + '/' + data.password + '/1/' + data.club)
            .map(function (response) { return response; });
    };
    ///list/juegodetjugador {fjuego}/{fclub}/{fempresa}/{fitem}
    DataProvider.prototype.listajuegodetallejugador = function (juego, club, item) {
        return this.http.get(this.server + 'list/juegodetjugador/' + juego + '/' + club + '/1/' + item)
            .map(function (response) { return response; });
    };
    //'/list/tbgenerald/{codpadre}'
    // Tipo de Rol
    DataProvider.prototype.listatipoderol = function () {
        return this.http.get(this.server + 'list/tbgenerald/01')
            .map(function (response) { return response; });
    };
    DataProvider.prototype.listatipodedocumento = function () {
        return this.http.get(this.server + 'list/tbgenerald/02')
            .map(function (response) { return response; });
    };
    DataProvider.prototype.listasexos = function () {
        return this.http.get(this.server + 'list/tbgenerald/03')
            .map(function (response) { return response; });
    };
    DataProvider.prototype.listaarcos = function () {
        return this.http.get(this.server + 'list/tbgenerald/04')
            .map(function (response) { return response; });
    };
    DataProvider.prototype.listaposicion = function () {
        return this.http.get(this.server + 'list/tbgenerald/06')
            .map(function (response) { return response; });
    };
    DataProvider.prototype.listapies = function () {
        return this.http.get(this.server + 'list/tbgenerald/06')
            .map(function (response) { return response; });
    };
    DataProvider.prototype.listatiros = function () {
        return this.http.get(this.server + 'list/tbgenerald/05')
            .map(function (response) { return response; });
    };
    DataProvider.prototype.sacajugador = function (codigo, club) {
        console.log(codigo, club);
        return this.http.get(this.server + 'query/jugadores/' + codigo + '/1/' + club)
            .map(function (response) { return response; });
    };
    DataProvider.prototype.eliminajuego = function (codigo, club) {
        console.log('Eliminando..');
        this.datoeliminar.dproceso = 3;
        this.datoeliminar.dusuario = 1;
        this.datoeliminar.ddescripcion = 1;
        //'/delete/juego/{dcodigo}/{dclub}/{dempresa}' :: ddescripcion,dusuario,dproceso
        return this.http.post(this.server + 'delete/juego/' + codigo + '/' + club + '/1', this.datoeliminar).
            map(function (response) { return response; });
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agregadetallejuego/agregadetallejuego.module": [
		307,
		8
	],
	"../pages/calificajugador/calificajugador.module": [
		306,
		7
	],
	"../pages/configuracion/configuracion.module": [
		308,
		6
	],
	"../pages/detallejuego/detallejuego.module": [
		309,
		5
	],
	"../pages/editarjugador/editarjugador.module": [
		310,
		4
	],
	"../pages/filtro/filtro.module": [
		311,
		3
	],
	"../pages/ingresar/ingresar.module": [
		312,
		2
	],
	"../pages/nuevojuego/nuevojuego.module": [
		313,
		1
	],
	"../pages/nuevojugador/nuevojugador.module": [
		314,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngresarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IngresarPage = /** @class */ (function () {
    function IngresarPage(dataprovider, storage, nav, http, navParams) {
        this.dataprovider = dataprovider;
        this.storage = storage;
        this.nav = nav;
        this.http = http;
        this.navParams = navParams;
        this.usuario = { 'usuario': 'omar', 'password': '123', 'club': 1 };
    }
    IngresarPage.prototype.ionViewDidLoad = function () {
        this.clubes = this.dataprovider.traeclubs('null');
    };
    IngresarPage.prototype.ingresar = function (usuario) {
        var _this = this;
        console.log(usuario);
        this.dataprovider.ingresar(usuario).subscribe(function (data) {
            _this.user = data;
            if (_this.user.length > 0) {
                _this.storage.set('usuario', usuario);
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            else {
                _this.alerta = 'Usuario , Password o Club Incorrecto';
            }
        });
    };
    IngresarPage.prototype.filtra = function () {
    };
    IngresarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ingresar',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/pages/ingresar/ingresar.html"*/'<!--\n  Generated template for the IngresarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding >\n\n\n\n<div style=\'height: 120px;\'></div>\n\n<div style="text-align: center;">\n	<h1>SmartGoal</h1>\n</div>\n\n<div style=\'height: 30px;\'></div>\n\n	<div style=\'padding: 6em;padding-left: 16em;\n    padding-right: 16em;\'>\n	  <form  >\n      <ion-item>\n        <ion-label>Usuario</ion-label>\n        <ion-input type="text" [(ngModel)]="usuario.usuario" name="usuario" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Password</ion-label>\n        <ion-input [(ngModel)]="usuario.password" name="password" type=\'password\' ></ion-input>\n      </ion-item>\n\n     <ion-item>\n	    <ion-label>Club</ion-label>\n	    <ion-select [(ngModel)]="usuario.club" name=\'club\'>\n	      <ion-option *ngFor="let name of  clubes | async " [value] = "name.Codigo" >{{name.Nombre_Comercial}}</ion-option>\n	    </ion-select>\n	  </ion-item>\n\n\n\n\n\n      <button ion-button type="button" round (click)="ingresar(usuario)" block>Ingresar</button>\n    </form>\n\n    \n      <h6>{{alerta}}</h6>\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/pages/ingresar/ingresar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], IngresarPage);
    return IngresarPage;
}());

//# sourceMappingURL=ingresar.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filtro_filtro__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ConfiguracionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfiguracionPage = /** @class */ (function () {
    function ConfiguracionPage(dataprovider, storage, modalCtrl, view, navCtrl, navParams) {
        var _this = this;
        this.dataprovider = dataprovider;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.view = view;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.juegos = true;
        this.storage.get('usuario').then(function (val) {
            if (val) {
                _this.club_id = val.club;
                dataprovider.traeclubs("null").subscribe(function (data) {
                    _this.clubes = data;
                    _this.club = _this.clubes.filter(function (data) { return data.Codigo == _this.club_id; })[0];
                    console.log(_this.club);
                });
            }
        });
    }
    ConfiguracionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguracionPage');
    };
    ConfiguracionPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    ConfiguracionPage.prototype.juego = function () {
    };
    ConfiguracionPage.prototype.salir = function () {
        console.log('data');
        this.storage.remove('usuario');
    };
    ConfiguracionPage.prototype.filtro = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__filtro_filtro__["a" /* FiltroPage */], {});
        profileModal.onDidDismiss(function (data) {
            console.log(data);
        });
        profileModal.present();
    };
    ConfiguracionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-configuracion',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/pages/configuracion/configuracion.html"*/'<!--\n  Generated template for the ConfiguracionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar color=\'dark\'>\n    <ion-title>SmartGoal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n        <h1>Club {{club?.Nombre_Comercial}}</h1>\n    \n        <ion-grid >\n        <ion-row>\n\n       <!-- <ion-col col-2>\n        <button round [ngClass]="usuarios? \'activo\':\'inactivo\'" ion-button  full (click)=\'historial=false;jugadores=false;usuarios=true;juegos=false;\' >Usuarios</button>\n        </ion-col>-->\n\n        <ion-col col-2>\n        <button round [ngClass]="juegos? \'activo\':\'inactivo\'" ion-button color="primary" full (click)=\'historial=false;jugadores=false;juegos=true;usuarios=false\' >Juegos</button>\n        </ion-col>\n\n        <ion-col col-2>\n        <button round [ngClass]="jugadores? \'activo\':\'inactivo\'" ion-button color="primary" full (click)=\'historial=false;jugadores=true;juegos=false;usuarios=false\' >Jugadores</button>\n        </ion-col>\n\n        <ion-col col-2>\n        <button round [ngClass]="historial? \'activo\':\'inactivo\'" ion-button color="primary" full (click)=\'historial=true;jugadores=false;juegos=false;usuarios=false\'>Historial</button>\n        </ion-col>\n\n        <ion-col col-2>\n        <button round [ngClass]="calificaciones? \'activo\':\'inactivo\'" ion-button color="primary" full (click)=\'historial=true;jugadores=false;juegos=false;usuarios=false\'>Calificaciones</button>\n        </ion-col>\n\n        <ion-col col-2>\n        <button round [ngClass]="configuracion? \'activo\':\'inactivo\'" ion-button color="primary" full (click)=\'salir()\' >Salir</button>\n        </ion-col>\n\n        </ion-row>\n\n        </ion-grid>\n\n\n      <!---USUARIOS-->\n\n      <usuarios *ngIf=\'usuarios\'></usuarios>\n\n\n      <!--JUEGOS-->\n\n\n\n      <juegos *ngIf=\'juegos\'></juegos>\n      \n\n      <!--JUGADORES-->\n\n\n      <jugadores *ngIf=\'jugadores\'></jugadores>\n\n      <!--HISTORIAL-->\n\n      <historial *ngIf=\'historial\'></historial>\n\n\n  \n\n\n               \n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/pages/configuracion/configuracion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ConfiguracionPage);
    return ConfiguracionPage;
}());

//# sourceMappingURL=configuracion.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FiltroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FiltroPage = /** @class */ (function () {
    function FiltroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FiltroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FiltroPage');
    };
    FiltroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-filtro',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/pages/filtro/filtro.html"*/'<!--\n  Generated template for the FiltroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'dark\'>\n    <ion-title>Filtro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-list >\n\n      <ion-item>\n      <ion-label floating>Jugador</ion-label>\n      <ion-input type="text"  [(ngModel)]=\'inputtext\'></ion-input>\n      </ion-item>\n\n      <ion-item>\n      <ion-label floating>Boton Funcional</ion-label>\n      <ion-input type="text"  [(ngModel)]=\'inputtext\'></ion-input>\n      </ion-item>\n\n      <ion-item>\n      <ion-label floating>Area Seleccionada</ion-label>\n      <ion-input type="text"  [(ngModel)]=\'inputtext\'></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n      <ion-label floating>Tipo de Area seleccionada</ion-label>\n      <ion-input type="text"  [(ngModel)]=\'inputtext\'></ion-input>\n      </ion-item>\n\n      <ion-item>\n      <ion-label floating>Iteraciones por area</ion-label>\n      <ion-input type="password" #password></ion-input>\n      </ion-item>\n\n      <ion-item>\n      <ion-label floating>Iteraciones por juego</ion-label>\n      <ion-input type="password" #password></ion-input>\n      </ion-item>\n\n      <div padding>\n      <button  ion-button  item-left>Buscar</button>\n\n      </div>\n\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/pages/filtro/filtro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FiltroPage);
    return FiltroPage;
}());

//# sourceMappingURL=filtro.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalificajugadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CalificajugadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalificajugadorPage = /** @class */ (function () {
    function CalificajugadorPage(view, toastCtrl, navCtrl, navParams) {
        this.view = view;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.uno = false;
        this.dos = false;
        this.tres = false;
        this.cuatro = false;
        this.cinco = false;
        this.jugador = navParams.get("jugador");
        this.calificacion = navParams.get("calificacion");
        console.log('calificacion.....', this.calificacion);
    }
    CalificajugadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalificajugadorPage');
    };
    CalificajugadorPage.prototype.califica = function (data) {
        this.nota = data;
        this.agregatoast('Perfecto, calificaste con ' + data + ' estrellas');
        console.log(data);
        if (data == 1) {
            this.uno = true;
        }
        if (data == 2) {
            this.uno = true;
            this.dos = true;
        }
        if (data == 3) {
            this.uno = true;
            this.dos = true;
            this.tres = true;
        }
        if (data == 4) {
            this.uno = true;
            this.dos = true;
            this.tres = true;
            this.cuatro = true;
        }
        if (data == 5) {
            this.uno = true;
            this.dos = true;
            this.tres = true;
            this.cuatro = true;
            this.cinco = true;
        }
    };
    CalificajugadorPage.prototype.agregatoast = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            duration: 2000,
            cssClass: 'mitoast',
            position: 'bottom',
        });
        toast.present();
    };
    CalificajugadorPage.prototype.descalifica = function (data) {
        this.agregatoast('Perfecto, calificaste con ' + data + ' estrellas');
        this.nota = data;
        if (data == 1) {
            this.uno = true;
            this.dos = false;
            this.tres = false;
            this.cuatro = false;
            this.cinco = false;
        }
        if (data == 2) {
            this.uno = true;
            this.dos = true;
            this.tres = false;
            this.cuatro = false;
            this.cinco = false;
        }
        if (data == 3) {
            this.uno = true;
            this.dos = true;
            this.tres = true;
            this.cuatro = false;
            this.cinco = false;
        }
        if (data == 4) {
            this.uno = true;
            this.dos = true;
            this.tres = true;
            this.cuatro = true;
            this.cinco = false;
        }
        if (data == 5) {
            this.uno = true;
            this.dos = true;
            this.tres = true;
            this.cuatro = true;
            this.cinco = true;
        }
    };
    CalificajugadorPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    CalificajugadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calificajugador',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/pages/calificajugador/calificajugador.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Calificación</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n      <h1 >Puntaje: {{calificacion.toLocaleString(undefined, {minimumFractionDigits: 2})}} </h1>\n  \n\n\n	<!--<ion-item *ngIf=\'jugador\'>\n\n      <ion-avatar item-start>\n      <img src="https://static.mediotiempo.com/bs/mt/sports/production/soccer/players/20439f40-5408-4901-9ee7-1cfae4af7b30.jpg">\n      </ion-avatar>\n      <h2 >{{jugador.nombre}}</h2>\n      <h3>Delantero</h3>\n      <p>Delantero </p>\n\n\n\n\n      </ion-item>-->\n\n\n      <div style=\'height:50px;\'></div>\n\n\n	 <ion-grid style=\'text-align: center;\'>\n\n\n   	<ion-row style=\'background: #ddd6e4;\n    border-radius: 23px;\n    color: #251338;\' >\n\n	<!--<ion-col (click)=\'descalifica(1)\' *ngIf=\'uno\'>\n	<ion-icon   class=\'estrella\' name="star"></ion-icon>\n	</ion-col>\n\n	<ion-col (click)=\'califica(1)\' *ngIf=\'!uno\' >\n	<ion-icon   class=\'estrella\' name="star-outline"></ion-icon>\n	</ion-col>\n\n\n	<ion-col (click)=\'descalifica(2)\' *ngIf=\'dos\'>\n	<ion-icon   class=\'estrella\' name="star"></ion-icon>\n	</ion-col>\n\n	<ion-col (click)=\'califica(2)\' *ngIf=\'!dos\'>\n	<ion-icon   class=\'estrella\' name="star-outline"></ion-icon>\n	</ion-col>\n\n   	<ion-col (click)=\'descalifica(3)\' *ngIf=\'tres\'>\n   	<ion-icon   class=\'estrella\' name="star"></ion-icon>\n   	</ion-col>\n\n   	<ion-col (click)=\'califica(3)\' *ngIf=\'!tres\'>\n   	<ion-icon     class=\'estrella\' name="star-outline"></ion-icon>\n    </ion-col>\n   	\n    <ion-col (click)=\'descalifica(4)\'  *ngIf=\'cuatro\'>\n   	<ion-icon  class=\'estrella\' name="star"></ion-icon>\n   	</ion-col>\n\n   	<ion-col (click)=\'califica(4)\' *ngIf=\'!cuatro\'>\n   	<ion-icon    class=\'estrella\' name="star-outline"></ion-icon>\n   	</ion-col>\n\n   	<ion-col (click)=\'descalifica(5)\' *ngIf=\'cinco\'>\n   	<ion-icon   class=\'estrella\' name="star"></ion-icon>\n   	</ion-col>\n\n   	<ion-col (click)=\'califica(5)\' *ngIf=\'!cinco\'>\n   	<ion-icon    class=\'estrella\' name="star-outline"></ion-icon>\n   	</ion-col>-->\n\n\n\n   </ion-row>\n\n\n   </ion-grid>\n\n\n\n\n</ion-content>\n\n<ion-footer >\n   <ion-toolbar style=\'text-align:center;\'>\n   <button ion-button round color=\'dark\' (click)=\'closeModal()\'>Cerrar</button>\n\n   <button ion-button round color=\'secondary\' (click)=\'closeModal()\'>Aceptar</button>\n	</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/pages/calificajugador/calificajugador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CalificajugadorPage);
    return CalificajugadorPage;
}());

//# sourceMappingURL=calificajugador.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeleccionajugadorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SeleccionajugadorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SeleccionajugadorComponent = /** @class */ (function () {
    function SeleccionajugadorComponent(view, dataprovider) {
        this.view = view;
        this.dataprovider = dataprovider;
        this.filtro = {};
        this.juego = [];
    }
    SeleccionajugadorComponent.prototype.ionViewDidLoad = function () {
        this.jugadores = this.dataprovider.traejugadores(1, "null");
        this.tipotiro = this.dataprovider.listatiros();
        this.filtro.primer_reloj = '00:00:03';
        this.filtro.segundo_reloj = '00:00:03';
        this.filtro.numeroveces = 1;
    };
    SeleccionajugadorComponent.prototype.agrega = function (data) {
        this.juego.push(data);
        this.filtro = {};
        this.filtro.primer_reloj = '00:00:03';
        this.filtro.segundo_reloj = '00:00:03';
        this.filtro.numeroveces = 1;
    };
    SeleccionajugadorComponent.prototype.empezar = function () {
        console.log(this.juego);
        this.view.dismiss(this.juego);
    };
    SeleccionajugadorComponent.prototype.salir = function () {
        this.view.dismiss(this.juego);
    };
    SeleccionajugadorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'seleccionajugador',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/components/seleccionajugador/seleccionajugador.html"*/'<!-- Generated template for the SeleccionajugadorComponent component -->\n<div>\n\n<ion-icon name=\'close\' style=\'font-size: 2em;\n    float: right;\n    top: 11px;\n    margin-right: 19px;\' (click)=\'salir()\'></ion-icon>\n<h3 padding>Creacion del Juego</h3>\n  <ion-item>\n  <ion-label>Seleccione Jugadores</ion-label>\n  <ion-select [(ngModel)]="filtro.jugadores" multiple=\'true\' >\n    <ion-option *ngFor="let key of jugadores | async">{{key.Jugador}}</ion-option>\n  </ion-select>\n</ion-item>\n\n\n  <ion-item *ngIf=\'filtro.jugadores\'>\n  <ion-label>Seleccione Tipo Tiro</ion-label>\n  <ion-select [(ngModel)]="filtro.tipotiro"  >\n    <ion-option *ngFor="let key of tipotiro | async">{{key.Descripcion}}</ion-option>\n  </ion-select>\n</ion-item>\n\n<ion-row>\n<ion-col>\n<ion-item *ngIf=\'filtro.tipotiro\'>\n<ion-label>Tiempo de Patear</ion-label>\n<ion-datetime  displayFormat="HH:mm:ss" pickerFormat="HH:mm:ss" [(ngModel)]="filtro.primer_reloj" ></ion-datetime>\n</ion-item>\n</ion-col>\n\n\n<ion-col>\n<ion-item *ngIf=\'filtro.tipotiro\'>\n<ion-label>Prepara para patear</ion-label>\n<ion-datetime displayFormat="HH:mm:ss" pickerFormat="HH:mm:ss" [(ngModel)]="filtro.segundo_reloj" ></ion-datetime>\n</ion-item>\n</ion-col>\n\n\n</ion-row>\n\n<ion-row>\n	<ion-col>\n<ion-item *ngIf=\'filtro.tipotiro\' >\n  <ion-label>Repite Area</ion-label>\n  <ion-checkbox color="dark" [(ngModel)]="filtro.repitejuego"></ion-checkbox>\n</ion-item>\n</ion-col>\n\n<ion-col>\n\n<ion-item *ngIf=\'filtro.repitejuego\' >\n    <ion-label>Cuantas Veces?</ion-label>\n    <ion-input type="number" value="" [(ngModel)]="filtro.numeroveces"></ion-input>\n </ion-item>\n\n</ion-col>\n</ion-row>\n   <ion-item *ngIf=\'filtro.tipotiro\'>\n  <ion-label>Seleccione Defensas</ion-label >\n  <ion-select [(ngModel)]="filtro.defensas"  multiple="true">\n    <ion-option *ngFor="let key of jugadores | async">{{key.Jugador}}</ion-option>\n  </ion-select>\n</ion-item>\n\n<button ion-button round *ngIf=\'filtro.tipotiro\' (click)=\'agrega(filtro)\'>Agregar</button>\n</div>\n\n\n<h3 *ngIf=\'juego.length>0\' padding>Juego</h3>\n\n<ion-item *ngFor="let key of juego">\n     \n      <ion-col>{{key.jugadores}}</ion-col>\n      <ion-col>{{key.tipotiro}}</ion-col>\n       <ion-col>{{key.numeroveces}} Veces</ion-col>\n        \n          <ion-col>{{key.primer_reloj}}</ion-col>\n          <ion-col>{{key.segundo_reloj}}</ion-col>\n\n\n </ion-item>\n\n\n<ion-footer padding>\n <button *ngIf=\'juego.length>0\' ion-button round  (click)=\'empezar()\'>Empezar Jugar</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/components/seleccionajugador/seleccionajugador.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */]])
    ], SeleccionajugadorComponent);
    return SeleccionajugadorComponent;
}());

//# sourceMappingURL=seleccionajugador.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiperfilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the MiperfilComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MiperfilComponent = /** @class */ (function () {
    function MiperfilComponent() {
        console.log('Hello MiperfilComponent Component');
        this.text = 'Hello World';
    }
    MiperfilComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'miperfil',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/components/miperfil/miperfil.html"*/'<!-- Generated template for the MiperfilComponent component -->\n<div>\n\n\n\n<ion-item>Usuario</ion-item>\n<ion-item>Password</ion-item>\n<ion-item>Club</ion-item>\n\n</div>\n'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/components/miperfil/miperfil.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MiperfilComponent);
    return MiperfilComponent;
}());

//# sourceMappingURL=miperfil.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TableroComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TableroComponent = /** @class */ (function () {
    function TableroComponent(view) {
        this.view = view;
        console.log('Hello TableroComponent Component');
        this.text = 'Hello World';
    }
    TableroComponent.prototype.salir = function () {
        this.view.dismiss();
    };
    TableroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tablero',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/components/tablero/tablero.html"*/'\n<ion-icon name=\'close\' style=\'font-size: 3em;\n  \n    top: 11px;\n    padding-left: 12px;\' (click)=\'salir()\'></ion-icon>\n\n\n<div class="tablero">\n\n		<div>J</div>\n		<div>TT</div>\n		<div>TP</div>\n		<div>MT</div>\n		<div>CMT</div>\n		<div>NT</div>\n		<div>PA</div>\n		<div>PT</div>\n\n</div>\n\n\n'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/components/tablero/tablero.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], TableroComponent);
    return TableroComponent;
}());

//# sourceMappingURL=tablero.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevojuegoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NuevojuegoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevojuegoPage = /** @class */ (function () {
    function NuevojuegoPage(storage, dataprovider, view, navCtrl, http, navParams) {
        var _this = this;
        this.storage = storage;
        this.dataprovider = dataprovider;
        this.view = view;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.nuevojuego = {};
        this.storage.get('usuario').then(function (val) {
            if (val) {
                _this.club_id = val.club;
            }
        });
    }
    NuevojuegoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevojuegoPage');
    };
    //'/add/juego' :: addcodigo,addclub,addempresa,adddescripcion,addusuario,addproceso
    NuevojuegoPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    NuevojuegoPage.prototype.agregajuego = function (data) {
        var _this = this;
        data.addclub = this.club_id;
        data.addempresa = 1;
        data.addusuario = 1;
        data.addproceso = 1;
        this.http.post('http://comunica7.com/apirestsmartgoal/public/add/juego', data)
            .subscribe(function (data) {
            console.log('ooo', data);
            _this.closeModal();
        }, function (error) {
        });
    };
    NuevojuegoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nuevojuego',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/pages/nuevojuego/nuevojuego.html"*/'<!--\n  Generated template for the NuevojuegoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'warning\'>\n    <ion-title>Nuevo Juevo</ion-title>\n\n    <ion-icon name="close" color=\'secondary\' style=\'font-size: 50px; float:right;padding-right: 10px;\' (click)=\'closeModal()\'></ion-icon>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n	 <form>\n      <ion-item>\n        <ion-label>Descripcion</ion-label>\n        <ion-input type="text" [(ngModel)]="nuevojuego.adddescripcion" name="title"></ion-input>\n      </ion-item>\n\n      \n  <div style=\'height:20px;\'></div>\n\n	<button ion-button round (click)=\'agregajuego(nuevojuego)\'>Agregar</button>\n    </form>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/pages/nuevojuego/nuevojuego.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NuevojuegoPage);
    return NuevojuegoPage;
}());

//# sourceMappingURL=nuevojuego.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallejuegoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
/**
 * Generated class for the DetallejuegoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetallejuegoPage = /** @class */ (function () {
    //usp_lis_juego_det '/list/juegodet/{fjuego}/{fclub}/{fempresa}'
    function DetallejuegoPage(storage, dataprovider, http, navCtrl, navParams, modalCtrl, view) {
        var _this = this;
        this.storage = storage;
        this.dataprovider = dataprovider;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.view = view;
        this.detallejuegos = [];
        this.juego = navParams.get("juego");
        this.storage.get('usuario').then(function (val) {
            if (val) {
                _this.club_id = val.club;
                _this.listadetallesjuego(_this.club_id);
            }
        });
    }
    DetallejuegoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetallejuegoPage');
    };
    DetallejuegoPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    DetallejuegoPage.prototype.listadetallesjuego = function (club) {
        var _this = this;
        this.http.get('http://comunica7.com/apirestsmartgoal/public/list/juegodet/' + this.juego.Codigo + '/' + club + '/1')
            .subscribe(function (data) {
            console.log('listadetallesjuego', data);
            _this.detallejuegos = data;
            //this.clubes =data
        }, function (error) {
        });
    };
    DetallejuegoPage.prototype.agregadetallejuego = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], { juego: this.juego }).then(function () {
            _this.navCtrl.getActive().onDidDismiss(function (data) {
                _this.listadetallesjuego(_this.club_id);
            });
        });
    };
    DetallejuegoPage.prototype.editardetalle = function (data) {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], { editajuego: data, juego: this.juego }).then(function () {
            _this.navCtrl.getActive().onDidDismiss(function (data) {
                _this.listadetallesjuego(_this.club_id);
            });
        });
    };
    DetallejuegoPage.prototype.eliminardetalle = function (data) {
        var _this = this;
        data.djuego = this.juego.Codigo;
        data.dempresa = 1;
        data.dusuario = 1;
        //usp_del_juego_det '/delete/juegodet/{dclub}/{ditem}' :: djuego,dempresa,dusuario
        console.log(data);
        this.http.put('http://comunica7.com/apirestsmartgoal/public/delete/juegodet/' + this.club_id + '/' + data.item, data)
            .subscribe(function (data) {
            console.log('elimi', data);
            _this.listadetallesjuego(_this.club_id);
        }, function (error) {
        });
    };
    DetallejuegoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detallejuego',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/pages/detallejuego/detallejuego.html"*/'<!--\n  Generated template for the DetallejuegoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalle del Juego {{juego.Codigo}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n	  <ion-row>\n      <ion-col col-2>\n      <ion-icon name="add-circle" color=\'secondary\' style=\'font-size: 50px;\' (click)=\'agregadetallejuego()\'></ion-icon>\n      </ion-col>\n\n      </ion-row>\n\n      <h3>{{juego.Descripcion}}</h3>\n\n      <h4>Numero de Items : {{detallejuegos.length}}</h4>\n\n\n      <ion-list>\n      <ion-item *ngFor=\'let j of detallejuegos\' >\n      	\n\n      	<h2>Inicio : {{j.Tiempo_inicio}} Fin : {{j.Tiempo_fin}}</h2>\n      	\n      	<h4>{{j.TipoTiro}}</h4>\n\n\n\n\n      	 <button ion-button round clear item-end (click)=\'editardetalle(j)\'>Ver</button>\n\n          <button ion-button round clear item-end (click)=\'eliminardetalle(j)\'>Eliminar</button>\n\n      	\n\n\n\n      </ion-item>\n\n    \n\n      </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/pages/detallejuego/detallejuego.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], DetallejuegoPage);
    return DetallejuegoPage;
}());

//# sourceMappingURL=detallejuego.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevojugadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NuevojugadorPage = /** @class */ (function () {
    function NuevojugadorPage(dataprovider, http, view, storage, navCtrl, navParams) {
        var _this = this;
        this.dataprovider = dataprovider;
        this.http = http;
        this.view = view;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jugador = {};
        this.sexos = dataprovider.listasexos();
        this.tiposdedoc = dataprovider.listatipodedocumento();
        this.storage.get('usuario').then(function (val) {
            if (val) {
                _this.club_id = val.club;
            }
        });
    }
    NuevojugadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevojugadorPage');
    };
    NuevojugadorPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    NuevojugadorPage.prototype.agregajugador = function (data) {
        var _this = this;
        data.addproceso = 1;
        data.addclub = this.club_id;
        data.addempresa = 1;
        this.http.post('http://comunica7.com/apirestsmartgoal/public/add/jugadores', data)
            .subscribe(function (data) {
            _this.closeModal();
        }, function (error) {
        });
    };
    NuevojugadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nuevojugador',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/pages/nuevojugador/nuevojugador.html"*/'<!--\n  Generated template for the NuevojugadorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nuevo Jugador</ion-title>\n\n    <ion-icon name="close" color=\'secondary\' style=\'font-size: 50px; float:right;padding-right: 10px;\' (click)=\'closeModal()\'></ion-icon>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n\n	 <form>\n      <ion-item>\n        <ion-label>Nombre</ion-label>\n        <ion-input type="text" [(ngModel)]="jugador.addnombres" name="title"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Apellidos</ion-label>\n        <ion-input type="text" [(ngModel)]="jugador.addapellidos" name="title"></ion-input>\n      </ion-item>\n\n\n          <ion-item>\n        <ion-label>Tipo de Doc.</ion-label>\n        <ion-select [(ngModel)]="jugador.addtipodoc" name=\'tipodedoc\' >\n          <ion-option *ngFor="let s of tiposdedoc | async" [value] = "s.Codigo" >{{s.Descripcion}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n\n      <ion-item>\n        <ion-label>Nro Doc</ion-label>\n        <ion-input type="text" [(ngModel)]="jugador.addnrodoc" name="title"></ion-input>\n      </ion-item>\n\n\n\n\n      <ion-item>\n        <ion-label>Sexo</ion-label>\n        <ion-select [(ngModel)]="jugador.addsexo" name=\'sexo\' >\n          <ion-option *ngFor="let s of sexos | async" [value] = "s.Codigo" >{{s.Descripcion}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n       <ion-item>\n        <ion-label>Peso</ion-label>\n        <ion-input type="text" [(ngModel)]="jugador.addpeso" name="title"></ion-input>\n      </ion-item>\n\n      \n  <div style=\'height:20px;\'></div>\n\n	<button ion-button round (click)=\'agregajugador(jugador)\'>Agregar</button>\n    </form>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/pages/nuevojugador/nuevojugador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NuevojugadorPage);
    return NuevojugadorPage;
}());

//# sourceMappingURL=nuevojugador.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarjugadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EditarjugadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditarjugadorPage = /** @class */ (function () {
    function EditarjugadorPage(view, storage, dataprovider, http, navCtrl, navParams) {
        var _this = this;
        this.view = view;
        this.storage = storage;
        this.dataprovider = dataprovider;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.editajugador = {};
        this.jugador = navParams.get("jugador");
        this.sexos = dataprovider.listasexos();
        this.tiposdedoc = dataprovider.listatipodedocumento();
        this.storage.get('usuario').then(function (val) {
            if (val) {
                _this.club_id = val.club;
                dataprovider.sacajugador(_this.jugador.Codigo, _this.club_id).subscribe(function (data) {
                    console.log('trayendo jugador..', data);
                    var datajugador = data[0];
                    _this.jugador.updnombres = datajugador.Nombres;
                    _this.jugador.updapellidos = datajugador.Apellidos;
                    _this.jugador.updtipodoc = datajugador.Tipo_doc;
                    _this.jugador.updnrodoc = datajugador.Nrodoc;
                    _this.jugador.updsexo = datajugador.Sexo;
                    _this.jugador.updpeso = datajugador.Peso;
                    _this.jugador.updtalla = datajugador.Talla;
                    _this.jugador.updposicion = datajugador.Posicion;
                    _this.jugador.updpies = datajugador.Pies;
                    _this.jugador.updemail = datajugador.email;
                    _this.jugador.updtelefono = datajugador.Telefono;
                });
            }
        });
    }
    EditarjugadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarjugadorPage');
    };
    EditarjugadorPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    EditarjugadorPage.prototype.actualiza = function (jugador) {
        var _this = this;
        jugador.updproceso = 2;
        jugador.updusuario = 1;
        console.log('Actualizando...');
        this.http.put('http://comunica7.com/apirestsmartgoal/public/update/jugadores/' + jugador.Codigo + '/1/' + this.club_id, jugador)
            .subscribe(function (data) {
            console.log('ooo', data);
            _this.closeModal();
            //this.clubes =data
        }, function (error) {
        });
    };
    EditarjugadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editarjugador',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/pages/editarjugador/editarjugador.html"*/'<!--\n  Generated template for the EditarjugadorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar Jugador</ion-title>\n\n     <ion-icon name="close" color=\'secondary\' style=\'font-size: 50px; float:right;padding-right: 10px;\' (click)=\'view.dismiss()\'></ion-icon>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n      <ion-item>\n        <ion-label>Nombres</ion-label>\n        <ion-input type="text" [(ngModel)]="jugador.updnombres" name="nombre"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Apellidos</ion-label>\n        <ion-input type="text" [(ngModel)]="jugador.updapellidos" name="apellidos"></ion-input>\n      </ion-item>\n\n\n       <ion-item>\n        <ion-label>Tipo de Doc. {{jugador.updtipodoc}}</ion-label>\n        <ion-select [(ngModel)]="jugador.updtipodoc" name=\'tipodedoc\' >\n          <ion-option *ngFor="let s of tiposdedoc | async" [value] = "s.Codigo"  >{{s.Descripcion}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n\n       <ion-item>\n        <ion-label>Nro de Doc.</ion-label>\n        <ion-input type="text" [(ngModel)]="jugador.updnrodoc" name="ndoc"></ion-input>\n      </ion-item>\n\n       \n\n      <ion-item>\n        <ion-label>Sexo  {{jugador.updsexo}}</ion-label>\n\n       \n\n        <ion-select [(ngModel)]="jugador.updsexo" name=\'sexo\' >\n          <ion-option *ngFor="let s of sexos | async" [value] = "s.Codigo" >{{s.Descripcion}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n       <ion-item>\n        <ion-label>Fecha Nacimiento</ion-label>\n        <ion-input type="date" [(ngModel)]="jugador.updfnac" name="fnacimiento"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Peso</ion-label>\n        <ion-input type="text" [(ngModel)]="jugador.updpeso" name="peso"></ion-input>\n      </ion-item>\n\n        <ion-item>\n        <ion-label>Talla</ion-label>\n        <ion-input type="text" [(ngModel)]="jugador.updtalla" name="talla"></ion-input>\n      </ion-item>\n\n        <ion-item>\n        <ion-label>Posicion</ion-label>\n        <ion-input type="text" [(ngModel)]="jugador.updposicion" name="posicion"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label>Pies</ion-label>\n        <ion-input type="text" [(ngModel)]="jugador.updpies" name="pies"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input type="text" [(ngModel)]="jugador.updemail" name="email"></ion-input>\n      </ion-item>\n\n       <ion-item>\n        <ion-label>Telefono</ion-label>\n        <ion-input type="text" [(ngModel)]="jugador.updtelefono" name="telefono"></ion-input>\n      </ion-item>\n\n\n\n    \n\n\n\n</ion-content>\n\n\n<ion-footer padding>\n\n	<button ion-button round (click)=\'actualiza(jugador)\'>Actualizar</button>\n\n</ion-footer>\n'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/pages/editarjugador/editarjugador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EditarjugadorPage);
    return EditarjugadorPage;
}());

//# sourceMappingURL=editarjugador.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltrohistorialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FiltrohistorialComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FiltrohistorialComponent = /** @class */ (function () {
    function FiltrohistorialComponent(dataprovider, navParams) {
        this.dataprovider = dataprovider;
        this.navParams = navParams;
        this.jugador = '';
        this.filtro = {};
        this.listatiros = dataprovider.listatiros();
        this.jugador = navParams.get("jugador");
        console.log('jugador..', this.jugador);
    }
    FiltrohistorialComponent.prototype.buscar = function (data) {
        console.log(data);
    };
    FiltrohistorialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'filtrohistorial',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/components/filtrohistorial/filtrohistorial.html"*/'<!-- Generated template for the FiltrohistorialComponent component -->\n<div>\n\n\n<h2>Filtro Historial {{jugador.Jugador}}</h2>\n<div style="height: 20px;"></div>\n\n\n<ion-item>\n  <ion-label>Seleccione tipo de tiro</ion-label>\n  <ion-select [(ngModel)]="filtro.tipotiro"  multiple="true">\n    <ion-option *ngFor="let key of listatiros | async">{{key.Descripcion}}</ion-option>\n  </ion-select>\n</ion-item>\n\n<ion-item>\n  <ion-label>Fecha Inicio</ion-label>\n  <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="filtro.fechainicio"></ion-datetime>\n</ion-item>\n\n<ion-item>\n  <ion-label>Fecha Fin</ion-label>\n  <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY"  [(ngModel)]="filtro.fechafin"></ion-datetime>\n</ion-item>\n\n\n\n\n\n<div style="height: 20px;"></div>\n\n\n</div>\n<ion-footer padding>\n	\n	<button round ion-button full (click)="buscar()">Buscar Registros</button>\n</ion-footer>'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/components/filtrohistorial/filtrohistorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], FiltrohistorialComponent);
    return FiltrohistorialComponent;
}());

//# sourceMappingURL=filtrohistorial.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_juegos_juegos__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_usuarios_usuarios__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_seleccionajugador_seleccionajugador__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_tablero_tablero__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_jugadores_jugadores__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_calificaciones_calificaciones__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_historial_historial__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_configuracion_configuracion__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_filtrohistorial_filtrohistorial__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_miperfil_miperfil__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_configuracion_configuracion__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_detallejuego_detallejuego__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_filtro_filtro__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_editarjugador_editarjugador__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_screen_orientation__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_calificajugador_calificajugador__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_ingresar_ingresar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_nuevojuego_nuevojuego__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_nuevojugador_nuevojugador__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_agregadetallejuego_agregadetallejuego__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_http__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng_click_outside__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_ng_click_outside__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__components_juegos_juegos__["a" /* JuegosComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_usuarios_usuarios__["a" /* UsuariosComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_jugadores_jugadores__["a" /* JugadoresComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_historial_historial__["a" /* HistorialComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_calificaciones_calificaciones__["a" /* CalificacionesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_configuracion_configuracion__["a" /* ConfiguracionComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_filtrohistorial_filtrohistorial__["a" /* FiltrohistorialComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_seleccionajugador_seleccionajugador__["a" /* SeleccionajugadorComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_miperfil_miperfil__["a" /* MiperfilComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_tablero_tablero__["a" /* TableroComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_filtro_filtro__["a" /* FiltroPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_calificajugador_calificajugador__["a" /* CalificajugadorPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_configuracion_configuracion__["a" /* ConfiguracionPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_nuevojuego_nuevojuego__["a" /* NuevojuegoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_ingresar_ingresar__["a" /* IngresarPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_agregadetallejuego_agregadetallejuego__["a" /* AgregadetallejuegoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_detallejuego_detallejuego__["a" /* DetallejuegoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_nuevojugador_nuevojugador__["a" /* NuevojugadorPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_editarjugador_editarjugador__["a" /* EditarjugadorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot({}),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/calificajugador/calificajugador.module#CalificajugadorPageModule', name: 'CalificajugadorPage', segment: 'calificajugador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agregadetallejuego/agregadetallejuego.module#AgregadetallejuegoPageModule', name: 'AgregadetallejuegoPage', segment: 'agregadetallejuego', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracion/configuracion.module#ConfiguracionPageModule', name: 'ConfiguracionPage', segment: 'configuracion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detallejuego/detallejuego.module#DetallejuegoPageModule', name: 'DetallejuegoPage', segment: 'detallejuego', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editarjugador/editarjugador.module#EditarjugadorPageModule', name: 'EditarjugadorPage', segment: 'editarjugador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filtro/filtro.module#FiltroPageModule', name: 'FiltroPage', segment: 'filtro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ingresar/ingresar.module#IngresarPageModule', name: 'IngresarPage', segment: 'ingresar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevojuego/nuevojuego.module#NuevojuegoPageModule', name: 'NuevojuegoPage', segment: 'nuevojuego', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevojugador/nuevojugador.module#NuevojugadorPageModule', name: 'NuevojugadorPage', segment: 'nuevojugador', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_29__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_31_ng_click_outside__["ClickOutsideModule"],
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot({}),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_calificajugador_calificajugador__["a" /* CalificajugadorPage */],
                __WEBPACK_IMPORTED_MODULE_8__components_juegos_juegos__["a" /* JuegosComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_usuarios_usuarios__["a" /* UsuariosComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_jugadores_jugadores__["a" /* JugadoresComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_historial_historial__["a" /* HistorialComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_calificaciones_calificaciones__["a" /* CalificacionesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_tablero_tablero__["a" /* TableroComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_configuracion_configuracion__["a" /* ConfiguracionComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_miperfil_miperfil__["a" /* MiperfilComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_filtrohistorial_filtrohistorial__["a" /* FiltrohistorialComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_seleccionajugador_seleccionajugador__["a" /* SeleccionajugadorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_juegos_juegos__["a" /* JuegosComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_filtro_filtro__["a" /* FiltroPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_nuevojuego_nuevojuego__["a" /* NuevojuegoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_ingresar_ingresar__["a" /* IngresarPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_agregadetallejuego_agregadetallejuego__["a" /* AgregadetallejuegoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_configuracion_configuracion__["a" /* ConfiguracionPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_detallejuego_detallejuego__["a" /* DetallejuegoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_nuevojugador_nuevojugador__["a" /* NuevojugadorPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_editarjugador_editarjugador__["a" /* EditarjugadorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_30__providers_data_data__["a" /* DataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_ingresar_ingresar__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_ingresar_ingresar__["a" /* IngresarPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_nuevojuego_nuevojuego__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_detallejuego_detallejuego__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_data__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
/**
 * Generated class for the JuegosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var JuegosComponent = /** @class */ (function () {
    function JuegosComponent(storage, dataprovider, http, modalCtrl, navCtrl) {
        var _this = this;
        this.storage = storage;
        this.dataprovider = dataprovider;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.club_id = 1;
        this.juegoeliminar = {};
        console.log('Hello JuegosComponent Component');
        this.text = 'Hello World';
        this.storage.get('usuario').then(function (val) {
            if (val) {
                _this.club_id = val.club;
                _this.juegos = dataprovider.listajuegos(_this.club_id);
            }
        });
    }
    JuegosComponent.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetallejuegoPage');
    };
    JuegosComponent.prototype.agregajuego = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_nuevojuego_nuevojuego__["a" /* NuevojuegoPage */], {});
        profileModal.onDidDismiss(function (data) {
            _this.juegos = _this.dataprovider.listajuegos(_this.club_id);
        });
        profileModal.present();
    };
    JuegosComponent.prototype.detalle = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_detallejuego_detallejuego__["a" /* DetallejuegoPage */], {
            juego: data,
        });
    };
    JuegosComponent.prototype.play = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], {
            play: data.Codigo,
        });
    };
    JuegosComponent.prototype.eliminar = function (data) {
        var _this = this;
        console.log(data);
        //this.dataprovider.eliminajuego(data.Codigo,this.club_id)
        this.juegoeliminar.dproceso = 3;
        this.juegoeliminar.dusuario = 1;
        this.juegoeliminar.ddescripcion = 1;
        console.log('http://comunica7.com/apirestsmartgoal/public/delete/juego/' + data.Codigo + '/' + this.club_id + '/1');
        //'/delete/juego/{dcodigo}/{dclub}/{dempresa}' :: ddescripcion,dusuario,dproceso
        this.http.put('http://comunica7.com/apirestsmartgoal/public/delete/juego/' + data.Codigo + '/' + this.club_id + '/1', this.juegoeliminar).subscribe(function (data) {
            _this.juegos = _this.dataprovider.listajuegos(_this.club_id);
        });
    };
    JuegosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'juegos',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/components/juegos/juegos.html"*/'  <ion-row>\n      <ion-col col-2 [navPush]="homePage">\n      <ion-icon name="add-circle" color=\'secondary\' style=\'font-size: 50px;\' (click)=\'agregajuego()\'></ion-icon>\n      </ion-col>\n\n      </ion-row>\n\n\n\n      <h4 *ngIf=\'juegos\'>Numero Juegos : {{(juegos| async)?.length}}</h4>\n      <ion-list>\n      <ion-item *ngFor=\'let j of juegos | async\' >\n      \n     \n \n      <h2>{{j.Descripcion}}</h2>\n\n      <button ion-button clear item-end (click)=\'play(j)\'>Play</button>\n      <button ion-button clear item-end (click)=\'detalle(j)\'>Detalle</button>\n\n      <button ion-button clear item-end (click)=\'eliminar(j)\'>Eliminar</button>\n\n\n\n      </ion-item>\n\n      \n\n    \n\n      </ion-list>\n\n'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/components/juegos/juegos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], JuegosComponent);
    return JuegosComponent;
}());

//# sourceMappingURL=juegos.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the UsuariosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var UsuariosComponent = /** @class */ (function () {
    function UsuariosComponent() {
        console.log('Hello UsuariosComponent Component');
        this.text = 'Hello World';
    }
    UsuariosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'usuarios',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/components/usuarios/usuarios.html"*/'      <div >\n\n      <ion-grid>\n\n      <ion-row>\n      <ion-col col-2>\n      <button ion-button color="dark"  round full (click)=\'cuentapersonal=true;usuariosdelclub=false;permisos=false\' >Cuenta Personal</button>\n      </ion-col>\n\n      <ion-col col-2>\n      <button ion-button color="dark" round full  (click)=\'usuariosdelclub=true;cuentapersonal=false;permisos=false\'>Usuarios del Club</button>\n      </ion-col>\n\n      <ion-col col-2>\n      <button ion-button color="dark" round full (click)=\'usuariosdelclub=false;cuentapersonal=false;permisos=true\'>Permisos</button>\n      </ion-col>\n      </ion-row>\n\n      </ion-grid>\n\n\n      <ion-grid *ngIf=\'usuariosdelclub\'>\n\n      <ion-row>\n      <ion-col col-2>\n      <ion-icon name="add-circle" color=\'secondary\' style=\'font-size: 50px;\'></ion-icon>\n      </ion-col>\n\n      </ion-row>\n\n\n      <ion-list>\n      <ion-item>\n      <ion-avatar item-start>\n      <img src="https://images.supersport.com/2015/6/Paolo-Guerrero-lookson-150625G300.jpg">\n      </ion-avatar>\n      <h2>Paolo Guerrero</h2>\n      <h3>Delantero</h3>\n      <p>Coquero rehabilitado</p>\n\n\n      <button ion-button clear item-end>Editar</button>\n      <button ion-button clear item-end>Habilitar</button>\n      <button ion-button clear item-end>Eliminar</button>\n\n\n      </ion-item>\n\n      <ion-item>\n      <ion-avatar item-start>\n      <img src="http://espndeportes-assets.espn.go.com/2003/photos2013/0213/a_cuevas_300.jpg">\n      </ion-avatar>\n      <h2>Cuevitas</h2>\n      <h3>Mediocampista</h3>\n      <p>Mediocampista</p>\n\n\n      <button ion-button clear item-end>Editar</button>\n      <button ion-button clear item-end>Habilitar</button>\n      <button ion-button clear item-end>Eliminar</button>\n\n\n\n      </ion-item>\n\n\n      <ion-item>\n      <ion-avatar item-start>\n      <img src="https://deportesimagenes.canalrcn.com/ImgDeportes/s3fs-public/gareca1_1.jpg">\n      </ion-avatar>\n      <h2>Gareca</h2>\n      <h3>Entrenador</h3>\n      <p>Argentino Loquito</p>\n\n      <button ion-button clear item-end>Editar</button>\n      <button ion-button clear item-end>Habilitar</button>\n      <button ion-button clear item-end>Eliminar</button>\n\n      </ion-item>\n\n      </ion-list>\n\n      </ion-grid>\n\n\n      <ion-list *ngIf=\'cuentapersonal\'>\n\n      <ion-item>\n      <ion-label floating>Nombre Completo</ion-label>\n      <ion-input type="text"  [(ngModel)]=\'inputtext\'></ion-input>\n      </ion-item>\n\n      <ion-item>\n      <ion-label floating>DNI</ion-label>\n      <ion-input type="text"  [(ngModel)]=\'inputtext\'></ion-input>\n      </ion-item>\n\n      <ion-item>\n      <ion-label floating>Telefono</ion-label>\n      <ion-input type="text"  [(ngModel)]=\'inputtext\'></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text"  [(ngModel)]=\'inputtext\'></ion-input>\n      </ion-item>\n\n      <ion-item>\n      <ion-label floating>Contraseña:</ion-label>\n      <ion-input type="password" #password></ion-input>\n      </ion-item>\n\n      <div padding>\n      <button  ion-button (click)="saveData()" item-left>Guardar</button>\n\n      </div>\n\n      </ion-list>\n\n\n      <ion-list *ngIf=\'permisos\'>\n\n\n      <ion-list-header>\n      Modulo Cuenta Personal\n      </ion-list-header>\n\n      <ion-item>\n\n      <ion-label>Editar informacion personal </ion-label>\n      <ion-toggle  color=\'dark\'></ion-toggle>\n      <ion-toggle  color=\'secondary\'></ion-toggle>\n      <ion-toggle  color=\'danger\'></ion-toggle>\n      </ion-item>\n\n\n      <ion-item>\n\n      <ion-label>Ver lista de juegos registrados </ion-label>\n      <ion-toggle  color=\'dark\'></ion-toggle>\n      <ion-toggle  color=\'secondary\'></ion-toggle>\n      <ion-toggle  color=\'danger\'></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n\n      <ion-label>Editar informacion personal </ion-label>\n      <ion-toggle  color=\'dark\'></ion-toggle>\n      <ion-toggle  color=\'secondary\'></ion-toggle>\n      <ion-toggle  color=\'danger\'></ion-toggle>\n      </ion-item>\n\n\n      <ion-list-header>\n      Modulo de usuarios del club deportivo\n      </ion-list-header>\n\n      <ion-item>\n\n      <ion-label>Editar informacion personal </ion-label>\n      <ion-toggle  color=\'dark\'></ion-toggle>\n      <ion-toggle  color=\'secondary\'></ion-toggle>\n      <ion-toggle  color=\'danger\'></ion-toggle>\n      </ion-item>\n\n\n      <ion-item>\n\n      <ion-label>Ver lista de juegos registrados </ion-label>\n      <ion-toggle  color=\'dark\'></ion-toggle>\n      <ion-toggle  color=\'secondary\'></ion-toggle>\n      <ion-toggle  color=\'danger\'></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n\n      <ion-label>Editar informacion personal </ion-label>\n      <ion-toggle  color=\'dark\'></ion-toggle>\n      <ion-toggle  color=\'secondary\'></ion-toggle>\n      <ion-toggle  color=\'danger\'></ion-toggle>\n      </ion-item>\n\n\n      </ion-list>\n\n\n      </div>'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/components/usuarios/usuarios.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], UsuariosComponent);
    return UsuariosComponent;
}());

//# sourceMappingURL=usuarios.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_nuevojugador_nuevojugador__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_editarjugador_editarjugador__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the JugadoresComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var JugadoresComponent = /** @class */ (function () {
    function JugadoresComponent(modalCtrl, dataprovider, http) {
        this.modalCtrl = modalCtrl;
        this.dataprovider = dataprovider;
        this.http = http;
        this.jugadores = this.dataprovider.traejugadores(1, "null");
    }
    JugadoresComponent.prototype.nuevojugador = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_nuevojugador_nuevojugador__["a" /* NuevojugadorPage */], {});
        profileModal.onDidDismiss(function (data) {
            _this.jugadores = _this.dataprovider.traejugadores(1, "null");
        });
        profileModal.present();
    };
    JugadoresComponent.prototype.editarjugador = function (data) {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_editarjugador_editarjugador__["a" /* EditarjugadorPage */], { 'jugador': data });
        profileModal.onDidDismiss(function (data) {
            _this.jugadores = _this.dataprovider.traejugadores(1, "null");
        });
        profileModal.present();
    };
    JugadoresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jugadores',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/components/jugadores/jugadores.html"*/'      <ion-grid >\n\n                  <ion-row>\n                  <ion-col col-2>\n                  <ion-icon name="add-circle" color=\'secondary\' style=\'font-size: 50px;\' (click)=\'nuevojugador()\'></ion-icon>\n                  </ion-col>\n\n                  </ion-row>\n\n                  <h4 *ngIf=\'jugadores\'>Numero Jugadores : {{(jugadores| async)?.length}}</h4>\n\n                  <ion-list>\n                        <ion-item *ngFor=\'let j of jugadores | async\' >\n                        \n                        \n                   \n                       \n                        <ion-row>\n\n                              <ion-col>{{j.Jugador}}</ion-col>\n                              <ion-col>Sexo : {{j.Sexo}} </ion-col>\n                              <ion-col>Peso :{{j.Peso}} Kg.</ion-col>\n                              <ion-col>Talla : {{j.Talla}} cm.</ion-col>\n                        </ion-row>\n\n                        \n\n                        <button ion-button clear item-end (click)=\'editarjugador(j)\'>Editar</button>\n                        \n                        <button ion-button clear item-end>Eliminar</button>\n\n\n                        </ion-item>\n\n                      \n                 \n\n                  </ion-list>\n\n      </ion-grid>'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/components/jugadores/jugadores.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], JugadoresComponent);
    return JugadoresComponent;
}());

//# sourceMappingURL=jugadores.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalificacionesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the CalificacionesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CalificacionesComponent = /** @class */ (function () {
    function CalificacionesComponent() {
        console.log('Hello CalificacionesComponent Component');
        this.text = 'Hello World';
    }
    CalificacionesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'calificaciones',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/components/calificaciones/calificaciones.html"*/'<!-- Generated template for the CalificacionesComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/components/calificaciones/calificaciones.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CalificacionesComponent);
    return CalificacionesComponent;
}());

//# sourceMappingURL=calificaciones.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_filtrohistorial_filtrohistorial__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HistorialComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HistorialComponent = /** @class */ (function () {
    function HistorialComponent(modalCtrl, storage, dataprovider) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.dataprovider = dataprovider;
        this.storage.get('usuario').then(function (val) {
            if (val) {
                _this.club_id = val.club;
                console.log('cofiifif', _this.club_id);
                _this.jugadores = _this.dataprovider.traejugadores(_this.club_id, "null");
            }
        });
        console.log('Hello HistorialComponent Component');
        this.text = 'Hello World';
    }
    HistorialComponent.prototype.presentModal = function (data) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_filtrohistorial_filtrohistorial__["a" /* FiltrohistorialComponent */], { 'jugador': data });
        modal.present();
    };
    HistorialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'historial',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/components/historial/historial.html"*/' \n\n    <ion-grid >\n\n                 \n\n                  <h4 *ngIf=\'jugadores\'>Numero Jugadores : {{(jugadores| async)?.length}}</h4>\n\n                  <ion-list>\n                        <ion-item *ngFor=\'let j of jugadores | async\' >\n                        \n                        \n                   \n                       \n                        <ion-row>\n                              <ion-col>{{j.Jugador}}</ion-col>\n                              <ion-col>Sexo : {{j.Sexo}} </ion-col>\n                              <ion-col>Peso :{{j.Peso}} Kg.</ion-col>\n                              <ion-col>Talla : {{j.Talla}} cm.</ion-col>\n                        </ion-row>\n\n                        \n\n                        <button ion-button clear item-end (click)=\'presentModal(j)\'>Ver Historial</button>\n                      \n\n                        </ion-item>\n\n                      \n                 \n\n                  </ion-list>\n\n\n\n      \n\n      </ion-grid>\n\n \n\n                 \n\n     '/*ion-inline-end:"/Users/xienciasdev/code/smart/src/components/historial/historial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */]])
    ], HistorialComponent);
    return HistorialComponent;
}());

//# sourceMappingURL=historial.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ConfiguracionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ConfiguracionComponent = /** @class */ (function () {
    function ConfiguracionComponent() {
        console.log('Hello ConfiguracionComponent Component');
        this.text = 'Hello World';
    }
    ConfiguracionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'configuracion',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/components/configuracion/configuracion.html"*/'<!-- Generated template for the ConfiguracionComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/components/configuracion/configuracion.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ConfiguracionComponent);
    return ConfiguracionComponent;
}());

//# sourceMappingURL=configuracion.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregadetallejuegoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AgregadetallejuegoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgregadetallejuegoPage = /** @class */ (function () {
    function AgregadetallejuegoPage(storage, http, navCtrl, navParams, view) {
        var _this = this;
        this.storage = storage;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.nuevodetalle = {};
        this.juego = navParams.get("juego");
        console.log('Juego..', this.juego);
        this.storage.get('usuario').then(function (val) {
            if (val) {
                _this.club_id = val.club;
            }
        });
    }
    AgregadetallejuegoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgregadetallejuegoPage');
    };
    //usp_add_juego_det '/add/juegodet' :: addjuego,addclub,addempresa,addarea,addtiro,addhinicio,addfin,addusuario
    AgregadetallejuegoPage.prototype.agregadetallejuego = function (data) {
        var _this = this;
        data.addclub = this.club_id;
        data.addjuego = this.juego.Codigo;
        data.addempresa = 1;
        data.addusuario = 1;
        data.addproceso = 1;
        data.addarea = 'A2';
        data.addtiro = '1';
        data.addhinicio = '05:00';
        data.addfin = '05:00';
        this.http.post('http://comunica7.com/apirestsmartgoal/public/add/juegodet', data)
            .subscribe(function (data) {
            console.log('ooo', data);
            _this.closeModal();
            //this.clubes =data
        }, function (error) {
        });
    };
    AgregadetallejuegoPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    AgregadetallejuegoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-agregadetallejuego',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/pages/agregadetallejuego/agregadetallejuego.html"*/'<!--\n  Generated template for the AgregadetallejuegoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Agregar Detalle Juego</ion-title>\n\n     <ion-icon name="close" color=\'secondary\' style=\'font-size: 50px; float:right;padding-right: 10px;\' (click)=\'closeModal()\'></ion-icon>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content padding>\n\n\n	 <form>\n      <ion-item>\n        <ion-label>Descripcion</ion-label>\n        <ion-input type="text" [(ngModel)]="nuevodetalle.adddescripcion" name="title"></ion-input>\n      </ion-item>\n\n      \n  <div style=\'height:20px;\'></div>\n\n	<button ion-button round (click)=\'agregadetallejuego(nuevodetalle)\'>Agregar</button>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/pages/agregadetallejuego/agregadetallejuego.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], AgregadetallejuegoPage);
    return AgregadetallejuegoPage;
}());

//# sourceMappingURL=agregadetallejuego.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuracion_configuracion__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calificajugador_calificajugador__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_seleccionajugador_seleccionajugador__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_miperfil_miperfil__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_tablero_tablero__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var HomePage = /** @class */ (function () {
    function HomePage(dataprovider, http, loadingCtrl, navParams, view, modalCtrl, alertCtrl, platform, toastCtrl, storage, renderer, navCtrl, events, screenOrientation) {
        var _this = this;
        this.dataprovider = dataprovider;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.view = view;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.renderer = renderer;
        this.navCtrl = navCtrl;
        this.events = events;
        this.screenOrientation = screenOrientation;
        this.currentColour = '#1abc9c';
        this.brushSize = 2;
        this.menujuego = false;
        this.index_numerorepetir = 0;
        this.colormemoria = 'light';
        this.activoarea = false;
        this.grabando = false;
        this.datajugador = {};
        this.jugadoresseleccionados = [];
        this.tipodetiro = [{ 'nombre': 'Saques de Esquina' }, { 'nombre': 'Chilena' }, { 'nombre': 'Volea' }, { 'nombre': 'Tijera' }, { 'nombre': 'Tiro Cruzado' }];
        this.indexcalificarandom = 0;
        this.indice_item = 0;
        this.activaverde = false;
        this.activaamarillo = false;
        this.activaazul = false;
        this.activarojo = false;
        this.activasecuencia = false;
        this.activarandom = false;
        this.activatiro = false;
        this.activaintermitente = false;
        this.activaplay = false;
        this.activaarea = false;
        this.pausajuego = false;
        this.indexjugador = 0;
        this.indice_item_extras = 0;
        this.tiempo = {};
        this.arrayjugadores = [{ 'nombre': 'Cuevita' },
            { 'nombre': 'Guerrero' },
            { 'nombre': 'Farfan' },
            { 'nombre': 'Tapia' },
            { 'nombre': 'Galese' },
            { 'nombre': 'Yotun' }];
        this.activapelota = false;
        this.array_secuencia = [];
        this.indexsecuencia = 0;
        this.secuencia_total = [{ 'nombre': 'Primera Secuencia', 'data': [] },
            { 'nombre': 'Segunda Secuencia', 'data': [] },
            { 'nombre': 'Tercera Secuencia', 'data': [] },
            { 'nombre': 'Cuarta Secuencia', 'data': [] }];
        this.primera_secuencia = [];
        this.segunda_secuencia = [];
        this.indexsecuenciacalificacion = 0;
        this.detallejuego = {};
        this.array_tiro_raso = ['F1', 'G1', 'H1', 'I1', 'J1', 'K1', 'L1', 'M1', 'N1', 'NN1', 'O1', 'P1', 'Q1'];
        this.array_primer_arco = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1', 'K1', 'L1', 'M1', 'N1', 'NN1', 'O1', 'P1', 'Q1', 'R1', 'S1', 'T1', 'U1', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8'];
        this.array_segundo_arco = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2', 'J2', 'K2', 'M2', 'N2', 'NN2', 'O2', 'P2', 'Q2', 'R2', 'S2', 'T2', 'U2', 'U3', 'U4', 'U5', 'U6', 'U7', 'U8'];
        this.array_tercer_arco = ['C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3', 'J3', 'K3', 'M3', 'N3', 'NN3', 'O3', 'P3', 'Q3', 'S3', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8'];
        this.array_cuarto_arco = ['D4', 'D5', 'D6', 'D7', 'D8', 'E4', 'F4', 'G4', 'H4', 'I4', 'J4', 'K4', 'M4', 'N4', 'NN4', 'O4', 'P4', 'Q4', 'R4', 'S4', 'S5', 'S6', 'S7', 'S8'];
        this.items = {};
        this.juegoguardado = navParams.get("play");
        this.editajuego = navParams.get("editajuego");
        this.storage.get('usuario').then(function (val) {
            if (val) {
                _this.club_id = val.club;
                /// VE un ITEM
                if (_this.editajuego) {
                    _this.array = JSON.parse(_this.editajuego.area);
                    _this.tiposdetiroseleccionados = _this.editajuego.TipoTiro;
                    console.log('this.juego...', _this.juego, _this.club_id, _this.editajuego.item);
                    _this.dataprovider.listajuegodetallejugador(_this.juego.Codigo, _this.club_id, _this.editajuego.item).subscribe(function (data) {
                        console.log('jejejeje', data);
                        _this.jugadoresseleccionados = data;
                        _this.jugadoresseleccionados = _this.jugadoresseleccionados.map(function (x) { return x.Jugador; });
                    });
                }
            }
        });
        console.log('this.editajuego', this.editajuego);
        dataprovider.listatiros().subscribe(function (data) {
            _this.tipodetiro = data;
        });
        console.log('juego guardado', this.juegoguardado);
        this.storage.get('usuario').then(function (val) {
            if (val) {
                _this.club_id = val.club;
                /// Trae Juego Guadrado
                if (_this.juegoguardado) {
                    dataprovider.listajuegosdetalle(_this.juegoguardado, _this.club_id).subscribe(function (data) {
                        console.log('lista de items...', data);
                        _this.items = data;
                        if (_this.items.length > 0) {
                            _this.seteaitem(_this.items[_this.indice_item]);
                        }
                    });
                }
                dataprovider.traejugadores(_this.club_id, "null").subscribe(function (data) {
                    console.log('jugadores...', data);
                    _this.arrayjugadores = data;
                });
            }
        });
        this.juego = navParams.get("juego");
        console.log('JUEGO.....', this.juego);
        ///Juego Guardado
        console.log('juego guardadao', this.juegoguardado);
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__configuracion_configuracion__["a" /* ConfiguracionPage */];
        this.ancho = screen.width;
        this.ancho = 1022;
        this.poste = 20;
        this.columna_izquierda = parseInt(this.ancho) * 9 / 100 + this.poste;
        this.columna_derecha = parseInt(this.ancho) * 9 / 100;
        this.height = screen.height;
        //header en el html
        this.height = 443;
        this.margin_alto = 5 * this.height / 100 + this.poste;
        if (this.juego) {
            this.margin_alto + 40;
        }
        this.alto_arco = 50 * this.height / 100 + this.poste;
        this.ancho_arco = this.ancho - this.columna_izquierda - this.columna_derecha - 2 * this.poste;
        var a = parseInt(this.ancho_arco) / 23;
        var h = parseInt(this.alto_arco) / 8;
        this.alto_pastilla = h;
        console.log('Alto de la pastilla :', h);
        this.array = [
            //PRIMERA FILA A
            { 'pastilla': 'A1', 'A': false, 'xin': this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': a, 'yfin': h, 'x': 1, 'y': 1 },
            { 'pastilla': 'A2', 'A': false, 'xin': this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': a, 'yfin': 2 * h, 'x': 1, 'y': 2 },
            { 'pastilla': 'A3', 'A': false, 'xin': this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': a, 'yfin': 3 * h, 'x': 1, 'y': 3 },
            { 'pastilla': 'A4', 'A': false, 'xin': this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': a, 'yfin': 4 * h, 'x': 1, 'y': 4 },
            { 'pastilla': 'A5', 'A': false, 'xin': this.columna_izquierda, 'yin': 5 * h + this.margin_alto, 'xfin': a, 'yfin': 5 * h, 'x': 1, 'y': 5 },
            { 'pastilla': 'A6', 'A': false, 'xin': this.columna_izquierda, 'yin': 6 * h + this.margin_alto, 'xfin': a, 'yfin': 6 * h, 'x': 1, 'y': 6 },
            { 'pastilla': 'A7', 'A': false, 'xin': this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': a, 'yfin': 7 * h, 'x': 1, 'y': 7 },
            { 'pastilla': 'A8', 'A': false, 'xin': this.columna_izquierda, 'yin': 8 * h + this.margin_alto, 'xfin': a, 'yfin': 8 * h, 'x': 1, 'y': 8 },
            //SEGUNDA  FILA B
            { 'pastilla': 'B1', 'A': false, 'xin': a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 2 * a, 'yfin': h, 'x': 2, 'y': 1 },
            { 'pastilla': 'B2', 'A': false, 'xin': a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 2 * a, 'yfin': 2 * h, 'x': 2, 'y': 2 },
            { 'pastilla': 'B3', 'A': false, 'xin': a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 2 * a, 'yfin': 3 * h, 'x': 2, 'y': 3 },
            { 'pastilla': 'B4', 'A': false, 'xin': a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 2 * a, 'yfin': 4 * h, 'x': 2, 'y': 4 },
            { 'pastilla': 'B5', 'A': false, 'xin': a + this.columna_izquierda, 'yin': 5 * h + this.margin_alto, 'xfin': 2 * a, 'yfin': 5 * h, 'x': 2, 'y': 5 },
            { 'pastilla': 'B6', 'A': false, 'xin': a + this.columna_izquierda, 'yin': 6 * h + this.margin_alto, 'xfin': 2 * a, 'yfin': 6 * h, 'x': 2, 'y': 6 },
            { 'pastilla': 'B7', 'A': false, 'xin': a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 2 * a, 'yfin': 7 * h, 'x': 2, 'y': 7 },
            { 'pastilla': 'B8', 'A': false, 'xin': a + this.columna_izquierda, 'yin': 8 * h + this.margin_alto, 'xfin': 2 * a, 'yfin': 8 * h, 'x': 2, 'y': 8 },
            //TERCERA FILA C
            { 'pastilla': 'C1', 'A': false, 'xin': 2 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 3 * a, 'yfin': h, 'x': 3, 'y': 1 },
            { 'pastilla': 'C2', 'A': false, 'xin': 2 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 3 * a, 'yfin': 2 * h, 'x': 3, 'y': 2 },
            { 'pastilla': 'C3', 'A': false, 'xin': 2 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 3 * a, 'yfin': 3 * h, 'x': 3, 'y': 3 },
            { 'pastilla': 'C4', 'A': false, 'xin': 2 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 3 * a, 'yfin': 4 * h, 'x': 3, 'y': 4 },
            { 'pastilla': 'C5', 'A': false, 'xin': 2 * a + this.columna_izquierda, 'yin': 5 * h + this.margin_alto, 'xfin': 3 * a, 'yfin': 5 * h, 'x': 3, 'y': 5 },
            { 'pastilla': 'C6', 'A': false, 'xin': 2 * a + this.columna_izquierda, 'yin': 6 * h + this.margin_alto, 'xfin': 3 * a, 'yfin': 6 * h, 'x': 3, 'y': 6 },
            { 'pastilla': 'C7', 'A': false, 'xin': 2 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 3 * a, 'yfin': 7 * h, 'x': 3, 'y': 7 },
            { 'pastilla': 'C8', 'A': false, 'xin': 2 * a + this.columna_izquierda, 'yin': 8 * h + this.margin_alto, 'xfin': 3 * a, 'yfin': 8 * h, 'x': 3, 'y': 8 },
            //CUARTA FILA D
            { 'pastilla': 'D1', 'A': false, 'xin': 3 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 4 * a, 'yfin': h, 'x': 4, 'y': 1 },
            { 'pastilla': 'D2', 'A': false, 'xin': 3 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 4 * a, 'yfin': 2 * h, 'x': 4, 'y': 2 },
            { 'pastilla': 'D3', 'A': false, 'xin': 3 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 4 * a, 'yfin': 3 * h, 'x': 4, 'y': 3 },
            { 'pastilla': 'D4', 'A': false, 'xin': 3 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 4 * a, 'yfin': 4 * h, 'x': 4, 'y': 4 },
            { 'pastilla': 'D5', 'A': false, 'xin': 3 * a + this.columna_izquierda, 'yin': 5 * h + this.margin_alto, 'xfin': 4 * a, 'yfin': 5 * h, 'x': 4, 'y': 5 },
            { 'pastilla': 'D6', 'A': false, 'xin': 3 * a + this.columna_izquierda, 'yin': 6 * h + this.margin_alto, 'xfin': 4 * a, 'yfin': 6 * h, 'x': 4, 'y': 6 },
            { 'pastilla': 'D7', 'A': false, 'xin': 3 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 4 * a, 'yfin': 7 * h, 'x': 4, 'y': 7 },
            { 'pastilla': 'D8', 'A': false, 'xin': 3 * a + this.columna_izquierda, 'yin': 8 * h + this.margin_alto, 'xfin': 4 * a, 'yfin': 8 * h, 'x': 4, 'y': 8 },
            //  quinta filaa... E.....
            { 'pastilla': 'E1', 'A': false, 'xin': 4 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 5 * a, 'yfin': h, 'x': 5, 'y': 1 },
            { 'pastilla': 'E2', 'A': false, 'xin': 4 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 5 * a, 'yfin': 2 * h, 'x': 5, 'y': 2 },
            { 'pastilla': 'E3', 'A': false, 'xin': 4 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 5 * a, 'yfin': 3 * h, 'x': 5, 'y': 3 },
            { 'pastilla': 'E4', 'A': false, 'xin': 4 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 5 * a, 'yfin': 4 * h, 'x': 5, 'y': 4 },
            //quinta filaa... f.....
            { 'tiroraso': false, 'pastilla': 'F1', 'A': false, 'xin': 5 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 6 * a, 'yfin': h, 'x': 6, 'y': 1 },
            { 'pastilla': 'F2', 'A': false, 'xin': 5 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 6 * a, 'yfin': 2 * h, 'x': 6, 'y': 2 },
            { 'pastilla': 'F3', 'A': false, 'xin': 5 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 6 * a, 'yfin': 3 * h, 'x': 6, 'y': 3 },
            { 'pastilla': 'F4', 'A': false, 'xin': 5 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 6 * a, 'yfin': 4 * h, 'x': 6, 'y': 4 },
            //quinta filaa... g.....
            { 'tiroraso': false, 'pastilla': 'G1', 'A': false, 'xin': 6 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 7 * a, 'yfin': h, 'x': 7, 'y': 1 },
            { 'pastilla': 'G2', 'A': false, 'xin': 6 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 7 * a, 'yfin': 2 * h, 'x': 7, 'y': 2 },
            { 'pastilla': 'G3', 'A': false, 'xin': 6 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 7 * a, 'yfin': 3 * h, 'x': 7, 'y': 3 },
            { 'pastilla': 'G4', 'A': false, 'xin': 6 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 7 * a, 'yfin': 4 * h, 'x': 7, 'y': 4 },
            //quinta filaa... h.....
            { 'tiroraso': false, 'pastilla': 'H1', 'A': false, 'xin': 7 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 8 * a, 'yfin': h, 'x': 8, 'y': 1 },
            { 'pastilla': 'H2', 'A': false, 'xin': 7 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 8 * a, 'yfin': 2 * h, 'x': 8, 'y': 2 },
            { 'pastilla': 'H3', 'A': false, 'xin': 7 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 8 * a, 'yfin': 3 * h, 'x': 8, 'y': 3 },
            { 'pastilla': 'H4', 'A': false, 'xin': 7 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 8 * a, 'yfin': 4 * h, 'x': 8, 'y': 4 },
            //quinta filaa... I.....
            { 'tiroraso': false, 'pastilla': 'I1', 'A': false, 'xin': 8 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 9 * a, 'yfin': h, 'x': 9, 'y': 1 },
            { 'pastilla': 'I2', 'A': false, 'xin': 8 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 9 * a, 'yfin': 2 * h, 'x': 9, 'y': 2 },
            { 'pastilla': 'I3', 'A': false, 'xin': 8 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 9 * a, 'yfin': 3 * h, 'x': 9, 'y': 3 },
            { 'pastilla': 'I4', 'A': false, 'xin': 8 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 9 * a, 'yfin': 4 * h, 'x': 9, 'y': 4 },
            //quinta filaa... J.....
            { 'tiroraso': false, 'pastilla': 'J1', 'A': false, 'xin': 9 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 10 * a, 'yfin': h, 'x': 10, 'y': 1 },
            { 'pastilla': 'J2', 'A': false, 'xin': 9 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 10 * a, 'yfin': 2 * h, 'x': 10, 'y': 2 },
            { 'pastilla': 'J3', 'A': false, 'xin': 9 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 10 * a, 'yfin': 3 * h, 'x': 10, 'y': 3 },
            { 'pastilla': 'J4', 'A': false, 'xin': 9 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 10 * a, 'yfin': 4 * h, 'x': 10, 'y': 4 },
            //quinta filaa... .k....
            { 'tiroraso': false, 'pastilla': 'K1', 'A': false, 'xin': 10 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 11 * a, 'yfin': h, 'x': 11, 'y': 1 },
            { 'pastilla': 'K2', 'A': false, 'xin': 10 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 11 * a, 'yfin': 2 * h, 'x': 11, 'y': 2 },
            { 'pastilla': 'K3', 'A': false, 'xin': 10 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 11 * a, 'yfin': 3 * h, 'x': 11, 'y': 3 },
            { 'pastilla': 'K4', 'A': false, 'xin': 10 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 11 * a, 'yfin': 4 * h, 'x': 11, 'y': 4 },
            //quinta filaa... L.....
            { 'tiroraso': false, 'pastilla': 'L1', 'A': false, 'xin': 11 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 12 * a, 'yfin': h, 'x': 12, 'y': 1 },
            { 'pastilla': 'L2', 'A': false, 'xin': 11 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 12 * a, 'yfin': 2 * h, 'x': 12, 'y': 2 },
            { 'pastilla': 'L3', 'A': false, 'xin': 11 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 12 * a, 'yfin': 3 * h, 'x': 12, 'y': 3 },
            { 'pastilla': 'L4', 'A': false, 'xin': 11 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 12 * a, 'yfin': 4 * h, 'x': 12, 'y': 4 },
            //quinta filaa... M.....
            { 'tiroraso': false, 'pastilla': 'M1', 'A': false, 'xin': 12 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 13 * a, 'yfin': h, 'x': 13, 'y': 1 },
            { 'pastilla': 'M2', 'A': false, 'xin': 12 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 13 * a, 'yfin': 2 * h, 'x': 13, 'y': 2 },
            { 'pastilla': 'M3', 'A': false, 'xin': 12 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 13 * a, 'yfin': 3 * h, 'x': 13, 'y': 3 },
            { 'pastilla': 'M4', 'A': false, 'xin': 12 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 13 * a, 'yfin': 4 * h, 'x': 13, 'y': 4 },
            //quinta filaa... N.....
            { 'tiroraso': false, 'pastilla': 'N1', 'A': false, 'xin': 13 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 14 * a, 'yfin': h, 'x': 14, 'y': 1 },
            { 'pastilla': 'N2', 'A': false, 'xin': 13 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 14 * a, 'yfin': 2 * h, 'x': 14, 'y': 2 },
            { 'pastilla': 'N3', 'A': false, 'xin': 13 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 14 * a, 'yfin': 3 * h, 'x': 14, 'y': 3 },
            { 'pastilla': 'N4', 'A': false, 'xin': 13 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 14 * a, 'yfin': 4 * h, 'x': 14, 'y': 4 },
            //quinta filaa... NN.....
            { 'tiroraso': false, 'pastilla': 'NN1', 'A': false, 'xin': 14 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 15 * a, 'yfin': h, 'x': 15, 'y': 1 },
            { 'pastilla': 'NN2', 'A': false, 'xin': 14 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 15 * a, 'yfin': 2 * h, 'x': 15, 'y': 2 },
            { 'pastilla': 'NN3', 'A': false, 'xin': 14 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 15 * a, 'yfin': 3 * h, 'x': 15, 'y': 3 },
            { 'pastilla': 'NN4', 'A': false, 'xin': 14 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 15 * a, 'yfin': 4 * h, 'x': 15, 'y': 4 },
            //quinta filaa... O.....
            { 'tiroraso': false, 'pastilla': 'O1', 'A': false, 'xin': 15 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 16 * a, 'yfin': h, 'x': 16, 'y': 1 },
            { 'pastilla': 'O2', 'A': false, 'xin': 15 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 16 * a, 'yfin': 2 * h, 'x': 16, 'y': 2 },
            { 'pastilla': 'O3', 'A': false, 'xin': 15 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 16 * a, 'yfin': 3 * h, 'x': 16, 'y': 3 },
            { 'pastilla': 'O4', 'A': false, 'xin': 15 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 16 * a, 'yfin': 4 * h, 'x': 16, 'y': 4 },
            //quinta filaa... P.....
            { 'tiroraso': false, 'pastilla': 'P1', 'A': false, 'xin': 16 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 17 * a, 'yfin': h, 'x': 17, 'y': 1 },
            { 'pastilla': 'P2', 'A': false, 'xin': 16 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 17 * a, 'yfin': 2 * h, 'x': 17, 'y': 2 },
            { 'pastilla': 'P3', 'A': false, 'xin': 16 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 17 * a, 'yfin': 3 * h, 'x': 17, 'y': 3 },
            { 'pastilla': 'P4', 'A': false, 'xin': 16 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 17 * a, 'yfin': 4 * h, 'x': 17, 'y': 4 },
            //quinta filaa... Q.....
            { 'tiroraso': false, 'pastilla': 'Q1', 'A': false, 'xin': 17 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 18 * a, 'yfin': h, 'x': 18, 'y': 1 },
            { 'pastilla': 'Q2', 'A': false, 'xin': 17 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 18 * a, 'yfin': 2 * h, 'x': 18, 'y': 2 },
            { 'pastilla': 'Q3', 'A': false, 'xin': 17 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 18 * a, 'yfin': 3 * h, 'x': 18, 'y': 3 },
            { 'pastilla': 'Q4', 'A': false, 'xin': 17 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 18 * a, 'yfin': 4 * h, 'x': 18, 'y': 4 },
            //quinta filaa... R.....
            { 'pastilla': 'R1', 'A': false, 'xin': 18 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 19 * a, 'yfin': h, 'x': 19, 'y': 1 },
            { 'pastilla': 'R2', 'A': false, 'xin': 18 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 19 * a, 'yfin': 2 * h, 'x': 19, 'y': 2 },
            { 'pastilla': 'R3', 'A': false, 'xin': 18 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 19 * a, 'yfin': 3 * h, 'x': 19, 'y': 3 },
            { 'pastilla': 'R4', 'A': false, 'xin': 18 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 19 * a, 'yfin': 4 * h, 'x': 19, 'y': 4 },
            //quinta filaa... S.....
            { 'pastilla': 'S1', 'A': false, 'xin': 19 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 20 * a, 'yfin': h, 'x': 20, 'y': 1 },
            { 'pastilla': 'S2', 'A': false, 'xin': 19 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 20 * a, 'yfin': 2 * h, 'x': 20, 'y': 2 },
            { 'pastilla': 'S3', 'A': false, 'xin': 19 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 20 * a, 'yfin': 3 * h, 'x': 20, 'y': 3 },
            { 'pastilla': 'S4', 'A': false, 'xin': 19 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 20 * a, 'yfin': 4 * h, 'x': 20, 'y': 4 },
            { 'pastilla': 'S5', 'A': false, 'xin': 19 * a + this.columna_izquierda, 'yin': 5 * h + this.margin_alto, 'xfin': 20 * a, 'yfin': 5 * h, 'x': 20, 'y': 5 },
            { 'pastilla': 'S6', 'A': false, 'xin': 19 * a + this.columna_izquierda, 'yin': 6 * h + this.margin_alto, 'xfin': 20 * a, 'yfin': 6 * h, 'x': 20, 'y': 6 },
            { 'pastilla': 'S7', 'A': false, 'xin': 19 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 20 * a, 'yfin': 7 * h, 'x': 20, 'y': 7 },
            { 'pastilla': 'S8', 'A': false, 'xin': 19 * a + this.columna_izquierda, 'yin': 8 * h + this.margin_alto, 'xfin': 20 * a, 'yfin': 8 * h, 'x': 20, 'y': 8 },
            //quinta filaa... S.....
            { 'pastilla': 'T1', 'A': false, 'xin': 20 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 21 * a, 'yfin': h, 'x': 21, 'y': 1 },
            { 'pastilla': 'T2', 'A': false, 'xin': 20 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 21 * a, 'yfin': 2 * h, 'x': 21, 'y': 2 },
            { 'pastilla': 'T3', 'A': false, 'xin': 20 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 21 * a, 'yfin': 3 * h, 'x': 21, 'y': 3 },
            { 'pastilla': 'T4', 'A': false, 'xin': 20 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 21 * a, 'yfin': 4 * h, 'x': 21, 'y': 4 },
            { 'pastilla': 'T5', 'A': false, 'xin': 20 * a + this.columna_izquierda, 'yin': 5 * h + this.margin_alto, 'xfin': 21 * a, 'yfin': 5 * h, 'x': 21, 'y': 5 },
            { 'pastilla': 'T6', 'A': false, 'xin': 20 * a + this.columna_izquierda, 'yin': 6 * h + this.margin_alto, 'xfin': 21 * a, 'yfin': 6 * h, 'x': 21, 'y': 6 },
            { 'pastilla': 'T7', 'A': false, 'xin': 20 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 21 * a, 'yfin': 7 * h, 'x': 21, 'y': 7 },
            { 'pastilla': 'T8', 'A': false, 'xin': 20 * a + this.columna_izquierda, 'yin': 8 * h + this.margin_alto, 'xfin': 21 * a, 'yfin': 8 * h, 'x': 21, 'y': 8 },
            //quinta filaa... T.....
            { 'pastilla': 'U1', 'A': false, 'xin': 21 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 22 * a, 'yfin': h, 'x': 22, 'y': 1 },
            { 'pastilla': 'U2', 'A': false, 'xin': 21 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 22 * a, 'yfin': 2 * h, 'x': 22, 'y': 2 },
            { 'pastilla': 'U3', 'A': false, 'xin': 21 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 22 * a, 'yfin': 3 * h, 'x': 22, 'y': 3 },
            { 'pastilla': 'U4', 'A': false, 'xin': 21 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 22 * a, 'yfin': 4 * h, 'x': 22, 'y': 4 },
            { 'pastilla': 'U5', 'A': false, 'xin': 21 * a + this.columna_izquierda, 'yin': 5 * h + this.margin_alto, 'xfin': 22 * a, 'yfin': 5 * h, 'x': 22, 'y': 5 },
            { 'pastilla': 'U6', 'A': false, 'xin': 21 * a + this.columna_izquierda, 'yin': 6 * h + this.margin_alto, 'xfin': 22 * a, 'yfin': 6 * h, 'x': 22, 'y': 6 },
            { 'pastilla': 'U7', 'A': false, 'xin': 21 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 22 * a, 'yfin': 7 * h, 'x': 22, 'y': 7 },
            { 'pastilla': 'U8', 'A': false, 'xin': 21 * a + this.columna_izquierda, 'yin': 8 * h + this.margin_alto, 'xfin': 22 * a, 'yfin': 8 * h, 'x': 22, 'y': 8 },
            //quinta filaa... V.....
            { 'pastilla': 'V1', 'A': false, 'xin': 22 * a + this.columna_izquierda, 'yin': h + this.margin_alto, 'xfin': 23 * a, 'yfin': h, 'x': 23, 'y': 1 },
            { 'pastilla': 'V2', 'A': false, 'xin': 22 * a + this.columna_izquierda, 'yin': 2 * h + this.margin_alto, 'xfin': 23 * a, 'yfin': 2 * h, 'x': 23, 'y': 2 },
            { 'pastilla': 'V3', 'A': false, 'xin': 22 * a + this.columna_izquierda, 'yin': 3 * h + this.margin_alto, 'xfin': 23 * a, 'yfin': 3 * h, 'x': 23, 'y': 3 },
            { 'pastilla': 'V4', 'A': false, 'xin': 22 * a + this.columna_izquierda, 'yin': 4 * h + this.margin_alto, 'xfin': 23 * a, 'yfin': 4 * h, 'x': 23, 'y': 4 },
            { 'pastilla': 'V5', 'A': false, 'xin': 22 * a + this.columna_izquierda, 'yin': 5 * h + this.margin_alto, 'xfin': 23 * a, 'yfin': 5 * h, 'x': 23, 'y': 5 },
            { 'pastilla': 'V6', 'A': false, 'xin': 22 * a + this.columna_izquierda, 'yin': 6 * h + this.margin_alto, 'xfin': 23 * a, 'yfin': 6 * h, 'x': 23, 'y': 6 },
            { 'pastilla': 'V7', 'A': false, 'xin': 22 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 23 * a, 'yfin': 7 * h, 'x': 23, 'y': 7 },
            { 'pastilla': 'V8', 'A': false, 'xin': 22 * a + this.columna_izquierda, 'yin': 8 * h + this.margin_alto, 'xfin': 23 * a, 'yfin': 8 * h, 'x': 23, 'y': 8 },
            ////Tiro Raso..
            { 'pastilla': 'E7', 'A': false, 'xin': 4 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 5 * a, 'yfin': 7 * h, 'x': 5, 'y': 7 },
            { 'pastilla': 'F7', 'A': false, 'xin': 5 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 6 * a, 'yfin': 7 * h, 'x': 6, 'y': 7 },
            { 'pastilla': 'G7', 'A': false, 'xin': 6 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 7 * a, 'yfin': 7 * h, 'x': 7, 'y': 7 },
            { 'pastilla': 'H7', 'A': false, 'xin': 7 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 8 * a, 'yfin': 7 * h, 'x': 8, 'y': 7 },
            { 'pastilla': 'I7', 'A': false, 'xin': 8 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 9 * a, 'yfin': 7 * h, 'x': 9, 'y': 7 },
            { 'pastilla': 'J7', 'A': false, 'xin': 9 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 10 * a, 'yfin': 7 * h, 'x': 10, 'y': 7 },
            { 'pastilla': 'K7', 'A': false, 'xin': 10 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 11 * a, 'yfin': 7 * h, 'x': 11, 'y': 7 },
            { 'pastilla': 'L7', 'A': false, 'xin': 11 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 12 * a, 'yfin': 7 * h, 'x': 12, 'y': 7 },
            { 'pastilla': 'M7', 'A': false, 'xin': 12 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 13 * a, 'yfin': 7 * h, 'x': 13, 'y': 7 },
            { 'pastilla': 'N7', 'A': false, 'xin': 13 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 14 * a, 'yfin': 7 * h, 'x': 14, 'y': 7 },
            { 'pastilla': 'NN7', 'A': false, 'xin': 14 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 15 * a, 'yfin': 7 * h, 'x': 15, 'y': 7 },
            { 'pastilla': 'O7', 'A': false, 'xin': 15 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 16 * a, 'yfin': 7 * h, 'x': 16, 'y': 7 },
            { 'pastilla': 'P7', 'A': false, 'xin': 16 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 17 * a, 'yfin': 7 * h, 'x': 17, 'y': 7 },
            { 'pastilla': 'Q7', 'A': false, 'xin': 17 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 18 * a, 'yfin': 7 * h, 'x': 18, 'y': 7 },
            { 'pastilla': 'R7', 'A': false, 'xin': 18 * a + this.columna_izquierda, 'yin': 7 * h + this.margin_alto, 'xfin': 19 * a, 'yfin': 7 * h, 'x': 19, 'y': 7 },
        ];
        this.storage.set('array_secuencia', this.array);
        this.array_vacio = this.array;
        this.availableColours = [
            '#1abc9c',
            '#3498db',
            '#9b59b6',
            '#e67e22',
            '#e74c3c'
        ];
        this.events.publish('user:created', 'user', Date.now());
    }
    HomePage.prototype.arrastra = function (data) {
        this.lastX = data.touches[0].pageX;
        this.lastY = data.touches[0].pageY;
        console.log('arrastra...', this.lastY);
        //if( this.activoarea==true || this.activasecuencia==true  || this.activatiro==true ){
        if (this.lastY <= 420 && this.activatiro == false) {
            this.sacaletra(this.Xi, this.Yi, this.lastX, this.lastY);
        }
    };
    HomePage.prototype.mostrar_hora = function () {
        this.now = new Date();
        console.log(this.clock.getHours());
        console.log(this.clock.getMinutes() + 60 - this.now.getMinutes());
        console.log(this.clock.getSeconds() + 60 - this.now.getSeconds());
    };
    HomePage.prototype.pintarandomverde = function () {
        var _this = this;
        this.limpia();
        var sec = this.primer_reloj.split(':');
        this.duracion = parseInt(sec[2]);
        var timerId = setInterval(function () {
            _this.duracion = _this.duracion - 1;
            var aleatorio = Math.round(Math.random() * 20);
            console.log(_this.array_primer_arco[aleatorio]);
            _this.array.find(function (el) { return el.pastilla === _this.array_primer_arco[aleatorio]; }).A = true;
        }, 1000);
        setTimeout(function () { clearInterval(timerId); }, this.duracion * 1000);
    };
    HomePage.prototype.pintarandomamarillo = function () {
        var _this = this;
        console.log('data....');
        this.limpia();
        var sec = this.primer_reloj.split(':');
        this.duracion = parseInt(sec[2]);
        var timerId = setInterval(function () {
            _this.duracion = _this.duracion - 1;
            var aleatorio = Math.round(Math.random() * 20);
            console.log(_this.array_segundo_arco[aleatorio]);
            _this.array.find(function (el) { return el.pastilla === _this.array_segundo_arco[aleatorio]; }).A = true;
            //this.array[aleatorio].A = true
        }, 1000);
        setTimeout(function () { clearInterval(timerId); }, this.duracion * 1000);
    };
    HomePage.prototype.pintarandomazul = function () {
        var _this = this;
        console.log('data....');
        this.limpia();
        var sec = this.primer_reloj.split(':');
        this.duracion = parseInt(sec[2]);
        var timerId = setInterval(function () {
            _this.duracion = _this.duracion - 1;
            var aleatorio = Math.round(Math.random() * 20);
            console.log(_this.array_tercer_arco[aleatorio]);
            _this.array.find(function (el) { return el.pastilla === _this.array_tercer_arco[aleatorio]; }).A = true;
            //this.array[aleatorio].A = true
        }, 1000);
        setTimeout(function () { clearInterval(timerId); }, this.duracion * 1000);
    };
    HomePage.prototype.pintarandorojo = function () {
        var _this = this;
        this.limpia();
        var sec = this.primer_reloj.split(':');
        this.duracion = parseInt(sec[2]);
        var timerId = setInterval(function () {
            _this.duracion = _this.duracion - 1;
            var aleatorio = Math.round(Math.random() * 20);
            console.log(_this.array_cuarto_arco[aleatorio]);
            _this.array.find(function (el) { return el.pastilla === _this.array_cuarto_arco[aleatorio]; }).A = true;
            //this.array[aleatorio].A = true
        }, 1000);
        setTimeout(function () { clearInterval(timerId); }, this.duracion * 1000);
    };
    HomePage.prototype.pintaarcoverde = function () {
        this.limpia();
        if (this.activaverde == false) {
            this.array[0]['A'] = true;
            this.array[1]['A'] = true;
            this.array[2]['A'] = true;
            this.array[3]['A'] = true;
            this.array[4]['A'] = true;
            this.array[5]['A'] = true;
            this.array[6]['A'] = true;
            this.array[7]['A'] = true;
            this.array[8]['A'] = true;
            this.array[16]['A'] = true;
            this.array[24]['A'] = true;
            this.array[32]['A'] = true;
            this.array[36]['A'] = true;
            this.array[40]['A'] = true;
            this.array[44]['A'] = true;
            this.array[48]['A'] = true;
            this.array[52]['A'] = true;
            this.array[56]['A'] = true;
            this.array[60]['A'] = true;
            this.array[64]['A'] = true;
            this.array[68]['A'] = true;
            this.array[72]['A'] = true;
            this.array[76]['A'] = true;
            this.array[80]['A'] = true;
            this.array[84]['A'] = true;
            this.array[88]['A'] = true;
            this.array[92]['A'] = true;
            this.array[100]['A'] = true;
            this.array[108]['A'] = true;
            this.array[116]['A'] = true;
            this.array[117]['A'] = true;
            this.array[118]['A'] = true;
            this.array[119]['A'] = true;
            this.array[120]['A'] = true;
            this.array[121]['A'] = true;
            this.array[122]['A'] = true;
            this.array[123]['A'] = true;
            this.activaverde = true;
        }
        else {
            this.limpia();
            this.activaverde = false;
        }
    };
    HomePage.prototype.pintaamarillo = function () {
        this.limpia();
        if (this.activaamarillo == false) {
            this.array[9]['A'] = true;
            this.array[10]['A'] = true;
            this.array[11]['A'] = true;
            this.array[12]['A'] = true;
            this.array[13]['A'] = true;
            this.array[14]['A'] = true;
            this.array[15]['A'] = true;
            this.array[17]['A'] = true;
            this.array[25]['A'] = true;
            this.array[33]['A'] = true;
            this.array[37]['A'] = true;
            this.array[41]['A'] = true;
            this.array[45]['A'] = true;
            this.array[49]['A'] = true;
            this.array[53]['A'] = true;
            this.array[57]['A'] = true;
            this.array[61]['A'] = true;
            this.array[65]['A'] = true;
            this.array[69]['A'] = true;
            this.array[73]['A'] = true;
            this.array[77]['A'] = true;
            this.array[81]['A'] = true;
            this.array[85]['A'] = true;
            this.array[89]['A'] = true;
            this.array[93]['A'] = true;
            this.array[101]['A'] = true;
            this.array[109]['A'] = true;
            this.array[110]['A'] = true;
            this.array[111]['A'] = true;
            this.array[112]['A'] = true;
            this.array[113]['A'] = true;
            this.array[114]['A'] = true;
            this.array[115]['A'] = true;
            this.activaamarillo = true;
        }
        else {
            this.limpia();
            this.activaamarillo = false;
        }
    };
    HomePage.prototype.handlem = function (data) {
        this.letra = data;
    };
    HomePage.prototype.pintaazul = function () {
        this.limpia();
        if (this.activaazul == false) {
            this.array[18]['A'] = true;
            this.array[19]['A'] = true;
            this.array[20]['A'] = true;
            this.array[21]['A'] = true;
            this.array[22]['A'] = true;
            this.array[23]['A'] = true;
            this.array[26]['A'] = true;
            this.array[34]['A'] = true;
            this.array[38]['A'] = true;
            this.array[42]['A'] = true;
            this.array[46]['A'] = true;
            this.array[50]['A'] = true;
            this.array[54]['A'] = true;
            this.array[58]['A'] = true;
            this.array[62]['A'] = true;
            this.array[66]['A'] = true;
            this.array[70]['A'] = true;
            this.array[74]['A'] = true;
            this.array[78]['A'] = true;
            this.array[82]['A'] = true;
            this.array[86]['A'] = true;
            this.array[90]['A'] = true;
            this.array[94]['A'] = true;
            this.array[102]['A'] = true;
            this.array[103]['A'] = true;
            this.array[104]['A'] = true;
            this.array[105]['A'] = true;
            this.array[106]['A'] = true;
            this.array[107]['A'] = true;
            this.activaazul = true;
        }
        else {
            this.limpia();
            this.activaazul = false;
        }
    };
    HomePage.prototype.pintarojo = function () {
        this.limpia();
        if (this.activarojo == false) {
            this.array[27]['A'] = true;
            this.array[28]['A'] = true;
            this.array[29]['A'] = true;
            this.array[30]['A'] = true;
            this.array[31]['A'] = true;
            this.array[35]['A'] = true;
            this.array[39]['A'] = true;
            this.array[43]['A'] = true;
            this.array[47]['A'] = true;
            this.array[51]['A'] = true;
            this.array[55]['A'] = true;
            this.array[59]['A'] = true;
            this.array[63]['A'] = true;
            this.array[67]['A'] = true;
            this.array[71]['A'] = true;
            this.array[75]['A'] = true;
            this.array[79]['A'] = true;
            this.array[83]['A'] = true;
            this.array[87]['A'] = true;
            this.array[91]['A'] = true;
            this.array[95]['A'] = true;
            this.array[96]['A'] = true;
            this.array[97]['A'] = true;
            this.array[98]['A'] = true;
            this.array[99]['A'] = true;
            this.activarojo = true;
        }
        else {
            this.limpia();
            this.activarojo = false;
        }
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.clock = new Date('2018-02-01 5:05:00');
        this.primer_reloj = '00:00:02';
        this.segundo_reloj = '00:00:05';
        this.grabando = false;
        this.enejecucion = false;
        this.indexjugador = 0;
        this.estado_jugador = '';
        console.log('ARRAY', this.array);
    };
    HomePage.prototype.secuencia = function () {
        this.agregatoast('Funcion SECUENCIA, activa grupos de areas');
        this.limpia();
        this.limpiatiroraso();
        //this.secuencia_total=[]
        this.activasecuencia = true;
        for (var i = 0; i < this.indexsecuencia; i++) {
            this.storage.remove('secuencia' + i);
        }
        this.activoarea = false;
        this.activarandom = false;
        this.activatiro = false;
    };
    HomePage.prototype.parasecuencia = function () {
        this.activasecuencia = false;
        this.indexsecuencia = 0;
        if (this.activatiro == true) {
            this.limpiatiroraso();
        }
        for (var i = 0; i < this.indexsecuencia; i++) {
            this.storage.remove('secuencia' + i);
        }
    };
    HomePage.prototype.randompinta = function () {
        // Saca pastilla aletoria
        var pastilla = Math.round(Math.random() * 137);
        if (this.array[pastilla].A == false) {
            this.array[pastilla].A = true;
        }
        else {
            if (pastilla + 1 < 138) {
                this.array[pastilla + 1].A = true;
            }
        }
        if (this.duracion == 0) {
            this.randomevaluacion();
        }
    };
    HomePage.prototype.randomevaluacion = function () {
        this.estado_jugador = 'En Evaluacion';
        this.duracion = this.duracion_segundo_reloj;
        this.limpia();
        //let timerId = setInterval(() => { this.duracion=this.duracion-1 }, 1000);
        //setTimeout(() => { clearInterval(timerId);  }, this.duracion*1000);
    };
    HomePage.prototype.random = function () {
        var _this = this;
        if (this.jugadoresseleccionados.length == this.indexjugador) {
            this.jugadoresseleccionados = [];
            this.activapelota = false;
            this.estado_jugador = 'Preparacion';
            this.activaplay = false;
            this.activarandom = false;
            this.indexjugador = 0;
        }
        if (this.jugadoresseleccionados.length == 0) {
            this.agregatoast('Seleccione primero los jugadores');
        }
        else {
            this.agregatoast('Funcion RANDOM, selecciona sectores aleatoriamente por el sistema');
            this.limpia();
            this.limpiatiroraso();
            var sec = this.primer_reloj.split(':');
            this.duracion = parseInt(sec[2]);
            this.secuencia_random = new Array(this.duracion);
            console.log('secuencia random', this.secuencia_random);
            //this.duracion =200
            var timerId_1 = setInterval(function () {
                _this.randompinta();
                _this.duracion = _this.duracion - 1;
            }, 1000);
            setTimeout(function () { clearInterval(timerId_1); _this.randomevaluacion(); }, this.duracion * 1000);
            this.activarandom = true;
            this.activoarea = false;
            this.activaintermitente = false;
            this.activasecuencia = false;
            this.grabando = false;
            this.activatiro = false;
        }
    };
    HomePage.prototype.intermitente = function () {
        this.activaintermitente = true;
        this.activoarea = false;
        this.activasecuencia = false;
        this.activarandom = false;
        this.activatiro = false;
    };
    HomePage.prototype.paraintermitente = function () {
        this.activaintermitente = false;
    };
    HomePage.prototype.pararandom = function () {
        this.activarandom = false;
        this.limpia();
    };
    HomePage.prototype.tiro = function () {
        this.agregatoast('Funcion TIRO RASO, selecciona sola la area superior de verde');
        this.activatiro = true;
        this.activoarea = false;
        this.activasecuencia = false;
        this.activarandom = false;
        this.limpia();
        this.limpiatiroraso();
    };
    HomePage.prototype.paratiro = function () {
        this.activatiro = false;
        this.limpia();
        this.limpiatiroraso();
    };
    HomePage.prototype.retrocede = function () {
        if (this.activaplay == true || this.activarandom == true) {
            this.duracion = this.duracion - 1;
        }
    };
    HomePage.prototype.preload = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
        //setTimeout(() => {
        //loading.dismiss();
        //}, 5000);
    };
    HomePage.prototype.inicia_segundo_reloj = function () {
        var _this = this;
        this.limpia();
        this.limpiatiroraso();
        this.enejecucion = true;
        this.estado_jugador = 'En Evaluacion';
        this.agregatoast('Indicanos en el tablero donde pateo el jugador !!');
        this.duracion = this.duracion_segundo_reloj;
        if (this.activaplay == true) {
            var timerid_1 = setInterval(function () { return _this.retrocede(); }, 1000);
            setTimeout(function () { clearInterval(timerid_1); _this.agregatoast('En Evaluacion'); }, this.duracion * 1000);
        }
    };
    HomePage.prototype.sacain = function (data) {
        return data.sort(function (a, b) { return (a.xin > b.xin) ? 1 : -1; })[0];
    };
    HomePage.prototype.sacafin = function (data) {
        return data.sort(function (a, b) { return (a.xfin < b.xfin) ? 1 : -1; })[0];
    };
    HomePage.prototype.play = function () {
        var _this = this;
        if (this.estado_jugador == '') {
            ///Saca Valores
            console.log('array...', this.array);
            this.fp = this.array.filter(function (word) { return word.A == true; });
            console.log('FP', this.fp);
            if (this.fp.length > 0) {
                this.xin = this.fp.sort(function (a, b) { return (a.xin > b.xin) ? 1 : -1; })[0].xin;
                this.xfin = this.fp.sort(function (a, b) { return (a.xfin < b.xfin) ? 1 : -1; })[0].xfin;
                this.yin = this.fp.sort(function (a, b) { return (a.yin > b.yin) ? 1 : -1; })[0].yin;
                this.yfin = this.fp.sort(function (a, b) { return (a.yfin < b.yfin) ? 1 : -1; })[0].yfin;
            }
        }
        //Si termino rrecorer todos los jugadores 
        console.log('Jugando...', this.jugadoresseleccionados.length, this.numerorepetir);
        // Si no selecciona ningun jugador
        if (this.jugadoresseleccionados.length == 0) {
            console.log(this.tiposdetiroseleccionados);
            if (this.tiposdetiroseleccionados && this.fp.length > 0) {
                //this.agregatoast('Seleccione Tipo de tiro y Jugadores !')
                // Comienza el juego.....
                this.estado_jugador = 'Preparacion';
                // Primer reloj
                var sec = this.primer_reloj.split(':');
                this.duracion = parseInt(sec[2]);
                this.duracion_primer_reloj = parseInt(sec[2]);
                //Segundo reloj
                var sec2 = this.segundo_reloj.split(':');
                this.duracion_segundo_reloj = parseInt(sec2[2]);
                var timerid_2 = setInterval(function () { return _this.retrocede(); }, 1000);
                setTimeout(function () {
                    clearInterval(timerid_2);
                    _this.inicia_segundo_reloj();
                }, this.duracion * 1100);
                this.activaplay = true;
                if (this.activasecuencia == true) {
                    //(2) Si es secuencia al poner invertir y poner play
                    this.ordernsecuencia = this.listasecuencia[this.indexsecuenciacalificacion] + 1;
                    console.log('Secuencia Valor: ', this.listasecuencia[this.indexsecuenciacalificacion]);
                    this.storage.get('secuencia' + this.listasecuencia[this.indexsecuenciacalificacion]).then(function (val) {
                        _this.array = val;
                        _this.indexsecuenciacalificacion = _this.indexsecuenciacalificacion + 1;
                    });
                    this.agregatoast('Se inicio la secuencia ' + this.indexsecuenciacalificacion);
                }
                else {
                    this.agregatoast('Comencemos a jugar. Preparacion del jugador');
                }
            }
            else {
                this.agregatoast('Seleccione Tipo de Tiro o Seleccione una Area');
            }
        }
        else {
            // Comienza el juego.....
            this.estado_jugador = 'Preparacion';
            // Primer reloj
            var sec = this.primer_reloj.split(':');
            this.duracion = parseInt(sec[2]);
            this.duracion_primer_reloj = parseInt(sec[2]);
            //Segundo reloj
            var sec2 = this.segundo_reloj.split(':');
            this.duracion_segundo_reloj = parseInt(sec2[2]);
            var timerid_3 = setInterval(function () { return _this.retrocede(); }, 1000);
            setTimeout(function () {
                clearInterval(timerid_3);
                _this.inicia_segundo_reloj();
            }, this.duracion * 1100);
            this.activaplay = true;
            if (this.activasecuencia == true) {
                //(2) Si es secuencia al poner invertir y poner play
                this.ordernsecuencia = this.listasecuencia[this.indexsecuenciacalificacion] + 1;
                console.log('Secuencia Valor: ', this.listasecuencia[this.indexsecuenciacalificacion]);
                this.storage.get('secuencia' + this.listasecuencia[this.indexsecuenciacalificacion]).then(function (val) {
                    _this.array = val;
                    _this.indexsecuenciacalificacion = _this.indexsecuenciacalificacion + 1;
                });
                this.agregatoast('Se inicio la secuencia ' + this.indexsecuenciacalificacion);
            }
            else {
                this.jugador_actual = this.jugadoresseleccionados[this.indexjugador];
                this.indexjugador = this.indexjugador + 1;
                this.agregatoast('Comencemos a jugar. Preparacion del jugador');
            }
        }
    };
    HomePage.prototype.paraplay = function () {
        this.activaplay = false;
        this.agregatoast('Se detuvo el juego...');
    };
    ///Arrastre Touch
    HomePage.prototype.sacaletra = function (xin, yin, xfin, yfin) {
        this.xin = xin;
        this.yin = yin;
        this.xfin = xfin;
        this.yfin = yfin;
        console.log('Letras...', xin, yin, xfin, yfin);
        this.limpia();
        this.coordenadas = parseInt(xin) + '-' + parseInt(yin);
        this.coordenadas2 = parseInt(xfin) + '-' + parseInt(yfin);
        if ((xfin >= xin) && (yfin >= yin)) {
            for (var i = 0; i < 124; i++) {
                if (yfin >= this.array[i]['yfin'] && yin <= this.array[i]['yin'] && xfin >= this.array[i]['xfin'] && xin <= this.array[i]['xin']) {
                    this.array[i]['A'] = true;
                }
            }
        }
        if ((xfin <= xin) && (yfin >= yin)) {
            for (var i = 0; i < 124; i++) {
                if (yfin >= this.array[i]['yfin'] && yin <= this.array[i]['yin'] && xfin <= this.array[i]['xfin'] && xin >= this.array[i]['xin']) {
                    this.array[i]['A'] = true;
                }
            }
        }
        if ((xfin <= xin) && (yfin <= yin)) {
            for (var i = 0; i < 124; i++) {
                if (yfin <= this.array[i]['yfin'] && yin >= this.array[i]['yin'] && xfin <= this.array[i]['xfin'] && xin >= this.array[i]['xin']) {
                    this.array[i]['A'] = true;
                }
            }
        }
        if ((xfin >= xin) && (yfin <= yin)) {
            for (var i = 0; i < 124; i++) {
                if (yfin <= this.array[i]['yfin'] && yin >= this.array[i]['yin'] && xfin >= this.array[i]['xfin'] && xin <= this.array[i]['xin']) {
                    this.array[i]['A'] = true;
                }
            }
        }
    };
    HomePage.prototype.agregatoast = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            duration: 2000,
            cssClass: 'mitoast',
            position: 'bottom',
        });
        toast.present();
    };
    HomePage.prototype.agregatoastcentro = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            duration: 2000,
            cssClass: 'mitoast',
            position: 'top',
        });
        toast.present();
    };
    HomePage.prototype.selecciona = function (event) {
        if (this.activatiro == true) {
            if (this.array_tiro_raso.indexOf(event.pastilla) != -1) {
                if (event.tiroraso == true) {
                    event.A = false;
                    event.tiroraso = false;
                }
                else {
                    event.A = false;
                    event.tiroraso = true;
                }
            }
        }
        else {
            console.log('entre aqui....');
            if (event.A == true) {
                event.A = false;
            }
            else {
                event.A = true;
            }
        }
        if (this.estado_jugador == 'En Evaluacion') {
            if (this.activasecuencia == true) {
                this.agregatoast('Se Califico =)');
                ///Si Califica 
                this.duracion = this.duracion_primer_reloj;
                ///(3) Al evaluar y es invertir en Secuencia
                console.log('ancho', this.listasecuencia.length, this.indexsecuencia);
                if (this.listasecuencia.length == this.indexsecuenciacalificacion) {
                    this.muestracalificacionsecuencia();
                    this.indexsecuenciacalificacion = 0;
                    this.indexjugador = this.indexjugador + 1;
                    this.jugador_actual = this.jugadoresseleccionados[this.indexjugador];
                }
                else {
                    this.play();
                }
            }
            else {
                if (this.activarandom == true && this.estado_jugador == 'En Evaluacion') {
                    //Calificando despues de
                    this.secuencia_random[this.indexcalificarandom] = event;
                    this.indexcalificarandom++;
                    if (this.secuencia_random.length == this.indexcalificarandom) {
                        this.muestracalificacion(4);
                    }
                }
                else {
                    /// Sie es una pastilla
                    if (this.fp.length == 1) {
                        var x1 = event.x;
                        var y1 = event.y;
                        var x2 = this.fp[0].x;
                        var y2 = this.fp[0].y;
                        var x3 = (x1 - x2) * (x1 - x2);
                        var y3 = (y1 - y2) * (y1 - y2);
                        console.log(Math.sqrt(x3 + y3));
                        this.muestracalificacion(Math.sqrt(x3 + y3) * 0.25);
                    }
                    else {
                        // Si es una area
                        var x1 = event.x;
                        var y1 = event.y;
                        var x2 = (this.xin + this.xfin) / 2;
                        var y2 = (this.yin + this.yfin) / 2;
                        var x3 = (x1 - x2) * (x1 - x2);
                        var y3 = (y1 - y2) * (y1 - y2);
                        this.muestracalificacion(Math.sqrt(x3 + y3) * 0.25);
                    }
                    ///
                }
            }
        }
    };
    HomePage.prototype.calculapuntaje = function (data) {
        var puntaje = 0;
        if (data >= 36) {
            puntaje = 2;
        }
        if (data >= 36 * 2) {
            puntaje = 1;
        }
        if (data >= 36 * 3) {
            puntaje = -1;
        }
        if (data >= 36 * 4) {
            puntaje = -2;
        }
        //
        // if (data>= 218*3 && data <218*4) { puntaje = -1 } 
        if (data == 0) {
            puntaje = 3;
        }
        console.log('puntaje...', puntaje);
        return puntaje;
    };
    HomePage.prototype.calculapuntajeY = function (data) {
        var puntaje = 0;
        console.log('Puntaje Y', data);
        if (data >= 5) {
            puntaje = 2;
        }
        if (data >= 33) {
            puntaje = 1;
        }
        if (data >= 60) {
            puntaje = -1;
        }
        if (data >= 88) {
            puntaje = -2;
        }
        //
        // if (data>= 218*3 && data <218*4) { puntaje = -1 } 
        if (data == 0) {
            puntaje = 3;
        }
        console.log('puntaje...', puntaje);
        return puntaje;
    };
    HomePage.prototype.filtroprendidos = function (array) {
        return array.filter(function (word) { return word.A == true; });
    };
    HomePage.prototype.muestracalificacionsecuencia = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__calificajugador_calificajugador__["a" /* CalificajugadorPage */], { 'jugador': this.jugador_actual });
        profileModal.onDidDismiss(function (data) {
            _this.play();
        });
        profileModal.present();
    };
    HomePage.prototype.traemiperfil = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__components_miperfil_miperfil__["a" /* MiperfilComponent */], {});
        profileModal.onDidDismiss(function (data) {
        });
        profileModal.present();
    };
    HomePage.prototype.onClickedOutside = function (e) {
        console.log('Clicked outside:', e);
        this.menujuego = false;
    };
    HomePage.prototype.muestracalificacion = function (calificacion) {
        var _this = this;
        console.log('Cali....', calificacion);
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__calificajugador_calificajugador__["a" /* CalificajugadorPage */], { 'jugador': this.jugador_actual, 'calificacion': calificacion });
        profileModal.onDidDismiss(function (data) {
            _this.duracion = _this.duracion_primer_reloj;
            console.log('this.jugadoresseleccionados', _this.jugadoresseleccionados);
            /////Si Selecciona repetir Juego
            if (_this.jugadoresseleccionados.length == _this.indexjugador && _this.jugadoresseleccionados.length != 0) {
                _this.indexjugador = 0;
                _this.index_numerorepetir++;
            }
            if (_this.numerorepetir) {
                console.log('Comparand...', _this.index_numerorepetir, _this.numerorepetir);
                if (_this.index_numerorepetir == _this.numerorepetir) {
                    _this.activaplay = false;
                    _this.estado_jugador = '';
                    //this.parararea()
                    //this.limpia()
                    //this.jugadoresseleccionados=[]
                    _this.index_numerorepetir = 0;
                    _this.indice_item_extras++;
                    _this.seteaitemextra(_this.item_extras[_this.indice_item_extras]);
                    if (_this.indice_item_extras == _this.item_extras.length) {
                        console.log('Finalize....');
                        _this.parararea();
                        _this.limpia();
                        _this.indice_item_extras = 0;
                        _this.index_numerorepetir = 0;
                        _this.indexjugador = 0;
                        _this.jugadoresseleccionados = [];
                    }
                    else {
                        _this.play();
                    }
                }
                else {
                    _this.estado_jugador = 'En Preparacion';
                    if (_this.indice_item_extras <= _this.item_extras.length) {
                        _this.play();
                    }
                    _this.storage.get('array').then(function (val) { _this.array = val; });
                }
            }
            else {
                // Al calificar
                // if(this.activatiro==true || this.activoarea==true){
                if (_this.activaplay == true) {
                    //Si no hay ningun jugador
                    if (_this.jugadoresseleccionados.length > _this.indexjugador + 1) {
                        _this.estado_jugador = '';
                        _this.play();
                        _this.storage.get('array').then(function (val) { _this.array = val; });
                    }
                    else {
                        //Si termino SIN jugadores
                        _this.activaplay = false;
                        _this.estado_jugador = '';
                        _this.parararea();
                        _this.limpia();
                        _this.jugadoresseleccionados = [];
                        ///Juego Guardado
                        if (_this.juegoguardado) {
                            _this.activaplay = false;
                            _this.estado_jugador = '';
                            _this.parararea();
                            _this.limpia();
                            _this.jugadoresseleccionados = [];
                            _this.indice_item = _this.indice_item + 1;
                            if (_this.items.length >= _this.indice_item) {
                                _this.indexjugador = 0;
                                _this.seteaitem(_this.items[_this.indice_item]);
                            }
                        }
                    }
                }
                //}
                //Solo para el random
                if (_this.activarandom == true) {
                    _this.indexjugador = _this.indexjugador + 1;
                    _this.jugador_actual = _this.jugadoresseleccionados[_this.indexjugador];
                    _this.duracion = _this.duracion_primer_reloj;
                    _this.random();
                    _this.estado_jugador = 'Preparacion';
                    _this.indexcalificarandom = 0;
                    if (_this.jugadoresseleccionados.length == _this.indexjugador) {
                        _this.jugadoresseleccionados = [];
                        _this.activapelota = false;
                        _this.activaplay = false;
                        _this.indexjugador = 0;
                    }
                }
            }
        });
        profileModal.present();
    };
    HomePage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    HomePage.prototype.limpia = function () {
        for (var i = 0; i < 124; i++) {
            this.array[i]['A'] = false;
        }
    };
    HomePage.prototype.limpiatiroraso = function () {
        console.log(this.array[36].tiroraso);
        this.array[36].tiroraso = false;
        this.array[40].tiroraso = false;
        this.array[44].tiroraso = false;
        this.array[48].tiroraso = false;
        this.array[52].tiroraso = false;
        this.array[56].tiroraso = false;
        this.array[60].tiroraso = false;
        this.array[64].tiroraso = false;
        this.array[68].tiroraso = false;
        this.array[72].tiroraso = false;
        this.array[76].tiroraso = false;
        this.array[80].tiroraso = false;
        this.array[84].tiroraso = false;
    };
    HomePage.prototype.inicia = function (data) {
        this.Xi = data.touches[0].pageX;
        this.Yi = data.touches[0].pageY;
    };
    HomePage.prototype.area = function () {
        this.limpia();
        this.limpiatiroraso();
        this.agregatoast('Funcion AREA, seleccione una area en el arco');
        this.activoarea = true;
        this.activasecuencia = false;
        this.activarandom = false;
        this.activatiro = false;
    };
    HomePage.prototype.parararea = function () {
        this.activoarea = false;
        this.limpia();
    };
    HomePage.prototype.guardadetallejuego = function () {
        var _this = this;
        if (this.tiposdetiroseleccionados) {
            var id_item = this.tiposdetiroseleccionados.split(' ')[0];
            var pr = this.primer_reloj.split(':');
            var sr = this.primer_reloj.split(':');
            this.detallejuego.addclub = this.club_id;
            this.detallejuego.addjuego = this.juego.Codigo;
            this.detallejuego.addempresa = 1;
            this.detallejuego.addusuario = 1;
            this.detallejuego.addproceso = 1;
            this.detallejuego.addarea = JSON.stringify(this.array);
            this.detallejuego.addtiro = id_item;
            this.detallejuego.addhinicio = pr[0] + ':' + pr[1] + ':' + pr[2];
            this.detallejuego.addfin = sr[0] + ':' + sr[1] + ':' + sr[2];
            console.log('jsjsj', this.jugadoresseleccionados);
            this.http.post('http://comunica7.com/apirestsmartgoal/public/add/juegodet', this.detallejuego)
                .subscribe(function (data) {
                console.log('item...', data);
                var item = data[0];
                for (var i in _this.jugadoresseleccionados) {
                    var id_jugador = _this.jugadoresseleccionados[i].split(' ')[0];
                    _this.guardaitemjugador(id_jugador, item.Item);
                }
                _this.closeModal();
            }, function (error) {
            });
        }
        else {
            this.agregatoast('Ingrese Tipo de tiro');
        }
    };
    // '/add/juegodetjugador' :: addjuego,addclub,addempresa,additem,addjugador,addusuario,addproceso
    HomePage.prototype.guardaitemjugador = function (jugador, item) {
        this.datajugador.addjuego = this.juego.Codigo;
        this.datajugador.addclub = this.club_id;
        this.datajugador.addempresa = 1;
        this.datajugador.addproceso = 1;
        this.datajugador.addusuario = 1;
        this.datajugador.addjugador = jugador;
        this.datajugador.additem = item;
        // CALL usp_pro_juego_det_jugador(1,1,2,"1","5",1,1)
        this.http.post('http://comunica7.com/apirestsmartgoal/public/add/juegodetjugador', this.datajugador)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
        });
    };
    HomePage.prototype.guardapuntaje = function () {
        //usp_add_juego_jugador_historial '/add/juegojugadorhistorial' :: addjuego,addclub,addempresa,additem,addjugador,addpuntaje
        this.datajugador.addjuego = 1;
        this.datajugador.addclub = this.club_id;
        this.datajugador.addempresa = 1;
        this.datajugador.addproceso = 1;
        this.datajugador.addusuario = 1;
        this.datajugador.addjugador = 1;
        this.datajugador.additem = 1;
        this.datajugador.addpuntaje = 1.2;
        // CALL usp_pro_juego_det_jugador(1,1,2,"1","5",1,1)
        this.http.post('http://comunica7.com/apirestsmartgoal/public/add/juegojugadorhistorial', this.datajugador)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
        });
    };
    HomePage.prototype.finaliza = function (event) {
        var _this = this;
        console.log('Finaliza', event);
        if (this.estado_jugador == '') {
            if (event) {
                if (event.A == true) {
                    event.A = false;
                }
                else {
                    event.A = true;
                }
            }
            this.storage.set('array', this.array);
            var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__components_seleccionajugador_seleccionajugador__["a" /* SeleccionajugadorComponent */], {});
            profileModal.onDidDismiss(function (data) {
                _this.item_extras = data;
                if (data[0]) {
                    _this.jugadoresseleccionados = data[0].jugadores;
                    _this.numerorepetir = data[0].numeroveces;
                    _this.tiposdetiroseleccionados = data[0].tipotiro;
                    _this.primer_reloj = data[0].primer_reloj;
                    _this.segundo_reloj = data[0].segundo_reloj;
                }
            });
            profileModal.present();
        }
    };
    HomePage.prototype.tablero = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__components_tablero_tablero__["a" /* TableroComponent */], {});
        profileModal.onDidDismiss(function (data) {
            console.log(data);
        });
        profileModal.present();
    };
    ///Setea parametros del item 
    HomePage.prototype.seteaitem = function (item) {
        var _this = this;
        console.log('Entre a Setear', item);
        if (item) {
            this.jugadoresseleccionados = [];
            this.primer_reloj = item.Tiempo_inicio;
            this.segundo_reloj = item.Tiempo_fin;
            this.array = JSON.parse(item.area);
            this.tiposdetiroseleccionados = item.TipoTiro;
            ///Saca Datos del Item
            this.obtienedatositem(item.item).subscribe(function (data) {
                console.log('jugadores...', data);
                _this.listajugadores = data;
                for (var d in _this.listajugadores) {
                    console.log(d);
                    _this.jugadoresseleccionados.push(_this.listajugadores[d].Codigo + ' ' + _this.listajugadores[d].Jugador);
                }
            });
        }
    };
    HomePage.prototype.seteaitemextra = function (item) {
        console.log('Entre a Setear', item);
        if (item) {
            this.jugadoresseleccionados = item.jugadores;
            this.primer_reloj = item.primer_reloj;
            this.segundo_reloj = item.segundo_reloj;
            this.tiposdetiroseleccionados = item.tipotiro;
        }
    };
    HomePage.prototype.secuencianext = function (data) {
        var _this = this;
        this.preload();
        //
        this.storage.set('secuencia' + this.indexsecuencia, this.array);
        console.log('indexsec', this.indexsecuencia);
        this.indexsecuencia = this.indexsecuencia + 1;
        this.agregatoastcentro('Se guardo la secuencia ' + this.indexsecuencia);
        setTimeout(function () {
            _this.limpia();
            _this.loading.dismiss();
        }, 3000);
    };
    HomePage.prototype.getCurrentScreen0rientation = function () {
        this.agregatoast(this.screenOrientation.type);
    };
    HomePage.prototype.lockScreen0rientation = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
                }
                catch (error) {
                    console.error(error);
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.unlockScreen0rientation = function () {
        this.screenOrientation.unlock();
    };
    HomePage.prototype.seleccionajugadores = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Jugadores');
        for (var i = 0; i < this.arrayjugadores.length; i++) {
            console.log(i);
            alert.addInput({
                type: 'checkbox',
                label: this.arrayjugadores[i]['Jugador'],
                value: this.arrayjugadores[i]['Codigo'] + ' ' + this.arrayjugadores[i]['Jugador'],
                checked: false
            });
        }
        alert.addButton('Cerrar');
        alert.addButton({
            text: 'Aceptar',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.jugadoresseleccionados = data;
                _this.jugador_actual = _this.jugadoresseleccionados[0];
            }
        });
        alert.present();
    };
    HomePage.prototype.seleccionadefensa = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Jugadores Defensa');
        for (var i = 0; i < this.arrayjugadores.length; i++) {
            console.log(i);
            alert.addInput({
                type: 'checkbox',
                label: this.arrayjugadores[i]['Jugador'],
                value: this.arrayjugadores[i]['Codigo'] + ' ' + this.arrayjugadores[i]['Jugador'],
                checked: false
            });
        }
        alert.addButton('Cerrar');
        alert.addButton({
            text: 'Aceptar',
            handler: function (data) {
                console.log('Checkbox data:', data);
                //this.jugadoresseleccionados=data
                //this.jugador_actual=this.jugadoresseleccionados[0]
                _this.jugadoresdefensa = data;
            }
        });
        alert.present();
    };
    HomePage.prototype.seleccionanuevojuego = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Nuevo Juego',
            message: "Ingrese el nombre del juego",
            inputs: [
                {
                    name: 'valor',
                    type: 'texto'
                },
            ],
            buttons: [
                {
                    text: 'Cerrar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Guardar',
                    handler: function (data) {
                        console.log(data);
                        _this.numerorepetir = data.valor;
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.seleccionatipodetiro = function () {
        var _this = this;
        this.activapelota = false;
        var alert = this.alertCtrl.create();
        alert.setTitle('Tipos de Tiro');
        for (var i = 0; i < this.tipodetiro.length; i++) {
            alert.addInput({
                type: 'radio',
                label: this.tipodetiro[i]['Descripcion'],
                value: this.tipodetiro[i]['Codigo'] + ' ' + this.tipodetiro[i]['Descripcion'],
                checked: false
            });
        }
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.tiposdetiroseleccionados = data;
                //this.seleccionajugadores()
            }
        });
        alert.present();
    };
    HomePage.prototype.finalizasecuencia = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Secuencia');
        alert.addInput({
            type: 'radio',
            label: 'Invertir direccion',
            value: 'invertir',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Secuencia en retroceso ',
            value: 'idavuelta',
            checked: false
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                ///(1) Obtiene el tipo de secuencia
                _this.tiposecuencia = data;
                var _secnormal = new Array(_this.indexsecuencia);
                var _secinverso = new Array(_this.indexsecuencia);
                var _secidavuelta = new Array(2 * _this.indexsecuencia);
                for (var i = 0; i < _this.indexsecuencia; i++) {
                    _secnormal[i] = i;
                    _secinverso[i] = _this.indexsecuencia - i - 1;
                    if (_this.tiposecuencia == undefined) {
                        _this.listasecuencia = _secnormal;
                    }
                    if (_this.tiposecuencia == 'invertir') {
                        _this.listasecuencia = _secinverso;
                    }
                }
                if (_this.tiposecuencia == 'idavuelta') {
                    _secnormal.pop();
                    _this.listasecuencia = _secnormal.concat(_secinverso);
                }
                console.log('secuencia..', _this.listasecuencia);
            }
        });
        alert.present();
    };
    HomePage.prototype.paramemoria = function () {
        this.grabando = false;
    };
    HomePage.prototype.memoria = function () {
        this.agregatoast('Funcion MEMORIA, guarda una area en memoria puede usarlo combinado con los otros botones');
        this.grabando = true;
    };
    HomePage.prototype.pintacuadrados = function (data) {
        if (data.length > 0) {
            for (var i = 0; i < 124; i++) {
                if (data[i]['A'] == true) {
                    this.array[i]['A'] = true;
                }
            }
        }
    };
    HomePage.prototype.obtienedatositem = function (codigo) {
        return this.dataprovider.listajuegodetallejugador(this.juegoguardado, this.club_id, codigo);
    };
    HomePage.prototype.observeScreen0rientation = function () {
        this.screenOrientation.onChange().subscribe(function () { return console.log("The aplication orientation has changed"); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "canvas", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/xienciasdev/code/smart/src/pages/home/home.html"*/'<!--<ion-header *ngIf=\'juego \'>\n\n  <ion-navbar>\n    <ion-title> Juego</ion-title>\n  </ion-navbar>\n\n</ion-header>-->\n\n\n\n\n<ion-content (touchmove)=\'arrastra($event)\' class=\'fondo\'>\n\n\n\n <ion-icon *ngIf=\'juegoguardado || editajuego || juego\' name="arrow-dropleft-circle" color=\'white\' style=\'font-size: 80px; position: absolute; left:22px;top:667px;\' (click)=\'view.dismiss()\'></ion-icon>\n\n      <div style=\'height: 5%;\'></div>\n\n       <!--<div [ngClass]="grabando? \'activomemoria\':\'inactivo\'" ></div>-->\n       <div class=\'todo\' >\n\n             <div class=\'controles\'>\n\n\n                    <div *ngIf=\'!grabando\' (click)=\'memoria()\'> M</div>\n\n                    <div *ngIf=\'grabando\' style="background:#fb6938;color:#fff;"  (click)=\'paramemoria()\' > M</div>\n\n\n                    <div *ngIf=\'!activoarea\'  (click)=\'area()\'> A </div>\n\n                    <div *ngIf=\'activoarea\' style="background:#567;color:#fff;" (click)=\'parararea()\'> A </div>\n\n\n                    <div *ngIf=\'!activasecuencia\'  (click)=\'secuencia()\' > S</div>\n\n                    <div *ngIf=\'activasecuencia\' style="background:#567;color:#fff;" (click)=\'parasecuencia()\' > S</div>\n\n\n                    <div *ngIf=\'!activarandom\'  (click)=\'random()\'> R</div>\n\n                    <div *ngIf=\'activarandom\' style="background:#567;color:#fff;" (click)=\'pararandom()\' > R</div>\n\n                    <div *ngIf=\'!activatiro\'  (click)=\'tiro()\'> T</div>\n\n                    <div *ngIf=\'activatiro\' style="background:#567;color:#fff;" (click)=\'paratiro()\'> T</div>\n\n\n                    <div *ngIf=\'!activaintermitente\'  (click)=\'intermitente()\' > I</div>\n\n                    <div *ngIf=\'activaintermitente\' style="background:#567;color:#fff;" (click)=\'paraintermitente()\' >I</div>\n\n\n                    <div *ngIf=\'!activaplay\'  (click)=\'play();\'> <ion-icon name="play"></ion-icon></div>\n\n                    <div *ngIf=\'activaplay\'  style="background:#567;color:#fff;font-size:20px;" (click)=\'paraplay()\'><ion-icon name="hand"></ion-icon></div>\n\n\n                   \n\n                    \n                    <!--<button size="small" *ngIf=\'!grabando\' ion-button  (click)=\'memoria()\' item-end icon-end>\n                      MEMORIA\n                    </button>\n\n                     <button size="small" *ngIf=\'grabando\' color=\'danger\' ion-button  (click)=\'parar()\' item-end icon-end>\n                      MEMORIA \n                    </button>\n\n                    <button size="small" *ngIf=\'!activoarea\' ion-button  (click)=\'area()\' item-end icon-end>\n                      AREA\n                    </button>\n\n                     <button size="small" *ngIf=\'activoarea\' color=\'danger\' ion-button  (click)=\'parararea()\' item-end icon-end>\n                      AREA \n                    </button>\n                 \n                 \n                  <button ion-button size="small"  (click)=\'secuencia()\' >SECUENCIA</button>\n                  <button ion-button size="small"  (click)=\'aleatorio()\' >ALEATORIO</button>\n                  <button ion-button size="small"  (click)=\'tiroraso()\' >TIRO RASO</button>\n                  <button ion-button size="small"  (click)=\'intermitente\' >INTERMITENTE</button>\n                  <button ion-button size="small"  (click)=\'iniciofin()\' >INICIO/FIN</button>-->\n\n              </div>\n              <div class=\'arco_horizontal\'>\n                \n\n                  \n<div class=\'A1\' [ngClass]="array[0].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[0])\' (touchend)=\'finaliza(array[0])\' (touchstart)=\'inicia($event)\' >A1</div>\n<div class=\'A2\' [ngClass]="array[1].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[1])\' (touchend)=\'finaliza(array[1])\' (touchstart)=\'inicia($event)\' >A2</div>\n<div class=\'A3\' [ngClass]="array[2].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[2])\' (touchend)=\'finaliza(array[2])\' (touchstart)=\'inicia($event)\' >A3</div>\n<div class=\'A4\' [ngClass]="array[3].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[3])\' (touchend)=\'finaliza(array[3])\' (touchstart)=\'inicia($event)\' >A4</div>\n<div class=\'A5\' [ngClass]="array[4].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[4])\' (touchend)=\'finaliza(array[4])\' (touchstart)=\'inicia($event)\' >A5</div>\n<div class=\'A6\' [ngClass]="array[5].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[5])\' (touchend)=\'finaliza(array[5])\' (touchstart)=\'inicia($event)\' >A6</div>\n<div class=\'A7\' [ngClass]="array[6].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[6])\' (touchend)=\'finaliza(array[6])\' (touchstart)=\'inicia($event)\' >A7</div>\n<div class=\'A8\' [ngClass]="array[7].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[7])\' (touchend)=\'finaliza(array[7])\' (touchstart)=\'inicia($event)\' >A8</div>\n\n<div class=\'B1\' [ngClass]="array[8].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[8])\' (touchend)=\'finaliza(array[8])\' (touchstart)=\'inicia($event)\'>B1</div>\n<div class=\'B2\' [ngClass]="array[9].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[9])\' (touchend)=\'finaliza(array[9])\' (touchstart)=\'inicia($event)\'>B2</div>\n<div class=\'B3\' [ngClass]="array[10].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[10])\' (touchend)=\'finaliza(array[10])\' (touchstart)=\'inicia($event)\'>B3</div>\n<div class=\'B4\' [ngClass]="array[11].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[11])\' (touchend)=\'finaliza(array[11])\' (touchstart)=\'inicia($event)\'>B4</div>\n<div class=\'B5\' [ngClass]="array[12].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[12])\' (touchend)=\'finaliza(array[12])\' (touchstart)=\'inicia($event)\'>B5</div>\n<div class=\'B6\' [ngClass]="array[13].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[13])\' (touchend)=\'finaliza(array[13])\' (touchstart)=\'inicia($event)\'>B6</div>\n<div class=\'B7\' [ngClass]="array[14].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[14])\' (touchend)=\'finaliza(array[14])\' (touchstart)=\'inicia($event)\'>B7</div>\n<div class=\'B8\' [ngClass]="array[15].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[15])\' (touchend)=\'finaliza(array[15])\' (touchstart)=\'inicia($event)\'>B8</div>\n\n<div class=\'C1\' [ngClass]="array[16].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[16])\' (touchend)=\'finaliza(array[16])\' (touchstart)=\'inicia($event)\'>C1</div>\n<div class=\'C2\' [ngClass]="array[17].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[17])\' (touchend)=\'finaliza(array[17])\' (touchstart)=\'inicia($event)\'>C2</div>\n<div class=\'C3\' [ngClass]="array[18].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[18])\' (touchend)=\'finaliza(array[18])\' (touchstart)=\'inicia($event)\'>C3</div>\n<div class=\'C4\' [ngClass]="array[19].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[19])\' (touchend)=\'finaliza(array[19])\' (touchstart)=\'inicia($event)\'>C4</div>\n<div class=\'C5\' [ngClass]="array[20].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[20])\' (touchend)=\'finaliza(array[20])\' (touchstart)=\'inicia($event)\'>C5</div>\n<div class=\'C6\' [ngClass]="array[21].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[21])\' (touchend)=\'finaliza(array[21])\' (touchstart)=\'inicia($event)\'>C6</div>\n<div class=\'C7\' [ngClass]="array[22].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[22])\' (touchend)=\'finaliza(array[22])\' (touchstart)=\'inicia($event)\'>C7</div>    \n<div class=\'C8\' [ngClass]="array[23].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[23])\' (touchend)=\'finaliza(array[23])\' (touchstart)=\'inicia($event)\'>C8</div>\n\n\n<div class=\'D1\' [ngClass]="array[24].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[24])\' (touchend)=\'finaliza(array[24])\' (touchstart)=\'inicia($event)\'>D1</div>\n<div class=\'D2\' [ngClass]="array[25].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[25])\' (touchend)=\'finaliza(array[25])\' (touchstart)=\'inicia($event)\'>D2</div>\n<div class=\'D3\' [ngClass]="array[26].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[26])\' (touchend)=\'finaliza(array[26])\' (touchstart)=\'inicia($event)\'>D3</div>\n<div class=\'D4\' [ngClass]="array[27].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[27])\' (touchend)=\'finaliza(array[27])\' (touchstart)=\'inicia($event)\'>D4</div>\n<div class=\'D5\' [ngClass]="array[28].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[28])\' (touchend)=\'finaliza(array[28])\' (touchstart)=\'inicia($event)\'>D5</div>\n<div class=\'D6\' [ngClass]="array[29].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[29])\' (touchend)=\'finaliza(array[29])\' (touchstart)=\'inicia($event)\'>D6</div>\n<div class=\'D7\' [ngClass]="array[30].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[30])\' (touchend)=\'finaliza(array[30])\' (touchstart)=\'inicia($event)\'>D7</div>\n<div class=\'D8\' [ngClass]="array[31].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[31])\' (touchend)=\'finaliza(array[31])\' (touchstart)=\'inicia($event)\'>D8</div>\n\n\n      \n<div class=\'E1\' [ngClass]="array[32].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[32])\' (touchend)=\'finaliza(array[32])\' (touchstart)=\'inicia($event)\'>E1</div>\n<div class=\'E2\' [ngClass]="array[33].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[33])\' (touchend)=\'finaliza(array[33])\' (touchstart)=\'inicia($event)\'>E2</div>\n<div class=\'E3\' [ngClass]="array[34].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[34])\' (touchend)=\'finaliza(array[34])\' (touchstart)=\'inicia($event)\'>E3</div>\n<div class=\'E4\' [ngClass]="array[35].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[35])\' (touchend)=\'finaliza(array[35])\' (touchstart)=\'inicia($event)\'>E4</div>\n\n\n\n\n <div class=\'F1\' [ngClass]="{ \'primerarco\': array[36].A, \'nocompleto\': !array[36].A ,\'tiroraso\': array[36].tiroraso }"\n\n\n (click)=\'selecciona(array[36])\' (touchend)=\'finaliza(array[36])\' (touchstart)=\'inicia($event)\'>F1</div>\n\n\n\n<div class=\'F2\' [ngClass]="array[37].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[37])\' (touchend)=\'finaliza(array[37])\' (touchstart)=\'inicia($event)\'>F2</div>\n<div class=\'F3\' [ngClass]="array[38].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[38])\' (touchend)=\'finaliza(array[38])\' (touchstart)=\'inicia($event)\'>F3</div>\n<div class=\'F4\' [ngClass]="array[39].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[39])\' (touchend)=\'finaliza(array[39])\' (touchstart)=\'inicia($event)\'>F4</div>\n\n\n<div class=\'G1\' [ngClass]="{ \'primerarco\': array[40].A, \'nocompleto\': !array[40].A ,\'tiroraso\': array[40].tiroraso }"\n\n(click)=\'selecciona(array[40])\' (touchend)=\'finaliza()\' (touchstart)=\'inicia($event)\'>G1</div>\n<div class=\'G2\' [ngClass]="array[41].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[41])\' (touchend)=\'finaliza(array[41])\' (touchstart)=\'inicia($event)\'>G2</div>\n<div class=\'G3\' [ngClass]="array[42].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[42])\' (touchend)=\'finaliza(array[42])\' (touchstart)=\'inicia($event)\'>G3</div>\n<div class=\'G4\' [ngClass]="array[43].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[43])\' (touchend)=\'finaliza(array[43])\' (touchstart)=\'inicia($event)\'>G4</div>\n\n\n\n\n<div class=\'H1\' [ngClass]="{ \'primerarco\': array[44].A, \'nocompleto\': !array[44].A ,\'tiroraso\': array[44].tiroraso }" \n\n(click)=\'selecciona(array[44])\' (touchend)=\'finaliza(array[44])\' (touchstart)=\'inicia($event)\'>H1</div>\n<div class=\'H2\' [ngClass]="array[45].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[45])\' (touchend)=\'finaliza(array[45])\' (touchstart)=\'inicia($event)\'>H2</div>\n<div class=\'H3\' [ngClass]="array[46].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[46])\' (touchend)=\'finaliza(array[46])\' (touchstart)=\'inicia($event)\'>H3</div>\n<div class=\'H4\' [ngClass]="array[47].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[47])\' (touchend)=\'finaliza(array[47])\' (touchstart)=\'inicia($event)\'>H4</div>\n\n\n\n<div class=\'I1\' [ngClass]="{ \'primerarco\': array[48].A, \'nocompleto\': !array[48].A ,\'tiroraso\': array[48].tiroraso }"\n\n(click)=\'selecciona(array[48])\' (touchend)=\'finaliza(array[48])\' (touchstart)=\'inicia($event)\'>I1</div>\n<div class=\'I2\' [ngClass]="array[49].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[49])\' (touchend)=\'finaliza(array[49])\' (touchstart)=\'inicia($event)\'>I2</div>\n<div class=\'I3\' [ngClass]="array[50].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[50])\' (touchend)=\'finaliza(array[50])\' (touchstart)=\'inicia($event)\'>I3</div>\n<div class=\'I4\' [ngClass]="array[51].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[51])\' (touchend)=\'finaliza(array[51])\' (touchstart)=\'inicia($event)\'>I4</div>\n\n\n<div class=\'J1\' [ngClass]="{ \'primerarco\': array[52].A, \'nocompleto\': !array[52].A ,\'tiroraso\': array[52].tiroraso }"\n\n(click)=\'selecciona(array[52])\' (touchend)=\'finaliza(array[52])\' (touchstart)=\'inicia($event)\'>J1</div>\n<div class=\'J2\' [ngClass]="array[53].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[53])\' (touchend)=\'finaliza(array[53])\' (touchstart)=\'inicia($event)\'>J2</div>\n<div class=\'J3\' [ngClass]="array[54].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[54])\' (touchend)=\'finaliza(array[54])\' (touchstart)=\'inicia($event)\'>J3</div>\n<div class=\'J4\' [ngClass]="array[55].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[55])\' (touchend)=\'finaliza(array[55])\' (touchstart)=\'inicia($event)\'>J4</div>\n\n\n<div class=\'K1\' [ngClass]="{ \'primerarco\': array[56].A, \'nocompleto\': !array[56].A ,\'tiroraso\': array[56].tiroraso }"\n(click)=\'selecciona(array[56])\' (touchend)=\'finaliza()\' (touchstart)=\'inicia($event)\'>K1</div>\n<div class=\'K2\' [ngClass]="array[57].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[57])\' (touchend)=\'finaliza(array[57])\' (touchstart)=\'inicia($event)\'>K2</div>\n<div class=\'K3\' [ngClass]="array[58].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[58])\' (touchend)=\'finaliza(array[58])\' (touchstart)=\'inicia($event)\'>K3</div>\n<div class=\'K4\' [ngClass]="array[59].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[59])\' (touchend)=\'finaliza(array[59])\' (touchstart)=\'inicia($event)\'>K4</div>\n\n\n\n<div class=\'L1\' [ngClass]="{ \'primerarco\': array[60].A, \'nocompleto\': !array[60].A ,\'tiroraso\': array[60].tiroraso }" (click)=\'selecciona(array[60])\' (touchend)=\'finaliza(array[60])\' (touchstart)=\'inicia($event)\'>L1</div>\n<div class=\'L2\' [ngClass]="array[61].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[61])\' (touchend)=\'finaliza(array[61])\' (touchstart)=\'inicia($event)\'>L2</div>\n<div class=\'L3\' [ngClass]="array[62].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[62])\' (touchend)=\'finaliza(array[62])\' (touchstart)=\'inicia($event)\'>L3</div>\n<div class=\'L4\' [ngClass]="array[63].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[63])\' (touchend)=\'finaliza(array[63])\' (touchstart)=\'inicia($event)\'>L4</div>\n\n\n\n\n\n<div class=\'M1\' [ngClass]="{ \'primerarco\': array[64].A, \'nocompleto\': !array[64].A ,\'tiroraso\': array[64].tiroraso }" (click)=\'selecciona(array[64])\' (touchend)=\'finaliza()\' (touchstart)=\'inicia($event)\'>M1</div>\n<div class=\'M2\' [ngClass]="array[65].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[65])\' (touchend)=\'finaliza(array[65])\' (touchstart)=\'inicia($event)\'>M2</div>\n<div class=\'M3\' [ngClass]="array[66].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[66])\' (touchend)=\'finaliza(array[66])\' (touchstart)=\'inicia($event)\'>M3</div>\n<div class=\'M4\' [ngClass]="array[67].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[67])\' (touchend)=\'finaliza(array[67])\' (touchstart)=\'inicia($event)\'>M4</div>\n\n\n\n<div class=\'N1\' [ngClass]="{ \'primerarco\': array[68].A, \'nocompleto\': !array[68].A ,\'tiroraso\': array[68].tiroraso }" (click)=\'selecciona(array[68])\' (touchend)=\'finaliza(array[68])\' (touchstart)=\'inicia($event)\'>N1</div>\n<div class=\'N2\' [ngClass]="array[69].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[69])\' (touchend)=\'finaliza(array[69])\' (touchstart)=\'inicia($event)\'>N2</div>\n<div class=\'N3\' [ngClass]="array[70].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[70])\' (touchend)=\'finaliza(array[70])\' (touchstart)=\'inicia($event)\'>N3</div>\n<div class=\'N4\' [ngClass]="array[71].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[71])\' (touchend)=\'finaliza(array[71])\' (touchstart)=\'inicia($event)\'>N4</div>\n\n\n<div class=\'NN1\' [ngClass]="{ \'primerarco\': array[72].A, \'nocompleto\': !array[72].A ,\'tiroraso\': array[72].tiroraso }" (click)=\'selecciona(array[72])\' (touchend)=\'finaliza(array[72])\' (touchstart)=\'inicia($event)\'>NN1</div>\n<div class=\'NN2\' [ngClass]="array[73].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[73])\' (touchend)=\'finaliza(array[73])\' (touchstart)=\'inicia($event)\'>NN2</div>\n<div class=\'NN3\' [ngClass]="array[74].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[74])\' (touchend)=\'finaliza(array[74])\' (touchstart)=\'inicia($event)\'>NN3</div>\n<div class=\'NN4\' [ngClass]="array[75].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[75])\' (touchend)=\'finaliza(array[75])\' (touchstart)=\'inicia($event)\'>NN4</div>\n\n\n\n\n<div class=\'O1\' [ngClass]="{ \'primerarco\': array[76].A, \'nocompleto\': !array[76].A ,\'tiroraso\': array[76].tiroraso }" (click)=\'selecciona(array[76])\' (touchend)=\'finaliza(array[76])\' (touchstart)=\'inicia($event)\'>O1</div>\n<div class=\'O2\' [ngClass]="array[77].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[77])\' (touchend)=\'finaliza(array[77])\' (touchstart)=\'inicia($event)\'>O2</div>\n<div class=\'O3\' [ngClass]="array[78].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[78])\' (touchend)=\'finaliza(array[78])\' (touchstart)=\'inicia($event)\'>O3</div>\n<div class=\'O4\' [ngClass]="array[79].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[79])\' (touchend)=\'finaliza(array[79])\' (touchstart)=\'inicia($event)\'>O4</div>\n\n\n\n<div class=\'P1\' [ngClass]="{ \'primerarco\': array[80].A, \'nocompleto\': !array[80].A ,\'tiroraso\': array[80].tiroraso }" (click)=\'selecciona(array[80])\' (touchend)=\'finaliza()\' (touchstart)=\'inicia($event)\'>P1</div>\n<div class=\'P2\' [ngClass]="array[81].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[81])\' (touchend)=\'finaliza(array[81])\' (touchstart)=\'inicia($event)\'>P2</div>\n<div class=\'P3\' [ngClass]="array[82].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[82])\' (touchend)=\'finaliza(array[82])\' (touchstart)=\'inicia($event)\'>P3</div>\n<div class=\'P4\' [ngClass]="array[83].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[83])\' (touchend)=\'finaliza(array[83])\' (touchstart)=\'inicia($event)\'>P4</div>\n\n\n\n\n<div class=\'Q1\' [ngClass]="{ \'primerarco\': array[84].A, \'nocompleto\': !array[84].A ,\'tiroraso\': array[84].tiroraso }" (click)=\'selecciona(array[84])\' (touchend)=\'finaliza()\' (touchstart)=\'inicia($event)\'>Q1</div>\n<div class=\'Q2\' [ngClass]="array[85].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[85])\' (touchend)=\'finaliza(array[85])\' (touchstart)=\'inicia($event)\'>Q2</div>\n<div class=\'Q3\' [ngClass]="array[86].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[86])\' (touchend)=\'finaliza(array[86])\' (touchstart)=\'inicia($event)\'>Q3</div>\n<div class=\'Q4\' [ngClass]="array[87].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[87])\' (touchend)=\'finaliza(array[87])\' (touchstart)=\'inicia($event)\'>Q4</div>\n\n\n\n<div class=\'R1\' [ngClass]="array[88].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[88])\' (touchend)=\'finaliza(array[88])\' (touchstart)=\'inicia($event)\'>R1</div>\n<div class=\'R2\' [ngClass]="array[89].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[89])\' (touchend)=\'finaliza(array[89])\' (touchstart)=\'inicia($event)\'>R2</div>\n<div class=\'R3\' [ngClass]="array[90].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[90])\' (touchend)=\'finaliza(array[90])\' (touchstart)=\'inicia($event)\'>R3</div>\n<div class=\'R4\' [ngClass]="array[91].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[91])\' (touchend)=\'finaliza(array[91])\' (touchstart)=\'inicia($event)\'>R4</div>\n\n\n\n\n<div class=\'S1\' [ngClass]="array[92].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[92])\' (touchend)=\'finaliza(array[92])\' (touchstart)=\'inicia($event)\' >S1</div>\n<div class=\'S2\' [ngClass]="array[93].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[93])\' (touchend)=\'finaliza(array[93])\' (touchstart)=\'inicia($event)\' >S2</div>\n<div class=\'S3\' [ngClass]="array[94].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[94])\' (touchend)=\'finaliza(array[94])\' (touchstart)=\'inicia($event)\' >S3</div>\n<div class=\'S4\' [ngClass]="array[95].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[95])\' (touchend)=\'finaliza(array[95])\' (touchstart)=\'inicia($event)\' >S4</div>\n<div class=\'S5\' [ngClass]="array[96].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[96])\' (touchend)=\'finaliza(array[96])\' (touchstart)=\'inicia($event)\' >S5</div>\n<div class=\'S6\' [ngClass]="array[97].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[97])\' (touchend)=\'finaliza(array[97])\' (touchstart)=\'inicia($event)\' >S6</div>\n<div class=\'S7\' [ngClass]="array[98].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[98])\' (touchend)=\'finaliza(array[98])\' (touchstart)=\'inicia($event)\' >S7</div>\n<div class=\'S8\' [ngClass]="array[99].A? \'cuartoarco\':\'nocompleto\'" (click)=\'selecciona(array[99])\' (touchend)=\'finaliza(array[99])\' (touchstart)=\'inicia($event)\' >S8</div>\n\n\n\n<div class=\'T1\' [ngClass]="array[100].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[100])\' (touchend)=\'finaliza(array[100])\' (touchstart)=\'inicia($event)\' >T1</div>\n<div class=\'T2\' [ngClass]="array[101].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[101])\' (touchend)=\'finaliza(array[101])\' (touchstart)=\'inicia($event)\' >T2</div>\n<div class=\'T3\' [ngClass]="array[102].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[102])\' (touchend)=\'finaliza(array[102])\' (touchstart)=\'inicia($event)\' >T3</div>\n<div class=\'T4\' [ngClass]="array[103].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[103])\' (touchend)=\'finaliza(array[103])\' (touchstart)=\'inicia($event)\' >T4</div>\n<div class=\'T5\' [ngClass]="array[104].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[104])\' (touchend)=\'finaliza(array[104])\' (touchstart)=\'inicia($event)\' >T5</div>\n<div class=\'T6\' [ngClass]="array[105].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[105])\' (touchend)=\'finaliza(array[105])\' (touchstart)=\'inicia($event)\' >T6</div>\n<div class=\'T7\' [ngClass]="array[106].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[106])\' (touchend)=\'finaliza(array[106])\' (touchstart)=\'inicia($event)\' >T7</div>\n<div class=\'T8\' [ngClass]="array[107].A? \'tercerarco\':\'nocompleto\'" (click)=\'selecciona(array[107])\' (touchend)=\'finaliza(array[107])\' (touchstart)=\'inicia($event)\' >T8</div>\n\n\n\n <div class=\'U1\' [ngClass]="array[108].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[108])\' (touchend)=\'finaliza(array[108])\' (touchstart)=\'inicia($event)\' >U1</div>\n<div class=\'U2\' [ngClass]="array[109].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[109])\' (touchend)=\'finaliza(array[109])\' (touchstart)=\'inicia($event)\' >U2</div>\n<div class=\'U3\' [ngClass]="array[110].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[110])\' (touchend)=\'finaliza(array[110])\' (touchstart)=\'inicia($event)\' >U3</div>\n<div class=\'U4\' [ngClass]="array[111].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[111])\' (touchend)=\'finaliza(array[111])\' (touchstart)=\'inicia($event)\' >U4</div>\n<div class=\'U5\' [ngClass]="array[112].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[112])\' (touchend)=\'finaliza(array[112])\' (touchstart)=\'inicia($event)\' >U5</div>\n<div class=\'U6\' [ngClass]="array[113].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[113])\' (touchend)=\'finaliza(array[113])\' (touchstart)=\'inicia($event)\' >U6</div>\n<div class=\'U7\' [ngClass]="array[114].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[114])\' (touchend)=\'finaliza(array[114])\' (touchstart)=\'inicia($event)\' >U7</div>\n<div class=\'U8\' [ngClass]="array[115].A? \'segundoarco\':\'nocompleto\'" (click)=\'selecciona(array[115])\' (touchend)=\'finaliza(array[115])\' (touchstart)=\'inicia($event)\' >U8</div>\n\n\n\n<div class=\'V1\' [ngClass]="array[116].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[116])\' (touchend)=\'finaliza(array[116])\' (touchstart)=\'inicia($event)\' >V1</div>\n<div class=\'V2\' [ngClass]="array[117].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[117])\' (touchend)=\'finaliza(array[117])\' (touchstart)=\'inicia($event)\' >V2</div>\n<div class=\'V3\' [ngClass]="array[118].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[118])\' (touchend)=\'finaliza(array[118])\' (touchstart)=\'inicia($event)\' >V3</div>\n<div class=\'V4\' [ngClass]="array[119].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[119])\' (touchend)=\'finaliza(array[119])\' (touchstart)=\'inicia($event)\' >V4</div>\n<div class=\'V5\' [ngClass]="array[120].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[120])\' (touchend)=\'finaliza(array[120])\' (touchstart)=\'inicia($event)\' >V5</div>\n<div class=\'V6\' [ngClass]="array[121].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[121])\' (touchend)=\'finaliza(array[121])\' (touchstart)=\'inicia($event)\' >V6</div>\n<div class=\'V7\' [ngClass]="array[122].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[122])\' (touchend)=\'finaliza(array[122])\' (touchstart)=\'inicia($event)\' >V7</div>\n<div class=\'V8\' [ngClass]="array[123].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[123])\' (touchend)=\'finaliza(array[123])\' (touchstart)=\'inicia($event)\' >V8</div>\n\n<!-- Tiro Raso\n\n\nc7,d7,e7,f7,g7,h7,i7,j7,k7,l7,m7,n7,nn7,o7,p7,q7,r7,s7\n\n  -->\n\n<div class=\'E7\' [ngClass]="array[124].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[124])\' (touchend)=\'finaliza(array[124])\' (touchstart)=\'inicia($event)\' >E7</div>\n<div class=\'F7\' [ngClass]="array[125].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[125])\' (touchend)=\'finaliza(array[125])\' (touchstart)=\'inicia($event)\' >F7</div>\n<div class=\'G7\' [ngClass]="array[126].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[126])\' (touchend)=\'finaliza(array[126])\' (touchstart)=\'inicia($event)\' >G7</div>\n<div class=\'H7\' [ngClass]="array[127].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[127])\' (touchend)=\'finaliza(array[127])\' (touchstart)=\'inicia($event)\' >H7</div>\n<div class=\'I7\' [ngClass]="array[128].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[128])\' (touchend)=\'finaliza(array[128])\' (touchstart)=\'inicia($event)\' >I7</div>\n<div class=\'J7\' [ngClass]="array[129].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[129])\' (touchend)=\'finaliza(array[129])\' (touchstart)=\'inicia($event)\' >J7</div>\n<div class=\'K7\' [ngClass]="array[130].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[130])\' (touchend)=\'finaliza(array[130])\' (touchstart)=\'inicia($event)\' >K7</div>\n<div class=\'L7\' [ngClass]="array[131].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[131])\' (touchend)=\'finaliza(array[131])\' (touchstart)=\'inicia($event)\' >L7</div>\n<div class=\'M7\' [ngClass]="array[132].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[132])\' (touchend)=\'finaliza(array[132])\' (touchstart)=\'inicia($event)\' >M7</div>\n<div class=\'NN7\' [ngClass]="array[133].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[133])\' (touchend)=\'finaliza(array[133])\' (touchstart)=\'inicia($event)\' >NN7</div>\n<div class=\'N7\' [ngClass]="array[134].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[134])\' (touchend)=\'finaliza(array[134])\' (touchstart)=\'inicia($event)\' >N7</div>\n<div class=\'O7\' [ngClass]="array[135].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[135])\' (touchend)=\'finaliza(array[135])\' (touchstart)=\'inicia($event)\' >O7</div>\n<div class=\'P7\' [ngClass]="array[136].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[136])\' (touchend)=\'finaliza(array[136])\' (touchstart)=\'inicia($event)\' >P7</div>\n<div class=\'Q7\' [ngClass]="array[137].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[137])\' (touchend)=\'finaliza(array[137])\' (touchstart)=\'inicia($event)\' >Q7</div>\n<div class=\'R7\' [ngClass]="array[138].A? \'primerarco\':\'nocompleto\'" (click)=\'selecciona(array[138])\' (touchend)=\'finaliza(array[138])\' (touchstart)=\'inicia($event)\' >R7</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n               \n\n\n\n\n\n\n\n\n\n\n\n              </div>\n\n              \n              <div class=\'circulos\'>\n\n                \n\n\n                  <div style=\'background:#54981e;\' (click)=\'pintaarcoverde()\'></div>\n                  <div style=\'border: 4px solid #54981e; background:#fff;\' (click)=\'pintarandomverde()\'></div> \n                  <div style=\'background:#ff0;\' (click)=\'pintaamarillo()\'></div>\n                  <div style=\'border: 4px solid #ff0; background:#fff;\' (click)=\'pintarandomamarillo()\'></div>\n                  <div style=\'background:#2a64f3;\' (click)=\'pintaazul()\'></div>\n                  <div style=\'border: 4px solid #2a64f3; background:#fff;\' (click)=\'pintarandomazul()\'></div>\n                    <div style=\'background:#ec5858;\' (click)=\'pintarojo()\'></div>\n                  <div style=\'border: 4px solid #ec5858; background:#fff;\' (click)=\'pintarandorojo()\'></div>\n\n                  \n\n            </div>\n\n          \n\n          </div>\n\n         \n  \n\n                    \n                     \n                      <!--<ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" [(ngModel)]="to_date" ></ion-datetime>\n          \n                      \n                \n\n\n                     \n                        \n                        <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" [(ngModel)]="to_date" ></ion-datetime>\n          \n   \n                        \n                        <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" [(ngModel)]="to_date" ></ion-datetime>-->\n      \n      <div class=\'cola\'>\n\n        <div class=\'etiqueta\'>\n\n              <div>En cola para prepararse </div>\n\n               <div   class=\'animated flipInX\' [ngClass]="estado_jugador==\'Preparacion\'? \'activajugador\':\'desactivajugador\'" style=\'padding:12px;\' >\n              {{estado_jugador}}\n              </div>\n\n        </div>\n        <div>\n\n                <ion-slides  slidesPerView=5  >\n\n                    <ion-slide   *ngFor="let d of jugadoresseleccionados" [ngClass]="d==jugador_actual? \'activajugador\':\'desactivajugador\'">\n                       <span>{{d}}</span>\n                    </ion-slide>\n\n                    <!--<ion-slide   *ngFor="let d of jugadoresseleccionados;"  >\n                       <span>{{d}}</span>\n                    </ion-slide>-->\n\n                </ion-slides>\n\n                \n\n        </div>\n\n\n      </div>    \n\n\n\n\n<div class=\'grid-container\'>\n\n    \n    <div>\n      \n         \n\n         \n\n          \n        \n    </div>\n    <div class=\'tiempos\'>\n\n        <!--<div>\n        <ion-datetime  displayFormat="HH:mm:ss" pickerFormat="HH:mm:ss" [(ngModel)]="primer_reloj" ></ion-datetime>\n        </div>-->\n\n\n        \n\n        <div>\n        T. de patear<br>\n        <span font-size=\'15px;\' *ngIf="estado_jugador==\'Preparacion\'">{{duracion}} Secs</span>\n        </div>\n\n        <div>Esta preparado para patear\n          <br>{{jugador_actual}}\n        </div>\n\n        <div>\n        Prepara para patear<br>\n        <span  font-size=\'15px;\' *ngIf="estado_jugador==\'En Evaluacion\'">{{duracion}} Secs</span>\n        </div>\n        <!--<div>\n        <ion-datetime displayFormat="HH:mm:ss" pickerFormat="HH:mm:ss" [(ngModel)]="segundo_reloj" ></ion-datetime>\n        </div>-->\n\n\n    </div>\n\n\n    <div></div>\n    <!--<div (click)=\'seleccionarepetirjuego()\'>\n      \n          <button ion-button round color=\'dark\' round>Repetir Juego\n          <ion-badge item-end style=\'margin-left: 5px;\'>{{numerorepetir}}</ion-badge>\n          </button>\n          \n\n    </div>-->\n\n     \n\n</div>\n\n\n\n\n             \n\n\n<div class=\'barra_inferior\' padding>\n\n \n<!--Guarda Juego -->\n\n<ion-grid>\n\n<ion-row>\n\n<ion-col col-3 *ngIf=\'juego && !editajuego\'>\n\n  <button  ion-button round color=\'dark\' (click)=\'guardadetallejuego()\'>Guarda Juego</button>\n\n</ion-col>\n\n<ion-col col-3 *ngIf=\'juegoguardado\'>\n\n\n<h5 style="color:#fff;" *ngIf=\'items.length>=indice_item+1\'>{{items.length}} Items |  Actual {{indice_item+1}}</h5>\n\n<h5 style="color:#fff;" *ngIf=\'indice_itemextras.length>=indice_itemextras+1\'>{{items.length}} Items |  Actual {{indice_itemextras+1}}</h5>\n\n\n\n</ion-col>\n\n\n\n<ion-col *ngIf=\'!activaplay\' col-3>\n\n<button ion-button full color=\'dark\' round *ngIf=\'activasecuencia\' class=\'animated flipInX\' (click)=\'secuencianext(array)\'>\n\n  Guarda Secuencia\n\n</button>\n\n</ion-col>\n\n<ion-col *ngIf=\'!activaplay\' col-3>\n\n<button ion-button full color=\'secondary\' round *ngIf=\'activasecuencia\' class=\'animated flipInX\' (click)=\'finalizasecuencia()\'>\n\n  Finalizar Secuencia\n\n</button>\n\n</ion-col>\n\n<ion-col *ngIf=\'activaplay\' col-3>\n\n\n\n<button  ion-button full color=\'danger\' round *ngIf=\'activasecuencia\' class=\'animated flipInX\' >\n\n   Secuencia {{ordernsecuencia}}\n\n</button>\n\n</ion-col>\n\n\n\n\n\n\n </ion-row>\n\n</ion-grid>\n\n\n               \n\n\n\n</div>\n\n<div class=\'menu\'>\n\n\n\n<div class=\'juego punch\'>Juego\n\n    <div class=\'menujuego\'  >\n    <div class=\'nuevo_juego submenu\' (click)=\'seleccionanuevojuego()\'>Nuevo <ion-icon name="arrow-dropright" style=\'float:right;\'></ion-icon></div>\n    <div class=\'guardado submenu\'>Guardados <ion-icon name="arrow-dropright" style=\'float:right;\'></ion-icon></div>\n    <div class=\'repetir submenu\'>Repetir <ion-icon name="arrow-dropright" style=\'float:right;\'></ion-icon></div>\n    <div class=\'consecutivo submenu\'>Consecutivos <ion-icon name="arrow-dropright" style=\'float:right;\'></ion-icon></div>\n    <div class=\'aleatorio submenu\'>Aleatorio <ion-icon name="arrow-dropright" style=\'float:right;\'></ion-icon></div>\n    </div>\n\n</div>\n\n<div class=\'puntaje  punch\' (click)=\'guardapuntaje()\'>Puntaje\n\n    <div class=\'menupuntaje\'>\n    <div class=\'bajos submenu\' >Bajos <ion-icon name="arrow-dropright" style=\'float:right;\'></ion-icon></div>\n    <div class=\'altos submenu\'>Altos <ion-icon name="arrow-dropright" style=\'float:right;\'></ion-icon></div> \n    </div>\n\n\n</div>\n<div class=\'miperfil punch\' (click)=\'traemiperfil()\'>Mi Perfil</div>\n<div class=\'tablero_actual punch\' (click)=\'tablero()\'>Tablero Actual</div>\n<div class=\'manual_usuario punch\'>Manual</div>\n<div class=\'puntajeSN punch\'>Puntajes S/N\n\n    <div class=\'menupuntajeSN\'>\n    <div class=\'bajos submenu\' >Si <ion-icon name="arrow-dropright" style=\'float:right;\'></ion-icon></div>\n    <div class=\'altos submenu\'>No <ion-icon name="arrow-dropright" style=\'float:right;\'></ion-icon></div> \n    </div>\n\n\n</div>\n<div class=\'resultados punch\'>Resultados\n\n    <div class=\'menuresultado\'  >\n    <div class=\'nuevo_juego submenu\' >Ultimo Juego <ion-icon name="arrow-dropright" style=\'float:right;\'></ion-icon></div>\n    <div class=\'guardado submenu\'>Del Dia <ion-icon name="arrow-dropright" style=\'float:right;\'></ion-icon></div>\n    <div class=\'repetir submenu\'>Por Tiro <ion-icon name="arrow-dropright" style=\'float:right;\'></ion-icon></div>\n    <div class=\'consecutivo submenu\'>Por Fecha <ion-icon name="arrow-dropright" style=\'float:right;\'></ion-icon></div>\n   \n    </div>\n\n\n\n</div>\n\n\n</div>\n\n\n\n<ion-row padding >\n\n\n      <span>Repitiendo juego No {{index_numerorepetir+1}}</span>\n\n      <span>Item  {{indice_item_extras}} {{item_extras?item_extras.length:0}}</span>\n\n\n     \n\n      <span *ngIf=\'fp\'>Pastillas: <span *ngFor="let d of fp"> {{d.pastilla}}</span></span>\n\n\n\n      <span *ngIf=\'activasecuencia\'>\n\n\n      | Tipo de Secuencia : {{tiposecuencia}}\n\n\n\n      | Numero de Secuencias : {{indexsecuencia}}</span>\n\n         <h4 style=\'color:#fff\' *ngIf=\'tiposdetiroseleccionados\'>Tipo de tiro : {{tiposdetiroseleccionados}}   </h4>\n\n\n</ion-row>\n\n\n<!--<ion-fab   right style=\'bottom: 234px;\' (click)=\'seleccionadefensa()\'>\n    <button ion-fab color="warning"><ion-icon name="person"></ion-icon></button>\n   \n</ion-fab>\n\n<ion-fab   right style=\'bottom: 160px;\' (click)=\'seleccionajugadores()\'>\n    <button ion-fab color="light"><ion-icon name="person"></ion-icon></button>\n   \n</ion-fab>\n\n\n<ion-fab   right style=\'bottom: 86px;\' (click)=\'seleccionatipodetiro()\'>\n    <button ion-fab color="light"><ion-icon name="football"></ion-icon></button>\n   \n</ion-fab>-->\n\n\n<ion-fab right [navPush]="rootPage" bottom right >\n    <button ion-fab color="dark" ><ion-icon name="settings"></ion-icon></button>\n   \n</ion-fab>\n\n\n\n<!--<ion-icon *ngIf=\'activapelota\' class=\'animated infinite pulse apuntapelota\' color=\'light\' name="arrow-round-down"></ion-icon>-->\n                \n\n</ion-content>\n'/*ion-inline-end:"/Users/xienciasdev/code/smart/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_data_data__["a" /* DataProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */]) === "function" && _p || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map