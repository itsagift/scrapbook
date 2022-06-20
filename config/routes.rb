Rails.application.routes.draw do
  resources :album_cards, only: [:index, :show, :create, :destroy]
  resources :card_tags
  resources :tags
  resources :cards, only: [:index, :show, :create, :update, :destroy]
  resources :albums, only: [:index, :show, :create, :update, :destroy]

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"
  post '/rails/active_storage/direct_uploads', to: 'direct_uploads#create'
  get '/:id/albumcards', to: 'album_cards#index_by_album'
    
  get '/me', to: 'users#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
end
