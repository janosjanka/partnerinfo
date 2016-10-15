﻿// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using System.Text;

namespace Partnerinfo.Utilities
{
    /// <summary>
    /// Helps normalize URI parts (segments) removing non-friendly URI characters.
    /// </summary>
    internal static class UriUtilities
    {
        /// <summary>
        /// Returns a normalized representation of the specified <paramref name="uri" />.
        /// </summary>
        /// <param name="uri">The uri to normalize.</param>
        /// <returns>
        /// A normalized representation of the specified <paramref name="uri" />.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">uriPart</exception>
        internal static string Normalize(string uri)
        {
            if (uri == null)
            {
                throw new ArgumentNullException(nameof(uri));
            }

            // Remove all leading and trailing white-space characters and normalize 
            // the given URI part using full compatibility decomposition (FormKD).
            string normalizedUri = uri
                .Trim()
                .Normalize(NormalizationForm.FormKD)
                .ToLower();

            // Remove both non-standard and non-friendly URI characters.
            var uriPartSep = true;
            var uriBuilder = new StringBuilder(normalizedUri.Length);
            for (var i = 0; i < normalizedUri.Length; ++i)
            {
                char ch = normalizedUri[i];
                if (ch >= 'a' && ch <= 'z' || ch >= '0' && ch <= '9')
                {
                    uriBuilder.Append(ch);
                    uriPartSep = false;
                }
                // These are valid (RFC) URI characters but we treat them as separators.
                else if (!uriPartSep && (ch == '-' || ch == '_' || ch == '.' || ch == '~' || char.IsWhiteSpace(ch)))
                {
                    uriBuilder.Append('-');
                    uriPartSep = true;
                }
            }
            return uriBuilder.ToString();
        }
    }
}
