// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Partnerinfo.Identity.EntityFrameworkCore;

namespace Partnerinfo.Identity
{
    /// <summary>
    /// Provides the APIs for managing user in a persistence store.
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Identity.UserManager{Partnerinfo.Identity.EntityFrameworkCore.UserItem}" />
    public sealed class UserManager : UserManager<UserItem>, IUserManager
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserManager" /> class.
        /// </summary>
        /// <param name="store">The persistence store the manager will operate over.</param>
        /// <param name="optionsAccessor">The accessor used to access the <see cref="T:Microsoft.AspNetCore.Builder.IdentityOptions" />.</param>
        /// <param name="passwordHasher">The password hashing implementation to use when saving passwords.</param>
        /// <param name="userValidators">A collection of <see cref="T:Microsoft.AspNetCore.Identity.IUserValidator`1" /> to validate users against.</param>
        /// <param name="passwordValidators">A collection of <see cref="T:Microsoft.AspNetCore.Identity.IPasswordValidator`1" /> to validate passwords against.</param>
        /// <param name="keyNormalizer">The <see cref="T:Microsoft.AspNetCore.Identity.ILookupNormalizer" /> to use when generating index keys for users.</param>
        /// <param name="errors">The <see cref="T:Microsoft.AspNetCore.Identity.IdentityErrorDescriber" /> used to provider error messages.</param>
        /// <param name="services">The <see cref="T:System.IServiceProvider" /> used to resolve services.</param>
        /// <param name="logger">The logger used to log messages, warnings and errors.</param>
        public UserManager(IUserStore<UserItem> store,
            IOptions<IdentityOptions> optionsAccessor,
            IPasswordHasher<UserItem> passwordHasher,
            IEnumerable<IUserValidator<UserItem>> userValidators,
            IEnumerable<IPasswordValidator<UserItem>> passwordValidators,
            ILookupNormalizer keyNormalizer,
            IdentityErrorDescriber errors,
            IServiceProvider services,
            ILogger<UserManager<UserItem>> logger) : base(
                store,
                optionsAccessor,
                passwordHasher,
                userValidators,
                passwordValidators,
                keyNormalizer,
                errors,
                services,
                logger)
        {
        }
    }
}
