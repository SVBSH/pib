const express = require('express')
const router = express.Router();
const { Sequelize } = require('sequelize');
const { sequelize, User } = require('../../db/models')


// boolean-based SQL Injection
router.get('/boolean-based', async (req, res) => {
    console.log(req.query);
    const { condition } = req.query; 
    try {
        const users = await sequelize.query(`SELECT * FROM "Users" WHERE ${condition}`);
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error querying database", error: error.message });
    }
});


// time-based SQL Injection
router.get('/time-based', async (req, res) => {
    const { condition } = req.query; 
    // `SELECT pg_sleep(${parseInt(sleep, 10)})`
    try {
        await sequelize.query(condition);
        res.json({ message: "Query completed after a delay of " + sleep + " seconds" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error querying database", error: error.message });
    }
});


// union-based SQL Injection
router.get('/union-based', async (req, res) => {
    const { condition } = req.query; 
    const query = `SELECT username, password FROM "Admins" ${condition}`
    console.log(query);

    try {
        const users = await sequelize.query(query, {
            type: Sequelize.QueryTypes.SELECT
        });
        res.json(users);
    } catch (error) {
        // console.log(error);
        res.status(500).json({ message: "Error querying database", error: error.message });
    }
});


// error-based SQL Injection
router.get('/error-based', async (req, res) => {
    const { condition } = req.query; 
    try {
        const user = await sequelize.query(`SELECT * FROM "Users" WHERE ${condition}`, {
            type: Sequelize.QueryTypes.SELECT
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error querying database", error: error.message });
    }
});

module.exports = router;
