import bcrypt from "bcrypt";
import {
    createUserRepo,
    getUsersRepo,
    getUserByIdRepo,
    updateUserRepo,
    deleteUserRepo
} from "../repositories/userRepo.js";

export const createUserService = async (data) => {

    // se caso o campo vier vazio OU faltando ele NÃO salva
    if (data.name === "" || !data.name) {
        const error = new Error("Campo 'name' não foi definido ou está faltando!");
        error.statusCode = 400;
        throw error;
    } if (data.email === "" || !data.email) {
        const error = new Error("Campo 'email' não foi definido ou está faltando!");
        error.statusCode = 400;
        throw error;
    } if (data.pass !== "" || !data.pass) {
        const hashedPassword = await bcrypt.hash(data.pass, 10);
        data.pass = hashedPassword;
    } else {
        const error = new Error("Campo 'pass' não foi definido ou está faltando!");
        error.statusCode = 400;
        throw error;
    } if (data.profile === "") {
        data.profile = "user";
    } else if (!data.profile) {
        const error = new Error("Campo 'profile' faltando!");
        error.statusCode = 400;
        throw error;
    }

    return await createUserRepo(data);
};

export const getUsersService = async () => {
    // regra de negócio
    return await getUsersRepo();
};

export const getUserByIdService = async (id) => {
    // regra de negócio
    return await getUserByIdRepo(id);
};

export const updateUserService = async (id, data) => {

    // se caso o campo vier vazio ele NÃO altera
    if (data.name === "") {
        delete data.name;
    } if (data.email === "") {
        delete data.email;
    } if (data.pass) {
        const hashedPassword = await bcrypt.hash(data.pass, 10);
        data.pass = hashedPassword;
    } else {
        delete data.pass;
    } if (data.profile === "") {
        delete data.profile;
    }

    return await updateUserRepo(id, data);
};

export const deleteUserService = async (id) => {
    // regra de negócio
    return await deleteUserRepo(id);
};