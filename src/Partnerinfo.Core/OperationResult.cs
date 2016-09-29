// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Collections.Generic;
using System.Linq;

namespace Partnerinfo
{
    /// <summary>
    /// Represents the result of an operation.
    /// </summary>
    public class OperationResult
    {
        /// <summary>
        /// A static success <see cref="OperationResult" />.
        /// </summary>
        private static readonly OperationResult s_success = new OperationResult { Succeeded = true };

        /// <summary>
        /// A list of <see cref="OperationError" />s.
        /// </summary>
        private readonly List<OperationError> _errors = new List<OperationError>();

        /// <summary>
        /// Flag indicating whether if the operation succeeded or not.
        /// </summary>
        public bool Succeeded { get; private set; }

        /// <summary>
        /// An <see cref="IEnumerable{T}" /> of <see cref="OperationError" />s containing an errors
        /// that occurred during the identity operation.
        /// </summary>
        public IEnumerable<OperationError> Errors => _errors;

        /// <summary>
        /// Returns an <see cref="OperationResult" /> indicating a successful identity operation.
        /// </summary>
        public static OperationResult Success => s_success;

        /// <summary>
        /// Creates an <see cref="OperationResult" /> indicating a failed identity operation, with a list of <paramref name="errors" /> if applicable.
        /// </summary>
        /// <param name="errors">An optional array of <see cref="OperationError" />s which caused the operation to fail.</param>
        /// <returns>
        /// An <see cref="OperationResult" /> indicating a failed identity operation, with a list of <paramref name="errors" /> if applicable.
        /// </returns>
        public static OperationResult Failed(params OperationError[] errors)
        {
            var result = new OperationResult { Succeeded = false };
            if (errors != null)
            {
                result._errors.AddRange(errors);
            }
            return result;
        }

        /// <summary>
        /// Creates an <see cref="OperationResult" /> indicating a failed identity operation, with a list of <paramref name="errors" /> if applicable.
        /// </summary>
        /// <param name="errors">An optional array of <see cref="string" />s which caused the operation to fail.</param>
        /// <returns>
        /// An <see cref="OperationResult" /> indicating a failed identity operation, with a list of <paramref name="errors" /> if applicable.
        /// </returns>
        public static OperationResult Failed(params string[] errors)
        {
            var result = new OperationResult { Succeeded = false };
            if (errors != null)
            {
                result._errors.AddRange(errors.Select(error => new OperationError("Unknown", error)));
            }
            return result;
        }

        /// <summary>
        /// Converts the value of the current <see cref="OperationResult" /> object to its equivalent string representation.
        /// </summary>
        /// <returns>
        /// A string representation of the current <see cref="OperationResult" /> object.
        /// </returns>
        /// <remarks>
        /// If the operation was successful the ToString() will return "Succeeded" otherwise it returned
        /// "Failed : " followed by a comma delimited list of error codes from its <see cref="Errors" /> collection, if any.
        /// </remarks>
        public sealed override string ToString() => Succeeded ? "Succeeded" : $"Failed: ${string.Join(", ", Errors.Select(x => x.Code).ToArray())}";
    }
}