// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using Xunit;

namespace Partnerinfo
{
    public class GeoCoordinateTests
    {

        [Fact]
        public void ValidateNormalizedUri()
        {
            var normalizer = new GeoCoordinateInfo(47.5333300, 21.6333300);
            var result = normalizer.Normalize(Text);

            Assert.True(Uri.IsWellFormedUriString(result, UriKind.Relative));
        }
    }
}
