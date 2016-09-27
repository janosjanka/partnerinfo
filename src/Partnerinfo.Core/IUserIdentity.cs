// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;

namespace Partnerinfo
{
    /// <summary>
    /// Represents a user with minimal requirements in the identity system.
    /// </summary>
    public interface IUserIdentity
    {
        /// <summary>
        /// Gets the primary key for this user.
        /// </summary>
        /// <value>
        /// The primary key.
        /// </value>
        int Id { get; }

        /// <summary>
        /// Gets the email address for this user.
        /// </summary>
        /// <value>
        /// The email.
        /// </value>
        string Email { get; }

        /// <summary>
        /// Gets the first name for this user.
        /// </summary>
        /// <value>
        /// The first name.
        /// </value>
        string FirstName { get; }

        /// <summary>
        /// Gets the last name for this user.
        /// </summary>
        /// <value>
        /// The last name.
        /// </value>
        string LastName { get; }

        /// <summary>
        /// Gets the gender for this user.
        /// </summary>
        /// <value>
        /// The gender.
        /// </value>
        PersonGender Gender { get; }

        /// <summary>
        /// Gets the birthday for this user.
        /// </summary>
        /// <value>
        /// The birthday.
        /// </value>
        DateTimeOffset? Birthday { get; }

        /// <summary>
        /// Gets the telephone number for the user.
        /// </summary>
        /// <value>
        /// The phone number.
        /// </value>
        string PhoneNumber { get; }
    }
}
