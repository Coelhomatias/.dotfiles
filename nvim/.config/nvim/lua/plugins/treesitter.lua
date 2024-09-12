return {
  "nvim-treesitter/nvim-treesitter",
  build = ":TSUpdate",
  config = function()
    local config = require("nvim-treesitter.configs")
    config.setup({
      ensure_installed = {"bash", "lua", "javascript", "python", "typescript", "html", "markdown", "csv", "yaml", "toml", "dockerfile"},
      highlight = { enable = true },
      indent = { enable = true },
      auto_install = true,
    })
  end
}
