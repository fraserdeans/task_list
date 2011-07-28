class TasksController < ApplicationController
  def index
    @tasks = Task.all
    @task = Task.new
  end

  def create
    @task = Task.new(params[:task])

    respond_to do |format|
      if @task.save
        format.html { redirect_to(tasks_path,
                      :notice => 'Task created successful')}
      else
        format.html { render :action => "new" }
      end
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy

    redirect_to(tasks_path, :notice => 'Task deleted')
  end

  def show
  end
end
