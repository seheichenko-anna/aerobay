import { useContext, useEffect } from 'react';
import useSubcategories from '../../hooks/useSubcategories';
import { setCurrentCategory } from '../../redux/filtersSlice';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import styles from './Catalog.module.scss';
import { Accessories, AllProducts, Drones } from './Categories';
import { CatalogContext } from './providers/CatalogProvider';
import { SortProvider } from './providers/SortProvider';

const ProductsWrap = () => {
  const { selectedCategory } = useContext(CatalogContext)!;

  // required for filters.
  const subcategories = useSubcategories();

  // If user changes selected category and subcategories is loaded,
  // it changes current filter groups in redux state,
  // then it shows filter groups for selected category on current category page.
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCurrentCategory(selectedCategory));
  }, [selectedCategory, subcategories]);

  return (
    <SortProvider>
      <section className={styles.all_products_wrap}>
        {selectedCategory === 'All Products' && <AllProducts />}
        {selectedCategory === 'Drones' && <Drones />}
        {selectedCategory === 'Accessories' && <Accessories />}
      </section>
    </SortProvider>
  );
};

export default ProductsWrap;
