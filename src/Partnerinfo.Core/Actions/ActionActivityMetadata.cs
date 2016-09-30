// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;

namespace Partnerinfo.Actions
{
    /// <summary>
    /// Represents meta data about an action that can be used by Managed Extensibility Framework (MEF).
    /// </summary>
    /// <remarks>
    /// More details: https://msdn.microsoft.com/en-us/library/ee155691%28v=vs.110%29.aspx?f=255&MSPPError=-2147217396
    /// </remarks>
    public sealed class ActionActivityMetadata
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ActionActivityMetadata" /> class.
        /// </summary>
        /// <param name="type">The type of the action that usually represents an operation.</param>
        /// <param name="name">The name of the action that describes what this action activity does.</param>
        /// <exception cref="System.ArgumentNullException">type or name</exception>
        public ActionActivityMetadata(string type, string name)
        {
            if (type == null)
            {
                throw new ArgumentNullException(nameof(type));
            }
            if (name == null)
            {
                throw new ArgumentNullException(nameof(name));
            }

            Type = type;
            Name = name;
        }

        /// <summary>
        /// Gets the type of the action that usually represents an operation. E.g. Schedule, SendMail, ...
        /// </summary>
        /// <value>
        /// The type.
        /// </value>
        public string Type { get; }

        /// <summary>
        /// Gets or sets the name of the action that describes what this action activity does.
        /// </summary>
        /// <value>
        /// The name.
        /// </value>
        public string Name { get; }
    }
}
