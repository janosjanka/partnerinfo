// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;

namespace Partnerinfo.Actions
{
    /// <summary>
    /// The base class for context classes that represent the execution environment of an activity.
    /// </summary>
    public sealed class ActionActivityContext
    {
        /// <summary>
        /// Gets the <see cref="IServiceProvider" /> used to resolve services.
        /// </summary>
        /// <value>
        /// The <see cref="IServiceProvider" /> used to resolve services.
        /// </value>
        public IServiceProvider Services { get; private set; }

        /// <summary>
        /// Creates an activity result passing context information into the result object.
        /// </summary>
        /// <param name="statusCode">The status code to override.</param>
        /// <returns>
        /// The result object.
        /// </returns>
        public ActionActivityResult CreateResult(ActionActivityStatusCode statusCode)
        {
            return new ActionActivityResult
            {
                StatusCode = statusCode
            };
        }
    }
}
