// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Linq;
using Xunit;

namespace Partnerinfo
{
    public class OperationResultTests
    {
        public class IdentityResultTest
        {
            [Fact]
            public void VerifyDefaultConstructor()
            {
                var result = new OperationResult();
                Assert.False(result.Succeeded);
                Assert.Equal(0, result.Errors.Count());
            }

            [Fact]
            public void NullFailedUsesEmptyErrors()
            {
                var result = OperationResult.Failed();
                Assert.False(result.Succeeded);
                Assert.Equal(0, result.Errors.Count());
            }
        }
    }
}
