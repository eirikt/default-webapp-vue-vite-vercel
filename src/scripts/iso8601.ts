import type {Temporal} from 'temporal-polyfill'

const
    temporalElementLength = 2,
    numberIdentity = '0'

// TODO: Docs: See: https://blog.bitsrc.io/documenting-your-typescript-projects-there-are-options-da7c8c4ec554
export function prettyprint(instant: Readonly<Temporal.Instant> | undefined): string {
    if (!instant) {
        return ''
    }
    return prettyprintZonedDateTime(instant.toZonedDateTimeISO('UTC'))
}

// TODO: Docs: See: https://blog.bitsrc.io/documenting-your-typescript-projects-there-are-options-da7c8c4ec554
export function prettyprintZonedDateTime(zonedDateTime: Readonly<Temporal.ZonedDateTime> | undefined): string {
    if (!zonedDateTime) {
        return ''
    }
    return `${zonedDateTime.year
    }-${zonedDateTime.month.toString().padStart(temporalElementLength, numberIdentity)
    }-${zonedDateTime.day.toString().padStart(temporalElementLength, numberIdentity)
    } ${zonedDateTime.hour.toString().padStart(temporalElementLength, numberIdentity)
    }:${zonedDateTime.minute.toString().padStart(temporalElementLength, numberIdentity)
    } (${zonedDateTime.getTimeZone().id})`
}
