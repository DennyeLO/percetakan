import React from 'react';

// Master
const Voucher = React.lazy(() => import('../component/Master/Voucher/Index'));
const FormVoucher = React.lazy(() => import('../component/Master/Voucher/Form'));

const PrintVoucher = React.lazy(() => import('../component/Cetak/Index'));

const routes = [
  { path: '/', exact: true, name: 'Home' },

  // Master Voucher
  { path: '/master/voucher', exact: true, name: 'Index Voucher', component: Voucher },
  { path: '/master/voucher/add', name: 'Tambah Voucher', component: FormVoucher },
  { path: '/master/voucher/detail/:id', name: 'Detail Voucher', component: FormVoucher },
  { path: '/master/voucher/page/:page', component: Voucher },

  // Cetak
  { path: '/print', exact: true, component: PrintVoucher },

];

export default routes;
