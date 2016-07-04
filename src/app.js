import angular from "angular";
import uiRouter from "angular-ui-router";

import router from "./router";
import rootCtrl from "./rootCtrl";

angular.module( `webpack`, [ uiRouter ] )
	.config( router )
	.controller( "rootCtrl", rootCtrl )