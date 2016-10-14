// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;

namespace Partnerinfo
{
    /// <summary>
    /// Represents a user with minimal data in the identity system.
    /// </summary>
    /// <remarks>
    /// <see href="https://github.com/aspnet/Identity/blob/dev/src/Microsoft.AspNetCore.Identity.EntityFrameworkCore/IdentityUser.cs">Microsoft.AspNetCore.Identity.EntityFrameworkCore</see>
    /// </remarks>
    public interface IUserIdentity
    {
        /// <summary>
        /// Gets or sets the primary key for this user provided by a storage provider.
        /// </summary>
        /// <value>
        /// The primary key.
        /// </value>
        int Id { get; set; }

        /// <summary>
        /// Gets or sets the email address for this user provided by a storage provider.
        /// </summary>
        /// <value>
        /// The email.
        /// </value>
        string Email { get; set; }

        /// <summary>
        /// Gets or sets the phone number for the user provided by a storage provider.
        /// </summary>
        /// <value>
        /// The phone number.
        /// </value>
        string PhoneNumber { get; set; }

        /// <summary>
        /// Gets or sets the first name for this contact provided by a storage provider.
        /// </summary>
        /// <value>
        /// The first name.
        /// </value>
        string FirstName { get; set; }

        /// <summary>
        /// Gets or sets the first name for this contact provided by a storage provider.
        /// </summary>
        /// <value>
        /// The first name.
        /// </value>
        string MiddleName { get; set; }

        /// <summary>
        /// Gets or sets the last name for this contact provided by a storage provider.
        /// </summary>
        /// <value>
        /// The last name.
        /// </value>
        string LastName { get; set; }

        /// <summary>
        /// Gets or sets the gender for this user provided by a storage provider.
        /// </summary>
        /// <value>
        /// The gender.
        /// </value>
        PersonGender Gender { get; set; }

        /// <summary>
        /// Gets or sets the birthday for this user provided by a storage provider.
        /// </summary>
        /// <value>
        /// The birthday.
        /// </value>
        DateTime? Birthday { get; set; }
    }
}
