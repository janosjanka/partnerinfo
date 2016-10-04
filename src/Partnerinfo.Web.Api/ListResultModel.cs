// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Collections.Generic;

namespace Partnerinfo
{
    /// <summary>
    /// Represents a collection of objects that can be used by repositories.
    /// </summary>
    /// <typeparam name="T">The type of the result.</typeparam>
    public sealed class ListResultModel<T>
    {
        /// <summary>
        /// Gets the strongly typed list of results to return.
        /// </summary>
        /// <value>
        /// The strongly typed list of results to return.
        /// </value>
        public IEnumerable<T> Data { get; set; }

        /// <summary>
        /// Gets or sets a link to the previous page of this list.
        /// </summary>
        /// <value>
        /// The link.
        /// </value>
        public string PrevLink { get; set; }

        /// <summary>
        /// Gets or sets a link to the next page of this list.
        /// </summary>
        /// <value>
        /// The link.
        /// </value>
        public string NextLink { get; set; }
    }
}
