﻿// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Partnerinfo.Actions.ModelBinders
{
    /// <summary>
    /// Parses URL encoded action link parameters to a <see cref="ActionLink" /> model object.
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.ModelBinding.IModelBinder" />
    public sealed class ActionLinkModelBinder : IModelBinder
    {
        /// <summary>
        /// Attempts to bind a model.
        /// </summary>
        /// <param name="bindingContext">The <see cref="T:Microsoft.AspNetCore.Mvc.ModelBinding.ModelBindingContext" />.</param>
        /// <returns>
        /// <para>
        /// A <see cref="T:System.Threading.Tasks.Task" /> which will complete when the model binding process completes.
        /// </para>
        /// <para>
        /// If model binding was successful, the <see cref="P:Microsoft.AspNetCore.Mvc.ModelBinding.ModelBindingContext.Result" /> should have
        /// <see cref="P:Microsoft.AspNetCore.Mvc.ModelBinding.ModelBindingResult.IsModelSet" /> set to <c>true</c>.
        /// </para>
        /// <para>
        /// A model binder that completes successfully should set <see cref="P:Microsoft.AspNetCore.Mvc.ModelBinding.ModelBindingContext.Result" /> to
        /// a value returned from <see cref="M:Microsoft.AspNetCore.Mvc.ModelBinding.ModelBindingResult.Success(System.Object)" />.
        /// </para>
        /// </returns>
        public Task BindModelAsync(ModelBindingContext bindingContext)
        {
            var service = bindingContext.HttpContext.RequestServices.GetService(typeof(IActionLinkService)) as IActionLinkService;

            Debug.Assert(service != null);
            Debug.Assert(bindingContext.ModelType == typeof(ActionLink));

            var paramUri = bindingContext.ValueProvider.GetValue("paramUri").FirstValue;
            if (paramUri != null)
            {
                var customUri = bindingContext.ValueProvider.GetValue("customUri").FirstValue;
                bindingContext.Model = service.UrlTokenDecode(paramUri, customUri);
            }

            return Task.CompletedTask;
        }
    }
}