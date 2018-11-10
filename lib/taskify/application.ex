defmodule Taskify.Application do
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      Taskify.Repo,
      TaskifyWeb.Endpoint
      # Starts a worker by calling: Taskify.Worker.start_link(arg)
      # {Taskify.Worker, arg},
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Taskify.Supervisor]
    Supervisor.start_link(children, opts)
  end

  def config_change(changed, _new, removed) do
    TaskifyWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
