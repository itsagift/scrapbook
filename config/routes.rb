Rails.application.routes.draw do
  resources :album_cards
  resources :users
  resources :card_tags
  resources :tags
  resources :cards
  resources :albums
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
