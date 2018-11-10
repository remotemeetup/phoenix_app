defmodule TaskifyWeb do
  @moduledoc """
  The entrypoint for defining your web interface, such
  as controllers, views, channels.
  """

  def controller do
    quote do
      use Phoenix.Controller, namespace: TaskifyWeb

      import Plug.Conn
      import TaskifyWeb.Gettext
      alias TaskifyWeb.Router.Helpers, as: Routes
    end
  end

  def view do
    quote do
      use Phoenix.View,
        root: "lib/taskify_web/templates",
        namespace: TaskifyWeb

      import Phoenix.Controller, only: [get_flash: 1, get_flash: 2, view_module: 1]

      use Phoenix.HTML

      import TaskifyWeb.ErrorHelpers
      import TaskifyWeb.Gettext
      alias TaskifyWeb.Router.Helpers, as: Routes
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
      import TaskifyWeb.Gettext
    end
  end

  @doc """
  When used, dispatch to the appropriate controller/view/etc.
  """
  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end
