// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;

namespace Partnerinfo
{
    /// <summary>
    /// Represents a user with minimal data in the identity system.
    /// </summary>
    public interface IUserIdentity
    {
        /// <summary>
        /// Gets the primary key for this user provided by a storage provider.
        /// </summary>
        /// <value>
        /// The primary key.
        /// </value>
        int Id { get; set; }

        /// <summary>
        /// Gets the email address for this user provided by a storage provider.
        /// </summary>
        /// <value>
        /// The email.
        /// </value>
        string Email { get; set; }

        /// <summary>
        /// Gets the telephone number for the user provided by a storage provider.
        /// </summary>
        /// <value>
        /// The telephone number.
        /// </value>
        string PhoneNumber { get; set; }

        /// <summary>
        /// Gets the full name for the user provided by a storage provider.
        /// </summary>
        /// <value>
        /// The full name.
        /// </value>
        PersonNameInfo Name { get; }

        /// <summary>
        /// Gets the gender for this user provided by a storage provider.
        /// </summary>
        /// <value>
        /// The gender.
        /// </value>
        PersonGender Gender { get; set; }

        /// <summary>
        /// Gets the birthday for this user provided by a storage provider.
        /// </summary>
        /// <value>
        /// The birthday.
        /// </value>
        DateTimeOffset? Birthday { get; set; }
    }
}
