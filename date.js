
//tramite questa dicitura (module.exports) esporteremo l intero modulo, tuttavia potremmo solo avere una funzione o un oggetto.
// module.exports = getDate();


//tramite questa dicitura invece specificheremo l oggetto e non l intero file.
// module.exports.getDate = getDate();

//dicitura abbreviata.
exports.getDate = () => {

const today = new Date();
const options = {weekday: 'long', day: 'numeric', month:'long', year: 'numeric'};

 return day = today.toLocaleDateString("en-US", options);

}


exports.getDay = () => {

const today = new Date()
const options = {weekday: 'long'}

 return day = today.toLocaleDateString("en-US", options);
    

}
