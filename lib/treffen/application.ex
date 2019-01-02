defmodule Treffen.Application do
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      Treffen.Repo,
      TreffenWeb.Endpoint
      # Starts a worker by calling: Treffen.Worker.start_link(arg)
      # {Treffen.Worker, arg},
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Treffen.Supervisor]
    Supervisor.start_link(children, opts)
  end

  def config_change(changed, _new, removed) do
    TreffenWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
