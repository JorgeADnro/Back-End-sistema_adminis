const Paciente = require("../models/user");

exports.crearPaciente = async(req,res) =>{
    try {
        let paciente;
        //Creamos el paciente
        paciente = new Paciente(req.body);
        await paciente.save();
        res.send(paciente);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPacientes = async(req,res) =>{
    try {
        const pacientes = await Paciente.find();
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPaciente = async(req,res) =>{
    try {
        let paciente = await Paciente.findById(req.params.id);
        if(!paciente){
            res.status(404).json({msg: "No existe el paciente"});
        }
        res.json(paciente);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarPaciente = async(req,res) =>{
    try {
        const { name,age,date,ocupation,domicile,phoneNumber,chronologicalDisease,pathologicalDisease,SLAO,SLOI,SLOD,CLAO,CLOI,CLOD,Comments,mostrarComentario } = req.body;
        let paciente = await Paciente.findById(req.params.id);
        if(!paciente){
            res.status(404).json({msg: "No existe el paciente"});
        }
        paciente.name = name;
        paciente.age = age;
        paciente.ocupation = ocupation;
        paciente.date = date;
        paciente.domicile = domicile;
        paciente.phoneNumber = phoneNumber;
        paciente.chronologicalDisease = chronologicalDisease;
        paciente.pathologicalDisease = pathologicalDisease;
        paciente.SLAO = SLAO;
        paciente.SLOI = SLOI;
        paciente.SLOD = SLOD;
        paciente.CLAO = CLAO;
        paciente.CLOI = CLOI;
        paciente.CLOD = CLOD;
        paciente.Comments = Comments;
        paciente.mostrarComentario = mostrarComentario;
        paciente = await Paciente.findOneAndUpdate({_id:req.params.id}, paciente, {new:true});
        res.json(paciente);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarPaciente = async(req,res) =>{
    try {
        let paciente = await Paciente.findById(req.params.id);
        if(!paciente){
            res.status(404).json({msg: "No existe el paciente"});
        }
        await Paciente.findOneAndRemove({_id: req.params.id});
        res.json({msg: 'Paciente eliminado con éxito'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}