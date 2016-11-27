// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
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
        /// A <see cref="Task{OperationResult}" /> that represents the <see cref="OperationResult" /> of the asynchronous query.
        /// </returns>
        Task<OperationResult> CreateAsync(ContactItem contact, CancellationToken cancellationToken);

        /// <summary>
        /// Updates a contact in a store as an asynchronous operation.
        /// </summary>
        /// <param name="contact">The contact to update in the store.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="Task{OperationResult}" /> that represents the <see cref="OperationResult" /> of the asynchronous query.
        /// </returns>
        Task<OperationResult> UpdateAsync(ContactItem contact, CancellationToken cancellationToken);

        /// <summary>
        /// Deletes a contact from the store as an asynchronous operation.
        /// </summary>
        /// <param name="contact">The contact to delete from the store.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="Task{OperationResult}" /> that represents the <see cref="OperationResult" /> of the asynchronous query.
        /// </returns>
        Task<OperationResult> DeleteAsync(ContactItem contact, CancellationToken cancellationToken);

        /// <summary>
        /// Finds a contact with the given primary key value as an asynchronous operation.
        /// </summary>
        /// <param name="id">The primary key for the item to be found.</param>
        /// <param name="fields">The fields to be included in the result set.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="Task{ContactItem}" /> that represents the <see cref="ContactItem" /> of the asynchronous query.
        /// </returns>
        Task<ContactItem> FindByIdAsync(int id, ContactQueryFields fields, CancellationToken cancellationToken);

        /// <summary>
        /// Retrieves a collection of contacts with the given filter parameters as an asynchronous operation.
        /// </summary>
        /// <param name="options">The query options to use for searching contacts.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="Task{IList{ContactItem}}" /> that contains the contacts according to the specified filter parameters.
        /// </returns>
        Task<IReadOnlyList<ContactItem>> FindAllAsync(ContactQueryOptions options, CancellationToken cancellationToken);
    }
}
