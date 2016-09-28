// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using System.Threading;
using System.Threading.Tasks;

namespace Partnerinfo.Actions
{
    /// <summary>
    /// Provides an abstraction for a storage and management of actions.
    /// </summary>
    public interface IActionStore : IDisposable
    {
        /// <summary>
        /// Creates a new action in a store as an asynchronous operation.
        /// </summary>
        /// <param name="action">The action to create in the store.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="Task{OpStatusResult}" /> that represents the <see cref="OperationResult" /> of the asynchronous query.
        /// </returns>
        Task<OperationResult> CreateAsync(ActionNode action, CancellationToken cancellationToken);

        /// <summary>
        /// Updates a action in a store as an asynchronous operation.
        /// </summary>
        /// <param name="action">The action to update in the store.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="Task{OpStatusResult}" /> that represents the <see cref="OperationResult" /> of the asynchronous query.
        /// </returns>
        Task<OperationResult> UpdateAsync(ActionNode action, CancellationToken cancellationToken);

        /// <summary>
        /// Deletes a action from the store as an asynchronous operation.
        /// </summary>
        /// <param name="action">The action to delete from the store.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// A <see cref="Task{OpStatusResult}" /> that represents the <see cref="OperationResult" /> of the asynchronous query.
        /// </returns>
        Task<OperationResult> DeleteAsync(ActionNode action, CancellationToken cancellationToken);

        /// <summary>
        /// Finds a action with the given primary key value as an asynchronous operation.
        /// </summary>
        /// <param name="id">The primary key for the item to be found.</param>
        /// <param name="fields">The fields to be included in the result set.</param>
        /// <param name="cancellationToken">A token to observe while waiting for the task to complete.</param>
        /// <returns>
        /// A <see cref="Task{ActionNode}" /> that represents the <see cref="ActionNode" /> of the asynchronous query.
        /// </returns>
        Task<ActionNode> FindByIdAsync(int id, ActionField fields, CancellationToken cancellationToken);
    }
}
