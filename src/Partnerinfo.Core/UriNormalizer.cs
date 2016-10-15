// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Partnerinfo.Utilities;

namespace Partnerinfo
{
    /// <summary>
    /// Provides an implementation for normalizing URIs.
    /// </summary>
    /// <seealso cref="Partnerinfo.IUriNormalizer" />
    public sealed class UriNormalizer : IUriNormalizer
    {
        /// <summary>
        /// A static uri part normalizer that helps decrease GC pressure.
        /// </summary>
        public static readonly UriNormalizer Default = new UriNormalizer();

        /// <summary>
        /// Returns a normalized representation of the specified <paramref name="uri" />.
        /// </summary>
        /// <param name="uri">The uri to normalize.</param>
        /// <returns>
        /// A normalized representation of the specified <paramref name="uri" />.
        /// </returns>
        public string Normalize(string uri) => UriUtilities.Normalize(uri);
    }
}
