// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
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
        /// Creates a new contact in a store as an asynchronous HTTP POST operation.
        /// </summary>
        /// <param name="contact">The contact to create in the store.</param>
        /// <returns>
        /// A <see cref="Task{IActionResult}" /> that contains the result of an action method.
        /// </returns>
        [HttpPost]
        [ProducesResponseType(typeof(ContactItem), StatusCodes.Status201Created)]
        public async Task<IActionResult> CreateAsync(ContactItem contact)
        {
            var result = await _contactManager.CreateAsync(contact);
            if (!result.Succeeded)
            {
                return this.OperationError(result);
            }

            return CreatedAtAction(nameof(FindByIdAsync), contact);
        }

        /// <summary>
        /// Updates a contact in a store as an asynchronous HTTP PUT operation.
        /// </summary>
        /// <param name="id">The primary key for the item to be found.</param>
        /// <returns>
        /// A <see cref="Task{IActionResult}" /> that contains the result of an action method.
        /// </returns>
        [HttpPut("{id:int}")]
        [ProducesResponseType(typeof(ContactItem), StatusCodes.Status200OK)]
        public async Task<IActionResult> UpdateAsync(int id)
        {
            var contact = await _contactManager.FindByIdAsync(id, ContactQueryFields.None);
            if (contact == null)
            {
                return NotFound();
            }

            if (await TryUpdateModelAsync(contact) == false)
            {
                return BadRequest();
            }

            var result = await _contactManager.UpdateAsync(contact);
            if (!result.Succeeded)
            {
                return this.OperationError(result);
            }

            return Ok(contact);
        }

        /// <summary>
        /// Deletes a contact from the store as an asynchronous HTTP DELETE operation.
        /// </summary>
        /// <param name="id">The primary key for the item to be found.</param>
        /// <returns>
        /// A <see cref="Task{IActionResult}" /> that contains the result of an action method.
        /// </returns>
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var contact = await _contactManager.FindByIdAsync(id, ContactQueryFields.None);
            if (contact == null)
            {
                return NotFound();
            }

            var result = await _contactManager.DeleteAsync(contact);
            if (!result.Succeeded)
            {
                return this.OperationError(result);
            }

            return NoContent();
        }

        /// <summary>
        /// Finds a contact with the given primary key value as an asynchronous HTTP GET operation.
        /// </summary>
        /// <param name="id">The primary key for the item to be found.</param>
        /// <param name="fields">The fields to be included in the result set.</param>
        /// <returns>
        /// A <see cref="Task{IActionResult}" /> that contains the result of an action method.
        /// </returns>
        [HttpGet("{id:int}")]
        [ProducesResponseType(typeof(ContactItem), StatusCodes.Status200OK)]
        public async Task<IActionResult> FindByIdAsync(int id, ContactQueryFields fields)
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
        /// A <see cref="Task{IActionResult}" /> that contains the result of an action method.
        /// </returns>
        [HttpGet]
        [ProducesResponseType(typeof(OkListResultValue), StatusCodes.Status200OK)]
        public async Task<IActionResult> FindAllAsync([FromQuery] ContactQueryOptions options)
        {
            if (options == null || !ModelState.IsValid)
            {
                return BadRequest();
            }

            var contacts = await _contactManager.FindAllAsync(options);
            return this.OkList("Contacts.GetAll", contacts, options.Offset, options.Limit);
        }
    }
}