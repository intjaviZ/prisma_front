import Swal from "sweetalert2";

export const ModalError = (titulo="Error", texto="Error desconocido", onClick=()=>{return}) => {    
    Swal.fire({
        icon: "error",
        title: titulo,
        text: texto,
        target: "#main"
    }).then((result) => {
      if (result.isConfirmed) onClick();
    });
}

export const ModalExito = (titulo="Excelente", texto='', onClick=()=>{return}) => {
    Swal.fire({
      icon: "success",
      title: titulo,
      text: texto,
      target: "#main"
    }).then((result) => {
      if (result.isConfirmed) onClick();
    });
  };

  export const ModalWarning = (titulo="Advertencia", texto='', onClick=()=>{return}) => {
    Swal.fire({
      icon: "warning",
      title: titulo,
      text: texto,
      target: "#main"
    }).then((result) => {
      if (result.isConfirmed) onClick();
    });
  };