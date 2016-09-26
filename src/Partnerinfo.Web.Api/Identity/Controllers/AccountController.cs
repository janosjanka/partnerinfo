// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Partnerinfo.Identity.EntityFrameworkCore;

namespace Partnerinfo.Identity.Controllers
{
    /// <summary>
    /// Provides methods that respond to HTTP requests that are made to an ASP.NET MVC Web site.
    /// </summary>
    [Route("api/[controller]")]
    public sealed class AccountController : Controller
    {
        private readonly UserManager<UserItem> _userManager;
        private readonly SignInManager<UserItem> _signInManager;

        /// <summary>
        /// Initializes a new instance of the <see cref="HomeController" /> class.
        /// </summary>
        /// <param name="userManager">The user manager.</param>
        /// <param name="signInManager">The sign in manager.</param>
        public AccountController(UserManager<UserItem> userManager, SignInManager<UserItem> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }
    }
}