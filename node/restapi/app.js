let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 7800;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let MongoUrl = process.env.LiveMongo;
let cors = require('cors')
let bodyParser = require('body-parser')
let db;

//middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())


app.get('/',(req,res) => {
  res.send('Hii from Express')
})

//user details
app.get('/user',(req,res)=>{
  db.collection('user').find().toArray((err, result)=>{
    if (err) throw err;
    res.send(result)
  })
})

//category Detail
app.get('/category',(req,res)=>{
  db.collection('category').find().toArray((err, result)=>{
    if (err) throw err;
    res.send(result)
  })
})


//product details wrt to product category
app.get('/ProductDetails',(req,res)=>{
  let query={}
  let CategoryId = Number(req.query.CategoryId)
  if(CategoryId)
  {
    query= {category_id:CategoryId}
  }
  else{
    query={}
  }
  db.collection('product').find(query).toArray((err, result)=>{
    if (err) throw err;
    res.send(result)
  })
})

//filter cost
app.get('/filter/:productId',(req,res) => {
  let query = {};
  let sort = {cost:1}  
  db.collection("product").find(query).sort(sort).toArray((err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//product wrt cost and productID
app.get('/filters/:CategoryId',(req,res) => {
  let productId = Number(req.params.productId);
  let lcost = Number(req.query.lcost);
  let hcost = Number(req.query.hcost);
  let CategoryId = Number(req.query.CategoryId);
  let query = {};
  if (lcost && hcost) {
    query = {
      p_id: productId,
      $and: [{cost:{$gt:lcost,$lt:hcost}}],
    };
  }
  else if (CategoryId) {
    query = {
      p_id: productId,
      Category_id: CategoryId,
    };
  } 
  else {
    query = {
      p_id: productId,
    };
  }
  db.collection("product").find(query).toArray((err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//order Details wrt UserId
app.get('/OrderDetails',(req,res)=>{
  let UserId = Number(req.query.UserId)
  let query={}
  if(UserId)
  {
    query= {"user.user_id":UserId}
  }
  else{
    query={}
  }
  db.collection('order').find(query).toArray((err, result)=>{
    if (err) throw err;
    res.send(result)
  })
})

//payment Details
app.get('/PaymentDetails',(req,res)=>{
  db.collection('payment').find().toArray((err, result)=>{
    if (err) throw err;
    res.send(result)
  })
})

//Delivery Details
app.get('/DeliveryDetails',(req,res)=>{
  db.collection('deliver').find().toArray((err, result)=>{
    if (err) throw err;
    res.send(result)
  })
})

//placeorder
app.post('/placeOrder',(req,res) => {
  db.collection('order').insert(req.body,(err,result) => {
    if(err) throw err;
    res.send('Order Placed')
  })
})

//update order
app.put('/updateorder/:id',(req,res)=>{
  let oid = Number(req.params.id);
  db.collection('order').updateOne(
    {o_id:oid},
    {
      $set:{
        "status":req.body.status,
        "bank_name":req.body.bank_name,
      }
    },(err,result) => {
      if(err) throw err;
      res.send('Order Updated')
    }
  )
})

//delete order
app.delete('/deleteOrder/:id',(req,res) => {
  let _id = mongo.ObjectId(req.params.id);
  db.collection('order').remove({_id},(err,result) => {
    if(err) throw err;
    res.send('Order Deleted')
  })
})

//connection with db
MongoClient.connect(MongoUrl, (err, client)=>{
  if (err) console.log('error while connection');
  db=client.db('flowerdatabase');
  app.listen(port,()=>{
    console.log(`server ${port}`)
  })
})