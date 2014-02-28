(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/nowplaying/nowplaying.html',
                    title: 'nowplaying',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-play fa-2x"></i> Now Playing'
                    }
                }
            }, {
                url: '/maintenance',
                config: {
                    title: 'maint',
                    templateUrl: 'app/maintenance/maint.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-gear fa-2x"></i> Maintenance'
                    }
                }
            }
        ];
    }
})();