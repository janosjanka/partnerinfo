// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using Xunit;

namespace Partnerinfo
{
    public class UriPartNormalizerTests
    {
        [Fact]
        public void ShouldReturnValidUri()
        {
            // Setup
            var normalizer = new UriPartNormalizer();

            // Act
            var result = normalizer.Normalize("   Janka [!-!] János  ---  Zoltán   ");

            // Assert
            Assert.True(Uri.IsWellFormedUriString(result, UriKind.Relative));
        }

        [Fact]
        public void ShouldReturnFriendlyUri()
        {
            // Setup
            var normalizer = new UriPartNormalizer();

            // Act
            var result = normalizer.Normalize("   Janka [!-!] János  ---  Zoltán   ");

            // Assert
            Assert.Equal("janka-janos-zoltan", result, StringComparer.Ordinal);
        }
    }
}
