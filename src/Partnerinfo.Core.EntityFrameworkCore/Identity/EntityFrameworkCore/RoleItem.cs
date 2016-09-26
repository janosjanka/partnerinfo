// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Partnerinfo.Identity.EntityFrameworkCore
{
    /// <summary>
    /// Represents a role in the identity system.
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole{System.Int32}" />
    public class RoleItem : IdentityRole<int>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RoleItem" /> class.
        /// </summary>
        public RoleItem()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="RoleItem" /> class.
        /// </summary>
        /// <param name="roleName">The role name.</param>
        public RoleItem(string roleName)
        {
            Name = roleName;
        }
    }
}
