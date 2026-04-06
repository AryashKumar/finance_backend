const prisma = require("../prisma/client");

exports.createRecord = async (req, res) => {
    const { amount, type, category, date } = req.body;
    const record = await prisma.record.create({
        data: {
            amount,
            type,
            category,
            date: new Date(date),
            userId: req.user.id
        }
    });

    res.status(201).json(record);
};

exports.getRecords = async (req, res) => {
    const { type, category } = req.query;

    const records = await prisma.record.findMany({
        where: {
            type,
            category
        }
    });

    res.json(records);
};

exports.updateRecord = async (req, res) => {
    const record = await prisma.record.update({
        where: { id: req.params.id },
        data: req.body
    });

    res.json(record);
};

exports.deleteRecord = async (req, res) => {
    await prisma.record.delete({
        where: { id: req.params.id }
    });

    res.json({ message: "Deleted" });
};