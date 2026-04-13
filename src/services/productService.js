import {
    createProductRepo,
    getProductsRepo,
    getProductByIdRepo,
    updateProductRepo,
    deleteProductRepo
} from "../repositories/productRepo.js";

export const createProductService = async (data) => {
    // regra de negócio
    return await createProductRepo(data);
};

export const getProductService = async () => {
    // regra de negócio
    return await getProductsRepo();
};

export const getProductByIdService = async (id) => {
    // regra de negócio
    return await getProductByIdRepo(id);
};

export const updateProductService = async (id, data) => {
    // regra de negócio
    return await updateProductRepo(id, data);
};

export const deleteProductService = async (id) => {
    // regra de negócio
    return await deleteProductRepo(id);
};