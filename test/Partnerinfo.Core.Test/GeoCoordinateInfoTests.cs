// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Xunit;

namespace Partnerinfo
{
    public sealed class GeoCoordinateInfoTests
    {
        [Fact]
        public void VerifyEquality()
        {
            var point1 = new GeoCoordinateInfo(null, null);
            var point2 = new GeoCoordinateInfo(null, null);
            var point3 = new GeoCoordinateInfo(1.5, 2.5);
            var point4 = new GeoCoordinateInfo(1.5, 2.5);

            Assert.StrictEqual(point1, point2);
            Assert.StrictEqual(point3, point4);
        }
    }
}
