// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Threading;
using System.Threading.Tasks;

namespace Partnerinfo.Contact
{
    /// <summary>
    /// Provides an abstraction for contact validation.
    /// </summary>
    public interface IContactValidator
    {
        /// <summary>
        /// Validates the specified <paramref name="contact" /> as an asynchronous operation.
        /// </summary>
        /// <param name="manager">The <see cref="ContactManager" /> that can be used to retrieve user properties.</param>
        /// <param name="contact">The contact to validate.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// The <see cref="Task" /> that represents the asynchronous operation, containing the <see cref="OperationResult" /> of the validation operation.
        /// </returns>
        Task<OperationResult> ValidateAsync(ContactManager manager, ContactItem contact, CancellationToken cancellationToken);
    }
}
