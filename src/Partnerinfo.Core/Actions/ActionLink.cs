// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo.Actions
{
    /// <summary>
    /// Identifies an action (tree) that will be executed immediately after an event is occurred.
    /// </summary>
    public sealed class ActionLink
    {
        /// <summary>
        /// Gets or sets the primary key for the action.
        /// </summary>
        /// <value>
        /// The primary key for the action.
        /// </value>
        public int ActionId { get; internal set; }

        /// <summary>
        /// Gets or sets the primary key for the contact.
        /// </summary>
        /// <value>
        /// The primary key for the contact.
        /// </value>
        public int? ContactId { get; internal set; }

        /// <summary>
        /// Gets or sets the custom URI that is appended to the URL.
        /// </summary>
        /// <value>
        /// The custom URI that is appended to the URL.
        /// </value>
        public string CustomUri { get; internal set; }

        /// <summary>
        /// Prevents a default instance of the <see cref="ActionLink" /> class from being created.
        /// </summary>
        /// <remarks>
        /// The parameterless constructor enables two-way serialization scenarios.
        /// </remarks>
        internal ActionLink()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ActionLink" /> class.
        /// </summary>
        /// <param name="actionId">The primary key for the action.</param>
        /// <param name="contactId">The primary key for the contact.</param>
        /// <param name="customUri">The custom URI that is appended to the URL.</param>
        public ActionLink(int actionId, int? contactId = null, string customUri = null)
        {
            ActionId = actionId;
            ContactId = contactId;
            CustomUri = customUri;
        }

        /// <summary>
        /// Returns a <see cref="string" /> that represents this instance.
        /// </summary>
        /// <returns>
        /// A <see cref="string" /> that represents this instance.
        /// </returns>
        public override string ToString() => ContactId == null ? $"{ActionId}/{CustomUri}" : $"{ActionId}.{ContactId}/{CustomUri}";
    }
}
