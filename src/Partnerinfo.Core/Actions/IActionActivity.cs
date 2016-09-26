// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Threading;
using System.Threading.Tasks;

namespace Partnerinfo.Actions
{
    /// <summary>
    /// Provides a means for invoking an action activity as if it were a method call.
    /// </summary>
    public interface IActionActivity
    {
        /// <summary>
        /// Called by the workflow runtime to execute an activity.
        /// </summary>
        /// <param name="context">The <see cref="ActionActivityContext" /> to associate with this activity and execution.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken" /> used to propagate notifications that the operation should be canceled.</param>
        /// <returns>
        /// The <see cref="ActionActivityResult" /> of the run task, which determines whether the activity remains in the executing state, or transitions to the closed state.
        /// </returns>
        Task<ActionActivityResult> ExecuteAsync(ActionActivityContext context, CancellationToken cancellationToken);
    }
}
