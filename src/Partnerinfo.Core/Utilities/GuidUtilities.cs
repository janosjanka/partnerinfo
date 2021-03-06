// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using System.Runtime.InteropServices;

namespace Partnerinfo.Utilities
{
    /// <summary>
    /// Provides methods for generating sequential GUIDs.
    /// </summary>
    internal static class GuidUtilities
    {
        // TODO: Cross-platform solution:
        // https://github.com/nhibernate/nhibernate-core/blob/master/src/NHibernate/Id/GuidCombGenerator.cs

        /// <summary>
        /// The UuidCreateSequential function creates a new UUID.
        /// </summary>
        /// <param name="guid">Returns a pointer to the created UUID.</param>
        /// <returns>
        /// The result code (RPC_S_OK | RPC_S_UUID_LOCAL_ONLY | RPC_S_UUID_NO_ADDRESS).
        /// </returns>
        /// <remarks>
        /// https://msdn.microsoft.com/en-us/library/windows/desktop/aa379322(v=vs.85).aspx
        /// </remarks>
        [DllImport("rpcrt4.dll", SetLastError = true)]
        internal static extern int UuidCreateSequential(out Guid guid);

        /// <summary>
        /// Create a new sequential GUID.
        /// </summary>
        /// <returns>
        /// Returns with a GUID.
        /// </returns>
        internal static Guid NewSequentialGuid()
        {
            Guid guid;
            int hr = UuidCreateSequential(out guid);
            if (hr == 0)
            {
                byte[] source = guid.ToByteArray();
                byte[] dest = guid.ToByteArray();
                dest[0] = source[3];
                dest[1] = source[2];
                dest[2] = source[1];
                dest[3] = source[0];
                dest[4] = source[5];
                dest[5] = source[4];
                dest[6] = source[7];
                dest[7] = source[6];
                return new Guid(dest);
            }
            return Guid.NewGuid();
        }

        /// <summary>
        /// Creates a new unique string identifier using the bytes of a GUID.
        /// </summary>
        /// <returns>
        /// An unique string identifier.
        /// </returns>
        internal static string NewSequentialId() => NewSequentialGuid().ToString("N");
    }
}