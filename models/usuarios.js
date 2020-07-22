const mongoose = require('mongoose')
const schema = mongoose.Schema

const usuarios =  schema({
    nome:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    numero:{
        type:Number,
        required:true
    }
})

mongoose.model('usuarios',usuarios)