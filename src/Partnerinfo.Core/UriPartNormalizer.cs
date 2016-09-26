// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Provides an implementation for normalizing URIs.
    /// </summary>
    /// <seealso cref="Partnerinfo.IUriPartNormalizer" />
    public sealed class UriPartNormalizer : IUriPartNormalizer
    {
        /// <summary>
        /// A static uri part normalizer that helps decrease GC pressure.
        /// </summary>
        public static readonly UriPartNormalizer Default = new UriPartNormalizer();

        /// <summary>
        /// Returns a normalized representation of the specified <paramref name="uriPart" />.
        /// </summary>
        /// <param name="uriPart">The uri to normalize.</param>
        /// <returns>
        /// A normalized representation of the specified <paramref name="uriPart" />.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">uriPart</exception>
        public string Normalize(string uriPart) => UriUtility.Normalize(uriPart);
    }
}
