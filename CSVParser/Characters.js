const parse = require("./CSVParser")
const data = parse("./CSVParser/CSV/csv_logic/characters.csv")
let skindata = parse("./CSVParser/CSV/csv_logic/skins.csv")
let confdata = parse("./CSVParser/CSV/csv_logic/skin_confs.csv")

function getDefSkinById(id){
    return data[id].DefaultSkin
}

function getNameById(id){
    return data[id].Name
}

function getDefSkins(){
    return data.filter(e => e.ItemName != "").filter(e => data.indexOf(e))
}

function getIDByCodename(codename){
    return data.indexOf(data.find(e => e.Name == codename))
}

function getAllCharacterCodenames(){
    let codenames = {}

    for(let i of data){
        if(i.ItemName != "")codenames[i.Name] = data.indexOf(i)
    }
    return codenames
}

function getBrawlerBySkinID(skinID){
    let codename = getBrawlerCodenameBySkinID(skinID)
    return getIDByCodename(codename)
}

function getBrawlerCodenameBySkinID(skinID){
    let skinName = skindata[skinID].Name
    let skinConfName = confdata.find(e => e.Name == skinName)

    return skinConfName.Character
}

module.exports = {
    getDefSkinById,
    getNameById,
    getDefSkins,
    getIDByCodename,
    getAllCharacterCodenames,
    getBrawlerBySkinID
}