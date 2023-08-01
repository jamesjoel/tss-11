# date-format-ms

Formatting of date and times in JS using format codes that match the PHP date() function.

For example:

```js
import { dateToLocalFormat } from 'date-format-ms';

dateToLocalFormat(new Date(), 'D jS M Y g:ia'); // "Monday 9th Aug 2021 5:30pm"
```

-----

Note that for the examples in this document, the system timezone is taken to be Europe/Istanbul, where the local time
is UTC+3:00 (all year).

-----

## Format codes ##

Formatting functions in this package work by supplying a string representing the required format using various codes, as defined in the table below.

We use the same codes as the [PHP date() function](https://www.php.net/manual/en/datetime.format.php) (although not all of the PHP date() codes are supported).

For example

```js
ymdHisToFormat('2021-09-08 17:30:00', 'D jS M Y g:ia'); // "Monday 9th Aug 2021 5:30pm"
```

Unrecognized characters in the format string are written into the output string unchanged, for example:

```js
ymdToFormat('2021-09-08', 'd/M/Y'); // "08/09/2021"
```

To add a literal character to the output you can escape with a backslash, for example:

```js
ymdToFormat('2021-09-08', '\\M: M'); // "M: Aug"
```

| Code | Description | Example |
|------|-------------|---------|
|`d`|Day of the month, 2 digits with leading zeros|`01` to `31`|
|`D`|A textual representation of a day, three letters|`Mon` through `Sun`|
|`j`|Day of the month without leading zeros|`1` to `31`|
|`l`|A full textual representation of the day of the week|`Sunday` through `Saturday`|
|`N`|ISO-8601 numeric representation of the day of the week| `1` (for Monday) through `7` (for Sunday)|
|`w`|Numeric representation of the day of the week|`0` (for Sunday) through `6` (for Saturday)|
|`S`|English ordinal suffix for the day of the month, 2 characters|`st`, `nd`, `rd` or `th`. Works well with `j`|
|`z`|The day of the year (starting from 0)|`0` through `365`|
|`W`|ISO-8601 week number of year, weeks starting on Monday|Example: `42` (the 42nd week in the year)|
|`F`|A full textual representation of a month, such as January or March|`January` through `December`|
|`m`|Numeric representation of a month, with leading zeros|`01` through `12`|
|`M`|A short textual representation of a month, three letters|`Jan` through `Dec`|
|`n`|Numeric representation of a month, without leading zeros|`1` through `12`|
|`t`|Number of days in the given month|`28` through `31`|
|`L`|Whether it's a leap year|`1` if it is a leap year, `0` otherwise.|
|`o`|ISO-8601 week-numbering year. This has the same value as `Y`, except that if the ISO week number (`W`) belongs to the previous or next year, that year is used instead.|Examples: `1999` or `2003`|
|`Y`|A full numeric representation of a year, 4 digits|Examples: `1999` or `2003`|
|`y`|A two digit representation of a year|Examples: `99` or `03`|
|`a`|Lowercase Ante meridiem and Post meridiem|`am` or `pm`|
|`A`|Uppercase Ante meridiem and Post meridiem|`AM` or `PM`|
|`g`|12-hour format of an hour without leading zeros|`1` through `12`|
|`G`|24-hour format of an hour without leading zeros|`0` through `23`|
|`h`|12-hour format of an hour with leading zeros|`01` through `12`|
|`H`|24-hour format of an hour with leading zeros|`00` through `23`|
|`i`|Minutes with leading zeros|`00` to `59`|
|`s`|Seconds with leading zeros|`00` through `59`|
|`v`|Milliseconds.|Example: `654`|
|`U`|Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT), rounded to the nearest second|`1628524558`|

Codes from PHP's date() function that are not supported:

 - Swatch Internet time (`B`) - Not supported because... who needs it?
 - Microseconds (`u`) - Not supported because javascript Date objects only have millisecond precision
 - Various timezone related codes (`e`, `I`, `O`, `P`, `p`, `T`, `Z`) - Not supported because the javascript Date object doesn't contain a timezone, instead it represents a point in time, and your only choices for extracting values from it are UTC or whatever your system's local timezone is configured as.
 - Combination code (`c`,`r`) - Not supported because they contain a timezone indicator (see note above)

