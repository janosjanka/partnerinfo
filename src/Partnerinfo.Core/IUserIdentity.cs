// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Represents a user in the identity system.
    /// </summary>
    public interface IUserIdentity
    {
        /// <summary>
        /// Gets or sets the primary key for this user.
        /// </summary>
        /// <value>
        /// The primary key.
        /// </value>
        int Id { get; set; }

        /// <summary>
        /// Gets or sets the email address for this user.
        /// </summary>
        /// <value>
        /// The email.
        /// </value>
        string Email { get; set; }

        /// <summary>
        /// Gets or sets a telephone number for the user.
        /// </summary>
        /// <value>
        /// The phone number.
        /// </value>
        string PhoneNumber { get; set; }
    }
}
