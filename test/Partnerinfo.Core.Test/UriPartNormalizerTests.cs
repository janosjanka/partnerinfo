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
            var result = normalizer.Normalize(" - Hello  -  Janka  [! - !]  János  ---  Zoltán.1984_12~ok   ");

            // Assert
            Assert.True(Uri.IsWellFormedUriString(result, UriKind.Relative));
        }

        [Fact]
        public void ShouldReturnFriendlyUri()
        {
            // Setup
            var normalizer = new UriPartNormalizer();

            // Act
            var result = normalizer.Normalize(" - Hello  -  Janka  [! - !]  János  ---  Zoltán.1984_12~ok   ");

            // Assert
            Assert.Equal("hello-janka-janos-zoltan-1984-12-ok", result, StringComparer.Ordinal);
        }
    }
}
