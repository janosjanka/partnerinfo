// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace Partnerinfo.Contact
{
    /// <summary>
    /// Provides the APIs for managing contacts in a persistence store.
    /// </summary>
    public class ContactManager : IDisposable
    {
        private bool _disposed;
        private readonly ICancellationTokenAccessor _cancellationTokenAccessor;

        /// <summary>
        /// Initializes a new instance of the <see cref="ContactManager" /> class.
        /// </summary>
        /// <param name="store">The persistence store the manager will operate over.</param>
        /// <param name="services">The <see cref="IServiceProvider" /> used to resolve services.</param>
        /// <exception cref="System.ArgumentNullException">store</exception>
        public ContactManager(IContactStore store, IServiceProvider services)
        {
            if (store == null)
            {
                throw new ArgumentNullException(nameof(store));
            }

            Store = store;

            if (services != null)
            {
                _cancellationTokenAccessor = services.GetService(typeof(ICancellationTokenAccessor)) as ICancellationTokenAccessor;
            }
        }

        /// <summary>
        /// Gets or sets the persistence store the manager operates over.
        /// </summary>
        /// <value>
        /// The persistence store the manager operates over.
        /// </value>
        protected internal IContactStore Store { get; set; }
        
        /// <summary>
        /// The <see cref="ILogger" /> used to log messages from the manager.
        /// </summary>
        /// <value>
        /// The <see cref="ILogger" /> used to log messages from the manager.
        /// </value>
        protected internal ILogger Logger { get; set; }

        /// <summary>
        /// Returns a <see cref="System.Threading.CancellationToken" /> using the injected <see cref="ICancellationTokenAccessor" />.
        /// </summary>
        /// <value>
        /// The <see cref="System.Threading.CancellationToken" />.
        /// </value>
        protected internal CancellationToken CancellationToken => _cancellationTokenAccessor?.GetToken() ?? CancellationToken.None;

        /// <summary>
        /// Creates a new contact in a store as an asynchronous operation.
        /// </summary>
        /// <param name="contact">The contact to create in the store.</param>
        /// <returns>
        /// A <see cref="Task{OperationResult}" /> that represents the <see cref="OperationResult" /> of the asynchronous query.
        /// </returns>
        /// <exception cref="System.ArgumentNullException"></exception>
        public virtual Task<OperationResult> CreateAsync(ContactItem contact)
        {
            ThrowIfDisposed();
            if (contact == null)
            {
                throw new ArgumentNullException(nameof(contact));
            }

            // TODO: Implement a SaveChangesAsync method with validation.
            return Store.CreateAsync(contact, CancellationToken);
        }

        /// <summary>
        /// Updates a contact in a store as an asynchronous operation.
        /// </summary>
        /// <param name="contact">The contact to update in the store.</param>
        /// <returns>
        /// A <see cref="Task{OperationResult}" /> that represents the <see cref="OperationResult" /> of the asynchronous query.
        /// </returns>
        /// <exception cref="System.ArgumentNullException"></exception>
        public virtual Task<OperationResult> UpdateAsync(ContactItem contact)
        {
            ThrowIfDisposed();
            if (contact == null)
            {
                throw new ArgumentNullException(nameof(contact));
            }

            // TODO: Implement a SaveChangesAsync method with validation.
            return Store.UpdateAsync(contact, CancellationToken);
        }

        /// <summary>
        /// Deletes a contact from the store as an asynchronous operation.
        /// </summary>
        /// <param name="contact">The contact to delete from the store.</param>
        /// <returns>
        /// A <see cref="Task{OperationResult}" /> that represents the <see cref="OperationResult" /> of the asynchronous query.
        /// </returns>
        /// <exception cref="System.ArgumentNullException"></exception>
        public virtual Task<OperationResult> DeleteAsync(ContactItem contact)
        {
            ThrowIfDisposed();
            if (contact == null)
            {
                throw new ArgumentNullException(nameof(contact));
            }

            return Store.DeleteAsync(contact, CancellationToken);
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
        public virtual Task<ContactItem> FindByIdAsync(int id, ContactField fields)
        {
            ThrowIfDisposed();
            return Store.FindByIdAsync(id, fields, CancellationToken);
        }

        /// <summary>
        /// Retrieves a collection of contacts with the given filter parameters as an asynchronous operation.
        /// </summary>
        /// <param name="fields">The fields to be included in the result set.</param>
        /// <param name="sortOrder">Specifies how items in a list are sorted.</param>
        /// <param name="offset">The number of rows to skip, before starting to return rows from the query expression.</param>
        /// <param name="limit">The number of rows to return, after processing the offset clause.</param>
        /// <returns>
        /// A <see cref="Task{ListResult{ContactItem}}" /> that contains the contacts according to the specified filter parameters.
        /// </returns>
        public virtual Task<ListResult<ContactItem>> FindAllAsync(ContactField fields, ContactSortOrder sortOrder, int offset, int limit)
        {
            ThrowIfDisposed();
            return Store.FindAllAsync(fields, sortOrder, offset, limit, CancellationToken);
        }

        /// <summary>
        /// Releases all resources used by the user manager.
        /// </summary>
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        /// <summary>
        /// Releases the unmanaged resources used by the role manager and optionally releases the managed resources.
        /// </summary>
        /// <param name="disposing">true to release both managed and unmanaged resources; false to release only unmanaged resources.</param>
        protected virtual void Dispose(bool disposing)
        {
            if (disposing && !_disposed)
            {
                Store.Dispose();
                _disposed = true;
            }
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
