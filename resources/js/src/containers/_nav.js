import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  // Master
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Master',
    route: '/master',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Voucher',
        to: '/master/voucher',
      }
    ],
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['Proses']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Cetak',
    to: '/print',
    icon: 'cil-drop',
  },
]

export default _nav
