// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.ComponentModel.DataAnnotations;

namespace Partnerinfo.Identity.ViewModels
{
    /// <summary>
    /// Used to log in a user to the system.
    /// </summary>
    public sealed class LoginViewModel
    {
        /// <summary>
        /// Gets or sets the email for this user.
        /// </summary>
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        /// <summary>
        /// Gets or sets the password for this user.
        /// </summary>
        [Required]
        public string Password { get; set; }
    }
}
