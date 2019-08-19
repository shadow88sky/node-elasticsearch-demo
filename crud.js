const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

async function run() {
    // 创建文档
    // await client.create({
    //     id: '1',
    //     index: 'test',
    //     body: {
    //         firstName: 'x',
    //         lastName: 'c',
    //         tags: ['码农', '愤青']
    //     }
    // })

    // 查看文档文档
    // let result = await client.get({
    //     id: '4',
    //     index: 'test'
    // })
    // console.log(result)

    // 更新
    // await client.index({
    //     id: '1',
    //     index: 'test',
    //     type: '_update',
    //     body: {
    //         doc: {
    //             cc: 123     // update操作
    //         }
    //     }
    // })

    // await client.index({
    //     id: '1',
    //     index: 'test',
    //     body: {
    //         firstName:'x'   // index操作
    //     }
    // })

    // 批量读取
    // let result = await client.mget({
    //     body: {
    //         docs: [
    //             {
    //                 "_index": "kibana_sample_data_logs",
    //                 "_id": "Lhryp2wBSmjcLNNkGPRq"
    //             },
    //             {
    //                 "_index": "test",
    //                 "_id": "1"
    //             }
    //         ]
    //     }
    // })
    // console.log(result.body.docs)



    // msearch 
    let result = await client.msearch({
        index: 'kibana_sample_data_logs',
        body: [
            {},
            { "query": { "match_all": {} }, "from": 0, "size": 10 },
            { "index": "test" },
            { "query": { "match_all": {} } }
        ]
    })
    console.log(result)
}
run().catch(console.log)
