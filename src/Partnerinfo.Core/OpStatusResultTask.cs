// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Threading.Tasks;

namespace Partnerinfo
{
    /// <summary>
    /// Helps cache task results.
    /// </summary>
    internal static class OpStatusResultTask
    {
        /// <summary>
        /// Gets a static success <see cref="OpStatusResult" /> as a task.
        /// </summary>
        public static readonly Task<OpStatusResult> Success = Task.FromResult(OpStatusResult.Success);

        /// <summary>
        /// Gets a static failed <see cref="OpStatusResult" /> as a task.
        /// </summary>
        /// <param name="errors">A list of error messages.</param>
        public static Task<OpStatusResult> Failed(params OpStatusError[] errors) => Task.FromResult(OpStatusResult.Failed(errors));
    }
}
