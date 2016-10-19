// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Represents strongly typed global configuration settings for client-side.
    /// </summary>
    public sealed class ClientAppOptions
    {
        /// <summary>
        /// Gets or sets the name of the culture cookie.
        /// </summary>
        /// <value>
        /// The name of the culture cookie.
        /// </value>
        public string CultureCookieName { get; set; } = ResourceKeys.CultureCookieName;
    }
}
