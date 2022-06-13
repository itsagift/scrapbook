Rails.application.routes.draw do
  resources :album_cards, only: [:index, :show]
  resources :card_tags
  resources :tags
  resources :cards, only: [:index, :show]
  resources :albums

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"
    
  get '/me', to: 'users#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
end