-----

## Formatting Functions ##

#### dateToUtcFormat and dateToLocalFormat

`(date: Date, format: string): string`

Takes a javascript Date object and turns it into a string in the supplied format.

If you use `dateToLocalFormat`, the output will be in your local timezone, if you use `dateToUtcFormat` the output will be in the UTC timezone.

```js
import { dateToUtcFormat, dateToLocalFormat } from 'date-format-ms';

const d0 = new Date(2021, 0, 1, 1, 30, 0, 0);
// d0 represents Jan 1st 2021 1:30am in the local (Istanbul) time
dateToLocalFormat(d0, 'Y-m-d H:i:s'); // "2021-01-01 01:30:00"
// However, at this time, in UTC it is still 10:30pm the night before
dateToUtcFormat(d0, 'Y-m-d H:i:s'); // "2020-12-31 22:30:00"

// If you want to specify UTC parameters when creating the JS Date you can do this:
const d1 = new Date(Date.UTC(2021, 0, 1, 1, 30, 0, 0));
// d1 represents Jan 1st 2021 1:30am in UTC
dateToUtcFormat(d1, 'Y-m-d H:i:s'); // "2021-01-01 01:30:00"
// Istanbul is 3 hours ahead
dateToLocalFormat(d1, 'Y-m-d H:i:s'); // "2021-01-01 04:30:00"
```

#### isoToUtcFormat and isoToLocalFormat,

`(iso: any, format: string): string | null`

Takes a datetime represented as a string in ISO8601 format and turns it into a string in the supplied format.

The ISO format consists of a Y-m-d date, followed by the letter 'T' to delimit the time portion, then a time in H:i:s format,
with optional milliseconds, then a timezone indicator - either 'Z' for UTC or an offset like +04:00 or -10:00.

Eg '2021-08-16T12:32:15Z' or '2021-08-16T12:32:15.314845+02:00'

If you use `isoToLocalFormat`, the output will be in your local timezone, if you use `isoToUtcFormat` the output will be in the UTC timezone.

```js
import { isoToUtcFormat, isoToLocalFormat } from 'date-format-ms';

const iso = '2021-08-16T12:30:00-02:00'
// Timezone offset of -02:00, so converting to UTC, this will be:
isoToUtcFormat(iso, 'Y-m-d H:i:s'); // "2021-08-16 14:30:00"
// Istanbul is 3 additional hours ahead
isoToLocalFormat(iso, 'Y-m-d H:i:s'); // "2021-08-16 17:30:00"
```

#### ymdHisToFormat, utcYmdHisToLocalFormat, localYmdHisToUtcFormat

`(ymdHis: any, format: string): string | null`

Takes a datetime represented as a string in the 'Y-m-d H:i:s' format, and turns it into a string in the supplied format.

If the input is not a string, or is not in the expected 'Y-m-d H:i:s' format, the return value will be `null`.

If you use `ymdHisToFormat` then there is no timezone conversion - it's purely formatting.

If you use `utcYmdHisToLocalFormat`, the input will be interpreted as a string in UTC timezone, and the output will be in your local timezone. If you use `localYmdHisToUtcFormat` the input will be interpreted as a string in your local timezone, and the output will will be in the UTC timezone.

```js
import { ymdHisToFormat } from 'date-format-ms';

ymdHisToFormat('2021-09-08 10:45:05', 'D jS F g:ia'); // "Monday 9th August 10:45am"
```

#### ymdToFormat

`(ymd: any, format: string): string | null`

Takes a date represented as a string in the 'Y-m-d' format, and turns it into a string in the supplied format.

This is useful for formatting a value that represents just a date, with no time information.

If the input is not a string, or is not in the expected 'Y-m-d' format, the return value will be `null`.

