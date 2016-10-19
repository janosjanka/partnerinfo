// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import * as ko from "knockout";

interface CountdownParams {
    value: KnockoutObservable<Date> | Date;
    complete: Function;
}

export class Countdown {
    private _valueInTicks: number;
    private _complete: Function;

    days: KnockoutObservable<number>;
    hours: KnockoutObservable<number>;
    minutes: KnockoutObservable<number>;
    seconds: KnockoutObservable<number>;

    /**
     * Initializes a new instance of the Countdown class.
     *
     * @param {any} A set of key/value pairs to configure the TimeSpan control
     */
    constructor(params: CountdownParams) {
        this._valueInTicks = ko.unwrap(params.value).getTime();
        this._complete = params.complete;

        this.days = ko.observable<number>(0);
        this.hours = ko.observable<number>(0);
        this.minutes = ko.observable<number>(0);
        this.seconds = ko.observable<number>(0);

        this.countdown();
    }

    private countdown(): void {
        let amount = this._valueInTicks - Date.now();
        if (amount < 0) {
            this._complete();
            return;
        }

        let days = 0, hours = 0, mins = 0, secs = 0;
        amount = Math.floor(amount / 1000);
        days = Math.floor(amount / 86400);
        amount = amount % 86400;
        hours = Math.floor(amount / 3600);
        amount = amount % 3600;
        mins = Math.floor(amount / 60);
        amount = amount % 60;
        secs = Math.floor(amount);

        this.days(days);
        this.hours(hours);
        this.minutes(mins);
        this.seconds(secs);

        let timeoutId = setTimeout(() => {
            clearTimeout(timeoutId);
            this.countdown();
        }, 1000);
    }
}

export default {
    viewModel: Countdown,
    template: require("./countdown.html")
};