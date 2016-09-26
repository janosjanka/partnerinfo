// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;

namespace Partnerinfo.Contact
{
    [Flags]
    public enum ContactField
    {
        /// <summary>
        /// No extra fields included in the result set.
        /// </summary>
        None = 0,

        /// <summary>
        /// The sponsor is included in the result set.
        /// </summary>
        Sponsor = 1 << 0,

        /// <summary>
        /// Business tags belong to the contact are included in the result set.
        /// </summary>
        BusinessTags = 1 << 1,

        /// <summary>
        /// All fields are included in the result set.
        /// </summary>
        All = Sponsor | BusinessTags
    }
}
