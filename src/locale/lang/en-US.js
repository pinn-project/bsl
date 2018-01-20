import setLang from '../lang'

const lang = {
  i: {
    locale: 'en-US',
    lang: 'English (US)',
    continent: 'America',
    select: {
      placeholder: 'Select',
      noMatch: 'No matching data',
      loading: 'Loading'
    },
    table: {
      noDataText: 'No Data',
      noFilteredDataText: 'No filter data',
      confirmFilter: 'Confirm',
      resetFilter: 'Reset',
      clearFilter: 'All'
    },
    datepicker: {
      selectDate: 'Select date',
      selectTime: 'Select time',
      startTime: 'Start Time',
      endTime: 'End Time',
      clear: 'Clear',
      ok: 'OK',
      datePanelLabel: '[mmmm] [yyyy]',
      month: 'Month',
      month1: 'January',
      month2: 'February',
      month3: 'March',
      month4: 'April',
      month5: 'May',
      month6: 'June',
      month7: 'July',
      month8: 'August',
      month9: 'September',
      month10: 'October',
      month11: 'November',
      month12: 'December',
      year: 'Year',
      weekStartDay: '0',
      weeks: {
        sun: 'Sun',
        mon: 'Mon',
        tue: 'Tue',
        wed: 'Wed',
        thu: 'Thu',
        fri: 'Fri',
        sat: 'Sat'
      },
      months: {
        m1: 'Jan',
        m2: 'Feb',
        m3: 'Mar',
        m4: 'Apr',
        m5: 'May',
        m6: 'Jun',
        m7: 'Jul',
        m8: 'Aug',
        m9: 'Sep',
        m10: 'Oct',
        m11: 'Nov',
        m12: 'Dec'
      }
    },
    transfer: {
      titles: {
        source: 'Source',
        target: 'Target'
      },
      filterPlaceholder: 'Search here',
      notFoundText: 'Not Found'
    },
    modal: {
      okText: 'OK',
      cancelText: 'Cancel'
    },
    poptip: {
      okText: 'OK',
      cancelText: 'Cancel'
    },
    page: {
      prev: 'Previous Page',
      next: 'Next Page',
      total: 'Total',
      item: 'item',
      items: 'items',
      prev5: 'Previous 5 Pages',
      next5: 'Next 5 Pages',
      page: '/page',
      goto: 'Goto',
      p: ''
    },
    rate: {
      star: 'Star',
      stars: 'Stars'
    },
    tree: {
      emptyText: 'No Data'
    },
    menu: {
      create: 'CREATE',
      createlink: 'CREATE LINK',
      dashboard: 'Dashboard',
      account: 'My Account',
      manageTag: 'Manage Tag',
      manageAccounts: 'Manage Accounts'
    },
    form: {
      title: {
        auth: 'Authentication',
        resetPass: 'Reset password',
        resetInfo: 'Member information for reset password'
      },
      note: {
        one: 'If you are logging in email address, please enter your email address in both input fields.',
        two: 'If you can not confirm yourself, you can\'t reissue your password.'
      },
      user: 'Username',
      pass: 'Password',
      search: 'Search',
      longurl: 'Paste long url',
      logged: 'Keep me logged in',
      forgot: 'Forgot your password?',
      registeredEmail: 'Registered email address',
      button: {
        signin: 'Signin',
        signout: 'Signout',
        submit: 'Submit',
        confirm: 'Confirm',
        cancel: 'Cancel',
        clear: 'Clear',
        back: 'Back',
        reset: 'Reset',
        enable: 'Enable',
        on: 'ON',
        off: 'OFF',
        edit: 'Edit',
        remove: 'Remove',
        copy: 'Copy'
      }
    },
    title: {
      click: 'Click',
      clickTimeline: 'Clicked timeline logger',
      created: 'Created',
      updated: 'Updated'
    },
    notice: {
      info: 'This is a info tip',
      success: 'This is a success tip',
      warning: 'This is a warning! tip',
      error: 'This is a Error! tip'
    }
  }
}

setLang(lang)

export default lang
