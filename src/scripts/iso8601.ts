import {Temporal} from 'temporal-polyfill'

// TODO: Docs: See: https://blog.bitsrc.io/documenting-your-typescript-projects-there-are-options-da7c8c4ec554
export function prettyprint(instant: Temporal.Instant): string {
    if (!instant) {
        return ''
    }
    return prettyprintZonedDateTime(instant.toZonedDateTimeISO('UTC'))
}

// TODO: Docs: See: https://blog.bitsrc.io/documenting-your-typescript-projects-there-are-options-da7c8c4ec554
export function prettyprintZonedDateTime(zonedDateTime: Temporal.ZonedDateTime): string {
    if (!zonedDateTime) {
        return ''
    }
    return zonedDateTime.year
        + '-' + zonedDateTime.month.toString().padStart(2, '0')
        + '-' + zonedDateTime.day.toString().padStart(2, '0')
        + ' '
        + zonedDateTime.hour.toString().padStart(2, '0')
        + ':' + zonedDateTime.minute.toString().padStart(2, '0')
        //+ ':' + zonedDateTime.second.toString().padStart(2, '0')
        + ' (' + zonedDateTime.getTimeZone().toString() + ')'
}
