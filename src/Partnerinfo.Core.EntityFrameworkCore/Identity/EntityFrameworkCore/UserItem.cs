// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Partnerinfo.Identity.EntityFrameworkCore
{
    /// <summary>
    /// Represents a user in the identity system.
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUser{System.Int32}" />
    public class UserItem : IdentityUser<int>, IUserIdentity
    {
    }
}
