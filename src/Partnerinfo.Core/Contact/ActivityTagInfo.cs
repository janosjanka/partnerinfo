// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo.Contact
{
    /// <summary>
    /// Represents an immutable, thread-safe, and cachable activity (business) tag as DDD value object.
    /// </summary>
    public sealed class ActivityTagInfo
    {
        /// <summary>
        /// Gets the URI specified when this <see cref="ActivityTagInfo" /> was created.
        /// </summary>
        public string Uri { get; private set; }

        /// <summary>
        /// Gets the name specified when this <see cref="ActivityTagInfo" /> was created.
        /// </summary>
        public string Name { get; private set; }

        /// <summary>
        /// Gets the color specified when this <see cref="ActivityTagInfo" /> was created.
        /// </summary>
        public RGBColorInfo Color { get; private set; }

        /// <summary>
        /// Prevents a default instance of the <see cref="ActivityTagInfo" /> class from being created.
        /// </summary>
        /// <remarks>
        /// The private parameterless constructor enables two-way serialization scenarios.
        /// </remarks>
        private ActivityTagInfo()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ActivityTagInfo" /> class.
        /// </summary>
        /// <param name="uri">A <see cref="string" /> that contains a URI.</param>
        /// <param name="name">A <see cref="string" /> that contains a name.</param>
        public ActivityTagInfo(string uri, string name)
        {
            Uri = uri;
            Name = name;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ActivityTagInfo" /> class.
        /// </summary>
        /// <param name="uri">A <see cref="string" /> that contains a URI.</param>
        /// <param name="name">A <see cref="string" /> that contains a name.</param>
        /// <param name="color">A <see cref="RGBColorInfo" /> that describes a RGB color.</param>
        public ActivityTagInfo(string uri, string name, RGBColorInfo color)
        {
            Uri = uri;
            Name = name;
            Color = color;
        }
    }
}
