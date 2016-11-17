Rails.application.routes.draw do

  resource :messages do
    collection do
      post 'reply'
    end
  end


  devise_for :users
  resources :users
  resources :prescriptions
  resources :drugs
  resources :patients

  root to: 'application#home'
  get '/:user_id/download_csv' => "patients#download_csv"



  resources :users, only: [:show] do
    resources :patients
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
