// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Xunit;

namespace Partnerinfo
{
    public sealed class GeoCoordinateTests
    {
        [Theory]
        [InlineData(GeoDegreePrecision.CountryOrRegion)]
        [InlineData(GeoDegreePrecision.CityOrDistrict)]
        [InlineData(GeoDegreePrecision.TownOrVillage)]
        [InlineData(GeoDegreePrecision.Neighborhood)]
        [InlineData(GeoDegreePrecision.IndividualStreet)]
        public void EqualsWithTheSamePrecision(GeoDegreePrecision precision)
        {
            var coordinate1 = new GeoCoordinateInfo(47.53333, 21.63333, precision);
            var coordinate2 = new GeoCoordinateInfo(47.5333367, 21.6333367, precision);

            Assert.StrictEqual(coordinate1, coordinate2);
        }
    }
}
