class UsersController < ApplicationController
skip_before_filter :verify_authenticity_token, :only => :create

  def download_csv
    CSV.open(fn, 'w') do |csv|
      csv << Patient.column_names
      Model.where(query).each do |m|
        csv << m.attributes.values
      end
    end

  end

end
