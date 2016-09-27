// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using System.Threading;
using System.Threading.Tasks;

namespace Partnerinfo.Contact
{
    /// <summary>
    /// Provides the APIs for managing contacts in a persistence store.
    /// </summary>
    public class ContactManager : IDisposable
    {
        private bool _disposed;

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
            Services = services;
        }

        /// <summary>
        /// Gets or sets the persistence store the manager operates over.
        /// </summary>
        /// <value>
        /// The persistence store the manager operates over.
        /// </value>
        protected internal IContactStore Store { get; set; }

        /// <summary>
        /// Gets or sets the services.
        /// </summary>
        /// <value>
        /// The services.
        /// </value>
        protected internal IServiceProvider Services { get; set; }

        /// <summary>
        /// Returns a <see cref="System.Threading.CancellationToken" /> using the injected <see cref="ICancellationTokenAccessor" />.
        /// </summary>
        /// <value>
        /// The <see cref="System.Threading.CancellationToken" />.
        /// </value>
        protected CancellationToken CancellationToken
        {
            get
            {
                // TODO: It can be cached later.
                return (Services.GetService(typeof(ICancellationTokenAccessor)) as ICancellationTokenAccessor)?.GetToken() ?? CancellationToken.None;
            }
        }

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
