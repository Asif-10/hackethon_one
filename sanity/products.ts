

export const products={
    name:'products',
    title:'Products',
    type:'document',
    fields:[
    {
      name:'name',
      title:'Product Name',
      type:'string'
    },
    {
      name:'description',
      title:'Description',
      type:'string'
    },
    {
      name:'price',
      title:'Price',
      type:'number'
    },
    {
      name:'image',
      title:'Product Image',
      type:'image'
    },
    {
      name:'category',
      title:'Product Category',
      type:'reference',
      to:[{type:"category"}]
    }
    ]
}