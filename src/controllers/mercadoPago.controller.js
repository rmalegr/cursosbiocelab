const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token:
    "TEST-6235988389716182-111918-7311f46bd8cadd84cc769ec63d991932-436827218",
});
//mp
const premiumController = async (req, res) => {
  try {
    let preference = {
      items: [
        {
          title: "Cursos Biocealab",
          quantity: 1,
          unit_price: 200,
        },
      ],
      back_urls: {
        failure: "https://localhost:3001/PaymentFail",
        pending: "https://localhost:3001/PaymentFail",
        success: "https://localhost:3001/PaymentOk",
        d,
      },
      auto_return: "approved",
    };
    const response = await mercadopago.preferences.create(preference);
    const preferenceId = response.body.init_point;
    res.redirect(preferenceId);
  } catch (error) {
    throw Error("Payment error");
  }
};

module.exports = { premiumController };
