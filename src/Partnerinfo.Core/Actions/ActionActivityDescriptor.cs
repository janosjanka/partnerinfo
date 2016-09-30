// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Diagnostics;

namespace Partnerinfo.Actions
{
    /// <summary>
    /// Represents an action with its metadata that can be used by .
    /// </summary>
    internal sealed class ActionActivityDescriptor
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ActionActivityDescriptor" /> class.
        /// </summary>
        /// <param name="activity">The activity.</param>
        /// <param name="metadata">The metadata.</param>
        public ActionActivityDescriptor(IActionActivity activity, ActionActivityMetadata metadata)
        {
            Debug.Assert(activity != null);
            Debug.Assert(metadata != null);

            Activity = activity;
            Metadata = metadata;
        }

        /// <summary>
        /// Gets the action activity.
        /// </summary>
        /// <value>
        /// The action activity.
        /// </value>
        public IActionActivity Activity { get; }

        /// <summary>
        /// Gets the action activity metadata that belongs to the action.
        /// </summary>
        /// <value>
        /// The action activity metadata.
        /// </value>
        public ActionActivityMetadata Metadata { get; }
    }
}
