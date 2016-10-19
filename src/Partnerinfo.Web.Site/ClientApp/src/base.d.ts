// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

/** Provides a mechanism for releasing unmanaged resources. */
interface IDisposable {

    /** Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources. */
    dispose(): void;

}

/** Provides a way for an object to be invalidated. */
interface IValidable {

    /** A bindable array of validation errors. */
    validationErrors: KnockoutValidationErrors;

    /** Gets a value indicating whether this object is valid. */
    isValid: boolean;

    /** Validates this object and returns true if that is valid. */
    validate(): boolean;

}

/** Allows an object to control its own serialization and deserialization. */
interface ISerializable {

    /** Serializes this object to a native JS object. */
    toObject(): Object;

}