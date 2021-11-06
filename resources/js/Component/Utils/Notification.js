import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const add_success = () => toast.success("Data berhasil ditambahkan");
export const update_success = () => toast.success("Data berhasil diubah");
export const delete_success = () => toast.success("Data berhasil dihapuskan");

export const add_error = () => toast.error("Data gagal ditambahkan");
export const update_error = () => toast.error("Data gagal diubah");
export const delete_error = () => toast.error("Data gagal dihapus");

export const get_error = () => toast.error("Data gagal ditampilkan");