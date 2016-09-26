// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo.Contact
{
    public enum ContactSortOrder
    {
        /// <summary>
        /// Items are returned in chronological order.
        /// </summary>
        None = 0,

        /// <summary>
        /// Items are returned in reverse chronological order.
        /// </summary>
        Recent = 1,

        /// <summary>
        /// Items are ordered alphabetically by name.
        /// </summary>
        Name = 2
    }
}
