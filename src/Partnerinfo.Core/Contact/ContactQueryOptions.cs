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
        /// Gets or sets which contact fields to search for.
        /// </summary>
        /// <value>
        /// The fields.
        /// </value>
        public ContactQueryFields Fields { get; set; } = ContactQueryFields.None;

        /// <summary>
        /// Gets or sets how items in a list are sorted.
        /// </summary>
        /// <value>
        /// The sort order.
        /// </value>
        public ContactQuerySortOrder SortOrder { get; set; } = ContactQuerySortOrder.Recent;

        /// <summary>
        /// Gets or sets the paging.
        /// </summary>
        /// <value>
        /// The paging.
        /// </value>
        public ContactQueryPaging Paging { get; set; }
    }
}
