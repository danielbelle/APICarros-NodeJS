const CarroService = require('../services/CarroService');

module.exports={
    //READ get todos
    buscarTodos: async (req, res)=>{
        let json = {error:'', result:[]};

        let carros = await CarroService.buscarTodos();

        for(let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo
            });
        }
        res.json(json);
    },

    //READ get um
    buscarUm: async(req, res) =>{
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let carro = await CarroService.buscarUm(codigo);

        if(carro){
            json.result = carro;
        };

        res.json(json);
    },

    //CREATE post um
    inserir: async(req, res) =>{
        let json = {error:'', result:{}};

        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(modelo && placa){
            let CarrroCodigo = await CarroService.inserir(modelo,placa);
            json.result = {
                codigo: CarrroCodigo,
                modelo,
                placa
            };

        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    //Update put um dado
    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(codigo && modelo && placa){
            await CarroService.alterar(codigo, modelo,placa);
            json.result = {
                codigo,
                modelo,
                placa
            };

        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    //Delete delete um dado
    excluir: async(req, res) => {
        let json = {error:'', result:{}};
        
        await CarroService.excluir(req.params.codigo);

        res.json(json);
    }


}