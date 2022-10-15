// npm init --y
// npm i mongoose

// mongodb+srv://elbromas:maygatkm98@cluster0.x7met.mongodb.net/test
const mongoose = require('mongoose');

// const { connect } = require('mongoose')


// const { Types } = require('mongoose')


const connectionURL= "mongodb+srv://elbromas:maygatkm98@cluster0.x7met.mongodb.net/testcluster0.x7met.mongodb.net/ejemploDB?retryWrites=true&w=majority";
// mongodb+srv://elbromas:maygatkm98@cluster0.x7met.mongodb.net/testcluster0.x7met.mongodb.net/prueba
( async ()=>{

try {

    //conectarse a la base de datos
    const stateConnection = await mongoose.connect(connectionURL);


    //crear un modelo de grupo
    const Group = mongoose.model("Group", {name:String});
    //crear modelo de permisos
    const Permission = mongoose.model("Permission", {name:String});

    //#region 
    
    ///serie
    //personaje
    ///asignacion
    
    // serie (ID, Nombre de la serie, Clasificación)
    //personaje (ID, Nombre del personaje, Años de experiencia)
    // asginacion ( ID, ID Serie, ID Personaje, Papel que interpreta, Tipo de papel, Fecha inicio, Fecha fin, temporadas )       
    
    // const Serie = mongoose.model("serie", { nombre:String, id:String }  );
    // const Personaje = mongoose.model("personaje", { descripcion:String }  );
    // const Asignacion = mongoose.model("asignacion", 
    // { 
        //     idserie: { type: mongoose.Types.ObjectId , ref:"serie" } ,
        //     idpersonaje: { type: mongoose.Types.ObjectId , ref:"personaje" } ,
        //     Principal:String, 
        //     Secundario:String, 
        // }  
        // );
        // const serie1 =  new Alumno({name:"Pablo Escobar", id:"4343"});
        // const saveSerie = await  serie1.save();
        // const asignatura1 =  new Personaje({descripcion:"Principal"});
        // const savePersonaje = await  personaje1.save();
        
        
        // const nota1=  new Personaje(
            //     {
                //         principal:"Pablo escobar",
                //         secundario:"gonzalo gaviria",
                //         idasignacion: saveAsignacion._id,
                //         idserie: saveSerie._id
                //     }
                //     );
                
        // const savePersonaje = personaje1.save();
                
                
                
                
                
                
                
                
    //#endregion

    // crear modelo de usuarios
    const User =  mongoose.model("User", 
    {
         name: String,
         idgroup: { type: mongoose.Types.ObjectId , ref:"Group" } ,
        // idpermission: { type: mongoose.Types.ObjectId , ref:"Permission" } ,
        //  permissions: [{ type: mongoose.Types.ObjectId , ref:"Permiso" }] ,
        permissions:[
            {
                permission: { type: mongoose.Schema.Types.ObjectId, ref:"Permission" },
                state: {type:Boolean}
            }
        ]
    } 
    );

    const group1 =  new Group({name:"Administradores"});
    const saveGroup = await  group1.save();

    const permission1 = new Permission({name:"Grabar"});
    const savePermission1= await  permission1.save();
    const permission2 = new Permission({name:"Eliminar"});
    const savePermission2 = await permission2.save();


    const user1=  new User(
        {
            name:"Usuario de prueba",
            idgroup: saveGroup._id,
            permissions: [
                {permission: savePermission1._id , state:true},
                {permission: savePermission2._id , state:true},
            ]
        }
        );

        //#region 
        // user1.save().then((usuarioAlmacenado)=>{
            //     console.log(usuarioAlmacenado);
            //     return User.find()
            // }).then((usuariosConsultados)=>{
                //     console.log(usuariosConsultados);
                // })
                // .catch((err)=>{
                    //     console.log(err);
                    // })
        //#endregion

    const userSave=  await user1.save();

    const result =   await User.find()
    .populate("idgroup")
    .populate("permissions.permission");

    console.log(result[result.length-1].permissions )
    // console.log(userSave);
} catch (error) {
    console.log(error.message);       
}
})();
