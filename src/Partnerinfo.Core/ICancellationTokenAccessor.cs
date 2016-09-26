// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Threading;

namespace Partnerinfo
{
    /// <summary>
    /// Represents a service that access a synchronization token can be used by API calls.
    /// </summary>
    /// <remarks>
    /// In contrast to Microsoft ASP.NET Identity design, this library does not specify a dependency on Microsoft.AspNetCore.Http.
    /// </remarks>
    public interface ICancellationTokenAccessor
    {
        /// <summary>
        /// Returns a <see cref="CancellationToken" /> used by API calls.
        /// </summary>
        /// <returns>
        /// The <see cref="CancellationToken" />.
        /// </returns>
        CancellationToken GetToken();
    }
}
