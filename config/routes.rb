Rails.application.routes.draw do

  devise_for :users
  resources :users
  resources :prescriptions
  resources :drugs
  resources :patients
  root to: 'application#home'

  get '/patients/:id/precriptions/new' => "prescriptions#new", as: "new_patient_prescriptions"
  resources :users, only: [:show] do
    resources :patients
  end






  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
