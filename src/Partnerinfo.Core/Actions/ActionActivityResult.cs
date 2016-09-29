// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo.Actions
{
    /// <summary>
    /// Represents the result of an operation.
    /// </summary>
    public sealed class ActionActivityResult
    {
        /// <summary>
        /// Gets the system user associated with the executing action.
        /// </summary>
        /// <value>
        /// The system user.
        /// </value>
        public IUserIdentity User { get; internal set; }

        /// <summary>
        /// Gets the contact associated with the executing action.
        /// </summary>
        /// <value>
        /// The contact.
        /// </value>
        public IUserIdentity Contact { get; internal set; }

        /// <summary>
        /// Gets the string that contains the redirect URL.
        /// </summary>
        /// <value>
        /// The redirect URL.
        /// </value>
        public string ReturnUrl { get; internal set; }

        /// <summary>
        /// Gets the status code for this action activity.
        /// </summary>
        /// <value>
        /// The status code.
        /// </value>
        public ActionActivityStatusCode StatusCode { get; internal set; }
    }
}
