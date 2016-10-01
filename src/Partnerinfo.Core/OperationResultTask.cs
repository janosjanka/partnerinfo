// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Threading.Tasks;

namespace Partnerinfo
{
    /// <summary>
    /// Helps cache task results.
    /// </summary>
    internal static class OperationResultTask
    {
        /// <summary>
        /// Gets a static success <see cref="OperationResult" /> as a task.
        /// </summary>
        internal static readonly Task<OperationResult> Success = Task.FromResult(OperationResult.Success);

        /// <summary>
        /// Gets a static failed <see cref="OperationResult" /> as a task.
        /// </summary>
        /// <param name="errors">A list of error messages.</param>
        internal static Task<OperationResult> Failed(params OperationError[] errors) => Task.FromResult(OperationResult.Failed(errors));
    }
}
