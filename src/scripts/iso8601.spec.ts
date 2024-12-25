import {expect, test} from 'vitest'
import {Temporal} from 'temporal-polyfill'
import {prettyprint} from './iso8601'

test('Should pretty-print time stamp', () => {
    const buildTime: Temporal.Instant = Temporal.Instant.from('2024-09-20T19:28:01.000999Z')
    expect(prettyprint(buildTime)).toBe('2024-09-20 19:28 (UTC)')
})
