Rails.application.routes.draw do


  resource :messages do
    collection do
      post 'reply'
    end
  end


  devise_for :users, :controllers => { registrations: 'registrations' }
  resources :prescriptions
  resources :drugs
  resources :alerts
  resources :patients

  get '/:user_id/download_csv' => "patients#download_csv"

  root to: 'patients#index'
  get '/home' => "application#home", as: "welcome"

  post '/prescriptions/google_pharmacies' => "prescriptions#google_pharmacies"

  # get '/patients/:id/precriptions/new' => "prescriptions#new", as: "new_patient_prescriptions"
  resources :patients, only: [:show] do
    resources :prescriptions
  end


  resources :users, only: [:show] do
    resources :patients
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
