// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Provides an abstraction for normalizing URIs.
    /// </summary>
    public interface IUriNormalizer
    {
        /// <summary>
        /// Returns a normalized representation of the specified <paramref name="uri" />.
        /// </summary>
        /// <param name="uri">The uri to normalize.</param>
        /// <returns>
        /// A normalized representation of the specified <paramref name="uri" />.
        /// </returns>
        string Normalize(string uri);
    }
}
