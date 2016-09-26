// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Represents an immutable, thread-safe, and cachable mail address as DDD value object.
    /// </summary>
    public sealed class MailAddressInfo
    {
        /// <summary>
        /// Gets the e-mail address specified when this <see cref="MailAddressInfo" /> was created.
        /// </summary>
        public string Address { get; private set; }

        /// <summary>
        /// Gets the name specified when this <see cref="MailAddressInfo" /> was created.
        /// </summary>
        public string DisplayName { get; private set; }

        /// <summary>
        /// Prevents a default instance of the <see cref="MailAddressInfo" /> class from being created.
        /// </summary>
        /// <remarks>
        /// The private parameterless constructor enables two-way serialization scenarios.
        /// </remarks>
        private MailAddressInfo()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="MailAddressInfo" /> class.
        /// </summary>
        /// <param name="address">A <see cref="string" /> that contains an e-mail address.</param>
        public MailAddressInfo(string address)
        {
            Address = address;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="MailAddressInfo" /> class.
        /// </summary>
        /// <param name="address">A <see cref="string" /> that contains an e-mail address.</param>
        /// <param name="displayName">A <see cref="string" /> that contains the name associated with address.</param>
        public MailAddressInfo(string address, string displayName)
        {
            Address = address;
            DisplayName = displayName;
        }
    }
}
