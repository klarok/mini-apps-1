let Forms = {};

let Form1 = ({
  onClickHandler
}) => {
  return React.createElement("form", {
    name: "user",
    id: "user",
    action: "/form1",
    encType: "multipart/form-data"
  }, React.createElement("input", {
    type: "text",
    name: "user_name",
    id: "user_name"
  }), React.createElement("input", {
    type: "text",
    name: "user_email",
    id: "user_email"
  }), React.createElement("input", {
    type: "password",
    name: "user_password",
    id: "user_password"
  }), React.createElement("input", {
    type: "button",
    name: "user_submit",
    id: "user_submit",
    onClick: onClickHandler
  }));
};

let Form2 = ({
  onClickHandler
}) => {
  //Use fragments?
  return React.createElement("form", {
    name: "address",
    id: "address",
    action: "/form2",
    encType: "multipart/form-data"
  }, React.createElement("input", {
    type: "text",
    name: "address_line1",
    id: "address_line1"
  }), React.createElement("input", {
    type: "text",
    name: "address_line2",
    id: "address_line2"
  }), React.createElement("input", {
    type: "text",
    name: "address_city",
    id: "address_city"
  }), React.createElement("input", {
    type: "text",
    name: "address_state",
    id: "address_state"
  }), React.createElement("input", {
    type: "text",
    name: "address_zipcode",
    id: "address_zipcode"
  }), React.createElement("input", {
    type: "button",
    name: "address_submit",
    id: "address_submit",
    onClick: onClickHandler
  }));
};

let Form3 = ({
  onClickHandler
}) => {
  return React.createElement("form", {
    name: "card",
    id: "card",
    action: "/form3",
    encType: "multipart/form-data"
  }, React.createElement("input", {
    type: "text",
    name: "card_number",
    id: "card_number"
  }), React.createElement("input", {
    type: "text",
    name: "card_expiry",
    id: "card_expiry"
  }), React.createElement("input", {
    type: "text",
    name: "card_CVV",
    id: "card_CVV"
  }), React.createElement("input", {
    type: "text",
    name: "card_zipcode",
    id: "card_zipcode"
  }), React.createElement("input", {
    type: "button",
    name: "card_submit",
    id: "card_submit",
    onClick: onClickHandler
  }));
};

export { Form1, Form2, Form3 };