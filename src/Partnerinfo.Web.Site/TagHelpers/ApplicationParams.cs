// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo.TagHelpers
{
    /// <summary>
    /// Represents strongly typed knockout application parameters for <see cref="Microsoft.AspNetCore.Razor.TagHelpers.ITagHelper" />.
    /// </summary>
    public sealed class ApplicationParams
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
