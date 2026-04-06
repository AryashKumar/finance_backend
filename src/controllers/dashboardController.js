const prisma = require("../prisma/client");

exports.getSummary = async (req, res) => {
    const income = await prisma.record.aggregate({
        _sum: { amount: true },
        where: { type: "INCOME" }
    });

    const expense = await prisma.record.aggregate({
        _sum: { amount: true },
        where: { type: "EXPENSE" }
    });

    res.json({
        totalIncome: income._sum.amount || 0,
        totalExpense: expense._sum.amount || 0,
        netBalance: (income._sum.amount || 0) - (expense._sum.amount || 0)
    });
};

exports.categoryBreakdown = async (req, res) => {
    const data = await prisma.record.groupBy({
        by: ["category"],
        _sum: { amount: true }
    });

    res.json(data);
};