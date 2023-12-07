const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'Seu email',
        pass: 'Senha do seu email'
    }
});

const mailOptions = {
    from: 'Seu email',
    to: 'Email Destinatário',
    subject: 'Solicitação de Informação sobre acesso de dados de Licitação de Alimentação',
    html: `
    <html>
    <head>
        <style>
            body {
                background-image: url('https://naveweb.com/imagens/portfolio/americanIndians.JPG');
                background-size: cover;
                background-repeat: no-repeat;
                height: 100vh;
                width: 45vw;
                font-family: Arial, sans-serif;
                color: #333;
                padding: 20px;
                position: relative; 
            }

            .text-box {
                position: absolute;
                top: 20px; 
                left: 20px; 
                padding: 20px;
                background-color: rgba(34, 73, 107, 0.8); 
                border-radius: 5px;
            }

            .content {
                padding: 20px;
            }

            .button {
                margin-top: 20px;
                display: inline-block;
                font-size: 16px;
                padding: 10px 20px;
                text-decoration: none;
                background-color: #007bff;
                color: #ffffff;
                border-radius: 5px;
            }
            .button:hover {
                background-color: #0056b3;
            }

        </style>
    </head>
    <body>
        <div class="text-box">
            <div class="content">
                <p>Prezados,</p>
                <p>Meu nome é Rodrigo e estou entrando em contato em nome da empresa "O Cozinheiro", uma empresa que está interessada em participar das licitações de alimentação promovidas pela Prefeitura Municipal de Florianópolis.</p>
                <p>Com o intuito de criar um sistema automatizado ...</p>
                <p>Obrigado!</p>
                <p><a class="button" href="https://naveweb.com">Website da empresa Naveweb</a></p>
            </div>
        </div>
    </body>
    </html>
    `
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});