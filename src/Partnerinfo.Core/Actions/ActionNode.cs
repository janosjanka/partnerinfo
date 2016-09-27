// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Collections.Generic;

namespace Partnerinfo.Actions
{
    /// <summary>
    /// Represents a root (workflow) or subnode within a tree.
    /// </summary>
    public class ActionNode
    {
        /// <summary>
        /// Gets or sets the primary key for this action.
        /// </summary>
        /// <value>
        /// The primary key.
        /// </value>
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets the child nodes for this action.
        /// </summary>
        /// <value>
        /// The child nodes.
        /// </value>
        public virtual ICollection<ActionNode> Children { get; } = new List<ActionNode>();

        /// <summary>
        /// Calls a visit method of the visitor; the element passes itself and its children as an argument to the visit method.
        /// </summary>
        /// <param name="visitor">The visitor.</param>
        public virtual void Accept(ActionVisitor visitor)
        {
            visitor.Visit(this);

            foreach (ActionNode childNode in Children)
            {
                visitor.Visit(childNode);
            }
        }
    }
}
