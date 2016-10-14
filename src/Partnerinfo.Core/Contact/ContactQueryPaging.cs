// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo.Contact
{
    /// <summary>
    /// Specifies how many contacts in a list are included.
    /// </summary>
    public sealed class ContactQueryPaging
    {
        /// <summary>
        /// Gets or sets the number of rows to skip, before starting to return rows from the query expression.
        /// </summary>
        /// <value>
        /// The number of rows to skip.
        /// </value>
        public int Offset { get; set; }

        /// <summary>
        /// Gets or sets the number of rows to return, after processing the offset clause.
        /// </summary>
        /// <value>
        /// The number of rows to return.
        /// </value>
        public int Limit { get; set; }
    }
}
