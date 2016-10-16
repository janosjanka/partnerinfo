// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using Partnerinfo.Utilities;

namespace Partnerinfo
{
    /// <summary>
    /// Represents an immutable, thread-safe, and cachable Geo coordinate as DDD value object.
    /// </summary>
    /// <remarks>
    /// This type should be compatible with the DbGeography class. See:
    /// https://msdn.microsoft.com/en-us/library/system.data.spatial.dbgeography(v=vs.110).aspx
    /// </remarks>
    public sealed class GeoCoordinateInfo : IEquatable<GeoCoordinateInfo>
    {
        /// <summary>
        /// Represents a coordinate with no values. This field is read-only.
        /// </summary>
        public static readonly GeoCoordinateInfo Empty = new GeoCoordinateInfo();

        /// <summary>
        /// Gets or sets the longitude geographic coordinate that specifies the east-west position of a point on the Earth's surface.
        /// </summary>
        /// <value>
        /// The longitude is a geographic coordinate that specifies the east-west position of a point on the Earth's surface.
        /// </value>
        public double? Longitude { get; private set; }

        /// <summary>
        /// Gets or sets the latitude geographic coordinate that specifies the north-south position of a point on the Earth's surface.
        /// </summary>
        /// <value>
        /// The latitude is a geographic coordinate that specifies the north-south position of a point on the Earth's surface.
        /// </value>
        public double? Latitude { get; private set; }

        /// <summary>
        /// Prevents a default instance of the <see cref="GeoCoordinateInfo" /> class from being created.
        /// </summary>
        /// <remarks>
        /// The parameterless constructor enables two-way serialization scenarios.
        /// </remarks>
        internal GeoCoordinateInfo()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="GeoCoordinateInfo" /> class.
        /// </summary>
        /// <param name="longitude">The longitude is a geographic coordinate that specifies the east-west position of a point on the Earth's surface.</param>
        /// <param name="latitude">The latitude is a geographic coordinate that specifies the north-south position of a point on the Earth's surface.</param>
        public GeoCoordinateInfo(double? longitude, double? latitude)
        {
            Longitude = longitude;
            Latitude = latitude;
        }

        /// <summary>
        /// Indicates whether the current object is equal to another object of the same type.
        /// </summary>
        /// <param name="other">An object to compare with this object.</param>
        /// <returns>
        /// true if the current object is equal to the <paramref name="other" /> parameter; otherwise, false.
        /// </returns>
        public bool Equals(GeoCoordinateInfo other) => other != null && Longitude == other.Longitude && Latitude == other.Latitude;

        /// <summary>
        /// Determines whether the specified <see cref="System.Object" />, is equal to this instance.
        /// </summary>
        /// <param name="obj">The <see cref="System.Object" /> to compare with this instance.</param>
        /// <returns>
        ///   <c>true</c> if the specified <see cref="System.Object" /> is equal to this instance; otherwise, <c>false</c>.
        /// </returns>
        public sealed override bool Equals(object obj) => Equals(obj as GeoCoordinateInfo);

        /// <summary>
        /// Returns a hash code for this instance.
        /// </summary>
        /// <returns>
        /// A hash code for this instance, suitable for use in hashing algorithms and data structures like a hash table.
        /// </returns>
        public sealed override int GetHashCode() => Hash.Combine(Longitude?.GetHashCode() ?? 0, Latitude?.GetHashCode() ?? 0);

        /// <summary>
        /// Returns a <see cref="string" /> that represents this instance.
        /// </summary>
        /// <returns>
        /// A <see cref="string" /> that represents this instance.
        /// </returns>
        public sealed override string ToString() => $"POINT({Longitude} {Latitude})";
    }
}
