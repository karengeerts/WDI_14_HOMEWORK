Rails.application.routes.draw do

  get 'pokemons?species', to: 'pokemons#result'
  resources :pokemons
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pokemons#index'

end
