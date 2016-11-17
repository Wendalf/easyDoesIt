Rails.application.routes.draw do

  devise_for :users
  resources :users
  resources :prescriptions
  resources :drugs
  resources :patients
  root to: 'devise/sessions#new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
