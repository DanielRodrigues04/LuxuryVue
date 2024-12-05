import { defineStore } from 'pinia';
import { ref } from 'vue';
import { db, collection, getDocs, addDoc, Timestamp } from '../firebase/firebase'; // Certifique-se de importar o Timestamp e addDoc
import type { Product } from '../types/product';

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Função para buscar produtos do Firestore
  const fetchProducts = async () => {
    loading.value = true;
    try {
      const querySnapshot = await getDocs(collection(db, 'products')); // Obtém a coleção 'products'
      products.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(), // Pega os dados do documento
      })) as Product[];
      loading.value = false;
    } catch (err) {
      error.value = 'Failed to fetch products';
      loading.value = false;
    }
  };

  const addProduct = async (product: Omit<Product, 'id'>) => {
    try {
      const docRef = await addDoc(collection(db, 'products'), {
        ...product,
        createdAt: Timestamp.fromDate(new Date()), // Usa o Timestamp corretamente para armazenar a data
      });
      products.value.push({ id: docRef.id, ...product }); // Adiciona o produto ao array local
    } catch (err) {
      error.value = 'Failed to add product';
    }
  };

  return {
    products,
    loading,
    error,
    fetchProducts,
    addProduct
  };
});
