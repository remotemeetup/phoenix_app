use Mix.Config

config :taskify,
  ecto_repos: [Taskify.Repo]

config :taskify, TaskifyWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "56lzs6toLoKnYJf2/Zcm+kKVL7OJTcq9D9Aj2PfFQrkRbE2pvFb0cH5hx7nfjMNN",
  render_errors: [view: TaskifyWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Taskify.PubSub, adapter: Phoenix.PubSub.PG2]

config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :phoenix, :json_library, Jason

import_config "#{Mix.env()}.exs"
