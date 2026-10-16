localStorage.setItem('stockpilot.v1.anon', JSON.stringify({ 
  products: [{id:'p1',name:'Widget A',sku:'W-A',qty:10,minStock:20,unit:'pcs',price:100,cost:60,category:'Widgets',supplier:'s1'}], 
  suppliers: [{id:'s1',name:'Acme Corp',contact:'John',phone:'9999999999',email:'john@acme.com',city:'Delhi',notes:''}], 
  sales: [{id:'s1',productId:'p1',qty:5,price:100,date:new Date().toISOString()}] 
}));
console.log('done');