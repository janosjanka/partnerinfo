// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Decimal degrees (DD) express latitude and longitude geographic coordinates as decimal fractions.
    /// </summary>
    /// <remarks>
    /// See: <see ref="https://en.wikipedia.org/wiki/Decimal_degrees">Decimal degrees</see>.
    /// </remarks>
    public enum GeoDegreePrecision
    {
        /// <summary>
        /// Country or large region. Decimal places: 0, decimal degrees: 1.0, DMS: 1° 00' 0', N/S or E/W at equator: 111.32 km.
        /// </summary>
        CountryOrLargeRegion = 0,

        /// <summary>
        /// Large city or district. Decimal places: 1, decimal degrees: 0.1, DMS: 0° 06' 0", N/S or E/W at equator: 11.132 km.
        /// </summary>
        LargeCityOrDistrict = 10,

        /// <summary>
        /// Town or village. Decimal places: 2, decimal degrees: 0.01, DMS: 0° 00' 36", N/S or E/W at equator: 1.1132 km.
        /// </summary>
        TownOrVillage = 100,

        /// <summary>
        /// Neighborhood, street. Decimal places: 3, decimal degrees: 0.001, DMS: 0° 00' 3.6", N/S or E/W at equator: 111.32 m.
        /// </summary>
        NeighborhoodOrStreet = 1000,

        /// <summary>
        /// Individual street, land parcel. Decimal places: 4, decimal degrees: 0.0001, DMS: 0° 00' 0.36", N/S or E/W at equator: 11.132 m.
        /// </summary>
        IndividualStreetOrLandParcel = 10000,

        /// <summary>
        /// Individual trees. Decimal places: 5, decimal degrees: 0.00001, DMS: 0° 00' 0.036", N/S or E/W at equator: 1.1132 m.
        /// </summary>
        IndividualTrees = 100000,

        /// <summary>
        /// Individual humans.
        /// </summary>
        IndividualHumans = 1000000,

        /// <summary>
        /// Practical limit of commercial surveying.
        /// </summary>
        PracticalLimitOfCommercialSurveying = 10000000,

        /// <summary>
        /// Specialized surveying (e.g. tectonic plate mapping).
        /// </summary>
        SpecializedSurveying = 100000000
    }
}
