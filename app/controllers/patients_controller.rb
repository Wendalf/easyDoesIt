class PatientsController < ApplicationController

  require 'csv'

  def new
    @patient = Patient.new
  end


  def create
    CSV.foreach(params[:leads].path, headers: true) do |lead|
      binding.pry
      Patient.create(name: lead[0] + " " + lead[1])
    end
  end








end
