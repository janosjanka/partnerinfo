// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Partnerinfo.Identity.EntityFrameworkCore;

namespace Partnerinfo.Identity
{
    /// <summary>
    /// Provides the APIs for user sign in.
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Identity.SignInManager{Partnerinfo.Identity.EntityFrameworkCore.UserItem}" />
    public sealed class SignInManager : SignInManager<UserItem>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SignInManager" /> class.
        /// </summary>
        /// <param name="userManager">An instance of <see cref="P:Microsoft.AspNetCore.Identity.SignInManager`1.UserManager" /> used to retrieve users from and persist users.</param>
        /// <param name="contextAccessor">The accessor used to access the <see cref="T:Microsoft.AspNetCore.Http.HttpContext" />.</param>
        /// <param name="claimsFactory">The factory to use to create claims principals for a user.</param>
        /// <param name="optionsAccessor">The accessor used to access the <see cref="T:Microsoft.AspNetCore.Builder.IdentityOptions" />.</param>
        /// <param name="logger">The logger used to log messages, warnings and errors.</param>
        public SignInManager(UserManager<UserItem> userManager,
            IHttpContextAccessor contextAccessor,
            IUserClaimsPrincipalFactory<UserItem> claimsFactory,
            IOptions<IdentityOptions> optionsAccessor,
            ILogger<SignInManager<UserItem>> logger) : base(
                userManager,
                contextAccessor,
                claimsFactory,
                optionsAccessor,
                logger)
        {
        }
    }
}
