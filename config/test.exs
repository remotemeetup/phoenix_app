use Mix.Config

config :treffen, TreffenWeb.Endpoint,
  http: [port: 4002],
  server: false

config :logger, level: :warn

config :treffen, Treffen.Repo,
  username: "postgres",
  password: "postgres",
  database: "treffen_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
