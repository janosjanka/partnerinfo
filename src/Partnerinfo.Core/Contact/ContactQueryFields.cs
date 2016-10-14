// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;

namespace Partnerinfo.Contact
{
    /// <summary>
    /// Specifies parameters to use in a search of <see cref="ContactItem" /> objects.
    /// </summary>
    [Flags]
    public enum ContactQueryFields
    {
        /// <summary>
        /// No extra fields included in the result set.
        /// </summary>
        None = 0,

        /// <summary>
        /// Calculates the total number of results before paging is applied.
        /// </summary>
        Total = 1 << 0,

        /// <summary>
        /// The sponsor is included in the result set.
        /// </summary>
        Sponsor = 1 << 1,

        /// <summary>
        /// User-defined attributes are included in the result set.
        /// </summary>
        Attributes = 1 << 2,

        /// <summary>
        /// Business tags belong to the contact are included in the result set.
        /// </summary>
        BusinessTags = 1 << 3,

        /// <summary>
        /// All fields are included in the result set.
        /// </summary>
        All = Total | Sponsor | Attributes | BusinessTags
    }
}
