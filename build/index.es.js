import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import isBetween from 'dayjs/plugin/isBetween'

import { Calendar } from './components/Calendar.tsx'
export * from './components/Calendar.tsx'
export { Calendar as default } from './components/Calendar.tsx'
export * from './components/CalendarBody.tsx'
export * from './components/CalendarBodyForMonthView.tsx'
export * from './components/CalendarEvent.tsx'
export * from './components/CalendarEventForMonthView.tsx'
export * from './components/CalendarHeader.tsx'
export * from './components/CalendarHeaderForMonthView.tsx'
export * from './components/DefaultCalendarEventRenderer.tsx'
export * from './commonStyles.ts'
export * from './interfaces.ts'
export * from './theme/ThemeContext.tsx'
export * from './theme/ThemeInterface.ts'
export * from './theme/defaultTheme.ts'
export * from './utils.ts'

dayjs.extend(duration)
dayjs.extend(isBetween)
//# sourceMappingURL=index.es.js.map
