// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo.Security
{
    /// <summary>
    /// Represents the result of security operations.
    /// </summary>
    public sealed class SecurityResult : OpStatusResult
    {
        /// <summary>
        /// Gets an access visibility indicating whether the resource is available on the Web.
        /// </summary>
        /// <value>
        /// The access visibility.
        /// </value>
        public AccessVisibility Visibility { get; }

        /// <summary>
        /// Initializes a new instance of the <see cref="SecurityResult" /> class.
        /// </summary>
        public SecurityResult()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="SecurityResult" /> class.
        /// </summary>
        /// <param name="visibility">The access visibility whether the resource is available on the Web.</param>
        public SecurityResult(AccessVisibility visibility)
        {
            Visibility = visibility;
        }
    }
}
