// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Provides an abstraction for normalizing headings.
    /// </summary>
    public interface IHeadingNormalizer
    {
        /// <summary>
        /// Returns a normalized representation of the specified <paramref name="heading" />.
        /// </summary>
        /// <param name="heading">The heading to normalize.</param>
        /// <returns>
        /// A normalized representation of the specified <paramref name="heading" />.
        /// </returns>
        string Normalize(string heading);
    }
}
