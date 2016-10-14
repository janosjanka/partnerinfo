// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
using System.Linq;
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
        /// Gets or sets a flag indicating if changes should be persisted after CreateAsync, UpdateAsync and DeleteAsync are called.
        /// </summary>
        /// <value>
        /// <c>true</c> if changes should be persisted after CreateAsync, UpdateAsync and DeleteAsync are called; otherwise, <c>false</c>.
        /// </value>
        public bool AutoSaveChanges { get; set; }

        /// <summary>
        /// Gets or sets the <see cref="Microsoft.EntityFrameworkCore.DbSet`1" /> of contacts.
        /// </summary>
        /// <value>
        /// The <see cref="Microsoft.EntityFrameworkCore.DbSet`1" /> of contacts.
        /// </value>
        public DbContext Context { get; }

        /// <summary>
        /// Gets or sets the <see cref="OperationErrorDescriber" /> for any error that occurred with the current operation.
        /// </summary>
        /// <value>
        /// The error describer.
        /// </value>
        public OperationErrorDescriber ErrorDescriber { get; }

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
        /// <param name="errorDescriber">The <see cref="OperationErrorDescriber" />.</param>
        /// <exception cref="System.ArgumentNullException">context</exception>
        public ContactStore(DbContext context, OperationErrorDescriber errorDescriber = null)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }

            Context = context;
            ErrorDescriber = errorDescriber ?? new OperationErrorDescriber();
        }

        /// <summary>
        /// Creates a new contact in a store as an asynchronous operation.
        /// </summary>
        /// <param name="contact">The contact to create in the store.</param>
        /// <param name="cancellationToken">The <see cref="T:System.Threading.CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="T:System.Threading.Tasks.Task`1" /> that represents the <see cref="!:OperationResult" /> of the asynchronous query.
        /// </returns>
        public virtual async Task<OperationResult> CreateAsync(ContactItem contact, CancellationToken cancellationToken)
        {
            ThrowIfDisposed();
            if (contact == null)
            {
                throw new ArgumentNullException(nameof(contact));
            }

            Context.Add(contact);
            await SaveChangesAsync(cancellationToken);
            return OperationResult.Success;
        }

        /// <summary>
        /// Updates a contact in a store as an asynchronous operation.
        /// </summary>
        /// <param name="contact">The contact to update in the store.</param>
        /// <param name="cancellationToken">The <see cref="T:System.Threading.CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="T:System.Threading.Tasks.Task`1" /> that represents the <see cref="T:Partnerinfo.OperationResult" /> of the asynchronous query.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">contact</exception>
        public virtual async Task<OperationResult> UpdateAsync(ContactItem contact, CancellationToken cancellationToken)
        {
            ThrowIfDisposed();
            if (contact == null)
            {
                throw new ArgumentNullException(nameof(contact));
            }

            var entry = Context.Attach(contact);
            entry.Property("ConcurrencyStamp").CurrentValue = Guid.NewGuid();
            Context.Update(contact);
            try
            {
                await SaveChangesAsync(cancellationToken);
            }
            catch (DbUpdateConcurrencyException)
            {
                return OperationResult.Failed(ErrorDescriber.ConcurrencyFailure());
            }
            return OperationResult.Success;
        }

        /// <summary>
        /// Deletes a contact from the store as an asynchronous operation.
        /// </summary>
        /// <param name="contact">The contact to delete from the store.</param>
        /// <param name="cancellationToken">The <see cref="T:System.Threading.CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="T:System.Threading.Tasks.Task`1" /> that represents the <see cref="T:Partnerinfo.OperationResult" /> of the asynchronous query.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">contact</exception>
        public virtual async Task<OperationResult> DeleteAsync(ContactItem contact, CancellationToken cancellationToken)
        {
            ThrowIfDisposed();
            if (contact == null)
            {
                throw new ArgumentNullException(nameof(contact));
            }

            Context.Remove(contact);
            try
            {
                await SaveChangesAsync(cancellationToken);
            }
            catch (DbUpdateConcurrencyException)
            {
                return OperationResult.Failed(ErrorDescriber.ConcurrencyFailure());
            }
            return OperationResult.Success;
        }

        /// <summary>
        /// Finds a contact with the given primary key value as an asynchronous operation.
        /// </summary>
        /// <param name="id">The primary key for the item to be found.</param>
        /// <param name="fields">The fields to be included in the result set.</param>
        /// <param name="cancellationToken">The <see cref="T:System.Threading.CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="T:System.Threading.Tasks.Task`1" /> that represents the <see cref="T:Partnerinfo.Contact.ContactItem" /> of the asynchronous query.
        /// </returns>
        public virtual Task<ContactItem> FindByIdAsync(int id, ContactQueryFields fields, CancellationToken cancellationToken)
        {
            ThrowIfDisposed();

            return Contacts
                .Where(id)
                .Select(fields)
                .FirstOrDefaultAsync(cancellationToken);
        }

        /// <summary>
        /// Retrieves a collection of contacts with the given filter parameters as an asynchronous operation.
        /// </summary>
        /// <param name="options">The query options to use for searching contacts.</param>
        /// <param name="cancellationToken">The <see cref="T:System.Threading.CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="T:System.Threading.Tasks.Task`1" /> that contains the contacts according to the specified filter parameters.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">options</exception>
        public virtual async Task<IList<ContactItem>> FindAllAsync(ContactQueryOptions options, CancellationToken cancellationToken)
        {
            ThrowIfDisposed();
            if (options == null)
            {
                throw new ArgumentNullException(nameof(options));
            }

            return await Contacts
                .AsNoTracking()
                .OrderBy(options.SortOrder)
                .Skip(options.Paging.Offset)
                .Take(options.Paging.Limit)
                .Select(options.Fields)
                .ToListAsync(cancellationToken);
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

        /// <summary>
        /// Saves the current store.
        /// </summary>
        /// <param name="cancellationToken">The <see cref="CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// The <see cref="Task" /> that represents the asynchronous operation.
        /// </returns>
        private async Task SaveChangesAsync(CancellationToken cancellationToken)
        {
            if (AutoSaveChanges)
            {
                await Context.SaveChangesAsync(cancellationToken);
            }
        }
    }
}
