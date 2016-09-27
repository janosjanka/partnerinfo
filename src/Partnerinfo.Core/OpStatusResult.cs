// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Collections.Generic;
using System.Linq;

namespace Partnerinfo
{
    /// <summary>
    /// Represents the result of an operation.
    /// </summary>
    public class OpStatusResult
    {
        /// <summary>
        /// A static success <see cref="OpStatusResult" />.
        /// </summary>
        private static readonly OpStatusResult s_success = new OpStatusResult { Succeeded = true };

        /// <summary>
        /// A list of <see cref="OpStatusError" />s.
        /// </summary>
        private readonly List<OpStatusError> _errors = new List<OpStatusError>();

        /// <summary>
        /// Flag indicating whether if the operation succeeded or not.
        /// </summary>
        public bool Succeeded { get; private set; }

        /// <summary>
        /// An <see cref="IEnumerable{T}" /> of <see cref="OpStatusError" />s containing an errors
        /// that occurred during the identity operation.
        /// </summary>
        public IEnumerable<OpStatusError> Errors => _errors;

        /// <summary>
        /// Returns an <see cref="OpStatusResult" /> indicating a successful identity operation.
        /// </summary>
        public static OpStatusResult Success => s_success;

        /// <summary>
        /// Creates an <see cref="OpStatusResult" /> indicating a failed identity operation, with a list of <paramref name="errors" /> if applicable.
        /// </summary>
        /// <param name="errors">An optional array of <see cref="OpStatusError" />s which caused the operation to fail.</param>
        /// <returns>
        /// An <see cref="OpStatusResult" /> indicating a failed identity operation, with a list of <paramref name="errors" /> if applicable.
        /// </returns>
        public static OpStatusResult Failed(params OpStatusError[] errors)
        {
            var result = new OpStatusResult { Succeeded = false };
            if (errors != null)
            {
                result._errors.AddRange(errors);
            }
            return result;
        }

        /// <summary>
        /// Creates an <see cref="OpStatusResult" /> indicating a failed identity operation, with a list of <paramref name="errors" /> if applicable.
        /// </summary>
        /// <param name="errors">An optional array of <see cref="string" />s which caused the operation to fail.</param>
        /// <returns>
        /// An <see cref="OpStatusResult" /> indicating a failed identity operation, with a list of <paramref name="errors" /> if applicable.
        /// </returns>
        public static OpStatusResult Failed(params string[] errors)
        {
            var result = new OpStatusResult { Succeeded = false };
            if (errors != null)
            {
                result._errors.AddRange(errors.Select(error => new OpStatusError("Unknown", error)));
            }
            return result;
        }

        /// <summary>
        /// Converts the value of the current <see cref="OpStatusResult" /> object to its equivalent string representation.
        /// </summary>
        /// <returns>
        /// A string representation of the current <see cref="OpStatusResult" /> object.
        /// </returns>
        /// <remarks>
        /// If the operation was successful the ToString() will return "Succeeded" otherwise it returned
        /// "Failed : " followed by a comma delimited list of error codes from its <see cref="Errors" /> collection, if any.
        /// </remarks>
        public override string ToString()
        {
            return Succeeded ? "Succeeded" : $"Failed: ${string.Join(",", Errors.Select(x => x.Code).ToArray())}";
        }
    }
}