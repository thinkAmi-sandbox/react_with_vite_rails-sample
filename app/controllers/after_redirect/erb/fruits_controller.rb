class AfterRedirect::Erb::FruitsController < ApplicationController
  def index
  end

  def show
    redirect_to after_redirect_erb_fruits_path
  end
end