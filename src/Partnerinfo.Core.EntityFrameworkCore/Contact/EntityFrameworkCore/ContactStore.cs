// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using System.Collections.Immutable;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Partnerinfo.Contact.EntityFrameworkCore
{
    /// <summary>
    /// Provides an implementation for a storage and management of contacts.
    /// </summary>
    /// <seealso cref="Partnerinfo.Contact.IContactStore" />
    public class ContactStore : IContactStore
    {
        private bool _disposed;

        /// <summary>
        /// Gets or sets the <see cref="Microsoft.EntityFrameworkCore.DbSet`1" /> of contacts.
        /// </summary>
        /// <value>
        /// The <see cref="Microsoft.EntityFrameworkCore.DbSet`1" /> of contacts.
        /// </value>
        public DbContext Context { get; }

        /// <summary>
        /// Gets or sets a flag indicating if changes should be persisted after CreateAsync, UpdateAsync and DeleteAsync are called.
        /// </summary>
        /// <value>
        /// <c>true</c> if changes should be persisted after CreateAsync, UpdateAsync and DeleteAsync are called; otherwise, <c>false</c>.
        /// </value>
        public bool AutoSaveChanges { get; set; }

        /// <summary>
        /// Gets or sets the <see cref="DbSet{ContactItem}" /> of contacts.
        /// </summary>
        /// <value>
        /// The <see cref="DbSet{ContactItem}" /> of contacts.
        /// </value>
        protected DbSet<ContactItem> Contacts => Context.Set<ContactItem>();

        /// <summary>
        /// Initializes a new instance of the <see cref="ContactStore" /> class.
        /// </summary>
        /// <param name="context">The context.</param>
        /// <exception cref="System.ArgumentNullException">context</exception>
        public ContactStore(DbContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }

            Context = context;
        }

        /// <summary>
        /// Creates a new contact in a store as an asynchronous operation.
        /// </summary>
        /// <param name="contact">The contact to create in the store.</param>
        /// <param name="cancellationToken">The <see cref="T:System.Threading.CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="T:System.Threading.Tasks.Task`1" /> that represents the <see cref="!:OperationResult" /> of the asynchronous query.
        /// </returns>
        public virtual Task<OperationResult> CreateAsync(ContactItem contact, CancellationToken cancellationToken)
        {
            ThrowIfDisposed();
            if (contact == null)
            {
                throw new ArgumentNullException(nameof(contact));
            }

            throw new NotImplementedException();
        }

        /// <summary>
        /// Updates a contact in a store as an asynchronous operation.
        /// </summary>
        /// <param name="contact">The contact to update in the store.</param>
        /// <param name="cancellationToken">The <see cref="T:System.Threading.CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="T:System.Threading.Tasks.Task`1" /> that represents the <see cref="!:OperationResult" /> of the asynchronous query.
        /// </returns>
        public virtual Task<OperationResult> UpdateAsync(ContactItem contact, CancellationToken cancellationToken)
        {
            ThrowIfDisposed();
            if (contact == null)
            {
                throw new ArgumentNullException(nameof(contact));
            }

            throw new NotImplementedException();
        }

        /// <summary>
        /// Deletes a contact from the store as an asynchronous operation.
        /// </summary>
        /// <param name="contact">The contact to delete from the store.</param>
        /// <param name="cancellationToken">The <see cref="T:System.Threading.CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="T:System.Threading.Tasks.Task`1" /> that represents the <see cref="!:OperationResult" /> of the asynchronous query.
        /// </returns>
        public virtual Task<OperationResult> DeleteAsync(ContactItem contact, CancellationToken cancellationToken)
        {
            ThrowIfDisposed();
            if (contact == null)
            {
                throw new ArgumentNullException(nameof(contact));
            }

            throw new NotImplementedException();
        }

        /// <summary>
        /// Finds a contact with the given primary key value.
        /// </summary>
        /// <param name="id">The primary key for the item to be found.</param>
        /// <param name="fields">The fields.</param>
        /// <param name="cancellationToken">A token to observe while waiting for the task to complete.</param>
        /// <returns>
        /// A task that represents the asynchronous operation.
        /// </returns>
        public virtual Task<ContactItem> FindByIdAsync(int id, ContactField fields, CancellationToken cancellationToken)
        {
            ThrowIfDisposed();

            throw new NotImplementedException();
        }

        /// <summary>
        /// Retrieves a collection of contacts with the given filter parameters as an asynchronous operation.
        /// </summary>
        /// <param name="fields">The fields to be included in the result set.</param>
        /// <param name="sortOrder">Specifies how items in a list are sorted.</param>
        /// <param name="offset">The number of rows to skip, before starting to return rows from the query expression.</param>
        /// <param name="limit">The number of rows to return, after processing the offset clause.</param>
        /// <param name="cancellationToken">A token to observe while waiting for the task to complete.</param>
        /// <returns>
        /// A <see cref="Task{ImmutableArray{ContactItem}}" /> that contains the contacts according to the specified filter parameters.
        /// </returns>
        public virtual async Task<ImmutableArray<ContactItem>> FindAllAsync(ContactField fields, ContactSortOrder sortOrder, int offset, int limit, CancellationToken cancellationToken)
        {
            ThrowIfDisposed();
            
            return (await Contacts
                .AsNoTracking()
                .OrderBy(sortOrder)
                .Offset(offset, limit)
                .Select(fields)
                .ToArrayAsync(cancellationToken))
                .ToImmutableArray();
        }

        /// <summary>
        /// Releases all resources used by the user manager.
        /// </summary>
        public void Dispose()
        {
            // Do not dispose the DbContext here because it must be performed by the caller.
            // An ASP.NET application, which uses dependency injection with lifetime configuration, 
            // can be crashed if the context is disposed prematurely.

            _disposed = true;
        }

        /// <summary>
        /// Throws if this class has been disposed.
        /// </summary>
        /// <exception cref="ObjectDisposedException"></exception>
        protected void ThrowIfDisposed()
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(GetType().Name);
            }
        }
    }
}
