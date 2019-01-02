defmodule Treffen.Repo do
  use Ecto.Repo,
    otp_app: :treffen,
    adapter: Ecto.Adapters.Postgres
end
