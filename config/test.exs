use Mix.Config

config :taskify, TaskifyWeb.Endpoint,
  http: [port: 4002],
  server: false

config :logger, level: :warn

config :taskify, Taskify.Repo,
  username: "postgres",
  password: "postgres",
  database: "taskify_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
