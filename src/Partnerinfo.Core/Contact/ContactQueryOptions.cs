// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo.Contact
{
    /// <summary>
    /// Used to specify the query options when searching for contacts.
    /// </summary>
    public sealed class ContactQueryOptions
    {
        /// <summary>
        /// Gets or sets the text for which to search.
        /// </summary>
        /// <value>
        /// The text.
        /// </value>
        public string Text { get; set; }

        /// <summary>
        /// Gets or sets how items in a list are sorted.
        /// </summary>
        /// <value>
        /// The sort order.
        /// </value>
        public ContactQuerySortOrder OrderBy { get; set; }

        /// <summary>
        /// Gets or sets the number of rows to skip, before starting to return rows from the query expression.
        /// </summary>
        /// <value>
        /// The number of rows to skip.
        /// </value>
        public int Offset { get; set; } = 0;

        /// <summary>
        /// Gets or sets the number of rows to return, after processing the offset clause.
        /// </summary>
        /// <value>
        /// The number of rows to return.
        /// </value>
        public int Limit { get; set; } = 50;

        /// <summary>
        /// Gets or sets which contact fields to search for.
        /// </summary>
        /// <value>
        /// The fields.
        /// </value>
        public ContactQueryFields Fields { get; set; }
    }
}
