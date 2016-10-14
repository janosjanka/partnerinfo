// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Represents a collection of objects that can be used by repositories.
    /// </summary>
    /// <typeparam name="T">The type of the result.</typeparam>
    public sealed class ListResult
    {
        /// <summary>
        /// Gets the strongly typed list of results to return.
        /// </summary>
        /// <value>
        /// The strongly typed list of results to return.
        /// </value>
        public object Data { get; set; }

        /// <summary>
        /// Gets or sets the paging.
        /// </summary>
        /// <value>
        /// The paging.
        /// </value>
        public ListPagingResult Paging { get; set; }
    }
}
