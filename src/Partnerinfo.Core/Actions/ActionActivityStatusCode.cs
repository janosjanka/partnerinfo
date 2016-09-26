// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo.Actions
{
    /// <summary>
    /// A state flag that can be used to indicate the exit state of an action flow.
    /// </summary>
    public enum ActionActivityStatusCode : byte
    {
        /// <summary>
        /// Indicates that the action successfully performed and there is a return value for the action.
        /// </summary>
        Success = 0,

        /// <summary>
        /// Indicates that the action successfully performed but there is no a return value for the action.
        /// </summary>
        Failed = 1,

        /// <summary>
        /// Indicates that the user does not have any access rights for a resource.
        /// </summary>
        Forbidden = 2
    }
}
