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

//Cake Detail
app.get('/cake',(req,res)=>{
  db.collection('cake').find().toArray((err, result)=>{
      if (err) throw err;
      res.send(result)
  })
})

//Flower Detail
app.get('/flower',(req,res)=>{
  db.collection('flower').find().toArray((err, result)=>{
      if (err) throw err;
      res.send(result)
  })
})

//Plant Detail
app.get('/plant',(req,res)=>{
  db.collection('plant').find().toArray((err, result)=>{
      if (err) throw err;
      res.send(result)
  })
})

//chocolate Detail
app.get('/chocolate',(req,res)=>{
  db.collection('Chocolate').find().toArray((err, result)=>{
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
  let category_id = Number(req.query.category_id)
  if(category_id)
  {
    query= {category_id:category_id}
  }
  else{
    query={}
  }
  db.collection('product').find(query).toArray((err, result)=>{
    if (err) throw err;
    res.send(result)
  })
})


//product detail wrt product id
app.get('/Details',(req,res)=>{
  let query={}
  let p_id = Number(req.query.p_id)
  if(p_id)
  {
    query= {p_id:p_id}
  }
  else{
    query={}
  }
  db.collection('product').find(query).toArray((err, result)=>{
    if (err) throw err;
    res.send(result)
  })
})

// filter cost
app.get('/filter/:category_id',(req,res) => {
  let query = {};
  let sort = {cost:1}
  let lcost = Number(req.query.lcost);
  let hcost = Number(req.query.hcost);
  let category_id=Number(req.query.category_id)
  if(req.query.sort){
    sort={cost:req.query.sort}
  }
   else if(hcost && lcost){
    query={
      category_id:category_id,
        $and:[{cost:{$gt:lcost,$lt:hcost}}]
    }
  }else{
    query={
      category_id:category_id
    }
  }

  db.collection('product').find(query).sort(sort).toArray((err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// // //product wrt cost and productID
// app.get('/filters/:category_id',(req,res) => {
//   let lcost = Number(req.query.lcost);
//   let hcost = Number(req.query.hcost);
//   let category_id = Number(req.query.category_id);
//   let query = {};
//   if (lcost && hcost) {
//     query = {
//       category_id:category_id,
//       $and: [{cost:{$gt:lcost,$lt:hcost}}],
//     };
//   } 
//   else {
//     query = {
//       category_id:category_id,  
//     };
//   }
//   db.collection('product').find(query).toArray((err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

//order Details wrt UserId
  app.get('/OrderDetails',(req,res)=>{
    let email = req.query.email;
    let query = {}
    if(email){
      query={email:email}
    }
    else{
      query={}
    }
    db.collection('orders').find(query).toArray((err, result)=>{
      if (err) throw err;
      console.log(err)
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
  db.collection('orders').insert(req.body,(err,result) => {
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

//order 
app.post('/pro',(req,res) => {
  if(Array.isArray(req.body.id)){
    db.collection('product').find({p_id:{$in:req.body.id}}).toArray((err,result) => {
      if(err) throw err;
      res.send(result)
    })
  }else{
    res.send('Invalid Input')
  }
  
})

//connection with db
MongoClient.connect(MongoUrl, (err, client)=>{
  if (err) console.log('error while connection');
  db=client.db('flowerdatabase');
  app.listen(port,()=>{
    console.log(`server ${port}`)
  })
})