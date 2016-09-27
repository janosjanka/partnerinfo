// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo.Security
{
    /// <summary>
    /// Represents an access visibility value indicating whether a resource is available on the Web.
    /// </summary>
    public enum AccessVisibility : byte
    {
        /// <summary>
        /// Indicates that the visibility is not being used.
        /// </summary>
        Unknown = 0,

        /// <summary>
        /// Indicates a public resource on the Internet.
        /// </summary>
        Public = 10,

        /// <summary>
        /// Indicates a public resource which is only readable by a link and not indexed by search engines.
        /// </summary>
        AnyoneWithLink = 20,

        /// <summary>
        /// Indicates a protected resource which is only readable by a link shipped with a contact identifier.
        /// </summary>
        ContactWithLink = 30,

        /// <summary>
        /// Indicates a private resource which is only readable by system users.
        /// </summary>
        Private = 40
    }
}
