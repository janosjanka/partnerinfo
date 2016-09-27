// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;

namespace Partnerinfo
{
    /// <summary>
    /// Represents server paths shared across application boundaries.
    /// </summary>
    public static class ServerPaths
    {
        /// <summary>
        /// TODO: It is now hard-coded.
        /// </summary>
        public static readonly Uri BaseUri = new Uri("http://partnerinfo-localhost.tv");
    }
}