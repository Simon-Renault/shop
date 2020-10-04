
//libs
const fs = require('fs-extra')
const yamlFront = require('yaml-front-matter');
const slugify = require('slugify')

//consts
const drawings_base_path = "./config/drawings"

//


const listFiles = async (path) => {

    const paths = await fs.readdir(path)

    const data = paths.map(f => {
        const raw_data = fs.readFileSync(path+"/"+f)
        const data = yamlFront.loadFront(raw_data)

        return data
    })
    return  data
}



const generateSlug = (string) => {
    return slugify(string,{
        replacement: '-',  
        remove: undefined, 
        lower: true,      
        strict: true    
    })
}



module.exports = async (api) => {
    api.loadSource( async (actions) => {

        const HomeConfig = JSON.parse(fs.readFileSync('./config/home_page.json','utf-8'))


        /// define types ///
        const DrawingType = actions.schema.createObjectType({
            name: "Drawing",
            interfaces: ["Node"],
            fields: {
                id: "ID!",
                name: "String",
                slug: "String",
                isForSale : "String",
                cover : "String",
                content: "String!",
                shopify_referance: "String!",
            }
        });

        const HomePageFeaturedItem = actions.schema.createObjectType({
            name: "HomePageFeaturedItem",
            interfaces: ["Node"],
            fields: {
                id: "ID!",
                index: "String",
                cover_image : "String",
                drawing_id : "String",
                sizing : "String",
                cover_image : "String",
                name : "String",
            }
        });

        actions.addSchemaTypes([DrawingType,HomePageFeaturedItem]);


        /// collections ///
        const DrawingCollection = actions.addCollection("Drawings");
        const HomePageFeaturedItems = actions.addCollection("HomePageFeaturedItem");
        const ShopifyProduct = actions.getCollection("ShopifyProduct").data()


        /// populating data ///
        const drawingJson = await listFiles(drawings_base_path)

       

      
    


        drawingJson.map(drawing => {

            const matchingProduct = ShopifyProduct.find(p => p.handle === drawing.shopify_referance)

            DrawingCollection.addNode({
                name : drawing.name,
                slug : generateSlug(drawing.name),
                isForSale : drawing.is_for_sale,
                cover : drawing.cover,
                content : drawing.__content,
                product : matchingProduct ? actions.createReference(matchingProduct) : ''
            })
        })


        HomeConfig.grid_config.map((item,index) => {

            let matchingDrawing = false

            if(item.drawing_link && item.drawing_link.length >= 1){
                const fileJson =  yamlFront.loadFront(fs.readFileSync('./'+item.drawing_link))
                const name = generateSlug(fileJson.name)
                matchingDrawing = actions.getCollection("Drawings").data().find(drawing => generateSlug(drawing.name) === name)
            }

            HomePageFeaturedItems.addNode({
                index : index,
                cover_image : item.cover_image,
                name : item.title,
                sizing : item.sizing,
                drawing_id : matchingDrawing ? matchingDrawing.id : '',
                ref : matchingDrawing ? actions.createReference(matchingDrawing) : ''
            })

        })

      




    })
}