Internally, all time parameters will be zero - IE the instant represented is 00:00:00 on the given date.

```js
import { ymdToFormat } from 'date-format-ms';

ymdToFormat('2021-09-08', 'D jS F'); // "Monday 9th August"
ymdToFormat('2021-09-08', 'D jS F H:i'); // "Monday 9th August 00:00"
```

#### tsToUtcFormat and tsToLocalFormat,

`(ts: any, format: string): string | null`

Takes a javascript timestamp (number) and turns it into a string in the supplied format.

Javascript timestamps are defined as the number of _milliseconds_ since the Unix epoch (1st Jan 1970).
Note that the Unix timestamp is normally defined as the number of _seconds_ since the Unix epoch, so to convert
a Unix timestamp to a Javascript timestamp you can multiply by 1000.

If you use `tsToLocalFormat`, the output will be in your local timezone, if you use `tsToUtcFormat` the output will be in the UTC timezone.

```js
import { tsToUtcFormat, tsToLocalFormat } from 'date-format-ms';

const ts = 1609464600000;
// This is the timestamp for Jan 1st 2021 1:30am in UTC
tsToUtcFormat(ts, 'Y-m-d H:i:s'); // "2021-01-01 01:30:00"
// Istanbul is 3 hours ahead
tsToLocalFormat(ts, 'Y-m-d H:i:s'); // "2021-01-01 04:30:00"
```

-----

## Conversion Functions

#### utcYmdHisToDate and localYmdHisToDate

`(ymdHis: any): Date | null`

Takes a date represented as a string in the 'Y-m-d H:i:s' format, and turns it into a javascript Date object.

If you use `utcYmdHisToDate`, the string will be interpreted as being in UTC.  If you use `localYmdHisToDate` then the
string will be interpreted as being in your local timezone.

If the input is not a string, or is not in the expected 'Y-m-d H:i:s' format, the return value will be `null`.

```js
import { utcYmdHisToDate, localYmdHisToDate } from 'date-format-ms';

const d0 = utcYmdHisToDate('2021-09-08 10:45:05');
d0.getUTCHours(); // 10
d0.getHours(); // 13

const d1 = localYmdHisToDate('2021-09-08 10:45:05');
d1.getUTCHours(); // 7
d1.getHours(); // 10
```

#### utcYmdToDate and localYmdToDate

`(ymd: any): Date | null`

Takes a date represented as a string in the 'Y-m-d' format, and turns it into a javascript Date object.

If you use `utcYmdToDate`, the string will be interpreted as being in UTC (at 00:00).  If you use `localYmdToDate` then the
string will be interpreted as being in your local timezone (at 00:00).

If the input is not a string, or is not in the expected 'Y-m-d' format, the return value will be `null`.

```js
import { utcYmdToDate, localYmdToDate } from 'date-format-ms';

const d0 = utcYmdToDate('2021-09-08');
d0.getUTCHours(); // 0
d0.getHours(); // 3 (local time is 3 hours ahead of UTC)

const d1 = localYmdToDate('2021-09-08');
d1.getUTCHours(); // 21 (UTC is 3 hours behind local time)
d1.getHours(); // 0
```

-----

## Utility Functions

### isLeapYear

`(year: number): boolean`

Returns true if the supplied year is a leap year, false otherwise.

```js
import { isLeapYear } from 'date-format-ms';

isLeapYear(2020); // true
isLeapYear(2021); // false
```

### getNumDaysInMonth

`(date: Date, utc: boolean): number`

Return the number of days in the month for the supplied javascript Date object.

If the second parameter is true UTC month will be used, otherwise the local month will be used.

```js
import { getNumDaysInMonth } from 'date-format-ms';

// 10pm April 30th UTC = 1am May 1st Istanbul (local) time
const d = new Date(Date.UTC(2020, 3, 30, 22));
getNumDaysInMonth(d, true); // 30 - the Date is in April UTC
getNumDaysInMonth(d, false); // 31 - but it's May in local time
```
