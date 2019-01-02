use Mix.Config

config :treffen,
  ecto_repos: [Treffen.Repo]

config :treffen, TreffenWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "56lzs6toLoKnYJf2/Zcm+kKVL7OJTcq9D9Aj2PfFQrkRbE2pvFb0cH5hx7nfjMNN",
  render_errors: [view: TreffenWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Treffen.PubSub, adapter: Phoenix.PubSub.PG2]

config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :phoenix, :json_library, Jason

import_config "#{Mix.env()}.exs"
