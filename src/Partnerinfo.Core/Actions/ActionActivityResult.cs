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
        /// Gets the status code for this action activity.
        /// </summary>
        /// <value>
        /// The status code.
        /// </value>
        public ActionActivityStatusCode StatusCode { get; internal set; }

        /// <summary>
        /// Gets the string that contains the redirect URL..
        /// </summary>
        /// <value>
        /// The redirect URL.
        /// </value>
        public string ReturnUrl { get; internal set; }

        /// <summary>
        /// Prevents a default instance of the <see cref="ActionActivityResult" /> class from being created.
        /// </summary>
        internal ActionActivityResult()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ActionActivityResult" /> class.
        /// </summary>
        /// <param name="statusCode">The status code.</param>
        internal ActionActivityResult(ActionActivityStatusCode statusCode)
        {
            StatusCode = statusCode;
        }
    }
}
