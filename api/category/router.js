const app = require('express');
const router = app.Router();

const {getAllCategory, createCategories, getCategoryByName, getCategoryById,updateCategory, updateCategoryById, deleteProductsByCategory, DeleteCategory } = require('./controller')


//Category

router.post('/create-categories', createCategories);
router.get('/get-all-category', getAllCategory)
router.get('/get-category-by-name', getCategoryByName);
router.get('/get-category-by-id', getCategoryById);
router.put('/update-category/:id', updateCategoryById);
router.delete('/delete-products-by-category', deleteProductsByCategory);
router.delete('/delete-category', DeleteCategory);
router.put('/update-category', updateCategory);


module.exports = router;