var geocoder;

beforeEach(function() {
    var constructorSpy = spyOn(google.maps, 'Geocoder');
    geocoder = jasmine.createSpyObj('Geocoder', ['geocode']);

    constructorSpy.and.returnValue(geocoder);
});

it('returns an error if the data service returns no results', function(done) {
    var location = 'some location value';
    geocoder.geocode.and.callFake(function(request, callback) {
        callback([], google.maps.GeocoderStatus.ZERO_RESULTS);
    });

    // Act
    var result = geocodeLocation(location);

    // Assert
    expect(geocoder.geocode).toHaveBeenCalled();
    var lastCall = geocoder.geocode.calls.mostRecent();
    var args = lastCall.args[0];
    expect(args.address).toEqual(location);

    result.fail(done);
});