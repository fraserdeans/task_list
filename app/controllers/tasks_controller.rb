class TasksController < ApplicationController
  respond_to :json, :html

  def index
    @tasks = Task.all
  end

  def new
    @task = Task.new
    respond_with @task
  end

  def create
    @task = Task.new(params[:task])

    respond_to do |format|
      if @task.save
        format.html { redirect_to(tasks_path,
                      :flash => {:success => 'Task added successfully'})}
      else
        format.html { render :action => "index" }
      end
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    respond_to do |format|
      format.html {redirect_to(tasks_path, :flash => { :success => 'Task deleted' }) }
      format.js {render :nothing => true}
    end
  end

  def show
  end
end
