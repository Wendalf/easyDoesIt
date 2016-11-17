class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session



  def home
    render "/welcome/index"
  end





end
