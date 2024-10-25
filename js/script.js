

const pokemon151 = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod",
    "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearrow", "fearow", "ekans", "arbok", "pikachu", "raichu",
    "sandshrew", "sandslash", "nidoran", "nidorina", "nidorino", "nidoqueen", "nidoking", "clefairy", "clefable", "vulpix", "ninetales",
    "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth",
    "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag",
    "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machamp", "machoke", "bellsprout", "weepinbell", "victreebel", "tentacool",
    "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetch'd",
    "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee",
    "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan",
    "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking",
    "staryu", "starmie", "mr. Mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto",
    "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax",
    "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo","mew"]

let pokemoningresado;
do {
    pokemoningresado = prompt ("ingresa el nombre de un pokemon para saber si forma parte de los 151").toLowerCase();
    if (pokemon151.indexOf(pokemoningresado) !== -1) {
    alert("felicidades " + pokemoningresado + " " + "forma parte de los 151, puedes continuar");
    break;
} else {
    alert("Lo sentimos " + pokemoningresado + " " + "no forma parte de los 151, vuelve a intentarlo")
};
}
 while (true); 

/* Guardo aca la relacion entre el nº de pokemon de la const pokemon151 con un tipo */

const tipoind = [
    { nombre: pokemon151[0], tipo: "planta" },
    { nombre: pokemon151[1], tipo: "planta" },
    { nombre: pokemon151[2], tipo: "planta" },
    { nombre: pokemon151[3], tipo: "fuego" },
    { nombre: pokemon151[4], tipo: "fuego" },
    { nombre: pokemon151[5], tipo: "fuego" },
    { nombre: pokemon151[6], tipo: "agua" },
    { nombre: pokemon151[7], tipo: "agua" },
    { nombre: pokemon151[8], tipo: "agua" },
    { nombre: pokemon151[9], tipo: "bicho" },
    { nombre: pokemon151[10], tipo: "bicho" },
    { nombre: pokemon151[11], tipo: "bicho" },
    { nombre: pokemon151[12], tipo: "bicho" },
    { nombre: pokemon151[13], tipo: "bicho" },
    { nombre: pokemon151[14], tipo: "bicho" },
    { nombre: pokemon151[15], tipo: "normal" },
    { nombre: pokemon151[16], tipo: "normal" },
    { nombre: pokemon151[17], tipo: "normal" },
    { nombre: pokemon151[18], tipo: "normal" },
    { nombre: pokemon151[19], tipo: "normal" },
    { nombre: pokemon151[20], tipo: "normal" },
    { nombre: pokemon151[21], tipo: "normal" },
    { nombre: pokemon151[22], tipo: "veneno" },
    { nombre: pokemon151[23], tipo: "veneno" },
    { nombre: pokemon151[24], tipo: "eléctrico" },
    { nombre: pokemon151[25], tipo: "eléctrico" },
    { nombre: pokemon151[26], tipo: "tierra" },
    { nombre: pokemon151[27], tipo: "tierra" },
    { nombre: pokemon151[28], tipo: "veneno" },
    { nombre: pokemon151[29], tipo: "veneno" },
    { nombre: pokemon151[30], tipo: "veneno" },
    { nombre: pokemon151[31], tipo: "veneno" },
    { nombre: pokemon151[32], tipo: "veneno" },
    { nombre: pokemon151[33], tipo: "hada" },
    { nombre: pokemon151[34], tipo: "hada" },
    { nombre: pokemon151[35], tipo: "fuego" },
    { nombre: pokemon151[36], tipo: "fuego" },
    { nombre: pokemon151[37], tipo: "normal" },
    { nombre: pokemon151[38], tipo: "normal/hada" },
    { nombre: pokemon151[39], tipo: "veneno/volador" },
    { nombre: pokemon151[40], tipo: "veneno/volador" },
    { nombre: pokemon151[41], tipo: "planta" },
    { nombre: pokemon151[42], tipo: "planta" },
    { nombre: pokemon151[43], tipo: "planta" },
    { nombre: pokemon151[44], tipo: "bicho" },
    { nombre: pokemon151[45], tipo: "bicho" },
    { nombre: pokemon151[46], tipo: "bicho" },
    { nombre: pokemon151[47], tipo: "bicho" },
    { nombre: pokemon151[48], tipo: "tierra" },
    { nombre: pokemon151[49], tipo: "tierra" },
    { nombre: pokemon151[50], tipo: "normal" },
    { nombre: pokemon151[51], tipo: "normal" },
    { nombre: pokemon151[52], tipo: "agua" },
    { nombre: pokemon151[53], tipo: "agua" },
    { nombre: pokemon151[54], tipo: "lucha" },
    { nombre: pokemon151[55], tipo: "lucha" },
    { nombre: pokemon151[56], tipo: "fuego" },
    { nombre: pokemon151[57], tipo: "fuego" },
    { nombre: pokemon151[58], tipo: "agua" },
    { nombre: pokemon151[59], tipo: "agua" },
    { nombre: pokemon151[60], tipo: "agua/lucha"}, 
    { nombre: pokemon151[61], tipo: "psíquico" },
    { nombre: pokemon151[62], tipo: "psíquico" },
    { nombre: pokemon151[63], tipo: "psíquico" },
    { nombre: pokemon151[64], tipo: "lucha" },
    { nombre: pokemon151[65], tipo: "lucha" },
    { nombre: pokemon151[66], tipo: "lucha" },
    { nombre: pokemon151[67], tipo: "planta" },
    { nombre: pokemon151[68], tipo: "planta" },
    { nombre: pokemon151[69], tipo: "planta" },
    { nombre: pokemon151[70], tipo: "agua/hielo"},
    { nombre: pokemon151[71], tipo: "agua/hielo"},
    { nombre: pokemon151[72], tipo: "roca"},
    { nombre: pokemon151[73], tipo: "roca"},
    { nombre: pokemon151[74], tipo: "roca"}, 
    { nombre: pokemon151[75], tipo: "fuego"},
    { nombre: pokemon151[76], tipo: "fuego"},
    { nombre: pokemon151[77], tipo: "agua/psíquico"},
    { nombre: pokemon151[78], tipo: "agua/psíquico"},
    { nombre: pokemon151[79], tipo: "eléctrico" },
    { nombre: pokemon151[80], tipo: "eléctrico" },
    { nombre: pokemon151[81], tipo: "normal" },
    { nombre: pokemon151[82], tipo: "normal" },
    { nombre: pokemon151[83], tipo: "normal" },
    { nombre: pokemon151[84], tipo: "hielo" },
    { nombre: pokemon151[85], tipo: "hielo" },
    { nombre: pokemon151[86], tipo: "veneno" },
    { nombre: pokemon151[87], tipo: "veneno" },
    { nombre: pokemon151[88], tipo: "hielo" },
    { nombre: pokemon151[89], tipo: "hielo" },
    { nombre: pokemon151[90], tipo: "fantasma" },
    { nombre: pokemon151[91], tipo: "fantasma" },
    { nombre: pokemon151[92], tipo: "fantasma" }, 
    { nombre: pokemon151[93], tipo: "roca"},
    { nombre: pokemon151[94], tipo: "psíquico"},
    { nombre: pokemon151[95], tipo: "psíquico"},
    { nombre: pokemon151[96], tipo: "agua" },
    { nombre: pokemon151[97], tipo: "agua" },
    { nombre: pokemon151[98], tipo: "eléctrico" },
    { nombre: pokemon151[99], tipo: "eléctrico" },
    { nombre: pokemon151[100], tipo: "planta/psiquico" },
    { nombre: pokemon151[101], tipo: "planta/psiquico" },
    { nombre: pokemon151[102], tipo: "tierra" },
    { nombre: pokemon151[103], tipo: "tierra" },
    { nombre: pokemon151[104], tipo: "lucha" },
    { nombre: pokemon151[105], tipo: "lucha" },
    { nombre: pokemon151[106], tipo: "normal" },
    { nombre: pokemon151[107], tipo: "veneno" },
    { nombre: pokemon151[108], tipo: "veneno" },
    { nombre: pokemon151[109], tipo: "roca/tierra"},
    { nombre: pokemon151[110], tipo: "roca/tierra" },
    { nombre: pokemon151[111], tipo: "normal" },
    { nombre: pokemon151[112], tipo: "planta"}, 
    { nombre: pokemon151[113], tipo: "normal" },
    { nombre: pokemon151[114], tipo: "agua/hielo" },
    { nombre: pokemon151[115], tipo: "agua/hielo" },
    { nombre: pokemon151[116], tipo: "agua" },
    { nombre: pokemon151[117], tipo: "agua" },
    { nombre: pokemon151[118], tipo: "agua"},
    { nombre: pokemon151[119], tipo: "agua" },
    { nombre: pokemon151[120], tipo: "psíquico" },
    { nombre: pokemon151[121], tipo: "bicho" },
    { nombre: pokemon151[122], tipo: "psíquico" },
    { nombre: pokemon151[123], tipo: "electrico" }, /*electabuzz*/ 
    { nombre: pokemon151[124], tipo: "fuego" },
    { nombre: pokemon151[125], tipo: "bicho" },
    { nombre: pokemon151[126], tipo: "normal"},
    { nombre: pokemon151[127], tipo: "agua" },
    { nombre: pokemon151[128], tipo: "agua/volador"},
    { nombre: pokemon151[129], tipo: "agua/hielo" },
    { nombre: pokemon151[130], tipo: "normal"},
    { nombre: pokemon151[131], tipo: "normal"},
    { nombre: pokemon151[132], tipo: "agua" },
    { nombre: pokemon151[133], tipo: "electrico" },  /*jolteon*/ 
    { nombre: pokemon151[134], tipo: "fuego" },
    { nombre: pokemon151[135], tipo: "normal" },
    { nombre: pokemon151[136], tipo: "agua/roca" },
    { nombre: pokemon151[137], tipo: "agua/roca" },
    { nombre: pokemon151[138], tipo: "bicho" },
    { nombre: pokemon151[139], tipo: "bicho" },
    { nombre: pokemon151[140], tipo: "roca/volador" },
    { nombre: pokemon151[141], tipo: "normal" },
    { nombre: pokemon151[142], tipo: "hielo" },
    { nombre: pokemon151[143], tipo: "eléctrico" },
    { nombre: pokemon151[144], tipo: "fuego" },
    { nombre: pokemon151[145], tipo: "dragon" },
    { nombre: pokemon151[146], tipo: "dragon" },
    { nombre: pokemon151[147], tipo: "dragon" },
    { nombre: pokemon151[148], tipo: "psíquico" },
    { nombre: pokemon151[149], tipo: "psíquico" },


]

function poketipo(nombre, tipo) {
    return `${nombre} es del tipo ${tipo}`;
}

let tipoPokemon = "";
 
for (let i = 0; i < tipoind.length; i++) {
    if (tipoind[i].nombre === pokemoningresado) {
        tipoPokemon = tipoind[i].tipo;
        break;
    }
}

let preguntatipo = confirm("¿Quieres saber qué tipo de Pokémon es " + pokemoningresado + "?");
if (preguntatipo) {
    alert(poketipo(pokemoningresado, tipoPokemon));
} else {
    alert("Adiós");
}


