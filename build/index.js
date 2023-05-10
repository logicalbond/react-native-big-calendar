'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

var dayjs = require('dayjs')
var duration = require('dayjs/plugin/duration')
var isBetween = require('dayjs/plugin/isBetween')
var Calendar_tsx = require('./components/Calendar.tsx')
var CalendarBody_tsx = require('./components/CalendarBody.tsx')
var CalendarBodyForMonthView_tsx = require('./components/CalendarBodyForMonthView.tsx')
var CalendarEvent_tsx = require('./components/CalendarEvent.tsx')
var CalendarEventForMonthView_tsx = require('./components/CalendarEventForMonthView.tsx')
var CalendarHeader_tsx = require('./components/CalendarHeader.tsx')
var CalendarHeaderForMonthView_tsx = require('./components/CalendarHeaderForMonthView.tsx')
var DefaultCalendarEventRenderer_tsx = require('./components/DefaultCalendarEventRenderer.tsx')
var commonStyles_ts = require('./commonStyles.ts')
var interfaces_ts = require('./interfaces.ts')
var ThemeContext_tsx = require('./theme/ThemeContext.tsx')
var ThemeInterface_ts = require('./theme/ThemeInterface.ts')
var defaultTheme_ts = require('./theme/defaultTheme.ts')
var utils_ts = require('./utils.ts')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e }
}

var dayjs__default = /*#__PURE__*/ _interopDefaultLegacy(dayjs)
var duration__default = /*#__PURE__*/ _interopDefaultLegacy(duration)
var isBetween__default = /*#__PURE__*/ _interopDefaultLegacy(isBetween)

dayjs__default['default'].extend(duration__default['default'])
dayjs__default['default'].extend(isBetween__default['default'])

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function () {
    return Calendar_tsx.Calendar
  },
})
Object.keys(Calendar_tsx).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return Calendar_tsx[k]
      },
    })
})
Object.keys(CalendarBody_tsx).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return CalendarBody_tsx[k]
      },
    })
})
Object.keys(CalendarBodyForMonthView_tsx).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return CalendarBodyForMonthView_tsx[k]
      },
    })
})
Object.keys(CalendarEvent_tsx).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return CalendarEvent_tsx[k]
      },
    })
})
Object.keys(CalendarEventForMonthView_tsx).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return CalendarEventForMonthView_tsx[k]
      },
    })
})
Object.keys(CalendarHeader_tsx).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return CalendarHeader_tsx[k]
      },
    })
})
Object.keys(CalendarHeaderForMonthView_tsx).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return CalendarHeaderForMonthView_tsx[k]
      },
    })
})
Object.keys(DefaultCalendarEventRenderer_tsx).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return DefaultCalendarEventRenderer_tsx[k]
      },
    })
})
Object.keys(commonStyles_ts).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return commonStyles_ts[k]
      },
    })
})
Object.keys(interfaces_ts).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return interfaces_ts[k]
      },
    })
})
Object.keys(ThemeContext_tsx).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return ThemeContext_tsx[k]
      },
    })
})
Object.keys(ThemeInterface_ts).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return ThemeInterface_ts[k]
      },
    })
})
Object.keys(defaultTheme_ts).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return defaultTheme_ts[k]
      },
    })
})
Object.keys(utils_ts).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return utils_ts[k]
      },
    })
})
//# sourceMappingURL=index.js.map
