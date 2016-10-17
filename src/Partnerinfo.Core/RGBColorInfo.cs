// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using Newtonsoft.Json;

namespace Partnerinfo
{
    /// <summary>
    /// Represents an immutable, thread-safe, and cachable RGB color as DDD value object.
    /// </summary>
    [JsonConverter(typeof(RGBColorInfoJsonConverter))]
    public sealed class RGBColorInfo : IEquatable<RGBColorInfo>
    {
        /// <summary>
        /// Gets the red component for this color.
        /// </summary>
        /// <value>
        /// The red component.
        /// </value>
        public byte R { get; private set; }

        /// <summary>
        /// Gets the green component for this color.
        /// </summary>
        /// <value>
        /// The green component.
        /// </value>
        public byte G { get; private set; }

        /// <summary>
        /// Gets the blue component for this color.
        /// </summary>
        /// <value>
        /// The blue component.
        /// </value>
        public byte B { get; private set; }

        /// <summary>
        /// Gets the RGB value using all the components for this color.
        /// </summary>
        /// <value>
        /// The RGB value.
        /// </value>
        public int RGB
        {
            get
            {
                return (R << 16) | (G << 8) | B;
            }
            private set
            {
                R = (byte)(value >> 16);
                G = (byte)(value >> 8);
                B = (byte)(value);
            }
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="RGBColorInfo" /> class.
        /// </summary>
        /// <remarks>
        /// The parameterless constructor enables two-way serialization scenarios.
        /// </remarks>
        internal RGBColorInfo()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="RGBColorInfo" /> class.
        /// </summary>
        /// <param name="r">The red component.</param>
        /// <param name="g">The green component.</param>
        /// <param name="b">The blue component.</param>
        public RGBColorInfo(byte r, byte g, byte b)
        {
            R = r;
            G = g;
            B = b;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="RGBColorInfo" /> class.
        /// </summary>
        /// <param name="color">An <see cref="int" /> that represents a RGB color value.</param>
        public RGBColorInfo(int color)
        {
            RGB = color;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="RGBColorInfo" /> class.
        /// </summary>
        /// <param name="color">The color.</param>
        public RGBColorInfo(string color)
        {
            if (color == null || color.Length == 0)
            {
                RGB = 16777215; // = #ffffff (magic number for white)
            }
            else
            {
                if ((color[0] == '#') && ((color.Length == 7) || (color.Length == 4)))
                {
                    if (color.Length == 7)
                    {
                        R = Convert.ToByte(color.Substring(1, 2), 16);
                        G = Convert.ToByte(color.Substring(3, 2), 16);
                        B = Convert.ToByte(color.Substring(5, 2), 16);
                    }
                    else
                    {
                        string sr = char.ToString(color[1]);
                        string sg = char.ToString(color[2]);
                        string sb = char.ToString(color[3]);

                        R = Convert.ToByte(sr + sr, 16);
                        G = Convert.ToByte(sg + sg, 16);
                        B = Convert.ToByte(sb + sb, 16);
                    }
                }
            }
        }

        /// <summary>
        /// Indicates whether the current object is equal to another object of the same type.
        /// </summary>
        /// <param name="other">An object to compare with this object.</param>
        /// <returns>
        /// true if the current object is equal to the <paramref name="other" /> parameter; otherwise, false.
        /// </returns>
        public bool Equals(RGBColorInfo other) => RGB == other?.RGB;

        /// <summary>
        /// Determines whether the specified <see cref="System.Object" />, is equal to this instance.
        /// </summary>
        /// <param name="obj">The <see cref="System.Object" /> to compare with this instance.</param>
        /// <returns>
        ///   <c>true</c> if the specified <see cref="System.Object" /> is equal to this instance; otherwise, <c>false</c>.
        /// </returns>
        public sealed override bool Equals(object obj) => Equals(obj as RGBColorInfo);

        /// <summary>
        /// Returns a hash code for this instance.
        /// </summary>
        /// <returns>
        /// A hash code for this instance, suitable for use in hashing algorithms and data structures like a hash table.
        /// </returns>
        public sealed override int GetHashCode() => RGB.GetHashCode();

        /// <summary>
        /// Returns a <see cref="string" /> that represents this instance.
        /// </summary>
        /// <returns>
        /// A <see cref="string" /> that represents this instance.
        /// </returns>
        public sealed override string ToString() => $"#{RGB:x6}";
    }
}
