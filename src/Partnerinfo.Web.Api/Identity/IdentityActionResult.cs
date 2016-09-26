// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Partnerinfo.Identity
{
    /// <summary>
    /// An implementation of <see cref="IActionResult" /> that wraps up a <see cref="IdentityResult" />.
    /// Instead of constructors, use the static extension methods of the <see cref="IdentityControllerExtensions" /> class
    /// to return a new instance from an action.
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.ActionResult" />
    public sealed class IdentityActionResult : ActionResult
    {
        /// <summary>
        /// The result of an operation.
        /// </summary>
        private readonly IdentityResult _result;

        /// <summary>
        /// Initializes a new instance of the <see cref="IdentityActionResult" /> class.
        /// </summary>
        /// <param name="result">The operation result.</param>
        public IdentityActionResult(IdentityResult result)
        {
            _result = result;
        }

        /// <summary>
        /// Executes the result operation of the action method synchronously. This method is called by MVC to process
        /// the result of an action method.
        /// </summary>
        /// <param name="context">The context in which the result is executed. The context information includes
        /// information about the action that was executed and request information.</param>
        public override void ExecuteResult(ActionContext context)
        {
            if (!_result.Succeeded)
            {
                var modelState = context.ModelState;
                foreach (var error in _result.Errors)
                {
                    modelState.AddModelError(error.Code, error.Description);
                }
            }

            base.ExecuteResult(context);
        }
    }
}