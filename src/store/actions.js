import axiosClient from '../axiosClient'

export function searchMeals({ commit }, keyword ) {
  axiosClient.get(`search.php?s=${keyword}`)
  .then(({ data }) => {
    console.log('data: ', data.meals)
    commit('setSearchedMeals', data.meals)
  })
}

export function searchMealsByLetter({ commit }, letter ) {
  axiosClient.get(`search.php?f=${letter}`)
  .then(({ data }) => {
    console.log('data: ', data.meals)
    commit('setMealsByLetter', data.meals)
  })
}

export function searchMealsByIngredients({ commit }, ingrs ) {
  axiosClient.get(`search.php?i=${ingrs}`)
  .then(({ data }) => {
    console.log('data: ', data.meals)
    commit('setMealsByIngredients', data.meals)
  })
}