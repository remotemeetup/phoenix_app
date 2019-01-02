defmodule TreffenWeb do
  @moduledoc """
  The entrypoint for defining your web interface, such
  as controllers, views, channels.
  """

  def controller do
    quote do
      use Phoenix.Controller, namespace: TreffenWeb

      import Plug.Conn
      import TreffenWeb.Gettext
      alias TreffenWeb.Router.Helpers, as: Routes
    end
  end

  def view do
    quote do
      use Phoenix.View,
        root: "lib/treffen_web/templates",
        namespace: TreffenWeb

      import Phoenix.Controller, only: [get_flash: 1, get_flash: 2, view_module: 1]

      use Phoenix.HTML

      import TreffenWeb.ErrorHelpers
      import TreffenWeb.Gettext
      alias TreffenWeb.Router.Helpers, as: Routes
    end
  end

  def router do
    quote do
      use Phoenix.Router
      import Plug.Conn
      import Phoenix.Controller
    end
  end

  def channel do
    quote do
      use Phoenix.Channel
      import TreffenWeb.Gettext
    end
  end

  @doc """
  When used, dispatch to the appropriate controller/view/etc.
  """
  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end
