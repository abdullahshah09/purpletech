import { createSelector } from 'reselect';
//createSelector in reselect helps to memoize or cache frequently executed functions.In our case this selector caches the result of our directory reducer function which sets the state of HomePage with sections
//As it is a pure function, i.e. input fron external source does not change this is straighforward, we just use createSelector to cache directory reducer section results to selectDirectorySection, which is a const, and export it to be used.
const selectDirectory = state => state.directory;


export const selectDirectoryCategories = createSelector(
   [selectDirectory],
   directory => directory.categories
) 