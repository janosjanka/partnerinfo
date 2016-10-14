// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.AspNetCore.Mvc;
using Partnerinfo.Contact;

namespace Partnerinfo.Contacts.Controllers
{
    /// <summary>
    /// Provides methods that respond to HTTP requests that are made to an ASP.NET MVC Web site.
    /// </summary>
    [Route("api/[controller]")]
    public sealed class ContactsController : Controller
    {
        private readonly ContactManager _contactManager;

        /// <summary>
        /// Initializes a new instance of the <see cref="ContactsController" /> class.
        /// </summary>
        /// <param name="contactManager">The contact manager.</param>
        public ContactsController(ContactManager contactManager)
        {
            _contactManager = contactManager;
        }
    }
}