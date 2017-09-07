angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
    function($scope, Listings) {
        $scope.listings = Listings;
        $scope.detailedInfo = undefined;
        /*
          Implement these functions in the controller to make your application function
          as described in the assignment spec.
         */
        $scope.addListing = function(code, name, latitude, longitude, address) {
            var listingToAdd = {
                "code": code.toUpperCase(),
                "name": name,
                "coordinates": {
                    "latitude": latitude,
                    "longitude": longitude
                },
                "address": address
            }
            if (listingToAdd.code == null)
                listingToAdd.code = "N/A";
            if (listingToAdd.name == null)
                listingToAdd.name = "N/A";
            if (listingToAdd.coordinates.latitude == null)
                listingToAdd.coordinates.latitude = "N/A";
            if (listingToAdd.coordinates.longitude == null)
                listingToAdd.coordinates.longitude = "N/A";
            if (listingToAdd.address == null)
                listingToAdd.address = "N/A";

            $scope.listings.push(listingToAdd);
        };

        $scope.deleteListing = function(index) {
            $scope.listings.splice(index, 1)
        };
        $scope.showDetails = function(index) {
            $scope.detailedInfo = index;
            if (index.coordinates == null) {
                index.coordinates = {
                    "latitude": "N/A",
                    "longitude": "N/A"
                }
            }

        };
    }
]);
