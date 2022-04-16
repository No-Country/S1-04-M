import React from "react";
import $ from "jquery";

export function Cvv({cvv}) {
  var cambio = document.getElementById("txtPassword");
  if (cambio.type == "password") {
    cambio.type = "text";
    $(".icon").removeClass("fa fa-eye-slash").addClass("fa fa-eye");
  } else {
    cambio.type = "password";
    $(".icon").removeClass("fa fa-eye").addClass("fa fa-eye-slash");
  }

$(document).ready(function () {
  //CheckBox mostrar contraseña
  $("#ShowPassword").click(function () {
    $("#Password").attr("type", $(this).is(":checked") ? "text" : "password");
  });
});
return (
  <form>
    <div class="input-group">
      <input ID="txtPassword" type="Password" Class="form-control" />
      <div class="input-group-append">
        <button
          id="show_password"
          class="btn btn-primary"
          type="button"
          onclick="mostrarPassword()"
          
        >
          {" "}
          <span class="fa fa-eye-slash icon"></span>{" "}
        </button>
      </div>
    </div>
    <div class="col-md-6">
      <p>Verificar para mostrar / ocultar con chekbox</p>
      <label>Ingrese Contraseña</label>
      <div class="input-group">
        <input ID="Password" type="Password" Class="form-control" />
        <div class="input-group-append">
          {" "}
          <span class="input-group-text">
            <input ID="ShowPassword" type="checkbox" />
          </span>{" "}
        </div>
      </div>
    </div>
  </form>
)   
}