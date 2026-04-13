import {
    createUserRepo,
    getUsersRepo,
    getUserByIdRepo,
    updateUserRepo,
    deleteUserRepo
} from "../repositories/userRepo.js";

export const createUserService = async (data) => {
    // regra de negócio
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
    // regra de negócio
    return await updateUserRepo(id, data);
};

export const deleteUserService = async (id) => {
    // regra de negócio
    return await deleteUserRepo(id);
};