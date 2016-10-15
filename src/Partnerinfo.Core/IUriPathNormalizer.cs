// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Provides an abstraction for normalizing URI paths.
    /// </summary>
    public interface IUriPathNormalizer
    {
        /// <summary>
        /// Returns a normalized representation of the specified <paramref name="path" />.
        /// </summary>
        /// <param name="path">The path to normalize.</param>
        /// <returns>
        /// A normalized representation of the specified <paramref name="path" />.
        /// </returns>
        string Normalize(string path);
    }
}
