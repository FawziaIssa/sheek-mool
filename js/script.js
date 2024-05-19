searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
}


let liginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
  liginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
  liginForm.classList.remove('active');
}

window.onscroll = () => {

  searchForm.classList.remove('active');
  if (window.scrollY > 80) {
    document.querySelector('.header .header-2').classList.add('active');
  }
  else {
    document.querySelector('.header .header-2').classList.remove('active');
  }
}

window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector('.header .header-2').classList.add('active');
  }
  else {
    document.querySelector('.header .header-2').classList.remove('active');
  }
  fadeOut();
}


function loader() {
  document.querySelector('.loader-container').classList.add('active');
}


function fadeOut() {
  setTimeout(loader, 2000)
}



var swiper = new Swiper(".clothes-slider", {
  loop: true,
  centeredSolides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      // spaceBetween:150,
    },
    768: {
      slidesPerView: 2,
      // spaceBetween:150,

    },
    1024: {
      slidesPerView: 3,
      // spaceBetween:150,

    },
  },
}
);


var swiper = new Swiper(".sale-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSolides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      // spaceBetween:150,
    },
    450: {
      slidesPerView: 2,
      // spaceBetween:150,

    },
    768: {
      slidesPerView: 3,
      // spaceBetween:150,

    },
    1024: {
      slidesPerView: 4,
      // spaceBetween:150,

    },

  },
}
);


var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSolides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      // spaceBetween:150,
    },

    768: {
      slidesPerView: 2,
      // spaceBetween:150,

    },
    1024: {
      slidesPerView: 3,
      // spaceBetween:150,

    },

  },
}
);

var swiper = new Swiper(".reviws-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSolides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      // spaceBetween:150,
    },

    768: {
      slidesPerView: 2,
      // spaceBetween:150,

    },
    1024: {
      slidesPerView: 3,
      // spaceBetween:150,

    },

  },
}
);



// #### Start Login Form    
let email_admin = document.getElementById("email_admin");
let password_admin = document.getElementById("password_admin");
let login_btn = document.getElementById("login_btn");

login_btn.addEventListener("click", () => {
  if (email_admin.value != "" && password_admin.value != "") {
    login();
  } else {
    if (email_admin.value == "") {
      email_admin.style.border = "1px solid red";
    }
    if (password_admin.value == "") {
      password_admin.style.border = "1px solid red";
    }
  }
});


// login function
let login = async function () {
  let data = {
    email: email_admin.value,
    password: password_admin.value,
  };

  fetch("http://127.0.0.1:8000/api/login", {
    method: "Post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      }
    })
    .then((data) => {
      if (data.success) {

        document.getElementById("close-login-btn").click();
        email_admin.style.border = ".01rem solid rgba(0,0,0,.1)";
        password_admin.style.border = ".01rem solid rgba(0,0,0,.1)";
        email_admin.value = "";
        password_admin.value = "";

        document.getElementById("name_login_user").innerHTML = data.user.name;
        document.getElementById("table_responsive").style.display = "block";
        get_all_invoices();
      } else {
        email_admin.style.border = "1px solid red";
        password_admin.style.border = "1px solid red";
      }
    });
};


// Delete function
let delete_invoice = async function (id) {
  let data = {
    id: id
  };

  fetch("http://127.0.0.1:8000/api/delete", {
    method: "Post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      }
    })
    .then((data) => {
      get_all_invoices();
    });
};

// Get All Invoices function
let get_all_invoices = async function () {

  fetch("http://127.0.0.1:8000/api/allInvoices", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      }
    })
    .then((data) => {

      let body_data = document.getElementById("body_data");
      body_data.innerHTML = '';

      // insert data to body in table
      for (let index = 0; index < data.data.length; index++) {
        body_data.innerHTML += `
          <tr>
            <td>${index + 1}</td>
            <td>${data.data[ index ].name}</td>
            <td>${data.data[ index ].price}$</td>
            <td>
              <span class="action_btn">
                <a onclick="show_add_invoice()"><span>Add</span></a>
                <a onclick="show_edit_invoice(${data.data[ index ].id})"><span>Edit</span></a>
                <a onclick="delete_invoice(${data.data[ index ].id})">Remove</span></a>
              </span>
            </td>
          </tr>`;
      }
    });
};


// add invoice function
let input_name = document.getElementById("input_name");
let input_price = document.getElementById("input_price");
let save_invoice_btn = document.getElementById("save_invoice_btn");
let modal_add_invoice = document.getElementById("modal_add_invoice");


function show_add_invoice() {
  modal_edit_invoice.style.display = "none";
  modal_add_invoice.style.display = "block";
  let close_modal_add = document.getElementById("close_modal_add");
  close_modal_add.addEventListener("click", function () {
    modal_add_invoice.style.display = "none";
  });
}

save_invoice_btn.addEventListener("click", () => {
  if (input_name.value != "" && input_price.value != "") {
    add_invoice();
  } else {
    if (input_name.value == "") {
      input_name.style.border = "1px solid red";
    }
    if (input_price.value == "") {
      input_price.style.border = "1px solid red";
    }
  }
});

let add_invoice = async function () {
  let data = {
    name: input_name.value,
    price: input_price.value,
  };

  fetch("http://127.0.0.1:8000/api/store", {
    method: "Post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      }
    })
    .then((data) => {
      modal_add_invoice.style.display = "none";
      get_all_invoices();
    });
};


// update invoice function
let input_name_edit = document.getElementById("input_name_edit");
let input_price_edit = document.getElementById("input_price_edit");
let update_invoice_btn = document.getElementById("update_invoice_btn");
let modal_edit_invoice = document.getElementById("modal_edit_invoice");

let id_edit_invoice;
function show_edit_invoice(id) {
  id_edit_invoice = id;
  // hide add invoice modal if was open
  modal_add_invoice.style.display = "none";
  // show edit invoice modal if was open
  modal_edit_invoice.style.display = "block";
  // Get Data Of Selected Invoice
  get_data_edit_invoice(id);

  let close_modal_edit = document.getElementById("close_modal_edit");
  close_modal_edit.addEventListener("click", function () {
    modal_edit_invoice.style.display = "none";
  });
}

update_invoice_btn.addEventListener("click", () => {
  if (input_name_edit.value != "" && input_price_edit.value != "") {
    update_invoice();
  } else {
    if (input_name_edit.value == "") {
      input_name_edit.style.border = "1px solid red";
    }
    if (input_price_edit.value == "") {
      input_price_edit.style.border = "1px solid red";
    }
  }
});

let update_invoice = async function () {
  let data = {
    id: id_edit_invoice,
    name: input_name_edit.value,
    price: input_price_edit.value,
  };

  fetch("http://127.0.0.1:8000/api/update", {
    method: "Post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data)
      modal_edit_invoice.style.display = "none";
      get_all_invoices();
    });
};

let get_data_edit_invoice = async function (id) {
  let data = {
    id: id
  };

  fetch("http://127.0.0.1:8000/api/edit", {
    method: "Post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data)
      input_name_edit.value = data.data.name;
      input_price_edit.value = data.data.price;
    });
};
