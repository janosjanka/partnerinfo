// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using System.Threading;
using System.Threading.Tasks;

namespace Partnerinfo.Contact
{
    /// <summary>
    /// Provides an abstraction for a storage and management of contacts.
    /// </summary>
    public interface IContactStore : IDisposable
    {
        /// <summary>
        /// Creates a new contact in a store as an asynchronous operation.
        /// </summary>
        /// <param name="contact">The contact to create in the store.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="Task{OpStatusResult}" /> that represents the <see cref="OperationResult" /> of the asynchronous query.
        /// </returns>
        Task<OpStatusResult> CreateAsync(ContactItem contact, CancellationToken cancellationToken);

        /// <summary>
        /// Updates a contact in a store as an asynchronous operation.
        /// </summary>
        /// <param name="contact">The contact to update in the store.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="Task{OpStatusResult}" /> that represents the <see cref="OperationResult" /> of the asynchronous query.
        /// </returns>
        Task<OpStatusResult> UpdateAsync(ContactItem contact, CancellationToken cancellationToken);

        /// <summary>
        /// Deletes a contact from the store as an asynchronous operation.
        /// </summary>
        /// <param name="contact">The contact to delete from the store.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="Task{OpStatusResult}" /> that represents the <see cref="OperationResult" /> of the asynchronous query.
        /// </returns>
        Task<OpStatusResult> DeleteAsync(ContactItem contact, CancellationToken cancellationToken);

        /// <summary>
        /// Finds a contact with the given primary key value.
        /// </summary>
        /// <param name="id">The primary key for the item to be found.</param>
        /// <param name="fields">The fields.</param>
        /// <param name="cancellationToken">A token to observe while waiting for the task to complete.</param>
        /// <returns>
        /// A task that represents the asynchronous operation.
        /// </returns>
        Task<ContactItem> FindByIdAsync(int id, ContactField fields, CancellationToken cancellationToken);
    }
}
