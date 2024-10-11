const TOAST_ERROR = "error";
const TOAST_SUCCESS = "success";
document.getElementById("addToastBtn").addEventListener("click", addToast);

document
  .getElementById("clearToastBtn")
  .addEventListener("click", removeToasts);

function addToast() {
  const { toastDuration, toastMessage, isCancelable, toastType } =
    grabToastValues();

  generateToast(toastMessage, toastDuration, isCancelable, toastType);
}

function grabToastValues() {
  const toastMessage = document.getElementById("toastMessage").value;
  const toastDuration = document.getElementById("timeDuration").value;
  const isCancelable = document.getElementById("isCancelable").checked;
  const toastType = document.querySelector(
    'input[name="toastType"]:checked'
  ).value;
  return { toastDuration, toastMessage, isCancelable, toastType };
}

function generateToast(toastMessage, toastDuration, isCancelable, toastType) {
  const toastBox = document.querySelector("#toastBox");
  const div = document.createElement("div");
  div.classList.add("toastMessageBox");
  if (toastType === TOAST_SUCCESS) {
    div.classList.add("successToast");
  } else {
    div.classList.add("errorToast");
  }
  div.innerText = toastMessage;
  if (isCancelable) {
    const cancelBtn = document.createElement("i");

    cancelBtn.className = "toastCancel";
    cancelBtn.className += " fa-solid fa-xmark";
    div.appendChild(cancelBtn);
    cancelBtn.addEventListener("click", () => div.remove());
  }
  toastBox.prepend(div);
  if (toastDuration) {
    setTimeout(() => {
      if (div) div.remove();
    }, toastDuration);
  }
}

function removeToasts() {
  const toastBox = document.querySelector("#toastBox");
  toastBox.innerHTML = "";
}
