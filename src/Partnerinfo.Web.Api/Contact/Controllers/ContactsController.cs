// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Partnerinfo.Contact.Controllers
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

        /// <summary>
        /// Retrieves a collection of contacts with the given filter parameters as an asynchronous HTTP GET operation.
        /// </summary>
        /// <returns>
        /// </returns>
        [Route("", Name = "Contacts.GetAll")]
        public Task<IActionResult> GetAllAsync()
        {
            // _contactManager.FindAllAsync();
            return Task.FromResult<IActionResult>(null);
        }
    }
}