// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using System.Linq;
using System.Linq.Expressions;
using Partnerinfo.Utilities;

namespace Partnerinfo.Contact.EntityFrameworkCore
{
    /// <summary>
    /// Defines extension methods for <see cref="IQueryable{ContactItem}" />.
    /// </summary>
    internal static class ContactQueries
    {
        /// <summary>
        /// Filters a sequences of items based on predicates.
        /// </summary>
        internal static IQueryable<ContactItem> Where(this IQueryable<ContactItem> query, int id)
        {
            return query.Where(c => c.Id == id);
        }

        /// <summary>
        /// Filters a sequences of items based on predicates.
        /// </summary>
        internal static IQueryable<ContactItem> Where(this IQueryable<ContactItem> query, string text)
        {
            if (text == null)
            {
                return query;
            }

            return query.Where(c => c.Email.Contains(text) || c.FirstName.Contains(text) || c.LastName.Contains(text));
        }

        /// <summary>
        /// Sorts the items of a sequence according to a key.
        /// </summary>
        internal static IQueryable<ContactItem> OrderBy(this IQueryable<ContactItem> query, ContactQuerySortOrder orderBy)
        {
            if (orderBy == ContactQuerySortOrder.Recent)
            {
                return query.OrderByDescending(c => c.ModifiedDate);
            }

            if (orderBy == ContactQuerySortOrder.Email)
            {
                return query.OrderBy(c => c.Email);
            }

            return query.OrderBy(c => c.Id); // Required for Skip/Take.
        }

        /// <summary>
        /// Projects each item of a sequence into a new form.
        /// </summary>
        internal static IQueryable<ContactItem> Select(this IQueryable<ContactItem> query, ContactQueryFields fields)
        {
            Expression<Func<ContactItem, ContactItem>> selector = c => new ContactItem
            {
                Id = c.Id
            };

            if (fields.HasFlag(ContactQueryFields.Sponsor))
            {
                selector = selector.Merge(c => new ContactItem { });
            }

            if (fields.HasFlag(ContactQueryFields.Attributes))
            {
                selector = selector.Merge(c => new ContactItem { });
            }

            if (fields.HasFlag(ContactQueryFields.BusinessTags))
            {
                selector = selector.Merge(c => new ContactItem { });
            }

            return query.Select(selector);
        }
    }
}
