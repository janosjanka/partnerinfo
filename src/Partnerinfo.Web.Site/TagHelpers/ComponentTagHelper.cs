// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Partnerinfo.TagHelpers
{
    /// <summary>
    /// Represents a tag helper for rendering a knockout component.
    /// </summary>
    [HtmlTargetElement("ko-component", Attributes = nameof(Name) + "," + nameof(Params))]
    public sealed class ComponentTagHelper : TagHelper
    {
        private readonly IJsonHelper _jsonHelper;

        /// <summary>
        /// Gets or sets the name of the Knockout component.
        /// </summary>
        /// <value>
        /// The name of the Knockout component.
        /// </value>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the parameters for the Knockout component.
        /// </summary>
        /// <value>
        /// The parameters for the Knockout component.
        /// </value>
        public object Params { get; set; }

        /// <summary>
        /// Initializes a new instance of the <see cref="ComponentTagHelper" /> class.
        /// </summary>
        /// <param name="jsonHelper">The JSON helper.</param>
        //public ComponentTagHelper(IJsonHelper jsonHelper)
        //{
        //    _jsonHelper = jsonHelper;
        //}

        /// <summary>
        /// Synchronously executes the <see cref="T:Microsoft.AspNetCore.Razor.TagHelpers.TagHelper" /> with the given <paramref name="context" /> and
        /// <paramref name="output" />.
        /// </summary>
        /// <param name="context">Contains information associated with the current HTML tag.</param>
        /// <param name="output">A stateful HTML element used to generate an HTML tag.</param>
        public sealed override void Process(TagHelperContext context, TagHelperOutput output)
        {
            //output.PreElement.SetHtmlContent($"<!-- ko component: {{ name: '{Name}', params: {(Params == null ? null : _jsonHelper.Serialize(Params))} }} -->");
            //output.PostElement.SetHtmlContent("<!-- /ko -->");
            //output.TagName = null;
        }
    }
}
