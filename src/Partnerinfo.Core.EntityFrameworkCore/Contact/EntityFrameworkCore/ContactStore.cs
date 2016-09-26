// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
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
        /// Initializes a new instance of the <see cref="ContactStore" /> class.
        /// </summary>
        public ContactStore(DbContext context)
        {
        }

        /// <summary>
        /// Creates a new contact in a store as an asynchronous operation.
        /// </summary>
        /// <param name="contact">The contact to create in the store.</param>
        /// <param name="cancellationToken">The <see cref="T:System.Threading.CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="T:System.Threading.Tasks.Task`1" /> that represents the <see cref="!:OperationResult" /> of the asynchronous query.
        /// </returns>
        public virtual Task<OpStatusResult> CreateAsync(ContactItem contact, CancellationToken cancellationToken)
        {
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
        public virtual Task<OpStatusResult> UpdateAsync(ContactItem contact, CancellationToken cancellationToken)
        {
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
        public virtual Task<OpStatusResult> DeleteAsync(ContactItem contact, CancellationToken cancellationToken)
        {
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
            throw new NotImplementedException();
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
