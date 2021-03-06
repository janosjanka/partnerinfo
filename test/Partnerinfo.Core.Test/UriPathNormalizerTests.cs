﻿// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using Xunit;

namespace Partnerinfo
{
    public sealed class UriPathNormalizerTests
    {
        private const string Text = " -- Hello  -  Janka  [! - !]  János  ---  Zoltán.1984_12~ok --  ";

        [Fact]
        public void ValidateNormalizedUri()
        {
            var normalizer = new UriPathNormalizer();
            var result = normalizer.Normalize(Text);

            Assert.True(Uri.IsWellFormedUriString(result, UriKind.Relative));
        }

        [Fact]
        public void ContainsFriendlyChars()
        {
            var normalizer = new UriPathNormalizer();
            var result = normalizer.Normalize(Text);

            Assert.Matches("[-a-z0-9]+", result);
        }

        [Fact]
        public void ContainsOneSeparator()
        {
            var normalizer = new UriPathNormalizer();
            var result = normalizer.Normalize(Text);

            Assert.DoesNotContain("--", result);
        }
    }
}
