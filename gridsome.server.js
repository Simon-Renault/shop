
//libs
const path = require('path')
const fs = require('fs-extra')
const yamlFront = require('yaml-front-matter');
const metadataParser = require('markdown-yaml-metadata-parser');

//consts
const drawings_base_path = "./config/drawings"



const listFiles = async (path) => {

    const paths = await fs.readdir(path)

    const data = paths.map(f => {
        const raw_data = fs.readFileSync(path+"/"+f)
        const data = yamlFront.loadFront(raw_data)

        return data
    })
    return  data
}



module.exports = async (api) => {
    api.loadSource( async (actions) => {



        /// define types ///
        const DrawingType = actions.schema.createObjectType({
            name: "Drawing",
            interfaces: ["Node"],
            fields: {
                id: "ID!",
                name: "String",
                content: "String!",
                shopify_referance: "String!",
            }
        });

        actions.addSchemaTypes([DrawingType]);


        /// collections ///
        const DrawingCollection = actions.addCollection("Drawings");

        const ShopifyProduct = actions.getCollection("ShopifyProduct").data()


        /// populating data ///
        const drawingJson = await listFiles(drawings_base_path)
        drawingJson.map(drawing => {
            const matchingProduct = ShopifyProduct.find(p => p.handle === drawing.shopify_referance)

            DrawingCollection.addNode({
                name : drawing.name,
                content : drawing.content,
                product : matchingProduct ? actions.createReference(matchingProduct) : ''
            })
        })


   




    })
}