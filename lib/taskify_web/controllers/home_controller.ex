defmodule TaskifyWeb.HomeController do
  use TaskifyWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
