// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using Partnerinfo.Utilities;

namespace Partnerinfo
{
    /// <summary>
    /// Represents an immutable, thread-safe, and cachable mail address as DDD value object.
    /// </summary>
    public sealed class MailAddressInfo : IEquatable<MailAddressInfo>
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
        /// The parameterless constructor enables two-way serialization scenarios.
        /// </remarks>
        internal MailAddressInfo()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="MailAddressInfo" /> class.
        /// </summary>
        /// <param name="address">A <see cref="string" /> that contains an e-mail address.</param>
        /// <param name="displayName">A <see cref="string" /> that contains the name associated with address.</param>
        public MailAddressInfo(string address, string displayName = null)
        {
            Address = address;
            DisplayName = displayName;
        }

        /// <summary>
        /// Indicates whether the current object is equal to another object of the same type.
        /// </summary>
        /// <param name="other">An object to compare with this object.</param>
        /// <returns>
        /// true if the current object is equal to the <paramref name="other" /> parameter; otherwise, false.
        /// </returns>
        public bool Equals(MailAddressInfo other) => 
            string.Equals(Address, other?.Address, StringComparison.OrdinalIgnoreCase) &&
            string.Equals(DisplayName, other?.DisplayName, StringComparison.OrdinalIgnoreCase);

        /// <summary>
        /// Determines whether the specified <see cref="System.Object" />, is equal to this instance.
        /// </summary>
        /// <param name="obj">The <see cref="System.Object" /> to compare with this instance.</param>
        /// <returns>
        ///   <c>true</c> if the specified <see cref="System.Object" /> is equal to this instance; otherwise, <c>false</c>.
        /// </returns>
        public sealed override bool Equals(object obj) => Equals(obj as MailAddressInfo);

        /// <summary>
        /// Returns a hash code for this instance.
        /// </summary>
        /// <returns>
        /// A hash code for this instance, suitable for use in hashing algorithms and data structures like a hash table.
        /// </returns>
        public sealed override int GetHashCode() => Hash.Combine(Address?.GetHashCode() ?? 0, DisplayName?.GetHashCode() ?? 0);

        /// <summary>
        /// Returns a <see cref="string" /> that represents this instance.
        /// </summary>
        /// <returns>
        /// A <see cref="string" /> that represents this instance.
        /// </returns>
        public sealed override string ToString() => $"{nameof(Address)}: {Address}, {nameof(DisplayName)}: {DisplayName}";
    }
}
