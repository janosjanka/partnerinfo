// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

export function rgbToHex(rgb: string): string {
    const matchArray = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (matchArray && matchArray.length === 4) ? "#" +
        ("0" + parseInt(matchArray[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(matchArray[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(matchArray[3], 10).toString(16)).slice(-2) : null;
}
