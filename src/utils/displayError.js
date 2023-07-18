import Swal from "sweetalert2";
export const displayError = (icon, message) => {
  return Swal.fire({
    icon,
    title: "Error..",
    text: message,
  });
};
