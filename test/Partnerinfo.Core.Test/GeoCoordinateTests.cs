// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Xunit;

namespace Partnerinfo
{
    public class GeoCoordinateTests
    {
        [Fact]
        public void EqualsWithTheSamePrecision()
        {
            var coordinate1 = new GeoCoordinateInfo(47.53333, 21.63333, GeoDegreePrecision.IndividualTrees);
            var coordinate2 = new GeoCoordinateInfo(47.5333367, 21.6333367, GeoDegreePrecision.IndividualTrees);
                        
            Assert.StrictEqual(coordinate1, coordinate2);
        }
    }
}
