Rails.application.routes.draw do

  resources :users
  resources :prescriptions
  resources :drugs
  resources :patients
  root to: 'welcome#index'

  resources :users, only: [:show] do
    resources :patients
  end






  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
