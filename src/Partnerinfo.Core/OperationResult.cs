// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Collections.Generic;
using System.Linq;

namespace Partnerinfo
{
    /// <summary>
    /// Represents the result of an operation.
    /// </summary>
    public sealed class OperationResult
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
        /// Gets a value indicating whether the operation was succeeded or not.
        /// </summary>
        /// <value>
        ///   <c>true</c> if succeeded; otherwise, <c>false</c>.
        /// </value>
        public bool Succeeded { get; private set; }

        /// <summary>
        /// An <see cref="IEnumerable{T}" /> of <see cref="OperationError" />s containing errors that occurred during the operation.
        /// </summary>
        /// <value>
        /// An <see cref="IEnumerable{T}" /> of <see cref="OperationError" />s.
        /// </value>
        public IEnumerable<OperationError> Errors => _errors;

        /// <summary>
        /// Returns an <see cref="OperationResult" /> indicating a successful operation.
        /// </summary>
        /// <value>
        /// An <see cref="OperationResult" />.
        /// </value>
        public static OperationResult Success => s_success;

        /// <summary>
        /// Creates an <see cref="OperationResult" /> indicating a failed operation, with a list of <paramref name="errors" /> if applicable.
        /// </summary>
        /// <param name="errors">An optional array of <see cref="OperationError" />s which caused the operation to fail.</param>
        /// <returns>
        /// An <see cref="OperationResult" /> indicating a failed operation, with a list of <paramref name="errors" /> if applicable.
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
        /// Creates an <see cref="OperationResult" /> indicating a failed operation, with a list of <paramref name="errors" /> if applicable.
        /// </summary>
        /// <param name="errors">An optional array of <see cref="string" />s which caused the operation to fail.</param>
        /// <returns>
        /// An <see cref="OperationResult" /> indicating a failed operation, with a list of <paramref name="errors" /> if applicable.
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
        public sealed override string ToString() => Succeeded ? "Succeeded" : $"Failed: ${string.Join(", ", Errors.Select(x => x.Code).ToArray())}";
    }
}