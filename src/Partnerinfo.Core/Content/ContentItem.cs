// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo.Content
{
    /// <summary>
    /// Represents a content item in the system.
    /// </summary>
    public class ContentItem
    {
        /// <summary>
        /// Gets or sets the URI (Unique Resource Identifier) for this content provided by the storage.
        /// </summary>
        /// <value>
        /// The URI (Unique Resource Identifier).
        /// </value>
        public string Uri { get; set; }

        /// <summary>
        /// Gets or sets the mime type for this content provided by the storage.
        /// </summary>
        /// <value>
        /// The mime type.
        /// </value>
        public string Type { get; set; }
    }
}
