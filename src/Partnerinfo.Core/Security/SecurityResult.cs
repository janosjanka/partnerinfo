// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo.Security
{
    /// <summary>
    /// Represents the result of security operations.
    /// </summary>
    public sealed class SecurityResult
    {
        /// <summary>
        /// A <see cref="SecurityResult" /> to refuse to take any further action. It corresponds to HTTP 403 Forbidden.
        /// </summary>
        public static readonly SecurityResult AccessDenied = new SecurityResult(false, AccessVisibility.Unknown);

        /// <summary>
        /// Gets or sets a value indicating whether this instance has permission.
        /// </summary>
        /// <value>
        /// <c>true</c> if the access attempt was successful; otherwise, <c>false</c>.
        /// </value>
        public bool AccessGranted { get; }

        /// <summary>
        /// Gets a value indicating whether the resource can be available on the Web.
        /// </summary>
        /// <value>
        /// The visibility for an ACE (Access Control Entry).
        /// </value>
        public AccessVisibility Visibility { get; }

        /// <summary>
        /// Initializes a new instance of the <see cref="SecurityResult" /> class.
        /// </summary>
        /// <param name="accessGranted"><c>true</c> if the access attempt was successful; otherwise, <c>false</c>.</param>
        /// <param name="visibility">The visibility.</param>
        public SecurityResult(bool accessGranted, AccessVisibility visibility)
        {
            AccessGranted = accessGranted;
            Visibility = visibility;
        }
    }
}
