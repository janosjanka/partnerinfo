// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo.Actions
{
    /// <summary>
    /// Provides an abstraction for action link operations.
    /// </summary>
    public interface IActionLinkEncoder
    {
        /// <summary>
        /// Encodes the specified <paramref name="actionLink" /> as a RFC valid part of a URL.
        /// </summary>
        /// <param name="actionLink">An object that configures the action link will be created.</param>
        /// <returns>
        /// A <see cref="string" /> representing the encoded action link parameters.
        /// </returns>
        string UrlTokenEncode(ActionLink actionLink);

        /// <summary>
        /// Parses the specified URL parts and returns with an <see cref="ActionLink" /> object.
        /// </summary>
        /// <param name="paramUri">The string that contains entity ID(s).</param>
        /// <param name="customUri">The user-defined URI for the action link.</param>
        /// <returns>
        /// A <see cref="ActionLink" /> object representing the decoded action link parameters.
        /// </returns>
        ActionLink UrlTokenDecode(string paramUri, string customUri = null);
    }
}
