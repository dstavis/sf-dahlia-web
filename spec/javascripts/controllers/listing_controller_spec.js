(function() {
  'use strict';

  describe('ListingController', function() {
    jasmine.getJSONFixtures().fixturesPath = '/public/json';
    var scope;
    var state;
    var fakeListingService;
    var fakeListings = getJSONFixture('/listings.json').listings;
    var fakeListing = getJSONFixture('/listings/0.json').listing;
    var fakeListingFavorites =  {};

    beforeEach(module('dahlia.controllers', function($provide) {
      fakeListingService = {
        listings: fakeListings,
        listing: fakeListing,
        favorites: fakeListingFavorites,
      };

      $provide.value('ListingService', fakeListingService);
    }));

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      $controller('ListingController', {
        $scope: scope,
        $state: state,
      });
    }));

    describe('$scope.listings', function() {
      it('populates scope with array of listings', function() {
        expect(scope.listings).toEqual(fakeListings);
      });
    });

    describe('$scope.listings', function() {
      it('populates scope with a single listing', function() {
        expect(scope.listing).toEqual(fakeListing);
      });
    });

    describe('$scope.favorites', function() {
      it('populates scope with favorites', function() {
        expect(scope.favorites).toEqual(fakeListingFavorites);
      });
    });
  });
}());
