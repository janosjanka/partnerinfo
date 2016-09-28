// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Represents an immutable, thread-safe, and cachable Geo coordinate as DDD value object.
    /// </summary>
    /// <remarks>
    /// This type should be compatible with the DbGeography class. See:
    /// https://msdn.microsoft.com/en-us/library/system.data.spatial.dbgeography(v=vs.110).aspx
    /// </remarks>
    public sealed class GeoCoordinate
    {
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
        /// Prevents a default instance of the <see cref="GeoCoordinate" /> class from being created.
        /// </summary>
        /// <remarks>
        /// The parameterless constructor enables two-way serialization scenarios.
        /// </remarks>
        private GeoCoordinate()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="GeoCoordinate" /> class.
        /// </summary>
        /// <param name="longitude">The longitude is a geographic coordinate that specifies the east-west position of a point on the Earth's surface.</param>
        /// <param name="latitude">The latitude is a geographic coordinate that specifies the north-south position of a point on the Earth's surface.</param>
        public GeoCoordinate(double? longitude, double? latitude)
        {
            Longitude = longitude;
            Latitude = latitude;
        }

        /// <summary>
        /// Returns a <see cref="string" /> that represents this instance.
        /// </summary>
        /// <returns>
        /// A <see cref="string" /> that represents this instance.
        /// </returns>
        public sealed override string ToString() => $"POINT({Longitude} {Latitude})";
    }
}
