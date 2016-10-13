// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Partnerinfo.Identity.EntityFrameworkCore
{
    /// <summary>
    /// Represents a user in the identity system.
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUser{System.Int32}" />
    public class UserItem : IdentityUser<int>, IUserIdentity
    {
        /// <summary>
        /// Gets the full name for the user provided by a storage provider.
        /// </summary>
        /// <value>
        /// The full name.
        /// </value>
        public PersonNameInfo Name { get; } = PersonNameInfo.Empty;

        /// <summary>
        /// Gets or sets the gender for this user.
        /// </summary>
        /// <value>
        /// The gender.
        /// </value>
        public PersonGender Gender { get; set; }

        /// <summary>
        /// Gets the birthday for this user.
        /// </summary>
        /// <value>
        /// The birthday.
        /// </value>
        public DateTimeOffset? Birthday { get; set; }
    }
}
