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
        /// Deletes the asynchronous.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var contact = await _contactManager.FindByIdAsync(id, ContactQueryFields.None);
            if (contact == null)
            {
                return NotFound();
            }

            var result = await _contactManager.DeleteAsync(contact);
            return this.OperationResult(result);
        }

        /// <summary>
        /// Finds a contact with the given primary key value as an asynchronous HTTP GET operation.
        /// </summary>
        /// <param name="id">The primary key for the item to be found.</param>
        /// <param name="fields">The fields to be included in the result set.</param>
        /// <returns>
        /// A <see cref="Task{IActionResult}" /> that contains the contact according to the specified filter parameters.
        /// </returns>
        [HttpGet("{id:int}", Name = "Contacts.GetById")]
        public async Task<IActionResult> GetByIdAsync(int id, ContactQueryFields fields)
        {
            var contact = await _contactManager.FindByIdAsync(id, fields);
            if (contact == null)
            {
                return NotFound();
            }

            return Ok(contact);
        }

        /// <summary>
        /// Retrieves a collection of contacts with the given filter parameters as an asynchronous HTTP GET operation.
        /// </summary>
        /// <param name="options">The query options to use for searching contacts.</param>
        /// <returns>
        /// A <see cref="Task{IActionResult}" /> that contains the contacts according to the specified filter parameters.
        /// </returns>
        [HttpGet("", Name = "Contacts.GetAll")]
        public async Task<IActionResult> GetAllAsync([FromQuery] ContactQueryOptions options)
        {
            if (options == null || !ModelState.IsValid)
            {
                return BadRequest();
            }

            var contacts = await _contactManager.FindAllAsync(options);
            return this.ListResult("Contacts.GetAll", contacts, options.Offset, options.Limit);
        }
    }
}