import {Router} from "express";
const endpoints = Router()

//Parametro de Rota
endpoints.get('/calculadora/:n1/:n2', (req, resp) => {
    if (isNaN(req.params.n1) || isNaN(req.params.n2)) {
        resp.status(400).send({
            erro: 'Os parâmetros devem ser números'
        })
        return;
    }

    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)
    let soma = n1 + n2

    resp.send({
        entrada: {
            numero1: n1,
            numero2: n2
        },
        Soma: soma
    })
})

//Parametro de Query
endpoints.get('/calculadora/somar2', (req, resp) => {
    let n1 = Number(req.query.num1)
    let n2 = Number(req.query.num2)
    let soma = n1 + n2

    resp.send({
        Soma: soma
    })
})

export default endpoints