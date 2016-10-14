// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Service to enable localization for application facing operation errors.
    /// </summary>
    public class OperationErrorDescriber
    {
        /// <summary>
        /// Returns an <see cref="OperationError" /> indicating a concurrency failure.
        /// </summary>
        /// <returns>
        /// An <see cref="OperationError" /> indicating a concurrency failure.
        /// </returns>
        public virtual OperationError ConcurrencyFailure() => new OperationError(nameof(ConcurrencyFailure), Resources.ConcurrencyFailure);
    }
}
