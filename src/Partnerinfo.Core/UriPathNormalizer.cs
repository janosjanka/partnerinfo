// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Partnerinfo.Utilities;

namespace Partnerinfo
{
    /// <summary>
    /// Provides an implementation for normalizing URIs.
    /// </summary>
    /// <seealso cref="Partnerinfo.IUriPathNormalizer" />
    public sealed class UriPathNormalizer : IUriPathNormalizer
    {
        /// <summary>
        /// A static uri part normalizer that helps decrease GC pressure.
        /// </summary>
        public static readonly UriPathNormalizer Default = new UriPathNormalizer();

        /// <summary>
        /// Returns a normalized representation of the specified <paramref name="path" />.
        /// </summary>
        /// <param name="path">The path to normalize.</param>
        /// <returns>
        /// A normalized representation of the specified <paramref name="path" />.
        /// </returns>
        public string Normalize(string path) => UriUtilities.NormalizePath(path);
    }
}
