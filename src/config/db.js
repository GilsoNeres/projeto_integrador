const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('Connected to SQLite database.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { prisma, connectDB };