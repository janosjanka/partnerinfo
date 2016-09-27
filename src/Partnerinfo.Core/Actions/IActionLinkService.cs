// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;

namespace Partnerinfo.Actions
{
    /// <summary>
    /// Provides an abstraction for action link operations.
    /// </summary>
    public interface IActionLinkService
    {
        /// <summary>
        /// Creates a new action link parameters that can be shared on the Web.
        /// </summary>
        /// <param name="actionLink">An object that configures the action link will be created.</param>
        /// <returns>
        /// The link.
        /// </returns>
        string UrlTokenEncode(ActionLink actionLink);

        /// <summary>
        /// Parses the given string parameters and returns with a <see cref="ActionLink" /> object.
        /// </summary>
        /// <param name="paramUri">The string that contains entity ID(s).</param>
        /// <param name="customUri">The user-defined URI for the action link.</param>
        /// <returns>
        /// A <see cref="ActionLink" /> object.
        /// </returns>
        ActionLink UrlTokenDecode(string paramUri, string customUri = null);

        /// <summary>
        /// Creates a new action link that can be shared on the Web.
        /// </summary>
        /// <param name="actionLink">An object that configures the action link will be created.</param>
        /// <param name="absolute">It will create an absolute URL if true.</param>
        /// <returns>
        /// The link.
        /// </returns>
        string CreateLink(ActionLink actionLink, bool absolute);

        /// <summary>
        /// Parses the given string parameters and returns with a <see cref="ActionLink" /> object.
        /// </summary>
        /// <param name="link">The action link.</param>
        /// <returns>
        /// A <see cref="ActionLink" /> object.
        /// </returns>
        ActionLink DecodeLink(string link);

        /// <summary>
        /// In a specified input string, replaces all actionlink parameter
        /// with another actionlink parameter returned by a callback function.
        /// </summary>
        /// <param name="input">The string to search for a match.</param>
        /// <param name="callback">A custom method that examines each match and returns either the original matched
        /// actionlink parameter or a replacement actionlink parameter.</param>
        /// <returns>
        /// The processed input text.
        /// </returns>
        string ReplaceLinks(string input, Action<ActionLink> callback);
    }
}
