// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo.Actions
{
    /// <summary>
    /// Represents a <see cref="ActionNode" /> visitor that visits only the single action node passed into its Visit method.
    /// </summary>
    public abstract class ActionVisitor
    {
        /// <summary>
        /// Visits the specified action node.
        /// </summary>
        /// <param name="node">The action node to visit.</param>
        public virtual void Visit(ActionNode node)
        {
            if (node != null)
            {
                node.Accept(this);
            }
        }
    }
}
