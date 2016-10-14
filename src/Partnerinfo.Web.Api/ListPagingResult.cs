// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Represents a collection of objects that can be used by repositories.
    /// </summary>
    public sealed class ListPagingResult
    {
        /// <summary>
        /// Gets or sets a link to the previous page of this list.
        /// </summary>
        /// <value>
        /// The link.
        /// </value>
        public string Previous { get; set; }

        /// <summary>
        /// Gets or sets a link to the next page of this list.
        /// </summary>
        /// <value>
        /// The link.
        /// </value>
        public string Next { get; set; }
    }
}
