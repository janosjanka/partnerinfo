// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Represents resource keys shared across application boundaries.
    /// </summary>
    public static class ResourceKeys
    {
        /// <summary>
        /// The name of the cookie that is used by the anti-forgery system.
        /// </summary>
        public static readonly string AntiForgeryTokenName = "PI-AFG";

        /// <summary>
        /// The name of the cookie that identifies a culture.
        /// </summary>
        public static readonly string CultureCookieName = "PI-LOC";

        /// <summary>
        /// The name of the cookie that identifies a user.
        /// </summary>
        public static readonly string IdentityTokenCookieName = "PI-ITK";
    }
}
