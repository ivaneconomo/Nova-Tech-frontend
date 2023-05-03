import Swal from 'sweetalert2';

export const customAlert = (title, text, icon, action) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#0d6efd',
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      action();
      return;
    }
  });
};
