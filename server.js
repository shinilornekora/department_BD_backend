import { Department, Distributor, Employee, Hardware, Install, Producer, Software, Use } from "./entities.js";
import express from 'express';
import cors from "cors";

const server = express()
const tables = ['use', 'software', 'producer', 'install', 'hardware', 'employee', 'distributor', 'department'];
const models = [Use, Software, Producer, Install, Hardware, Employee, Distributor, Department];
server.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
server.use(express.json());

async function getData(model) {
    const data = await model.findAll();
    return data.map(entry => entry.toJSON())
}

tables.forEach(table => {
    server.get(`/${table}`, async (request, response) => {
        let result = await getData(models[tables.indexOf(table)]);
        response.send(result);
    });
});

tables.forEach(table => {
    server.post('/create/:table', async (request, response) => {
        const table = request.params.table; // получение значения параметра table из URL-адреса запроса
        try {
            console.log(request.body);
            const newEntity = await models[tables.indexOf(table)].create(request.body);
            response.status(201).json(newEntity);
        } catch (error) {
            response.status(500).send("Неверный формат данных");
        }
    });
});

tables.forEach((table) => {
    server.delete(`/delete/:table/:id`, async (request, response) => {
        const { table, id } = request.params;
        try {
            const entity = await models[tables.indexOf(table)].findByPk(id);
            await entity.destroy();
            response.sendStatus(200);
        } catch (error) {
            console.error(error);
            response.status(500).send("Ошибка при удалении записи");
        }
    });
});

tables.forEach((table) => {
    server.put(`/edit/${table}/:id`, async (request, response) => {
        const { id } = request.params;
        try {
            const entity = await models[tables.indexOf(table)].findByPk(id);
            await entity.update(request.body);
            response.sendStatus(200);
        } catch (error) {
            console.error(error);
            response.status(500).send("Ошибка при редактировании записи");
        }
    });
});

server.listen(3001, 'localhost', () => {
    console.log("Server is running on port 3001")
});