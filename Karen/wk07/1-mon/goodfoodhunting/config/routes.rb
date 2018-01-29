Rails.application.routes.draw do
  resources :dishes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
                #controller file and method
  #get '/', to: 'pages#home'
  #get '/about', to: 'pages#about'
  #get '/dishes/new', to: 'dishes#new' #needs to go before the :id one (more specific url)
  #get '/dishes/:id', to: 'dishes#show'
  #get '/dishes', to: 'dishes#index'
  #post '/dishes', to: 'dishes#create'
  #delete '/dishes/:id', to: 'dishes#destroy'
  #edit '/dishes/:id/edit', to: 'dishes#edit'


  #get '/' = root
  #get '/', to: 'pages#home'
  #root to: 'pages#home'


end
