import express, {json} from 'express';
import cors from 'cors'
import {Product} from '../db/product.js';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(json());
app.use(cors());


type ProductType = {
    id?: number,
    title: string,
    price: number,
    description: string,
    createdAt?: Date,
    updatedAt?: Date
};

app.get('/products', (req, res)=>{
    Product.findAll()
        .then((products:[])=>{
            res.status(200).json(products);
        })
        .catch((err)=>{
            res.status(500).json(err);
        })
})

app.get('/products/:productId',(req, res)=>{
    const {productId} = req.params;
    Product.findByPk(productId)
        .then((product)=>{
            res.status(200).json(product);
        }).catch((err)=>{
            res.status(500).json(err);
        })
})

app.patch('products/:productId',(req,res)=>{
    const product: ProductType = req.body.product;
    Product.update(product,{
        where:{
            id: req.params.productId
        }
    }).then((product)=>{
        res.json(product);
    }).catch((err)=>{
        res.status(500).json(err);
    })
})

app.delete('/products/:productId',(req,res)=>{
    const {productId} = req.params;
    Product.destroy({
        where:{
            id: productId
        }
    }).then((product)=>{
        res.status(200);
    }).catch((err)=>{
        res.status(500).json(err);
    })
})

app.post('/products', (req, res)=>{
    const product : ProductType = req.body;
    Product.create(product).
    then((product)=>{
        res.status(200).json(product)
    }).catch((err)=>{
        res.status(500).json(err);
    })
})

app.listen(PORT, ()=>{
    console.log('Server running on port: ', PORT);
});