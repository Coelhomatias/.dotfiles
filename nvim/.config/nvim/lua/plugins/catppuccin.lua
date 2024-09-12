return {
  "catppuccin/nvim",
  name = "catppuccin",
  config = function()
    require("catppuccin").setup({
      flavour = "mocha",
      transparent_background = true,
      integrations = {
        indent_blankline = {
          enabled = true,
          scope_color = "mauve", -- catppuccin color (eg. `lavender`) Default: text
          colored_indent_levels = false,
        },
        -- harpoon = true
      }
    })
    vim.cmd.colorscheme "catppuccin"
  end
}
