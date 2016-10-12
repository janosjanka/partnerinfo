// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Xunit;

namespace Partnerinfo
{
    public class UriPartNormalizerTests
    {
        [Fact]
        public void ShouldReturnValidUrlWithoutWhiteSpaces()
        {
            // Setup
            var normalizer = new UriPartNormalizer();

            // Act
            var result = normalizer.Normalize("Janka  János Zoltán   ");

            // Assert
            Assert.Equal(result, "janka-janos-zoltan");
        }
    }
}
