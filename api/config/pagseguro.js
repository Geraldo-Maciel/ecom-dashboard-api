module.exports = {
    mode: process.env.NODE_ENV === 'production' ? "live" : 'sandbox',
    sandbox: process.env.NODE_ENV === 'production' ? false : true,
//    sandbox_email: process.env.NODE_ENV === 'production' ? null : 'email@sandbox.pagseguro.com.br',
    sandbox_email: process.env.NODE_ENV === 'production' ? null : '59A5D60C3EF34229AC80770843061C20',
    email: '5@yahoo.com.br',
    token: 'EF34229AC80770843061C20',
    notificationURL: "https://api.loja-teste.ampliee.com/v1/api/pagamentos/notificacao",
}
/*
module.exports = {
    mode: process.env.NODE_ENV === 'production' ? "live" : 'sandbox',
    sandbox: process.env.NODE_ENV === 'production' ? false : true,
    sandbox_email: process.env.NODE_ENV === 'production' ? null : 'email@sandbox.pagseguro.com.br',
    email: 'email',
    token: 'token',
    notificationURL: "https://api.loja-teste.ampliee.com/v1/api/pagamentos/notificacao",
}
*/