// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;

namespace Partnerinfo
{
    /// <summary>
    /// Provides an abstraction for normalizing headings.
    /// </summary>
    /// <seealso cref="Partnerinfo.IHeadingNormalizer" />
    public sealed class HeadingNormalizer : IHeadingNormalizer
    {
        /// <summary>
        /// A static heading normalizer that helps decrease GC pressure.
        /// </summary>
        public static readonly HeadingNormalizer Default = new HeadingNormalizer();

        /// <summary>
        /// Returns a normalized representation of the specified <paramref name="heading" />.
        /// </summary>
        /// <param name="heading">The heading to normalize.</param>
        /// <returns>
        /// A normalized representation of the specified <paramref name="heading" />.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">heading</exception>
        public string Normalize(string heading)
        {
            if (heading == null)
            {
                throw new ArgumentNullException(nameof(heading));
            }

            // TODO: Normalize (titlify) the specified heading. See: http://www.nytimes.com/
            // "theories of the race: how solid is clinton’s lead" =>
            // "Theories of the Race: How Solid Is Clinton’s Lead?"

            throw new NotImplementedException();
        }
    }
}
