// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Encapsulates an error from the system.
    /// </summary>
    public sealed class OpStatusError
    {
        /// <summary>
        /// Gets the code for this error.
        /// </summary>
        /// <value>
        /// The code for this error.
        /// </value>
        public string Code { get; }

        /// <summary>
        /// Gets the description for this error.
        /// </summary>
        /// <value>
        /// The description for this error.
        /// </value>
        public string Description { get; }

        /// <summary>
        /// Initializes a new instance of the <see cref="OpStatusError" /> class.
        /// </summary>
        /// <param name="code">The code for this error.</param>
        /// <param name="description">The description for this error.</param>
        public OpStatusError(string code, string description)
        {
            Code = code;
            Description = description;
        }
    }
}
