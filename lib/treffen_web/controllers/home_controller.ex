defmodule TreffenWeb.HomeController do
  use TreffenWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
