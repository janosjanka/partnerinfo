// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.ComponentModel.DataAnnotations;

namespace Partnerinfo.Identity.ViewModels
{
    /// <summary>
    /// Used to register a new user to the system.
    /// </summary>
    public sealed class RegisterViewModel
    {
        /// <summary>
        /// Gets or sets the email for this user.
        /// </summary>
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        /// <summary>
        /// Gets or sets the first name for this user.
        /// </summary>
        [Required]
        public string FirstName { get; set; }

        /// <summary>
        /// Gets or sets the last name for this user.
        /// </summary>
        [Required]
        public string LastName { get; set; }
    }
}
