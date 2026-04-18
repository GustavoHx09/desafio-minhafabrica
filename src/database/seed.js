import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "../models/usersModel.js";
import products from "../models/productsModel.js";
import bcrypt from "bcrypt";

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Conectado ao banco");

    // limpa os dados existentes
    await users.deleteMany();
    await products.deleteMany();

    // inserindo usuários
    const usersData = [
      {
        name: "Admin",
        email: "admin@gmail.com",
        pass: await bcrypt.hash("123456", 10),
        profile: "admin"
      },
      {
        name: "teste01",
        email: "user@email.com",
        pass: await bcrypt.hash("123456", 10)
      },
      {
        name: "João Silva",
        email: "joao@email.com",
        pass: await bcrypt.hash("123456", 10)
      },
      {
        name: "Maria Souza",
        email: "maria@email.com",
        pass: await bcrypt.hash("123456", 10)
      },
      {
        name: "Carlos Lima",
        email: "carlos@email.com",
        pass: await bcrypt.hash("123456", 10)
      },
      {
        name: "Ana Pereira",
        email: "ana@email.com",
        pass: await bcrypt.hash("123456", 10)
      },
      {
        name: "Lucas Ferreira",
        email: "lucas@email.com",
        pass: await bcrypt.hash("123456", 10)
      },
      {
        name: "Fernanda Alves",
        email: "fernanda@email.com",
        pass: await bcrypt.hash("123456", 10)
      },
      {
        name: "Rafael Costa",
        email: "rafael@email.com",
        pass: await bcrypt.hash("123456", 10)
      },
      {
        name: "Juliana Rocha",
        email: "juliana@email.com",
        pass: await bcrypt.hash("123456", 10)
      },
      {
        name: "Bruno Martins",
        email: "bruno@email.com",
        pass: await bcrypt.hash("123456", 10)
      },
      {
        name: "Patrícia Gomes",
        email: "patricia@email.com",
        pass: await bcrypt.hash("123456", 10)
      },
      {
        name: "Gabriel Ribeiro",
        email: "gabriel@email.com",
        pass: await bcrypt.hash("123456", 10)
      },
      {
        name: "Camila Barros",
        email: "camila@email.com",
        pass: await bcrypt.hash("123456", 10)
      },
      {
        name: "Thiago Mendes",
        email: "thiago@email.com",
        pass: await bcrypt.hash("123456", 10)
      },
      {
        name: "Larissa Teixeira",
        email: "larissa@email.com",
        pass: await bcrypt.hash("123456", 10)
      },
      {
        name: "Diego Nunes",
        email: "diego@email.com",
        pass: await bcrypt.hash("123456", 10)
      }
    ];

    // 📦 produtos
    const productsData = [
      {
        name: "Notebook",
        description: "Notebook gamer",
        price: 5000,
        quantityInStock: 10,
        category: "eletronico"
      },
      {
        name: "Mouse",
        description: "Mouse gamer",
        price: 150,
        quantityInStock: 50,
        category: "eletronico"
      },
      {
        name: "Smartphone",
        description: "Celular moderno com ótima câmera",
        price: 2500,
        quantityInStock: 20,
        category: "eletronico"
      },
      {
        name: "Teclado Mecânico",
        description: "Teclado gamer RGB",
        price: 350,
        quantityInStock: 15,
        category: "eletronico"
      },
      {
        name: "Mouse Gamer",
        description: "Mouse com alta precisão",
        price: 200,
        quantityInStock: 25,
        category: "eletronico"
      },
      {
        name: "Monitor 24''",
        description: "Monitor Full HD",
        price: 1200,
        quantityInStock: 8,
        category: "eletronico"
      },
      {
        name: "Headset",
        description: "Fone com microfone",
        price: 300,
        quantityInStock: 18,
        category: "eletronico"
      },
      {
        name: "Cadeira Gamer",
        description: "Cadeira ergonômica",
        price: 900,
        quantityInStock: 5,
        category: "moveis"
      },
      {
        name: "Mesa Escritório",
        description: "Mesa de madeira",
        price: 700,
        quantityInStock: 6,
        category: "moveis"
      },
      {
        name: "HD Externo",
        description: "Armazenamento portátil 1TB",
        price: 400,
        quantityInStock: 12,
        category: "eletronico"
      },
      {
        name: "SSD 480GB",
        description: "Alta velocidade de leitura",
        price: 350,
        quantityInStock: 10,
        category: "eletronico"
      },
      {
        name: "Placa de Vídeo",
        description: "GPU para jogos pesados",
        price: 3500,
        quantityInStock: 4,
        category: "eletronico"
      },
      {
        name: "Fonte 600W",
        description: "Fonte para PC",
        price: 300,
        quantityInStock: 9,
        category: "eletronico"
      },
      {
        name: "Gabinete",
        description: "Gabinete gamer com RGB",
        price: 450,
        quantityInStock: 7,
        category: "eletronico"
      },
      {
        name: "Webcam",
        description: "Câmera para chamadas",
        price: 180,
        quantityInStock: 14,
        category: "eletronico"
      },
      {
        name: "Impressora",
        description: "Impressora multifuncional",
        price: 800,
        quantityInStock: 6,
        category: "eletronico"
      },
      {
        name: "Tablet",
        description: "Tablet para estudos",
        price: 1500,
        quantityInStock: 11,
        category: "eletronico"
      }
    ];

    await users.insertMany(usersData);
    await products.insertMany(productsData);

    console.log("Banco populado com sucesso");

    process.exit();

  } catch (error) {
    console.error("Erro ao popular banco:", error);
    process.exit(1);
  }
}

seed();