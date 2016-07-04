angular.module( `webpack`, [ `ui.router` ] )
	.config( function( $stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise( `/` );

		$stateProvider
			.state( `routeOne`, {
				url: `/`
				, templateUrl: "./route-one/route-one.html"
				, controller: `routeOneCtrl`
			} ).state( `routeTwo`, {
			url: `/a-route`
			, templateUrl: "./route-two/route-two.html"
			, controller: `routeTwoCtrl`
		} );
	} );