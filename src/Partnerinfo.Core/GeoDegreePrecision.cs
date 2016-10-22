// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Decimal degrees (DD) express latitude and longitude geographic coordinates as decimal fractions.
    /// </summary>
    /// <remarks>
    /// Precision: <see ref="https://en.wikipedia.org/wiki/Decimal_degrees">Decimal degrees</see>.
    /// </remarks>
    public enum GeoDegreePrecision
    {
        /// <summary>
        /// Country or large region.
        /// </summary>
        CountryOrLargeRegion = 0,

        /// <summary>
        /// Large city or district.
        /// </summary>
        LargeCityOrDistrict = 10 * 1,

        /// <summary>
        /// Town or village.
        /// </summary>
        TownOrVillage = 10 * 2,

        /// <summary>
        /// Neighborhood, street.
        /// </summary>
        NeighborhoodOrStreet = 10 * 3,

        /// <summary>
        /// individual street, land parcel
        /// </summary>
        IndividualStreetOrLandParcel = 10 * 4,

        /// <summary>
        /// Individual trees.
        /// </summary>
        IndividualTrees = 10 * 5,

        /// <summary>
        /// Individual humans.
        /// </summary>
        IndividualHumans = 10 * 6,

        /// <summary>
        /// Practical limit of commercial surveying.
        /// </summary>
        PracticalLimitOfCommercialSurveying = 10 * 7,

        /// <summary>
        /// Specialized surveying (e.g. tectonic plate mapping).
        /// </summary>
        SpecializedSurveying = 10 * 8
    }
}
