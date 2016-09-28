// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo.Actions
{
    /// <summary>
    /// Provides an abstraction for both in-memory and distributed (Redis, AppFabric, etc.) action node caches.
    /// </summary>
    public interface IActionItemCache
    {
        /// <summary>
        /// Gets the action node of key. If the key does not exist a null value is returned.
        /// </summary>
        /// <param name="key">The key for the action node to be found.</param>
        /// <returns>
        /// The action node or null.
        /// </returns>
        ActionItem Get(string key);

        /// <summary>
        /// Sets key to hold the action node. If key already holds a value, it is overwritten.
        /// Any previous time to live associated with the key is discarded on successful SET operation.
        /// </summary>
        /// <param name="key">The key for the action node to be found.</param>
        /// <param name="node">The action node to add or replace.</param>
        void Set(string key, ActionItem node);

        /// <summary>
        /// Removes the specified keys. A key is ignored if it does not exist.
        /// </summary>
        /// <param name="key">The key for the action node to be found.</param>
        void Del(string key);
    }
}
