/* Import faunaDB sdk */
const faunadb = require('faunadb')

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
})

exports.handler = (event, context) => {
  return client.query(q.Paginate(q.Match(q.Ref('indexes/all_cv'))))
    .then((response) => {
      const todoRefs = response.data
       const getAllTodoDataQuery = todoRefs.map((ref) => {
        return q.Get(ref)
      })
      
      return client.query(getAllTodoDataQuery).then((ret) => {
        return {
          statusCode: 200,
          body: JSON.stringify(ret)
        }
      })
    }).catch((error) => {
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
