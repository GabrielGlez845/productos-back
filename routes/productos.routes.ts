import { Request, Response } from 'express';
import Productos from '../models/products.model';
//import Roles from '../models/roles.model'; 
import { router as app } from './router';

app.get('/productos', (_req: Request, res: Response) => {
    Productos.findAll({})
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});

app.get('/productos/:ide', (_req: Request, res: Response) => {
    let ide = _req.params.ide;
    Productos.findOne({where:{id:ide}})
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});

app.post('/productos', (req: Request, res: Response) => {

    const body = req.body;

    Productos.create({
        nombre: body.nombre,
        cantidad:body.cantidad,
        precio:body.precio,
        fecha:body.fecha,
        categoryId:body.categoryId
    }).then((data) => res.json({ ok: true, data })
    ).catch((err) => res.status(400).json({ ok: false, err, }));
});


app.delete('/productos/:ide', (req: Request, res: Response) => {
    let ide = req.params.ide;

    Productos.destroy({ where: { id: ide } })
        .then((data) => res.json({ ok: true, data })
        ).catch((err) => res.status(400).json({ ok: false, err, }));
});

app.put('/productos/:ide', (req: Request, res: Response) => {
    const body = req.body; 
    console.log('Service',body);
    let ide = req.params.ide;
    Productos.update({
        nombre: body.nombre,
        cantidad:body.cantidad,
        precio:body.precio,
        fecha:body.fecha,
        categoryId:body.categoryId
    },{
        where: {
          id: ide
        }
      }).then((data) => res.json({ ok: true, data })
    ).catch((err) => res.status(400).json({ ok: false, err, }));
});


export default app;