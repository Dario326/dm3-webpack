export default function router( $stateProvider, $urlRouterProvider ) {
	$urlRouterProvider.otherwise( `/` );

	$stateProvider
		.state( `routeOne`, {
			url: `/`
			, template: require( "./route-one/route-one.html" )
			// , controller: `routeOneCtrl`
		} ).state( `routeTwo`, {
		url: `/a-route`
		, template: require( "./route-two/route-two.html" )
		// , controller: `routeTwoCtrl`
	} );
}

router.$inject = [ `$stateProvider`, `$urlRouterProvider` ];