// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import * as ko from "knockout";

function asNumber(n: any): number {
    return n === undefined ? 0 : +n;
}

interface TimeSpanParams {
    /** The value that will be updated by the component automatically. */
    value: KnockoutObservable<string>;
}

class TimeSpan implements Disposable {
    private _disposed: boolean;
    private _listening: boolean;

    private _d: KnockoutSubscription;
    private _h: KnockoutSubscription;
    private _m: KnockoutSubscription;
    private _s: KnockoutSubscription;

    days: KnockoutObservable<number>;
    hours: KnockoutObservable<number>;
    minutes: KnockoutObservable<number>;
    seconds: KnockoutObservable<number>;

    value: KnockoutObservable<string>;

    /**
     * Initializes a new instance of the TimeSpan class.
     *
     * @param params A set of key/value pairs to configure the TimeSpan control.
     */
    constructor(params: TimeSpanParams) {
        this._disposed = false;
        this._listening = true;

        this.days = ko.observable<number>()
            .extend({
                displayName: "controls:timespan.days",
                min: 0
            });
        this.hours = ko.observable<number>()
            .extend({
                displayName: "controls:timespan.hours",
                min: 0,
                max: 23
            });
        this.minutes = ko.observable<number>()
            .extend({
                displayName: "controls:timespan.minutes",
                min: 0,
                max: 59
            });
        this.seconds = ko.observable<number>()
            .extend({
                displayName: "controls:timespan.seconds",
                min: 0,
                max: 59
            });

        this.value = params.value;

        this.loadFromString(ko.unwrap(this.value));

        this._d = this.days.subscribe(this.timeChanged, this);
        this._h = this.hours.subscribe(this.timeChanged, this);
        this._m = this.minutes.subscribe(this.timeChanged, this);
        this._s = this.seconds.subscribe(this.timeChanged, this);
    }

    /** Raised immediately after one of the time values has changed. */
    timeChanged(): void {
        if (!this._listening) {
            return;
        }
        this._listening = false;
        let [days, hours, minutes, seconds] = this.getValues();
        let rem = seconds % 60;
        minutes += (seconds - rem) / 60;
        seconds = rem;
        rem = minutes % 60;
        hours += (minutes - rem) / 60;
        minutes = rem;
        rem = hours % 24;
        days += (hours - rem) / 24;
        hours = rem;
        this.setValues(days, hours, minutes, seconds);
        this.value(this.toString());
        this._listening = true;
    }

    /**
     * Loads time values from the specified string.
     *
     * @param value A string that contains time values.
     */
    loadFromString(value: string): void {
        const slots = value ? value.split(":", 4) : [];
        this.setValues(asNumber(slots[0]), asNumber(slots[1]), asNumber(slots[2]), asNumber(slots[3]));
    }

    /** Gets all the time components using a tuple { days, hours, minutes, seconds }. */
    getValues(): [number, number, number, number] {
        return [this.days(), this.hours(), this.minutes(), this.seconds()];
    }

    /**
     * Sets all the time components using the specified values.
     *
     * @param days     The days component of the time interval.
     * @param hours    The hours component of the time interval.
     * @param minutes  The minutes component of the time interval.
     * @param seconds  The seconds component of the time interval.
     */
    setValues(days: number, hours: number, minutes: number, seconds: number): void {
        this.days(days);
        this.hours(hours);
        this.minutes(minutes);
        this.seconds(seconds);
    }

    /** Converts this time span to string. */
    toString(): string {
        const [days, hours, minutes, seconds] = this.getValues();
        return `${days}:${hours}:${minutes}:${seconds}`;
    }

    /** Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources. */
    dispose(): void {
        if (this._disposed) {
            return;
        }
        this._d && this._d.dispose(), this._d = null;
        this._h && this._h.dispose(), this._h = null;
        this._m && this._m.dispose(), this._m = null;
        this._s && this._s.dispose(), this._s = null;
        this._disposed = true;
    }
}

export default {
    viewModel: TimeSpan,
    template: require("./timespan.html")
};